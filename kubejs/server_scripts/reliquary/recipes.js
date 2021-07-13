onEvent('recipes', event => {

  // Lilypad of Fertility
  event.remove({ output: 'xreliquary:fertile_lily_pad' })
  event.shaped('xreliquary:fertile_lily_pad', [
  'FMF',
  'MLM',
  'FMF'
  ], {
    F: 'xreliquary:fertile_essence',
    M: 'mysticalagriculture:mystical_fertilizer',
    L: 'minecraft:lily_pad'
  })
});
