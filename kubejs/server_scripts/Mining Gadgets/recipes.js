onEvent('recipes', event => {


// Black Upgrade Module
  event.remove({ output: 'mininggadgets:upgrade_empty' })
  event.shaped('mininggadgets:upgrade_empty', [
  'RLR',
  'DGD',
  'RLR'
  ], {
    R: 'minecraft:redstone_block',
    L: 'minecraft:lapis_block',
    G: '#forge:glass_panes',
    D: 'minecraft:diamond_block'
  })

//Mining Gadget MK1
  event.remove({ output: 'mininggadgets:mininggadget_simple' })
  event.shaped('mininggadgets:mininggadget_simple' [
  'MPP',
  'MUS',
  'MPP'
  ], {
    M: 'botania:mana_diamond',
    P: 'powah:steel_energized',
    S: 'silents_mechanisms:redstone_alloy_ingot',
    U: 'mininggadgets:upgrade_empty'
  })

  // Mining Gadget MK2
  event.remove({ output: 'mininggadgets:mininggadget_fancy' })
  event.shaped('mininggadgets:mininggadget_simple' [
  'MPP',
  'MUS',
  'MPR'
  ], {
    M: 'botania:mana_diamond',
    P: 'powah:steel_energized',
    S: 'silents_mechanisms:redstone_alloy_ingot',
    U: 'mininggadgets:upgrade_empty',
    R: 'tconstruct:rose_gold_ingot'
  })

  // Mining Gadget MK3
  event.remove({ output: 'mininggadgets:mininggadget' })
  event.shaped('mininggadgets:mininggadget' [
  'MPF',
  'BUN',
  'MPF'
  ], {
    M: 'botania:mana_diamond',
    P: 'powah:steel_energized',
    N: 'powah:capacitor_nitro',
    U: 'mininggadgets:upgrade_empty',
    F: 'silentgear:blaze_gold_ingot',
    B: 'rftoolsbuilder:builder'
  })
});
