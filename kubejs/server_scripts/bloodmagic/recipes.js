onEvent('recipes', event => {

  // Sacrificial Dagger
  event.remove({ output: 'bloodmagic:sacrificialdagger' })
  event.shaped('bloodmagic:sacrificialdagger', [
  'BBB',
  ' AB',
  'M B'
  ], {
    M: 'mythicbotany:alfsteel_armor_upgrade',
    A: Item.of('aiotbotania:alfsteel_aiot', '{mana:0,Damage:0}'),
    B: 'botania:bifrost_perm'
  })

  // Pure Evil
  event.recipes.bloodmagic.alchemytable('kubejs:pure_evil', ['upgradednetherite:ultimate_upgraded_netherite_ingot', 'botania:cosmetic_devil_horns', 'druidcraft:red_soulfire', 'bloodmagic:demonslate', 'botania:cosmetic_devil_tail', 'bloodmagic:weakbloodshard']).syphon(666).upgradeLevel(2)

  // Ethereal Slate
  event.recipes.bloodmagic.altar( 'bloodmagic:etherealslate', 'bloodmagic:demonslate').upgradeLevel(4).altarSyphon(30000).consumptionRate(35).drainRate(40)
})
