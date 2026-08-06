// 自动游玩机器人（AutoAI）
// 在选项页开启后，本模块会接管游戏的决策层：自动完成挑战、购买时间研究、
// 选择突破/重置时机（大坍缩、永恒、时间膨胀、现实），并将决策过程记录在
// player.options.autoplay.log 中供选项页的决策面板展示。
// 说明：基础购买（维度、星系、Tickspeed、升级等）由游戏自带的 Autobuyer 完成，
// 本模块只负责"何时挑战 / 何时重置 / 买哪些研究"这类决策。
//
// 安全原则：
//   - 只调用会自我检查（canBeBought / canBeCompleted / Player.canCrunch 等）的入口
//   - 一切决策包在 try/catch 中，出错不会影响游戏主循环
//   - 长时间无法推进时会强制退出（如永恒挑战超时），避免卡死

let _lastDecisionTime = 0;
let _lastCrunchTime = 0;
let _lastPhase = "";
// EC11 需要反物质维度路径（禁 72/73），EC12 需要时间维度路径（禁 71/72），
// 二者需要不同的研究树，通过该变量在 EC 间切换时重建路径。
let _ecPathMode = "antimatter";

const PHASE = {
  PRE_INFINITY: "初始阶段",
  PRE_ETERNITY: "无限阶段",
  PRE_REALITY: "永恒阶段",
  POST_REALITY: "现实阶段",
};

// 常规时间研究购买顺序（依赖树结构，可反复提交，游戏会按需购买）。
// 注意：路径部分按反物质维度 → 主动 → 光路径排列；EC12 阶段由 _ecPathMode 切换为时间路径。
const BASE_STUDIES = [11, 21, 22, 31, 32, 33, 41, 42, 51, 61, 62];
const DIM_STUDIES = {
  antimatter: [71, 81, 91, 101],
  time: [73, 83, 93, 103],
};
const PACE_STUDIES = [111, 121, 131, 141, 151, 161, 171, 181];
const LATE_STUDIES = [191, 192, 193, 201, 211, 212, 213, 214, 221, 223, 225, 227, 231, 233];

export const AutoAI = {
  get enabled() {
    return player.options.autoplay?.enabled === true;
  },

  setEnabled(value) {
    if (!player.options.autoplay) {
      player.options.autoplay = {
        enabled: false,
        tickIntervalMs: 250,
        maxLogEntries: 60,
        logEnabled: true,
        decision: { phase: "", strategy: "", progress: "", updatedAt: 0 },
        log: [],
      };
    }
    player.options.autoplay.enabled = value;
    if (value) {
      // 接管挑战循环前，关闭"完成挑战后重试"，避免机器人卡在已完成的挑战中
      player.options.retryChallenge = false;
      player.respec = false;
      this.log("机器人启动", "自动游玩已开启，接管决策层");
    } else {
      this.log("机器人停止", "自动游玩已关闭");
    }
  },

  toggle() {
    this.setEnabled(!this.enabled);
  },

  log(action, detail = "") {
    const cfg = player.options.autoplay;
    if (!cfg || cfg.logEnabled === false) return;
    if (!Array.isArray(cfg.log)) cfg.log = [];
    cfg.log.unshift({
      t: Date.now(),
      phase: cfg.decision?.phase || "",
      action,
      detail,
    });
    if (cfg.log.length > (cfg.maxLogEntries || 60)) cfg.log.length = cfg.maxLogEntries || 60;
  },

  // 由 gameLoop 每帧调用
  tick(realDiff) {
    if (!this.enabled) return;
    if (GameEnd.creditsEverClosed) return;
    const now = Date.now();
    const interval = player.options.autoplay.tickIntervalMs || 250;
    if (now - _lastDecisionTime < interval) return;
    _lastDecisionTime = now;
    try {
      this._run();
    } catch (e) {
      if (player.options.autoplay.logEnabled) {
        this.log("异常", String((e && e.message) || e));
      }
    }
  },

  _run() {
    const cfg = player.options.autoplay;
    const progress = PlayerProgress.current;
    const phase = this._detectPhase(progress);
    if (phase !== _lastPhase) {
      this.log("阶段切换", phase);
      _lastPhase = phase;
    }
    cfg.decision.phase = phase;
    cfg.decision.updatedAt = Date.now();

    // 基础接管：开启全部自动购买器
    player.auto.autobuyersOn = true;
    this._ensureAutobuyers();

    switch (phase) {
      case PHASE.PRE_INFINITY:
        this._preInfinity();
        break;
      case PHASE.PRE_ETERNITY:
        this._preEternity();
        break;
      case PHASE.PRE_REALITY:
        this._preReality();
        break;
      default:
        this._postReality();
        break;
    }
  },

  _detectPhase(progress) {
    if (!progress.isInfinityUnlocked) return PHASE.PRE_INFINITY;
    if (!progress.isEternityUnlocked) return PHASE.PRE_ETERNITY;
    if (!progress.isRealityUnlocked) return PHASE.PRE_REALITY;
    return PHASE.POST_REALITY;
  },

  // 开启所有已解锁的自动购买器，并设置合理的默认策略
  _ensureAutobuyers() {
    for (const ab of Autobuyers.all) {
      if ((ab.isUnlocked || ab.isBought) && !ab.isActive) ab.isActive = true;
    }
    // Tickspeed 自动购买器：最大购买
    if (Autobuyer.tickspeed.isUnlocked && Autobuyer.tickspeed.mode !== AUTOBUYER_MODE.BUY_MAX) {
      Autobuyer.tickspeed.mode = AUTOBUYER_MODE.BUY_MAX;
    }
    // 大坍缩：非挑战中按"高于历史最高"模式 farm IP
    if (!Player.isInAntimatterChallenge && !EternityChallenge.isRunning) {
      Autobuyer.bigCrunch.mode = AUTO_CRUNCH_MODE.X_HIGHEST;
      if (Autobuyer.bigCrunch.xHighest.lt(100)) Autobuyer.bigCrunch.xHighest = new Decimal(100);
    }
  },

  // 购买反物质维度 / Tickspeed / 维度增幅 / 星系
  _buyAntimatter() {
    for (let tier = 1; tier <= 8; tier++) buyMaxDimension(tier);
    buyMaxTickSpeed();
    requestDimensionBoost(1);
    requestGalaxyReset(1);
  },

  // 购买无限升级与打破无限升级
  _buyUpgrades() {
    for (let i = 1; i <= 8; i++) {
      const upg = InfinityUpgrade(i);
      if (upg && upg.canBeBought && !upg.isBought) upg.purchase();
    }
    for (let i = 1; i <= 8; i++) {
      const upg = BreakInfinityUpgrade(i);
      if (upg && upg.canBeBought && !upg.isBought) upg.purchase();
    }
  },

  _setStrategyAndProgress(strategy, progress) {
    const cfg = player.options.autoplay;
    cfg.decision.strategy = strategy;
    cfg.decision.progress = progress;
  },

  // ============ 阶段一：初始阶段（首次 1e308 反物质前） ============
  _preInfinity() {
    this._buyAntimatter();
    if (Player.canCrunch) {
      bigCrunchResetRequest(true);
      this.log("大坍缩", `反物质达到 ${format(player.records.thisInfinity.maxAM, 2)}，完成首次无限`);
    }
    this._setStrategyAndProgress(
      "购买反物质维度/星系/Tickspeed，冲击 1e308 反物质完成首次大坍缩",
      `反物质：${format(Currency.antimatter.value, 2)} / 1e308`
    );
  },

  // ============ 阶段二：无限阶段（首次无限后，首次永恒前） ============
  _preEternity() {
    // 1) 打破无限（需要 1e308 IP）
    if (!player.break && Currency.infinityPoints.gte(DC.E308)) {
      Autobuyer.bigCrunch.maxIntervalForFree();
      if (Autobuyer.bigCrunch.hasMaxedInterval) {
        breakInfinity();
        this.log("打破无限", "累积 1e308 IP，移除反物质上限");
        return;
      }
    }

    // 2) 购买升级
    this._buyUpgrades();

    // 3) 普通挑战 / 无限挑战
    if (Player.isInAntimatterChallenge) {
      // 挑战中：若大坍缩自动购买器尚未解锁，由机器人手动大坍缩以完成挑战
      if (Player.canCrunch && !Autobuyer.bigCrunch.isUnlocked) {
        bigCrunchResetRequest(true);
      }
      this._setStrategyAndProgress(
        "挑战进行中，等待达成目标后自动大坍缩完成挑战",
        `反物质：${format(Currency.antimatter.value, 2)}`
      );
      return;
    }
    if (this._enterNextChallenge()) return;

    // 4) 未打破无限且可大坍缩：手动大坍缩（farm IP）
    if (!player.break && Player.canCrunch) {
      bigCrunchResetRequest(true);
      return;
    }

    // 5) 冲击首次永恒（canEternity 由游戏判定）
    if (Player.canEternity) {
      eternity(false, true);
      this.log("永恒", `IP 达到 ${format(player.records.thisEternity.maxIP, 2)}，完成首次永恒`);
      return;
    }

    const pending = this._pendingChallengeText();
    this._setStrategyAndProgress(
      "完成普通挑战与无限挑战，购买升级，冲击 1e308 IP 打破无限",
      pending
    );
  },

  _pendingChallengeText() {
    const nc = NormalChallenges.all.find(c => !c.isCompleted);
    const ic = InfinityChallenges.all.find(c => !c.isCompleted);
    if (nc) return `下一挑战：普通挑战 ${nc.id}（完成 ${NormalChallenges.all.filter(c => c.isCompleted).length}/12）`;
    if (ic) return `下一挑战：无限挑战 ${ic.id}（完成 ${InfinityChallenges.all.filter(c => c.isCompleted).length}/8）`;
    return `IP：${format(Currency.infinityPoints.value, 2)}，冲刺首次永恒`;
  },

  // 按顺序进入未完成的普通挑战 → 无限挑战
  _enterNextChallenge() {
    for (let id = 2; id <= 12; id++) {
      const nc = NormalChallenge(id);
      if (nc.isCompleted) continue;
      if (!nc.isUnlocked) return false;
      nc.start();
      this.log("进入普通挑战", `普通挑战 ${id}`);
      return true;
    }
    for (let id = 1; id <= 8; id++) {
      const ic = InfinityChallenge(id);
      if (ic.isCompleted) continue;
      if (!ic.isUnlocked) return false;
      ic.start();
      this.log("进入无限挑战", `无限挑战 ${id}`);
      return true;
    }
    return false;
  },

  // ============ 阶段三：永恒阶段（首次永恒后，首次现实前） ============
  _preReality() {
    this._buyUpgrades();

    // 永恒挑战中
    if (EternityChallenge.isRunning) {
      this._handleRunningEC();
      return;
    }

    // 时间膨胀已解锁：进入膨胀阶段管理
    if (PlayerProgress.dilationUnlocked()) {
      this._dilationPhase();
      return;
    }

    // 尝试进入下一个永恒挑战（EC 研究优先消耗 TT）
    if (this._enterNextEC()) return;

    // 购买时间研究
    this._buyTimeStudies();

    // 现实（无膨胀时理论不可达，保留兜底）
    if (isRealityAvailable()) {
      autoReality();
      this.log("现实", `EP 达到 ${format(player.records.thisReality.maxEP, 2)}`);
      return;
    }

    // 永恒 farm（攒 TT / 达成 EC 入场条件）
    if (Player.canEternity) {
      eternity(false, true);
      return;
    }

    this._setStrategyAndProgress(
      "购买时间研究、完成永恒挑战，为解锁时间膨胀与首次现实做准备",
      `TT：${format(Currency.timeTheorems.value, 2)}，EP：${format(Currency.eternityPoints.value, 2)}`
    );
  },

  // 时间膨胀阶段：购买膨胀研究/升级 → 完成剩余 EC → 膨胀中冲击 1e4000 EP → 现实
  _dilationPhase() {
    this._buyDilationStudies();
    this._buyDilationUpgrades();

    // 永恒挑战中
    if (EternityChallenge.isRunning) {
      this._handleRunningEC();
      return;
    }
    if (this._enterNextEC()) return;

    // 现实研究（膨胀研究 6）
    if (!TimeStudy.reality.isBought && TimeStudy.reality.canBeBought) {
      TimeStudy.reality.purchase();
      this.log("解锁现实", "购买现实研究");
      return;
    }

    // 进入时间膨胀
    if (!player.dilation.active && TimeStudy.dilation.isBought) {
      startDilatedEternity(true);
      this.log("进入时间膨胀", "开始冲击 1e4000 EP");
      return;
    }

    // 现实
    if (isRealityAvailable()) {
      autoReality();
      this.log("现实", `EP 达到 ${format(player.records.thisReality.maxEP, 2)}`);
      return;
    }

    if (player.dilation.active) {
      this._setStrategyAndProgress(
        "时间膨胀中积累永恒点数，目标达成首次现实（本现实 EP ≥ 1e4000）",
        `EP：${format(player.records.thisReality.maxEP, 2)} / 1e4000`
      );
      return;
    }

    // 未在膨胀中：永恒 farm
    if (Player.canEternity) {
      eternity(false, true);
      return;
    }

    this._setStrategyAndProgress(
      "时间膨胀阶段：完成剩余永恒挑战并冲击现实",
      `TT：${format(Currency.timeTheorems.value, 2)}，EP：${format(Currency.eternityPoints.value, 2)}`
    );
  },

  // 购买时间研究（按当前 EC 路径模式构建研究树）
  _buyTimeStudies() {
    const dimPath = DIM_STUDIES[_ecPathMode] || DIM_STUDIES.antimatter;
    const tree = [...BASE_STUDIES, ...dimPath, ...PACE_STUDIES, ...LATE_STUDIES];
    TimeStudyTree.commitToGameState(tree);
  },

  // 购买膨胀时间研究（解锁时间维度 5-8）与膨胀升级
  _buyDilationStudies() {
    for (let tier = 5; tier <= 8; tier++) {
      const study = TimeStudy.timeDimension(tier);
      if (study && !study.isBought && study.canBeBought) study.purchase();
    }
  },

  _buyDilationUpgrades() {
    for (const ab of Autobuyer.dilationUpgrade.zeroIndexed) {
      if (ab.isUnlocked && !ab.isActive) ab.isActive = true;
    }
  },

  // 进入下一个可完成的永恒挑战（按 1-12 顺序）
  _enterNextEC() {
    for (let id = 1; id <= 12; id++) {
      const ec = EternityChallenge(id);
      if (ec.isFullyCompleted) continue;
      if (ec.isRunning) return true;

      // EC11 需要反物质路径，EC12 需要时间路径；路径冲突时重建研究树
      if (id === 11 || id === 12) {
        const study = TimeStudy.eternityChallenge(id);
        const forbidden = study?.config?.secondary?.forbiddenStudies;
        const pathNeeded = id === 11 ? "antimatter" : "time";
        if (forbidden && forbidden.some(fs => TimeStudy(fs).isBought)) {
          if (_ecPathMode !== pathNeeded) {
            _ecPathMode = pathNeeded;
            respecTimeStudies(true);
            this.log("重建研究树", `为永恒挑战 ${id} 重置研究并切换${pathNeeded === "time" ? "时间维度" : "反物质维度"}路径`);
          }
          return true;
        }
        // 提前把所需研究加入购买队列（191/193 分别是 EC11/EC12 的必备研究）
        if (id === 11 && !TimeStudy(191).isBought) TimeStudyTree.commitToGameState([191]);
        if (id === 12 && !TimeStudy(193).isBought) TimeStudyTree.commitToGameState([193]);
      }

      const study = TimeStudy.eternityChallenge(id);
      if (study.isBought) {
        ec.start(true);
        this.log("进入永恒挑战", `永恒挑战 ${id}`);
        return true;
      }
      if (study.canBeBought) {
        study.purchase(true);
        this.log("购买永恒挑战研究", `永恒挑战 ${id}`);
        return true;
      }
    }
    return false;
  },

  // 永恒挑战进行中：目标达成则完成，超时则强制退出
  _handleRunningEC() {
    const ec = EternityChallenge.current;
    if (!ec) return;
    const elapsed = player.records.thisEternity.realTime || 0;

    // EC4 限制无限次数：禁用大坍缩自动购买器，由机器人控制大坍缩节奏
    if (ec.id === 4) {
      Autobuyer.bigCrunch.isActive = false;
    }

    // 目标达成 → 完成（游戏会自动结算完成次数并重置研究）
    if (ec.canBeCompleted) {
      eternity(false, true);
      this.log("完成永恒挑战", `永恒挑战 ${ec.id}（${ec.completions}/5）`);
      return;
    }

    // 超时保护：无法推进则强制退出，避免卡死
    const timeout = ec.id === 4 ? 120 * 60000 : ec.id === 12 ? 90 * 60000 : 45 * 60000;
    if (elapsed > timeout) {
      eternity(true, true);
      this.log("退出永恒挑战", `永恒挑战 ${ec.id} 长时间无法完成，强制退出`);
      return;
    }

    // EC4：手动控制大坍缩（在无限次数预算内）
    if (ec.id === 4) {
      const maxInfinities = ec.config.restriction(ec.completions);
      if (Player.canCrunch && Currency.infinities.lt(maxInfinities) &&
          Date.now() - _lastCrunchTime > 10 * 60000) {
        bigCrunchResetRequest(true);
        _lastCrunchTime = Date.now();
      }
    }

    this._setStrategyAndProgress(
      `永恒挑战 ${ec.id} 进行中${ec.id === 4 ? "（限制无限次数，机器人控制大坍缩节奏）" : ""}`,
      `IP：${format(player.records.thisEternity.maxIP, 2)} / 目标 ${format(ec.currentGoal, 2)}`
    );
  },

  // ============ 阶段四：现实阶段（首次现实后，含终局） ============
  _postReality() {
    this._buyUpgrades();
    this._buyTimeStudies();

    // 天体挑战进行中：仅维持自动购买器
    if (this._inCelestialRun()) {
      this._setStrategyAndProgress(
        "天体挑战进行中，维持自动购买器",
        `现实次数：${format(Currency.realities.value, 2)}`
      );
      return;
    }

    if (EternityChallenge.isRunning) {
      this._handleRunningEC();
      return;
    }
    if (this._enterNextEC()) return;

    // 时间膨胀
    if (PlayerProgress.dilationUnlocked()) {
      this._buyDilationStudies();
      this._buyDilationUpgrades();
      if (!player.dilation.active && TimeStudy.dilation.isBought) {
        startDilatedEternity(true);
        return;
      }
    }

    // 现实循环：由现实自动购买器持续推进
    if (Autobuyer.reality.isUnlocked && !Autobuyer.reality.isActive) {
      Autobuyer.reality.isActive = true;
      Autobuyer.reality.mode = AUTO_REALITY_MODE.RM;
      Autobuyer.reality.rm = new Decimal(100);
    }
    if (isRealityAvailable()) {
      autoReality();
      this.log("现实", `获得 ${format(MachineHandler.gainedRealityMachines, 2)} 现实机器`);
      return;
    }

    if (Player.canEternity && !player.dilation.active) {
      eternity(false, true);
      return;
    }

    this._setStrategyAndProgress(
      "现实循环：自动购买升级并持续现实，推进天体与终局内容",
      `现实机器：${format(Currency.realityMachines.value, 2)}`
    );
  },

  _inCelestialRun() {
    return Effarig.isRunning || Enslaved.isRunning || V.isRunning || Teresa.isRunning ||
      Ra.isRunning || Laitela.isRunning;
  },
};
