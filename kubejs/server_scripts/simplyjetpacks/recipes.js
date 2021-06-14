onEvent('recipes', event => {

  // Truster
  // Hardened Thruster
  event.shaped('simplyjetpacks:thruster_te2', [
  'III',
  'CBC',
  'CRC'
  ], {
    C: 'powah:energy_cable_basic',
    R: 'silents_mechanisms:redstone_alloy_block',
    B: 'powah:battery_basic',
    I: '#forge:ingots/invar'
  })

  // Reinforced Thruster
  event.shaped('simplyjetpacks:thruster_te3', [
  'III',
  'CBC',
  'CRC'
  ], {
    C: 'powah:energy_cable_hardened',
    R: 'silents_mechanisms:redstone_alloy_block',
    B: 'powah:battery_hardened',
    I: '#forge:ingots/electrum'
  })

  // Resonant Thruster
  event.shaped('simplyjetpacks:thruster_te4', [
  'III',
  'CBC',
  'CRC'
  ], {
    C: 'powah:energy_cable_niotic',
    R: 'silents_mechanisms:redstone_alloy_block',
    B: 'powah:battery_niotic',
    I: '#forge:ingots/enderium'
  })

  // Fluxed Thruster
  event.shaped('simplyjetpacks:thruster_te5', [
  'III',
  'CBC',
  'CRC'
  ], {
    C: 'powah:energy_cable_nitro',
    R: 'silents_mechanisms:redstone_alloy_block',
    B: 'powah:battery_nitro',
    I: '#forge:ingots/lumium'
  })

    // Leadstone Thruster
    event.shaped('simplyjetpacks:thruster_te1', [
    'III',
    'CBC',
    'CRC'
    ], {
      C: 'powah:energy_cable_starter',
      R: 'silents_mechanisms:redstone_alloy_block',
      B: 'powah:battery_starter',
      I: '#forge:ingots/lead'
    })

    // Jetpack
    // Leadstone Jetpack
    event.shaped('simplyjetpacks:jetpack_te1', [
    'PCP',
    'PSP',
    'T T'
    ], {
      T: 'simplyjetpacks:thruster_te1',
      P: 'thermal:lead_plate',
      C: 'thermal:energy_cell',
      S: 'simplyjetpacks:leather_strap'
    })
    // Hardened Jetpack
    event.shaped('simplyjetpacks:jetpack_te2', [
    'PCP',
    'PJP',
    'T T'
    ], {
      T: 'simplyjetpacks:thruster_te2',
      P: 'thermal:invar_plate',
      C: 'thermal:upgrade_augment_1',
      J: 'simplyjetpacks:jetpack_te1'
    })
    // Reinforced Jetpack
    event.shaped('simplyjetpacks:jetpack_te3', [
    'PCP',
    'PJP',
    'T T'
    ], {
      T: 'simplyjetpacks:thruster_te3',
      P: 'thermal:electrum_plate',
      C: 'thermal:upgrade_augment_2',
      J: 'simplyjetpacks:jetpack_te2'
    })
    // Resonant Jetpack
    event.shaped('simplyjetpacks:jetpack_te4', [
    'PCP',
    'PJP',
    'T T'
    ], {
      T: 'simplyjetpacks:thruster_te4',
      P: 'thermal:enderium_plate',
      C: 'thermal:upgrade_augment_3',
      J: 'simplyjetpacks:jetpack_te3'
    })
    // Flux-Infused Jetplate
    event.shaped('simplyjetpacks:jetpack_te5', [
    'PFP',
    'PJP',
    'T T'
    ], {
      T: 'simplyjetpacks:thruster_te5',
      P: 'thermal:lumium_plate',
      F: 'industrialforegoing:machine_frame_simple',
      J: 'simplyjetpacks:jetpack_te4_armored'
    })
});
