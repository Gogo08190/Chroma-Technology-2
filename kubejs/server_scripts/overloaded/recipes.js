onEvent('recipes', event => {

  // Fluid Core
  event.remove({ output: 'overloaded:fluid_core' })
  event.shaped('overloaded:fluid_core', [
  'CNC',
  'NPN',
  'CNC'
  ], {
    C: 'kubejs:chroma_ingot',
    N: 'overloaded:nether_star_block',
    P: 'powah:niotic_crystal_block'
  })

  // Item Core
  event.remove({ output: 'overloaded:item_core' })
  event.shaped('overloaded:item_core', [
  'CNC',
  'NPN',
  'CNC'
  ], {
    C: 'kubejs:chroma_ingot',
    N: 'overloaded:nether_star_block',
    P: 'powah:blazing_crystal_block'
  })

  // Energy Core
  event.remove({ output: 'overloaded:energy_core' })
  event.shaped('overloaded:energy_core', [
  'CNC',
  'NPN',
  'CNC'
  ], {
    C: 'kubejs:chroma_ingot',
    N: 'overloaded:nether_star_block',
    P: 'powah:spirited_crystal_block'
  })

  // Multi Tool
  event.remove({ output: 'overloaded:multi_tool' })
  event.shaped('overloaded:multi_tool', [
  'SE ',
  'ECN',
  ' NP'
  ], {
    S: 'extendedcrafting:ender_star',
    N: 'overloaded:nether_star_block',
    E: 'powah:steel_energized',
    C: 'overloaded:energy_core',
    P: 'powah:nitro_crystal_block'
  })

  // Instant Furnace
  event.remove({ output: 'overloaded:instant_furnace' })
  event.shaped('overloaded:instant_furnace', [
  'NEN',
  'EFE',
  'PIP'
  ], {
    P: 'powah:battery_nitro',
    I: 'mysticaladaptations:insanium_furnace',
    F: 'ironfurnaces:million_furnace',
    E: 'powah:energized_steel_block',
    N: 'overloaded:nether_star_block'
  })

  // Hyper Energy Sender
  event.remove({ output: 'overloaded:hyper_energy_sender' })
  event.shaped('overloaded:hyper_energy_sender', [
  'SPS',
  'ENE',
  'SPS'
  ], {
    S: 'powah:energized_steel_block',
    P: 'powah:nitro_crystal_block',
    E: 'xreliquary:salamander_eye',
    N: 'overloaded:nether_star_block'
  })
});
