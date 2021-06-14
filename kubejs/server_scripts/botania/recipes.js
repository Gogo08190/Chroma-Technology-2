onEvent('recipes', event => {

  // Floral Fertilizer
  event.remove({ output: 'botania:fertilizer' })
  event.shaped('botania:fertilizer', [
  'ERE',
  'MFB',
  'EYE'
  ], {
    E: 'mysticalagriculture:inferium_essence',
    R: 'minecraft:red_dye',
    M: 'minecraft:magenta_dye',
    Y: 'minecraft:yellow_dye',
    B: 'minecraft:blue_dye',
    F: 'minecraft:bone_meal'
  })

  // Petal Apothecary
  event.remove({ output: 'botania:apothecary_default' })
  event.shaped('botania:apothecary_default', [
  'NPN',
  ' C ',
  'SSS'
  ], {
    S: '#minecraft:stone_bricks',
    C: 'cookingforblockheads:sink',
    N: 'minecraft:nether_brick_slab',
    P: '#botania:petals'
  })

  // Mana Pylon
  event.remove({ output: 'botania:mana_pylon' })
  event.shaped('botania:mana_pylon', [
  ' B ',
  'GDG',
  ' B '
  ], {
    D: 'botania:mana_diamond',
    G: 'thermal:gold_plate',
    B: 'silentgear:blaze_gold_ingot'
  })
});
