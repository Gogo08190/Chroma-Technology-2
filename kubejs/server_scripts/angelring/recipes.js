onEvent('recipes', event => {

  // Diamond Ring
  event.remove({ output: 'angelring:itemdiamondring' })
  event.shaped('angelring:itemdiamondring', [
  'DND',
  'NEN',
  'DND'
  ], {
    E: 'minecraft:elytra',
    N: 'powah:niotic_crystal_block',
    D: 'botania:mana_diamond'
  })
});
