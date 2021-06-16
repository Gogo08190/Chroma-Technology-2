onEvent('recipes', event => {

   // Item Pipe
  event.remove({ output: 'pipez:item_pipe' })
  event.shaped('8x pipez:item_pipe', [
  'LLL',
  'BRB',
  'LLL'
  ], {
    L: '#forge:ingots/lead',
    B: 'mekanism:basic_logistical_transporter',
    R: 'minecraft:redstone'
  })

  // Fluid Pipe
  event.remove({ output: 'pipez:fluid_pipe' })
  event.shaped('8x pipez:fluid_pipe', [
  'LLL',
  'BRB',
  'LLL'
  ], {
    L: '#forge:ingots/lead',
    B: 'mekanism:basic_mechanical_pipe',
    R: 'minecraft:redstone'
  })

  // Energy Pipe
  event.remove({ output: 'pipez:energy_pipe' })
  event.shaped('8x pipez:energy_pipe', [
  'LLL',
  'BRB',
  'LLL'
  ], {
    L: '#forge:ingots/iron',
    B: 'mekanism:basic_universal_cable',
    R: 'minecraft:redstone'
  })

  // Gaz Pipe
  event.remove({ output: 'pipez:gas_pipe' })
  event.shaped('8x pipez:gas_pipe', [
  'LLL',
  'BRB',
  'LLL'
  ], {
    L: '#forge:ingots/iron',
    B: 'mekanism:basic_pressurized_tube',
    R: 'minecraft:redstone'
  })

  // Infinity pipe
  event.shaped('pipez:infinity_upgrade', [
  ' U ',
  'UCU',
  ' U '
  ], {
    C: 'mysticalagradditions:creative_essence',
    U: 'pipez:ultimate_upgrade'
  })
});
