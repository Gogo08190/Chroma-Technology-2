onEvent('recipes', event => {

  // Pure Evil
  event.recipes.bloodmagic.alchemytable('kubejs:pure_evil', ['upgradednetherite:ultimate_upgraded_netherite_ingot', 'botania:cosmetic_devil_horns', 'druidcraft:red_soulfire', 'bloodmagic:demonslate', 'botania:cosmetic_devil_tail', 'kubejs:chroma_ingot']).syphon(666).upgradeLevel(2)

  // Ethereal Slate
  event.recipes.bloodmagic.altar( 'bloodmagic:etherealslate', 'bloodmagic:demonslate').upgradeLevel(4).altarSyphon(30000).consumptionRate(35).drainRate(40)
})
