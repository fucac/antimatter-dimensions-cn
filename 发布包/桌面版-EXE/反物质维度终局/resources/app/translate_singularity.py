import re

with open('src/core/secret-formula/celestials/singularity-milestones.js', 'r', encoding='utf-8') as f:
    content = f.read()

translations = {
    'description: "Dark Matter Dimension upgrades are cheaper"': 'description: "暗物质维度升级更便宜"',
    'description: "Singularity gain multiplier"': 'description: "奇点产量倍率"',
    'description: "Dark Matter Dimension interval decrease"': 'description: "暗物质维度间隔减少"',
    'description: "Ascension affects Dark Matter production more"': 'description: "飞升对暗物质产量影响更大"',
    'description: "Dark Matter Dimensions Ascension increases the interval less"': 'description: "暗物质维度飞升对间隔增加较少"',
    'description: "Automatically condense Singularities when reaching a threshold above the cap"': 'description: "达到上限以上阈值时自动凝聚奇点"',
    'description: "Dark Matter Dimension Autobuyers"': 'description: "暗物质维度自动购买器"',
    'description: "DMD Ascension Autobuyers"': 'description: "DMD飞升自动购买器"',
    'description: "Autobuyer speed for all DMD Autobuyers"': 'description: "所有DMD自动购买器速度"',
    "description: \"Dark Energy multiplier based on disabled Dimension count within Lai'tela\"": 'description: "基于莱特拉内已禁用维度数的暗能量倍率"',
    'description: "Increased Singularity gain per cap increase"': 'description: "每次上限提升增加奇点产量"',
    'description: "DMD Interval cost scaling is better"': 'description: "DMD间隔成本缩放更佳"',
    'description: "Weaken all Dark Matter Softcaps"': 'description: "削弱所有暗物质软上限"',
    'description: "Increase the Singularity Cost Step Multiplier"': 'description: "提升奇点成本步长倍率"',
    'description: "Tesseracts boost Dark Matter and Dark Energy production"': 'description: "超立方体提升暗物质与暗能量产量"',
    'description: "Infinities boost Dark Matter and Dark Energy production"': 'description: "无限提升暗物质与暗能量产量"',
    'description: "Singularities improve the repeatable Dilated Time multiplier upgrade"': 'description: "奇点提升可重复延时间倍率升级"',
    'description: "Boost Dark Matter and Dark Energy production based on highest Glyph level"': 'description: "根据最高符文等级提升暗物质与暗能量产量"',
    'description: "Singularities boost game speed"': 'description: "奇点提升游戏速度"',
    'description: "Time Theorems boost Dark Matter and Dark Energy gain"': 'description: "时间定理提升暗物质与暗能量产量"',
    'description: "Unlock an Autobuyer for Annihilation"': 'description: "解锁湮灭的自动购买器"',
    'description: "Singularities give a power effect to Time Theorem gain"': 'description: "奇点为时间定理产量提供幂次效果"',
    'description: "Game speed boosts Dark Matter and Dark Energy production"': 'description: "游戏速度提升暗物质与暗能量产量"',
    'description: "Singularities boost pre-instability Glyph level"': 'description: "奇点提升不稳定度前的符文等级"',
    'description: "Dilated Time boosts Dark Matter production"': 'description: "延时间提升暗物质产量"',
    'description: "Infinities gain a power effect based on Singularities"': 'description: "无限根据奇点获得幂次效果"',
    'description: "Singularities increase effective Tesseract count"': 'description: "奇点增加有效超立方体数量"',
    'description: "Imaginary Machines boost Dark Energy gain"': 'description: "假想机提升暗能量产量"',
    'description: "Singularities give a power effect to the other four types of Dimensions"': 'description: "奇点为其他四种维度提供幂次效果"',
    'description: "Celestial Matter boosts Dark Matter and Dark Energy gain"': 'description: "天神物质提升暗物质与暗能量产量"',
    'description: "Singularities increase the Reality Machine Hardcap"': 'description: "奇点提升现实机硬上限"',
    'description: "Unlock Galactic Power"': 'description: "解锁银河之力"',
    'description: "Galactic Power boosts Dark Matter and Dark Energy gain"': 'description: "银河之力提升暗物质与暗能量产量"',
    'description: "Singularities give a power effect to the Antimatter Exponent"': 'description: "奇点为反物质指数提供幂次效果"',
    'description: "Dark Matter Dimensions are empowered based on Singularities"': 'description: "暗物质维度根据奇点获得加成"',
    'description: "Greatly improve the Replicanti multiplier to Dark Energy based on Singularities"': 'description: "大幅提升基于奇点的复制元对暗能量的倍率"',
    'description: "Singularities boost Ethereal Power generation"': 'description: "奇点提升空灵能量产量"',
    'description: "Total Hadrons empower Dark Energy gain"': 'description: "总强子提升暗能量产量"',
    'description: "Extra Continuum Purchases multiply Entropy Generation at a reduced rate"': 'description: "额外连续体购买以降  低倍率乘以熵产量"',
    'description: "Annihilation Multiplier empowers Dark Matter Dimensions at a severely reduced rate"': 'description: "湮灭倍率以极低比率提升暗物质维度"',
    'description: "Singularities boost the Continuum Purchase factor"': 'description: "奇点提升连续体购买因子"',
    'description: "Singularities empower the Antimatter Exponent while Doomed"': 'description: "奇点在毁灭时提升反物质指数"',
    'description: "Divinities empower Singularity gain"': 'description: "神性提升奇点产量"',
    'description: "Singularities empower Divine Dimensions"': 'description: "奇点提升神性维度"',
    'description: "Improve the first Hadron effect"': 'description: "提升第一个强子效应"',
    'description: "Unlock Nihility"': 'description: "解锁虚无"',
    'description: "DMDs 2-8 multiply the base Dark Energy gain instead of adding to it"': 'description: "DMD 2-8 相乘而非相加基础暗能量产量"',
    'description: "Increase the Per-Purchase Multiplier for the other four Dimension types based on Singularities"': 'description: "基于奇点提升其他四种维度类型的每次购买倍率"',
    'description: "Your highest Dark Matter Dimension amount (above the third) boosts Dark Matter and Dark Energy gain"': 'description: "你最高暗物质维度数量（第三级以上）提升暗物质与暗能量产量"',
    'description: "Annihilation mult. generates highest DMD (above the third) when Annihilation is available"': 'description: "湮灭倍率在湮灭可用时产生最高DMD（第三级以上）"',
}

for en, zh in translations.items():
    content = content.replace(en, zh)

with open('src/core/secret-formula/celestials/singularity-milestones.js', 'w', encoding='utf-8') as f:
    f.write(content)

print('singularity-milestones.js done')