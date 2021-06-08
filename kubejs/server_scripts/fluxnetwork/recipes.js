onEvent('recipes', event => {

  // Flux Controller
  event.remove({ output: 'fluxnetworks:flux_controller' })
  event.shaped('fluxnetworks:flux_controller', [
  'BCB',
  'F F',
  'BNB'
  ], {
    B: 'fluxnetworks:flux_block',
    N: 'powah:battery_nitro',
    F: 'fluxnetworks:flux_dust',
    C: 'fluxnetworks:flux_core'
  })

  // Flux Core
  event.remove({ output: '4x fluxnetworks:flux_core' })
  event.shaped('fluxnetworks:flux_core', [
  'FOF',
  'OEO',
  'FOF'
  ], {
    O: 'mekanism:ingot_refined_obsidian',
    E: 'rftoolsbase:infused_enderpearl',
    F: 'fluxnetworks:flux_dust'
  })

  // Flux Block
  event.remove({ output: 'fluxnetworks:flux_block' })
  event.shaped('fluxnetworks:flux_block', [
  'FCF',
  'COC',
  'FCF'
  ], {
    O: 'mekanism:ingot_refined_obsidian',
    C: 'fluxnetworks:flux_core',
    F: 'fluxnetworks:flux_dust'
  })
});
