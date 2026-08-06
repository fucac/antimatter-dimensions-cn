import { GameMechanicState } from "../../game-mechanics";

// Map alchemy resource ids to their keys in the resources database ("power", "infinity", ...).
// Display names may be localized, so they can't be used to look up
// player.celestials.ra.highestRefinementValue, which is keyed by the original English names.
const alchemyResourceKeys = Object.fromEntries(
  Object.entries(GameDatabase.celestials.alchemy.resources)
    .map(([key, config]) => [config.id, key])
);

/**
 * @abstract
 */
class AlchemyResourceState extends GameMechanicState {
  constructor(config) {
    super(config);
    this.ema = new ExponentialMovingAverage(0.01, 10, 100, 0.01);
    this._before = 0;
  }

  get name() {
    return this.config.name;
  }

  get symbol() {
    return this.config.symbol;
  }

  get description() {
    return this.config.description;
  }

  get isBaseResource() {
    return this.config.isBaseResource === true;
  }

  get data() {
    return player.celestials.ra.alchemy[this.id];
  }

  get amount() {
    // Self-heal NaN values that may linger in corrupted saves
    if (!isFinite(this.data.amount)) {
      this.data.amount = 0;
      return 0;
    }
    return this.data.amount;
  }

  set amount(value) {
    this.data.amount = isFinite(value) ? value : 0;
  }

  get before() {
    return this._before;
  }

  set before(value) {
    this._before = value;
  }

  get flow() {
    return this.ema.average;
  }

  get fillFraction() {
    return Math.clamp(this.amount / this.cap, 0, 1);
  }

  get unlockedWith() {
    return Ra.pets.effarig;
  }

  get unlockedAt() {
    return this.config.unlockedAt;
  }

  get isUnlocked() {
    return this.unlockedWith.level >= this.unlockedAt;
  }

  get isDestroyed() {
    return Pelle.isDoomed && this.config.destroyed();
  }

  get lockText() {
    return `${this.unlockedWith.name} Level ${formatInt(this.unlockedAt)}`;
  }

  get isCustomEffect() {
    return true;
  }

  get effectValue() {
    if (player.disablePostReality) return this.config.effect(0);
    // Disable Exponential alchemy effect in V reality.
    if (V.isRunning && this.config.id === 14) return 0;
    const result = this.config.effect(Pelle.isDisabled("alchemy") && this.isDestroyed ? 0 : this.amount);
    return result;
  }

  get reaction() {
    return AlchemyReactions.all[this.id];
  }

  /**
   * @abstract
   */
  get cap() { throw new NotImplementedError(); }

  get capped() {
    return this.amount >= this.cap;
  }
}

class BasicAlchemyResourceState extends AlchemyResourceState {
  constructor(config) {
    super(config);
    // The names are capitalized, so we need to convert them to lower case
    // in order to access highestRefinementValue values which are not capitalized.
    // Display names may be localized, so resolve the database key (e.g. "power")
    // from the resource id instead of deriving it from the name.
    this._name = alchemyResourceKeys[config.id];
  }

  get highestRefinementValue() {
    const value = player.celestials.ra.highestRefinementValue[this._name];
    // Self-heal NaN values that may linger in corrupted saves
    if (!isFinite(value)) {
      player.celestials.ra.highestRefinementValue[this._name] = 0;
      return 0;
    }
    return value;
  }

  set highestRefinementValue(value) {
    if (!isFinite(value)) return;
    player.celestials.ra.highestRefinementValue[this._name] = Math.max(this.highestRefinementValue, value);
  }

  get cap() {
    return Math.clampMax(Ra.alchemyResourceCap, this.highestRefinementValue);
  }
}

class AdvancedAlchemyResourceState extends AlchemyResourceState {
  get cap() {
    const reagentCaps = this.reaction.reagents.map(x => x.resource.cap);
    return Math.min(...reagentCaps);
  }
}

class AlchemyReaction {
  constructor(product, reagents) {
    this._product = product;
    this._reagents = reagents;
  }

  get product() {
    return this._product;
  }

  get reagents() {
    return this._reagents;
  }

  // Returns a percentage of a reaction that can be done, accounting for limiting reagents.  This normally caps at
  // 100%, but the reaction will be forced to occur at higher than 100% if there is significantly more reagent than
  // product. This allows resources to be created quickly when its reaction is initially turned on with saved reagents.
  get reactionYield() {
    if (!this._product.isUnlocked || this._reagents.some(r => !r.resource.isUnlocked)) return 0;
    const forcingFactor = (this._reagents
      .map(r => r.resource.amount)
      .min() - this._product.amount) / 100;
    const totalYield = this._reagents
      .map(r => r.resource.amount / r.cost)
      .min();
    return Math.min(totalYield, Math.max(forcingFactor, 1));
  }

  // Check each reagent for if a full reaction would drop it below the product amount.  If so, reduce reaction yield
  get actualYield() {
    // Assume a full reaction to see what the maximum possible product is
    const maxFromReaction = this.baseProduction * this.reactionYield * this.reactionEfficiency;
    const prodBefore = this._product.amount;
    const prodAfter = prodBefore + maxFromReaction;
    let cappedYield = this.reactionYield;
    for (const reagent of this._reagents) {
      const reagentBefore = reagent.resource.amount;
      const reagentAfter = reagent.resource.amount - this.reactionYield * reagent.cost;
      const diffBefore = reagentBefore - prodBefore;
      const diffAfter = reagentAfter - prodAfter;
      cappedYield = Math.min(cappedYield, this.reactionYield * diffBefore / (diffBefore - diffAfter));
    }
    return Math.clampMin(cappedYield, 0);
  }

  // Assign reactions priority in descending order based on the largest reagent total after the reaction.  The logic
  // is that if we assume that all the reactions are cap-limited, then by assigning priority in this way, reactions
  // get applied so that earlier reactions are less likely to reduce the yield of later reactions.
  get priority() {
    let maxReagent = Glyphs.levelCap;
    for (const reagent of this._reagents) {
      const afterReaction = reagent.resource.amount - reagent.cost * this.actualYield;
      maxReagent = Decimal.min(maxReagent, afterReaction).toNumber();
    }
    return maxReagent;
  }

  get isActive() {
    return this._product.data.reaction;
  }

  set isActive(value) {
    this._product.data.reaction = value;
  }

  get isReality() {
    return this._product.id === ALCHEMY_RESOURCE.REALITY;
  }

  // Reactions are per-10 products because that avoids decimals in the UI for reagents, but efficiency losses can make
  // products have decimal coefficients.
  get baseProduction() {
    return this.isReality ? 1 : 5;
  }

  get reactionEfficiency() {
    return this.isReality ? 1 : AlchemyResource.synergism.effectValue;
  }

  get reactionProduction() {
    return this.baseProduction * this.reactionEfficiency;
  }

  // Cap products at the minimum amount of all reagents before the reaction occurs, eg. 200Ξ and 350Ψ will not bring
  // ω above 200.  In fact, since some Ξ will be used during the reaction, the actual cap will be a bit lower.
  combineReagents() {
    if (!this.isActive || this.reactionYield === 0) return;
    const unpredictabilityEffect = AlchemyResource.unpredictability.effectValue;
    const times = Math.clampMax(1 + poissonDistribution(unpredictabilityEffect / (1 - unpredictabilityEffect)), 50);
    const cap = this._product.cap;
    for (let i = 0; i < times; i++) {
      const reactionYield = this.actualYield;
      for (const reagent of this._reagents) {
        reagent.resource.amount -= reactionYield * reagent.cost;
      }
      // The minimum reaction yield is 0.05 so the cap is actually reached
      const effectiveYield = Math.clampMin(reactionYield * this.reactionProduction, 0.05);
      // The cap is a growth limit. It can shrink (e.g. via the refinement cap reset button), but
      // accumulated resources must never be destroyed by a lower cap, so never reduce the amount.
      this._product.amount = Math.max(this._product.amount,
        Math.clampMax(this._product.amount + effectiveYield, cap));
    }
  }
}

export const AlchemyResource = mapGameDataToObject(
  GameDatabase.celestials.alchemy.resources,
  config => (config.isBaseResource
    ? new BasicAlchemyResourceState(config)
    : new AdvancedAlchemyResourceState(config))
);

export const AlchemyResources = {
  all: AlchemyResource.all,
  base: AlchemyResource.all.filter(r => r.isBaseResource)
};

export const AlchemyReactions = (function() {
  // For convenience and readability, stuff is named differently in GameDatabase
  function mapReagents(resource) {
    return resource.config.reagents
      .map(r => ({
        resource: AlchemyResources.all.find(x => x.id === r.resource),
        cost: r.amount
      }));
  }
  return {
    all: AlchemyResources.all
      .map(r => (r.isBaseResource ? null : new AlchemyReaction(r, mapReagents(r))))
  };
}());
