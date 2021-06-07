onEvent('recipes', event => {

  // Vortex Tube
  event.remove({ output: 'pneumaticcraft:vortex_tube' })
  event.shaped('pneumaticcraft:vortex_tube', [
    'CTC',
    'ETE',
    'CCC'
  ], {
    E: 'powah:steel_energized',
    C: 'pneumaticcraft:ingot_iron_compressed',
    T: 'pneumaticcraft:pressure_tube'

  })

  // Heat Sink
  event.remove({ output: 'pneumaticcraft:heat_sink' })
  event.shaped('pneumaticcraft:heat_sink', [
    '   ',
    'BBB',
    'CEC'
  ], {
    B: 'minecraft:iron_bars',
    E: 'powah:steel_energized',
    C: 'pneumaticcraft:ingot_iron_compressed'

  })

  // Air Compressor
  event.remove({ output: 'pneumaticcraft:air_compressor' })
  event.shaped('pneumaticcraft:air_compressor', [
    'RRR',
    'R T',
    'RFR'
  ], {
    R: 'pneumaticcraft:reinforced_bricks',
    T: 'powah:steel_energized',
    F: 'industrialforegoing:resourceful_furnace'

  })
});
