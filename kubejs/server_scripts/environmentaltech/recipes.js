onEvent('recipes', event => {

  // Litherite
  event.remove({ output: 'envirocore:litherite_crystal' })
  event.shaped('2x envirocore:litherite_crystal', [
  ' E ',
  ' S ',
  ' Q '
  ], {
    E: 'botania:mana_pearl',
    S: 'powah:crystal_spirited',
    Q: 'botania:quartz_elven'
  })

  event.shaped('4x envirocore:litherite_crystal', [
  ' E ',
  'QSE',
  ' Q '
  ], {
    E: 'botania:mana_pearl',
    S: 'powah:crystal_spirited',
    Q: 'botania:quartz_elven'
  })

  event.shaped('6x envirocore:litherite_crystal', [
  'EE ',
  'QSE',
  ' QQ'
  ], {
    E: 'botania:mana_pearl',
    S: 'powah:crystal_spirited',
    Q: 'botania:quartz_elven'
  })

  event.shaped('8x envirocore:litherite_crystal', [
  'EEE',
  'QSE',
  'QQQ'
  ], {
    E: 'botania:mana_pearl',
    S: 'powah:crystal_spirited',
    Q: 'botania:quartz_elven'
  })

  event.shapeless('9x envirocore:litherite_crystal', ['envirocore:litherite'])
});
