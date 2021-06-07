onEvent('recipes', event => {

  // Machine Frame
  event.remove({ output: 'rftoolsbase:machine_frame' })
  event.shaped('rftoolsbase:machine_frame', [
  'SES',
  'EME',
  'SES'
  ], {
    S: '#forge:ingots/steel',
    E: 'powah:steel_energized',
    M: 'thermal:machine_frame'
  })

  // Machine Base
  event.remove({ output: 'rftoolsbase:machine_base' })
  event.shaped('rftoolsbase:machine_base', [
  '   ',
  'EEE',
  'SSS'
  ], {
    E: 'powah:steel_energized',
    S: 'minecraft:smooth_stone'
  })
});
