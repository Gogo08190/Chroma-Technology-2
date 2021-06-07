onEvent('recipes', event => {

  // Steel Casing
  event.remove({ output: 'mekanism:steel_casing' })
  event.shaped('mekanism:steel_casing', [
    'SGC',
    'GOG',
    'CGS'
  ], {
    G: 'thermal:obsidian_glass',
    S: '#forge:ingots/steel',
    O: 'mekanism:ingot_osmium',
    C: 'pneumaticcraft:ingot_iron_compressed'

  })
});
