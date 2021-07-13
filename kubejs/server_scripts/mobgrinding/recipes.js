onEvent('recipes', event => {

  // Rotten Egg
  event.shaped('mob_grinding_utils:rotten_egg', [
  'MBM',
  'GEP',
  'MRM'
  ], {
    M: 'mob_grinding_utils:fluid_xp_bucket',
    B: 'minecraft:bone',
    G: 'minecraft:gunpowder',
    E: 'minecraft:egg',
    P: 'minecraft:ender_pearl',
    R: 'minecraft:rotten_flesh'
  })
});
