onEvent('recipes', event => {

  // Steel Casing
  event.remove({ output: 'mekanism:steel_casing' })
  event.recipes.create.mechanical_crafting(Item.of('mekanism:steel_casing'),[
    'SGC',
    'GOG',
    'CGS'
  ], {
    G: 'thermal:obsidian_glass',
    S: 'mekanism:ingot_osmium'
    O: 'mekanism:ingot_osmium',
    C: 'pneumaticcraft:ingot_iron_compressed'

  })
});
