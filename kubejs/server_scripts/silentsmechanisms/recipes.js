onEvent('recipes', event => {

  // Stone Machine Frame
  event.remove({ output: 'silents_mechanisms:stone_machine_frame' })
  event.shaped('silents_mechanisms:stone_machine_frame', [
  'SRS',
  'GIG',
  'SRS'
  ], {
    S: 'minecraft:smooth_stone',
    R: 'immersiveengineering:stick_steel',
    I: '#forge:ingots/steel',
    G: 'tconstruct:clear_glass'
  })

  // Alloy Machine Frame
  event.remove({ output: 'silents_mechanisms:alloy_machine_frame' })
  event.shaped('silents_mechanisms:alloy_machine_frame', [
  'SRS',
  'GIG',
  'SRS'
  ], {
    S: 'silents_mechanisms:redstone_alloy_ingot',
    R: 'immersiveengineering:stick_steel',
    I: 'silents_mechanisms:stone_machine_frame',
    G: 'tconstruct:clear_glass'
  })

  // Circuit Board
  event.remove({ output: 'silents_mechanisms:circuit_board' })
  event.shaped('silents_mechanisms:circuit_board', [
  'ICI',
  'RGR',
  'WWW'
  ], {
    W: 'immersiveengineering:wire_lead',
    G: 'minecraft:gold_block',
    R: 'silents_mechanisms:redstone_alloy_ingot',
    I: 'immersiveengineering:insulating_glass',
    C: 'create:copper_sheet'
  })
});
