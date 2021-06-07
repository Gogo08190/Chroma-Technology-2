onEvent('recipes', event => {

  // Dielectric Casing
  event.remove({ output: 'powah:dielectric_casing' })
  event.shaped('powah:dielectric_casing', [
  'SHS',
  'VFV',
  'SHS'
  ], {
    S: '#forge:ingots/steel',
    F: 'thermal:energy_cell_frame',
    H: 'powah:dielectric_rod_horizontal',
    V: 'powah:dielectric_rod'
  })
});
