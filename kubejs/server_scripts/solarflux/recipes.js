onEvent('recipes', event => {

  // Blank Upgrade
  event.shaped('solarflux:blank_upgrade', [
  'PPP',
  'WMW',
  'PPP'
  ], {
    P: 'minecraft:paper',
    W: 'minecraft:white_dye',
    M: 'solarflux:mirror'
  })

  // Mirror
  event.shaped('3x solarflux:mirror', [
  'GGG',
  'SSS',
  'RQR'
  ], {
    R: 'minecraft:redstone',
    Q: 'refinedstorage:quartz_enriched_iron',
    S: 'immersiveengineering:stick_steel',
    G: '#forge:glass_panes'
  })

  // Cell I
  event.shaped('solarflux:photovoltaic_cell_1', [
  'HHH',
  'LLL',
  'MMM'
  ], {
    M: 'solarflux:mirror',
    L: 'minecraft:lapis_block',
    H: 'thermal:obsidian_glass'
  })

  // Cell II
  event.shaped('solarflux:photovoltaic_cell_2', [
  'CLC',
  'LCL',
  'MSM'
  ], {
    M: 'solarflux:mirror',
    L: 'minecraft:lapis_block',
    S: 'solarflux:photovoltaic_cell_1',
    C: 'minecraft:clay'
  })

  // Cell III
  event.shaped('solarflux:photovoltaic_cell_3', [
  'HHH',
  'OGO',
  'SSS'
  ], {
    H: 'thermal:obsidian_glass',
    S: 'solarflux:photovoltaic_cell_2',
    O: 'minecraft:obsidian',
    G: 'minecraft:glowstone'
  })

  // Cell IV
  event.shaped('solarflux:photovoltaic_cell_4', [
  'BBB',
  'GDG',
  'QSQ'
  ], {
    Q: 'refinedstorage:quartz_enriched_iron_block',
    S: 'solarflux:photovoltaic_cell_3',
    D: 'rftoolsbase:infused_diamond',
    B: 'powah:crystal_blazing',
    G: 'minecraft:glowstone'
  })

  // Cell V
  event.shaped('solarflux:photovoltaic_cell_5', [
  'BBB',
  'GDG',
  'QSQ'
  ], {
    Q: 'refinedstorage:quartz_enriched_iron_block',
    S: 'solarflux:photovoltaic_cell_4',
    D: 'botania:mana_diamond_block',
    B: 'powah:capacitor_blazing',
    G: 'minecraft:glowstone'
  })

  // Cell VI
  event.shaped('solarflux:photovoltaic_cell_6', [
  'BBB',
  'GDG',
  'QSQ'
  ], {
    Q: 'refinedstorage:quartz_enriched_iron_block',
    S: 'solarflux:photovoltaic_cell_5',
    D: 'powah:niotic_crystal_block',
    B: 'powah:crystal_spirited',
    G: 'minecraft:glowstone'
  })

  // Solar I
  event.shaped('solarflux:sp_1', [
  'MMM',
  'TRT',
  'TTT'
  ], {
    T: 'immersiveengineering:treated_wood_horizontal',
    R: 'minecraft:redstone_block',
    M: 'solarflux:mirror'
  })

  // Solar II
  event.shaped('solarflux:sp_2', [
  'SSS',
  'SMS',
  'SSS'
  ], {
    M: 'create:mechanical_piston',
    S: 'solarflux:sp_1'
  })

  // Solar III
  event.shaped('2x solarflux:sp_3', [
  'MMM',
  'SRS',
  'SQS'
  ], {
    M: 'solarflux:photovoltaic_cell_1',
    S: 'solarflux:sp_2',
    Q: 'refinedstorage:quartz_enriched_iron_block',
    R: 'create:adjustable_pulse_repeater'
  })

  // Solar IV
  event.shaped('2x solarflux:sp_4', [
  'MMM',
  'SCS',
  'SBS'
  ], {
    M: 'solarflux:photovoltaic_cell_2',
    S: 'solarflux:sp_3',
    B: 'silents_mechanisms:steel_block',
    C: 'botania:cosmetic_clock_eye'
  })

  // Solar V
  event.shaped('2x solarflux:sp_5', [
  'MMM',
  'SDS',
  'SGS'
  ], {
    M: 'solarflux:photovoltaic_cell_3',
    S: 'solarflux:sp_4',
    D: 'botania:mana_diamond_block',
    G: 'minecraft:glowstone'
  })

  // Solar VI
  event.shaped('2x solarflux:sp_6', [
  'MMM',
  'SLS',
  'SNS'
  ], {
    M: 'solarflux:photovoltaic_cell_4',
    S: 'solarflux:sp_5',
    L: 'quark:lit_lamp',
    N: 'powah:niotic_crystal_block'
  })

  // Solar VII
  event.shaped('2x solarflux:sp_7', [
  'MMM',
  'SES',
  'SES'
  ], {
    M: 'solarflux:photovoltaic_cell_5',
    S: 'solarflux:sp_6',
    E: 'enigmaticlegacy:mending_mixture'
  })

  // Solar VII
  event.shaped('2x solarflux:sp_8', [
  'MMM',
  'SDS',
  'SDS'
  ], {
    M: 'solarflux:photovoltaic_cell_6',
    S: 'solarflux:sp_7',
    D: 'botania:dragonstone'
  })
});
