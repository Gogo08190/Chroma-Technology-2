onEvent('recipes', event => {

  event.smelting('pedestals:coin/default', '#pedestals:upgrades')

  event.remove({output: 'minecraft:gold_ingot', input: '#pedestals:upgrades'}) 
});
