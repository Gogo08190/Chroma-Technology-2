onEvent('recipes', event => {

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
});
