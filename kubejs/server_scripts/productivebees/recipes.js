onEvent('recipes', event => {

  // Centrifuge
  event.remove({ output: 'productivebees:centrifuge' })
  event.shaped('productivebees:centrifuge', [
  'S S',
  'SGS',
  'SSS'
  ], {
    S: '#forge:ingots/steel',
    G: 'minecraft:grindstone'
  })

  // Powered Centrifuge
  event.remove({ output: 'productivebees:powered_centrifuge' })
  event.shaped('productivebees:powered_centrifuge', [
  'RFR',
  'SCS',
  'RMR'
  ], {
    S: '#forge:ingots/steel',
    R: 'silents_mechanisms:redstone_alloy_ingot',
    C: 'productivebees:centrifuge',
    M: 'silents_mechanisms:alloy_machine_frame',
    F: 'thermal:rf_coil'
  })

  // Upgrade Base
  event.remove({ output: 'productivebees:upgrade_base' })
  event.shaped('productivebees:upgrade_base', [
  'CEC',
  'EHE',
  'ADA'
  ], {
    E: 'minecraft:emerald_block',
    H: 'minecraft:honeycomb_block',
    C: 'pneumaticcraft:printed_circuit_board',
    D: 'minecraft:diamond_block',
    A: 'mekanism:alloy_infused'
  })

  // Nest Locator
  event.remove({ output: 'productivebees:nest_locator' })
  event.shaped('productivebees:nest_locator', [
  'IRI',
  'ICI',
  'INI'
  ], {
    N: 'minecraft:note_block',
    I: 'minecraft:iron_bars',
    C: 'naturescompass:naturescompass',
    R: 'minecraft:redstone_block'
  })
});
