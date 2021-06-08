onEvent('recipes', event => {

  // Jetpack
  event.remove({ output: 'powersuits:jetpack' })
  event.shaped('powersuits:jetpack', [
  'RBR',
  'JIV',
  'PSP'
  ], {
    P: 'rftoolspower:power_core2',
    S: 'thermal:redstone_servo',
    J: 'simplyjetpacks:jetpack_mek1',
    I: 'minecraft:iron_block',
    V: 'simplyjetpacks:jetpack_ie1',
    R: 'minecraft:redstone_block',
    B: 'minecraft:stone_button'
  })
});
