onEvent('recipes', event => {

  // Inferium Growth Accelerator
  event.remove({ output: 'mysticalagriculture:inferium_growth_accelerator' })
  event.shaped('mysticalagriculture:inferium_growth_accelerator', [
  'EFE',
  'FGF',
  'EFE'
  ], {
    E: 'mysticalagriculture:inferium_block',
    F: 'mysticalagriculture:mystical_fertilizer',
    G: 'mysticalagriculture:inferium_gemstone'
  })

  // Prudentium Growth Accelerator
  event.remove({ output: 'mysticalagriculture:prudentium_growth_accelerator' })
  event.shaped('mysticalagriculture:prudentium_growth_accelerator', [
  'EFE',
  'FGF',
  'EFE'
  ], {
    E: 'mysticalagriculture:prudentium_block',
    F: 'mysticalagriculture:inferium_growth_accelerator',
    G: 'mysticalagriculture:prudentium_gemstone'
  })

  // Tertium Growth Accelerator
  event.remove({ output: 'mysticalagriculture:tertium_growth_accelerator' })
  event.shaped('mysticalagriculture:tertium_growth_accelerator', [
  'EFE',
  'FGF',
  'EFE'
  ], {
    E: 'mysticalagriculture:tertium_block',
    F: 'mysticalagriculture:prudentium_growth_accelerator',
    G: 'mysticalagriculture:tertium_gemstone'
  })

  // Imprerium Growth Accelerator
  event.remove({ output: 'mysticalagriculture:imperium_growth_accelerator' })
  event.shaped('mysticalagriculture:imperium_growth_accelerator', [
  'EFE',
  'FGF',
  'EFE'
  ], {
    E: 'mysticalagriculture:imperium_block',
    F: 'mysticalagriculture:tertium_growth_accelerator',
    G: 'mysticalagriculture:imperium_gemstone'
  })

  // Supremium Growth Accelerator
  event.remove({ output: 'mysticalagriculture:supremium_growth_accelerator' })
  event.shaped('mysticalagriculture:supremium_growth_accelerator', [
  'EFE',
  'FGF',
  'EFE'
  ], {
    E: 'mysticalagriculture:supremium_block',
    F: 'mysticalagriculture:imperium_growth_accelerator',
    G: 'mysticalagriculture:supremium_gemstone'
  })

  // Infusion Crystal
  event.remove({ output: 'mysticalagriculture:infusion_crystal' })
  event.shaped('mysticalagriculture:infusion_crystal', [
  'DPD',
  'PGP',
  'DPD'
  ], {
    D: 'minecraft:diamond_block',
    P: 'mysticalagriculture:prosperity_ingot_block',
    G: 'bloodmagic:reagentgrowth'
  })

  // Infusion Pedestal
  event.remove({ output: 'mysticalagriculture:infusion_pedestal' })
  event.shaped('mysticalagriculture:infusion_pedestal', [
  'ERE',
  'NSN',
  ' S '
  ], {
    S: 'minecraft:stone',
    N: 'powah:nitro_crystal_block',
    E: 'powah:steel_energized',
    R: 'tconstruct:rose_gold_ingot'
  })

  // Infusion Altar
  event.remove({ output: 'mysticalagriculture:infusion_altar' })
  event.shaped('mysticalagriculture:infusion_altar', [
  'RNR',
  'NMN',
  'SSS'
  ], {
    S: 'minecraft:stone',
    N: 'powah:nitro_crystal_block',
    M: 'industrialforegoing:machine_frame_simple',
    R: 'tconstruct:rose_gold_ingot'
  })
});
