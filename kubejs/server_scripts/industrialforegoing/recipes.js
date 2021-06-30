onEvent('recipes', event => {

  // Pity Machine frame
  event.remove({ output: 'industrialforegoing:machine_frame_pity' })
  event.shaped('industrialforegoing:machine_frame_pity', [
  'WCW',
  'CRC',
  'WCW'
  ], {
    W: 'minecraft:warped_planks',
    C: 'silents_mechanisms:platinum_ingot',
    R: 'silents_mechanisms:redstone_alloy_block'
  })
});
