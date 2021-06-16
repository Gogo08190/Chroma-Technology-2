onEvent('recipes', event => {

  // Redstone Flux Cell
  event.remove({ output: 'thermal:energy_cell_frame' })
  event.shaped('thermal:energy_cell_frame', [
  'LHL',
  'HGH',
  'LHL'
  ], {
    G: 'thermal:electrum_gear',
    H: 'thermal:obsidian_glass',
    L: '#forge:ingots/lead'
  })

  // Machine Frame
  event.remove({ output: 'thermal:machine_frame' })
  event.shaped('thermal:machine_frame', [
  'PGP',
  'GCG',
  'PGP'
  ], {
    G: '#forge:glass',
    C: 'silents_mechanisms:circuit_board',
    P: 'thermal:tin_plate'
  })

  // Fluid Cell Frame
  event.remove({ output: 'thermal:fluid_cell_frame' })
  event.shaped('thermal:fluid_cell_frame', [
  'PBP',
  'GCG',
  'PGP'
  ], {
    G: '#forge:glass',
    C: 'silents_mechanisms:circuit_board',
    P: 'thermal:bronze_plate',
    B: 'minecraft:bucket'
  })

  // Redstone Servo
  event.remove({ output: 'thermal:redstone_servo' })
  event.shaped('thermal:redstone_servo', [
  'RAR',
  ' A ',
  'RAR'
  ], {
    R: 'silents_mechanisms:redstone_alloy_ingot',
    A: 'silents_mechanisms:aluminum_steel_ingot'
  })

  // Redstone Flux Coil
  event.remove({ output: 'thermal:rf_coil' })
  event.shaped('thermal:rf_coil', [
  ' GC',
  'WRW',
  'CG '
  ], {
    R: 'silents_mechanisms:redstone_alloy_ingot',
    C: 'thermal:constantan_ingot',
    W: 'immersiveengineering:wire_copper',
    G: 'createaddition:gold_wire'
  })


});
