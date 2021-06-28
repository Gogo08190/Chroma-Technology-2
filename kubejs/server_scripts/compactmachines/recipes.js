onEvent('recipes', event => {

  // Field Projector
  event.remove({ output: 'compactcrafting:field_projector' })
  event.shaped('4x compactcrafting:field_projector', [
  ' S ',
  ' R ',
  'NMN'
  ], {
    M: 'thermal:machine_frame',
    N: 'powah:crystal_niotic',
    R: 'immersiveengineering:stick_steel',
    S: 'rftoolsbase:information_screen'
  })

  // Personnal Shrinking Device
  event.remove({ output: 'compactmachines:personal_shrinking_device' })
  event.shaped('compactmachines:personal_shrinking_device', [
  'ISI',
  'HBH',
  'ICI'
  ], {
    I: '#forge:ingots/iron',
    C: 'numina:component_computer_chip',
    B: 'silents_mechanisms:circuit_board',
    S: 'rftoolsbase:information_screen',
    H: 'thermal:obsidian_glass'
  })

  // Item Tunnel
  event.remove({ output: Item.of('compactmachines:tunnel', {definition:{id:"compactmachines:item"}}) })
  event.shaped(Item.of('compactmachines:tunnel', 2, {definition:{id:"compactmachines:item"}}), [
  'CCC',
  'CRC',
  'CCC'
  ], {
    C: 'compactmachines:wall',
    R: '#forge:chests'
  })

  // Redstone Tunnel
  event.remove({ output: Item.of('compactmachines:tunnel', {definition:{id:"compactmachines:redstone_in"}}) })
  event.shaped(Item.of('compactmachines:tunnel', 2, {definition:{id:"compactmachines:redstone_in"}}), [
  'CCC',
  'CRC',
  'CCC'
  ], {
    C: 'compactmachines:wall',
    R: 'minecraft:redstone_block'
  })
});
