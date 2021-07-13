onEvent('recipes', event => {

  // Pedestal Upgrade Base
  event.remove({ output: 'pedestals:coin/default' })
  event.shaped('pedestals:coin/default', [
  'DGD',
  'GEG',
  'DGD'
  ], {
    E: 'elementalcraft:shrine_upgrade_core',
    G: 'thermal:gold_plate',
    D: 'silentgear:blaze_gold_block'
  })
});
