onEvent('recipes', event => {

  // Steel Casing
  event.remove({ output: 'mekanism:steel_casing' })
  event.shaped('mekanism:steel_casing', [
    'SGC',
    'GOG',
    'CGS'
  ], {
    G: 'thermal:obsidian_glass',
    S: '#forge:ingots/steel',
    O: 'mekanism:ingot_osmium',
    C: 'pneumaticcraft:ingot_iron_compressed'

  })

  // MekaSuit Boots
  event.remove({ output: 'mekanism:mekasuit_boots'})
  event.shaped('mekanism:mekasuit_boots', [
    'HUH',
    'HBH',
    'PIP'
  ], {
    H: 'mekanism:hdpe_sheet',
    U: 'mekanism:ultimate_control_circuit',
    B: 'upgradednetherite:ultimate_upgraded_netherite_boots',
    I: 'mekanism:ultimate_induction_cell',
    P: 'mekanism:pellet_polonium'

  })

  //MekaSuit Leggings
  event.remove({ output: 'mekanism:mekasuit_leggings'})
  event.shaped('mekanism:mekasuit_leggings', [
    'HUH',
    'HLH',
    'PIP'
  ], {
    H: 'mekanism:hdpe_sheet',
    U: 'mekanism:ultimate_control_circuit',
    L: 'upgradednetherite:ultimate_upgraded_netherite_leggings',
    I: 'mekanism:ultimate_induction_cell',
    P: 'mekanism:pellet_polonium'

  })

  //MekaSuit Helmet
  event.remove({ output: 'mekanism:mekasuit_helmet'})
  event.shaped('mekanism:mekasuit_helmet', [
    'HUH',
    'HNH',
    'PIP'
  ], {
    H: 'mekanism:hdpe_sheet',
    U: 'mekanism:ultimate_control_circuit',
    N: 'upgradednetherite:ultimate_upgraded_netherite_helmet',
    I: 'mekanism:ultimate_induction_cell',
    P: 'mekanism:pellet_polonium'

  })
});
