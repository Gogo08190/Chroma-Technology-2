onEvent('recipes', event => {
  // Clayblock back to 4x Clay
  event.shapeless(Item.of('minecraft:clay_ball', 4), ['minecraft:clay'])

  // 3x Gravel to 1x Flint
  event.shapeless(Item.of('minecraft:flint'), ['minecraft:gravel', 'minecraft:gravel', 'minecraft:gravel'])

  // conversion craft silent gem to druidcraft
  //Rajout désactivation craft shard silent gem
  event.remove({ id: 'silentgems:amber' })
  event.remove({ output: 'silentgems:amber' })
  event.remove({ output: 'silentgems:amber_shard' })
  event.remove({ output: 'silentgems:moonstone' })
  event.remove({ output: 'silentgems:moonstone_shard' })
  event.shapeless(Item.of('silentgems:amber_shard', 9), ['druidcraft:amber'])
  event.shapeless(Item.of('silentgems:moonstone_shard', 9), ['druidcraft:moonstone'])
  //rajout désactiation craft gem silent gem
  event.shaped(Item.of('druidcraft:amber', 1), [
    'AAA',
    'AAA',
    'AAA'
  ], {
    A: 'silentgems:amber_shard',
  })
  event.shaped(Item.of('druidcraft:moonstone', 1), [
    'MMM',
    'MMM',
    'MMM'
  ], {
    M: 'silentgems:moonstone_shard',
  })


  // Dusts
  event.replaceOutput(
    { id: "engineerstools:crushing/uranium_grit_crushing_recipe" },
    "immersiveengineering:dust_uranium",
    "silents_mechanisms:uranium_dust"
  )

  // Mystical Agriculture Enderium Essence Craft
  event.remove({ id: "mysticalagriculture:essence/thermal/enderium_ingot" })
  event.shaped(Item.of('thermal:enderium_ingot', 2), [
    'EEE',
    'E E',
    'EEE'
  ], {
    E: 'mysticalagriculture:enderium_essence',
  })

  // Mystical Agriculture Lumium Essence Craft
  event.remove({ id: "mysticalagriculture:essence/thermal/lumium_ingot" })
  event.shaped(Item.of('thermal:lumium_ingot', 4), [
    'LLL',
    'L L',
    'LLL'
  ], {
    L: 'mysticalagriculture:lumium_essence',
  })

  // Mystical Agriculture Signalum Essence Craft
  event.remove({ id: "mysticalagriculture:essence/thermal/signalum_ingot" })
  event.shaped(Item.of('thermal:signalum_ingot', 4), [
    'SSS',
    'S S',
    'SSS'
  ], {
    S: 'mysticalagriculture:signalum_essence',
  })

  // Mystical Agriculture Constantan Essence Craft
  event.shaped(Item.of('thermal:constantan_ingot', 4), [
    'CCC',
    'C C',
    'CCC'
  ], {
    C: 'mysticalagriculture:constantan_essence',
  })

  // Mystical Agriculture Invar Essence Craft
  event.shaped(Item.of('thermal:invar_ingot', 4), [
    'III',
    'I I',
    'III'
  ], {
    I: 'mysticalagriculture:invar_essence',
  })

  // Mystical Agriculture Electrum Essence Craft
  event.shaped(Item.of('thermal:electrum_ingot', 4), [
    'EEE',
    'E E',
    'EEE'
  ], {
    E: 'mysticalagriculture:electrum_essence',
  })

  // Mystical Agriculture Bronze Essence Craft
  event.shaped(Item.of('thermal:bronze_ingot', 4), [
    'BBB',
    'B B',
    'BBB'
  ], {
    B: 'mysticalagriculture:bronze_essence',
  })

  // Mystical Agriculture Nickel Essence Craft
  event.shaped(Item.of('thermal:nickel_ingot', 4), [
    'NNN',
    'N N',
    'NNN'
  ], {
    N: 'mysticalagriculture:nickel_essence',
  })

  // Mystical Agriculture Silver Essence Craft
  event.shaped(Item.of('thermal:silver_ingot', 4), [
    'SSS',
    'S S',
    'SSS'
  ], {
    S: 'mysticalagriculture:silver_essence',
  })

  // Mystical Agriculture Lead Essence Craft
  event.shaped(Item.of('thermal:lead_ingot', 4), [
    'LLL',
    'L L',
    'LLL'
  ], {
    L: 'mysticalagriculture:lead_essence',
  })

  // Mystical Agriculture Tin Essence Craft
  event.shaped(Item.of('thermal:tin_ingot', 4), [
    'TTT',
    'T T',
    'TTT'
  ], {
    T: 'mysticalagriculture:tin_essence',
  })

  // Mystical Agriculture Copper Essence Craft
  event.shaped(Item.of('thermal:copper_ingot', 4), [
    'CCC',
    'C C',
    'CCC'
  ], {
    C: 'mysticalagriculture:copper_essence',
  })

  // Mystical Agriculture IF - Rubber Craft
  event.shaped(Item.of('industrialforegoing:dryrubber'), [
    ' R ',
    ' R ',
    ' R '
  ], {
    R: 'mysticalagriculture:rubber_essence',
  })

  // Mystical Agriculture Thermal - Rubber Craft
  event.shaped(Item.of('thermal:rubber', 2), [
    '   ',
    'RRR',
    '   '
  ], {
    R: 'mysticalagriculture:rubber_essence',
  })

  // Applied Energistics 2 Silicon
  event.shaped(Item.of("appliedenergistics2:silicon", 6), [
    [null, "mysticalagriculture:silicon_essence", null],
    [null, "mysticalagriculture:silicon_essence", null],
    [null, "mysticalagriculture:silicon_essence", null],
  ])

  // Uranium Stuff
  event.replaceInput(
    { id: "silents_mechanisms:metals/uranium_block" },
    "#forge:ingots/uranium",
    "silents_mechanisms:uranium_ingot"
  )

  event.replaceInput(
    { id: "silents_mechanisms:metals/uranium_nugget" },
    "#forge:ingots/uranium",
    "silents_mechanisms:uranium_ingot"
  )

  // Connecting Glass
  event.remove({ id: 'connectedglass:borderless_glass1' })
  event.shaped(Item.of('connectedglass:borderless_glass', 9), [
    'GGG',
    'GGG',
    'GGG'
  ], {
    G: 'minecraft:glass',
  })

  // Glass Wall
  event.shaped(Item.of('variant16x:glass_wall', 6), [
    ' C ',
    'GGG',
    'GGG'
  ], {
    G: '#forge:glass/colorless',
    C: 'minecraft:cobblestone_wall'
  });
});
