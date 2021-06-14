onEvent('recipes', event => {

  // Ender Ingot
  event.remove({ output: 'extendedcrafting:ender_ingot' })
  event.shaped('extendedcrafting:ender_ingot', [
  ' E ',
  'ESE',
  ' E '
  ], {
    E: 'minecraft:ender_pearl',
    S: '#forge:ingots/steel'
  })

  // Redstone Ingot
  event.remove({ output: 'extendedcrafting:redstone_ingot' })
  event.shaped('extendedcrafting:redstone_ingot', [
  ' N ',
  'RSR',
  ' N '
  ], {
    R: 'silents_mechanisms:redstone_alloy_ingot',
    S: '#forge:ingots/steel',
    N: 'powah:crystal_nitro'
  })

  // Luminessence
  event.remove({ output: 'extendedcrafting:luminessence' })
  event.shapeless('extendedcrafting:luminessence', ['powah:charged_snowball', 'mekanism:ingot_refined_glowstone', 'botania:mana_powder', 'minecraft:redstone'])
});
