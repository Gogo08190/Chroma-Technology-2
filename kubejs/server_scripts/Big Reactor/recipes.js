onEvent('recipes', event => {

  // Reactor casing basic
  event.remove({ output: 'bigreactors:basic_reactorcasing' })
  event.shaped('bigreactors:basic_reactorcasing', [
  'MGM',
  'GSG',
  'MGM'
  ], {
    S: '#forge:sand',
    G: 'bigreactors:graphite_ingot',
    M: 'silents_mechanisms:steel_ingot'
  })

  // Reactor controller basic
  event.remove({ output: 'bigreactors:basic_reactorcontroller' })
  event.shaped('bigreactors:basic_reactorcontroller', [
  'RAR',
  'YPY',
  'RSR'
  ], {
    R: 'bigreactors:basic_reactorcasing',
    S: 'silents_mechanisms:redstone_alloy_ingot',
    Y: 'bigreactors:yellorium_block',
    P: 'powah:spirited_crystal_block',
    A: 'industrialforegoing:machine_frame_advanced'
  })

  // Reactor fuel Rod basic
  event.remove({ output: 'bigreactors:basic_reactorfuelrod' })
  event.shaped('bigreactors:basic_reactorfuelrod', [
  'YIS',
  'GPG',
  'SIY'
  ], {
    G: '#forge:glass',
    S: 'silents_mechanisms:steel_ingot',
    Y: 'bigreactors:yellorium_ingot',
    P: 'powah:crystal_spirited',
    I: 'bigreactors:graphite_ingot'
  })

  // Reactor control Rod basic
  event.remove({ output: 'bigreactors:basic_reactorcontrolrod' })
  event.shaped('bigreactors:basic_reactorcontrolrod', [
  'RPR',
  'SVS',
  'RIR'
  ], {
    R: 'bigreactors:basic_reactorcasing',
    S: 'silents_mechanisms:steel_ingot',
    V: 'minecraft:piston',
    P: 'powah:crystal_spirited',
    I: 'bigreactors:graphite_ingot'
  })

  // Reactor solid Access Port basic
  event.remove({ output: 'bigreactors:basic_reactorsolidaccessport' })
  event.shaped('bigreactors:basic_reactorsolidaccessport', [
  'RHR',
  'SCS',
  'RVR'
  ], {
    R: 'bigreactors:basic_reactorcasing',
    S: 'silents_mechanisms:steel_ingot',
    V: 'minecraft:piston',
    C: 'expandedstorage:diamond_chest',
    H: 'minecraft:hopper'
  })

  // Reactor Active forge energy power tape basic
  event.remove({ output: 'bigreactors:basic_reactorpowertapfe_active' })
  event.shaped('bigreactors:basic_reactorpowertapfe_active', [
  'RPR',
  'PYP',
  'RPR'
  ], {
    R: 'bigreactors:basic_reactorcasing',
    P: 'powah:spirited_crystal_block',
    Y: 'bigreactors:yellorium_ingot'
  })

  // Reactor Passive forge energy power tape basic
  event.remove({ output: 'bigreactors:basic_reactorpowertapfe_passive' })
  event.shaped('bigreactors:basic_reactorpowertapfe_passive', [
  'RYR',
  'YPY',
  'RYR'
  ], {
    R: 'bigreactors:basic_reactorcasing',
    P: 'powah:spirited_crystal_block',
    Y: 'bigreactors:yellorium_ingot'
  })

  // Reactor Redstone port basic
  event.remove({ output: 'bigreactors:basic_reactorredstoneport' })
  event.shaped('bigreactors:basic_reactorredstoneport', [
  'RTR',
  'SYS',
  'RTR'
  ], {
    R: 'bigreactors:basic_reactorcasing',
    S: 'silents_mechanisms:steel_ingot',
    T: 'thermal:redstone_servo',
    Y: 'bigreactors:yellorium_ingot'
  })

  // Reactor Forge Energy Charging Port basic
  event.remove({ output: 'bigreactors:basic_reactorchargingportfe' })
  event.shaped('bigreactors:basic_reactorchargingportfe', [
  'CGC',
  'VBV',
  'CGC'
  ], {
    C: 'powah:crystal_spirited',
    G: 'thermal:lapis_gear',
    V: '#forge:glass',
    B: 'bigreactors:basic_reactorpowertapfe_active'
  })

  // Reactor casing reinforced
  event.remove({ output: 'bigreactors:reinforced_reactorcasing' })
  event.shaped('bigreactors:reinforced_reactorcasing', [
  'SGS',
  'GRG',
  'SGS'
  ], {
    R: 'bigreactors:basic_reactorcasing',
    G: 'bigreactors:graphite_ingot',
    S: 'silents_mechanisms:steel_ingot',
  })

  // Reactor Fuel rod reinforced
  event.remove({ output: 'bigreactors:reinforced_reactorfuelrod' })
  event.shaped('bigreactors:reinforced_reactorfuelrod', [
  'PSP',
  'GRG',
  'PSP'
  ], {
    R: 'bigreactors:basic_reactorfuelrod',
    G: 'bigreactors:graphite_ingot',
    S: 'silents_mechanisms:steel_ingot',
    P: 'powah:crystal_spirited'
  })

  // Reactor control Rod Reinforced
  event.remove({ output: 'bigreactors:reinforced_reactorcontrolrod' })
  event.shaped('bigreactors:reinforced_reactorcontrolrod', [
  'SPS',
  'GRG',
  'SBS'
  ], {
    R: 'bigreactors:basic_reactorcontrolrod',
    G: 'silents_mechanisms:steel_ingot',
    S: 'bigreactors:reinforced_reactorcasing',
    P: 'powah:crystal_spirited',
    B: 'bigreactors:graphite_ingot'
  })

  // Reactor Solid Access Port Reinforced
  event.remove({ output: 'bigreactors:reinforced_reactorsolidaccessport' })
  event.shaped('bigreactors:reinforced_reactorsolidaccessport', [
  'RHR',
  'SBS',
  'RPR'
  ], {
    R: 'bigreactors:reinforced_reactorcasing',
    B: 'bigreactors:basic_reactorsolidaccessport',
    S: 'silents_mechanisms:steel_ingot',
    P: 'minecraft:piston',
    H: 'minecraft:hopper'
  })

  // Reactor Active Forge Energy Power Tap Reinforced
  event.remove({ output: 'bigreactors:reinforced_reactorpowertapfe_active' })
  event.shaped('bigreactors:reinforced_reactorpowertapfe_active', [
  'RPR',
  'PBP',
  'RPR'
  ], {
    R: 'bigreactors:reinforced_reactorcasing',
    P: 'powah:spirited_crystal_block',
    B: 'bigreactors:basic_reactorpowertapfe_active'
  })

  // Reactor Passive Forge Energy Power Tap reinforced
  event.remove({ output: 'bigreactors:reinforced_reactorpowertapfe_passive' })
  event.shaped('bigreactors:reinforced_reactorpowertapfe_passive', [
  'RPR',
  'PGP',
  'RPR'
  ], {
    R: 'bigreactors:reinforced_reactorcasing',
    G: 'bigreactors:basic_reactorpowertapfe_passive',
    P: 'powah:crystal_spirited'
  })
});
