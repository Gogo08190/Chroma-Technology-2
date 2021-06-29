events.listen('recipes', event => {

  // Unassembled Chroma Ingot
  event.recipes.thermal.smelter(Item.of('kubejs:unassembled_chroma_ingot', 8), ['silentgear:blueprint_paper', 'lazierae2:spec_core_64', 'botania:terrasteel_ingot']).energy(10000)

  event.recipes.thermal.smelter(Item.of('kubejs:unassembled_chroma_ingot', 4), ['silentgear:blueprint_paper', 'lazierae2:spec_core_32', 'botania:terrasteel_ingot']).energy(7000)

  event.recipes.thermal.smelter('kubejs:unassembled_chroma_ingot', ['silentgear:blueprint_paper', 'lazierae2:spec_core_16', 'botania:terrasteel_ingot']).energy(5000)

  // Time In A Bottle
  event.remove({ output: 'tiab:timeinabottle' })
  event.shaped('tiab:timeinabottle', [
  'GHG',
  'DCD',
  'LBL'
  ], {
    G: '#forge:ingots/gold',
    D: 'tombstone:impregnated_diamond',
    C: 'create:cuckoo_clock',
    L: 'create:lapis_sheet',
    B: 'minecraft:glass_bottle',
    H: 'supplementaries:hourglass'
  })
});
