onEvent('recipes', event => {

  // Machine Frame
  event.remove({ output: 'rftoolsbase:machine_frame' })
  event.shaped('rftoolsbase:machine_frame', [
  'SES',
  'EME',
  'SES'
  ], {
    S: '#forge:ingots/steel',
    E: 'powah:steel_energized',
    M: 'thermal:machine_frame'
  })

  // Machine Base
  event.remove({ output: 'rftoolsbase:machine_base' })
  event.shaped('rftoolsbase:machine_base', [
  '   ',
  'EEE',
  'SSS'
  ], {
    E: 'powah:steel_energized',
    S: 'minecraft:smooth_stone'
  })

  // Builder
  event.remove({ output: 'rftoolsbuilder:builder' })
  event.shaped('rftoolsbuilder:builder', [
  'SPS',
  'NMN',
  'SNS'
  ], {
    S: '#tconstruct:seared_blocks',
    N: 'powah:crystal_nitro',
    M: 'rftoolsbase:machine_frame',
    P: 'mekanismtools:netherite_paxel'
  })

  // Dimensional Cell (Simple)
  event.remove({ output: 'rftoolspower:dimensionalcell_simple' })
  event.shaped('rftoolspower:dimensionalcell_simple', [
  'RDR',
  'SMS',
  'RDR'
  ], {
    S: 'rftoolsbase:dimensionalshard',
    D: 'botania:mana_diamond',
    M: 'rftoolsbase:machine_frame',
    R: 'silents_mechanisms:redstone_alloy_block'
  })

  // Dimensional Cell
  event.remove({ output: 'rftoolspower:dimensionalcell' })
  event.shaped('rftoolspower:dimensionalcell', [
  'RCR',
  'SMS',
  'RNR'
  ], {
    S: 'minecraft:prismarine_shard',
    N: 'powah:crystal_niotic',
    M: 'rftoolspower:dimensionalcell_simple',
    R: 'silents_mechanisms:redstone_alloy_block',
    C: 'powah:crystal_niotic'
  })

  // Dimensional Cell (Advanced)
  event.remove({ output: 'rftoolspower:dimensionalcell_advanced' })
  event.shaped('rftoolspower:dimensionalcell_advanced', [
  'RPR',
  'DMD',
  'RPR'
  ], {
    P: 'rftoolsbase:infused_enderpearl',
    D: 'rftoolsbase:infused_diamond',
    M: 'rftoolspower:dimensionalcell',
    R: 'silents_mechanisms:redstone_alloy_block'
  })
});
