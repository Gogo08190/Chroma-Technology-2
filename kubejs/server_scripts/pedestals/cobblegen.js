onEvent('recipes', e => {

  function cobbleGen(result, ingredient) {
    e.custom({
      type: 'pedestals:pedestal_cobblegen',
      ingredient: Ingredient.of(ingredient).toJson(),
      result: Item.of(result).toResultJson()
    })
  }

  function cobbleGenSilk(result, ingredient) {
    e.custom({
      type: 'pedestals:pedestal_cobblegensilk',
      ingredient: Ingredient.of(ingredient).toJson(),
      result: Item.of(result).toResultJson()
    })
  }

  cobbleGen('mysticalagriculture:soulstone_cobble', 'mysticalagriculture:soulium_block')
  cobbleGenSilk('mysticalagriculture:soulstone', 'mysticalagriculture:soulium_block')
  cobbleGen('enviromats:marble', 'enviromats:marble_brick')
  cobbleGen('chisel:basalt/raw', 'chisel:basalt/solid_bricks')
  cobbleGen('chisel:basalt/solid_bricks', 'enviromats:basalt_brick')
  cobbleGen('quark:basalt', 'quark:basalt_bricks')
  cobbleGen('chisel:limestone/raw', 'chisel:limestone/solid_bricks')
  cobbleGen('quark:limestone', 'quark:limestone_bricks')
  cobbleGen('quark:cobbled_deepslate', 'quark:polished_deepslate')
  cobbleGenSilk('quark:deepslate', 'quark:deepslate_bricks')
  cobbleGen('quark:jasper', 'quark:jasper_bricks')
  cobbleGen('quark:slate', 'quark:slate_bricks')
  cobbleGen('quark:myalite', 'quark:myalite_bricks')
  cobbleGen('appliedenergistics2:sky_stone_block', 'appliedenergistics2:smooth_sky_stone_block')

})

onEvent('item.tags', event => {
  event.get('pedestals:enchant_limits/advanced_blacklist').remove('pedestals:coin/xpanvil')
})
