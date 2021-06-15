onEvent('recipes', event => {

   // Item pipe
  event.remove({ output: 'pipez:item_pipe' })
  event.shaped('pipez:item_pipe', [
  'LLL',
  'BRB',
  'LLL'
  ], {
    L: '#forge:ingots/lead',
    B: 'mekanism:basic_logistical_transporter',
    R: 'minecraft:redstone'
  })

  // Fluid pipe
  event.remove({ output: 'pipez:fluid_pipe' })
  event.shaped('pipez:fluid_pipe', [
  'LLL',
  'BRB',
  'LLL'
  ], {
    L: '#forge:ingots/lead',
    B: 'mekanism:basic_mechanical_pipe',
    R: 'minecraft:redstone'
  })

  // Energy pipe
  event.remove({ output: 'pipez:energy_pipe' })
  event.shaped('pipez:energy_pipe', [
  'III',
  'BRB',
  'III'
  ], {
    L: '#forge:ingots/iron',
    B: 'mekanism:basic_universal_cable',
    R: 'minecraft:redstone'
  })

  // Gaz pipe
  event.remove({ output: 'pipez:gas_pipe' })
  event.shaped('pipez:gas_pipe', [
  'III',
  'BRB',
  'III'
  ], {
    L: '#forge:ingots/iron',
    B: 'mekanism:basic_pressurized_tube',
    R: 'minecraft:redstone'
  })
});
