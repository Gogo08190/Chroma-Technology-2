onEvent('recipes', event => {

  // Centrifuge
  event.remove({ output: 'productivebees:centrifuge' })
  event.shaped('productivebees:centrifuge', [
  'S S',
  'SGS',
  'SSS'
  ], {
    S: '#forge:ingots/steel',
    G: 'minecraft:grindstone'
  })

  // Powered Centrifuge
  event.remove({ output: 'productivebees:powered_centrifuge' })
  event.shaped('productivebees:powered_centrifuge', [
  'RFR',
  'SCS',
  'RMR'
  ], {
    S: '#forge:ingots/steel',
    R: 'silents_mechanisms:redstone_alloy_ingot',
    C: 'productivebees:centrifuge',
    M: 'silents_mechanisms:alloy_machine_frame',
    F: 'thermal:rf_coil'
  })

  // Upgrade Base
  event.remove({ output: 'productivebees:upgrade_base' })
  event.shaped('productivebees:upgrade_base', [
  'CEC',
  'EHE',
  'ADA'
  ], {
    E: 'minecraft:emerald_block',
    H: 'minecraft:honeycomb_block',
    C: 'pneumaticcraft:printed_circuit_board',
    D: 'minecraft:diamond_block',
    A: 'mekanism:alloy_infused'
  })

  // Nest Locator
  event.remove({ output: 'productivebees:nest_locator' })
  event.shaped('productivebees:nest_locator', [
  'IRI',
  'ICI',
  'INI'
  ], {
    N: 'minecraft:note_block',
    I: 'minecraft:iron_bars',
    C: 'naturescompass:naturescompass',
    R: 'minecraft:redstone_block'
  })

  // Upgrade: Comb Block
  event.remove({ output: 'productivebees:upgrade_comb_block' })
  event.shaped('productivebees:upgrade_comb_block', [
  'BNB',
  'DUD',
  'BWB'
  ], {
    B: 'productivebees:comb_ender_biotite',
    W: 'xreliquary:witherless_rose',
    U: 'productivebees:upgrade_base',
    D: 'productivebees:inactive_dragon_egg',
    N: 'minecraft:nether_star'
  })

  // Advanced Oak Beehive
  event.remove({ output: 'productivebees:advanced_oak_beehive' })
  event.shaped('productivebees:advanced_oak_beehive', [
  'PPP',
  'CBC',
  'FMS'
  ], {
    P: 'minecraft:oak_planks',
    C: 'minecraft:honeycomb_block',
    B: 'minecraft:beehive',
    F: 'farmersdelight:stove',
    M: 'thermal:machine_frame',
    S: 'botania:elementium_shears'
  })

  // Advanced Spruce Beehive
  event.remove({ output: 'productivebees:advanced_spruce_beehive' })
  event.shaped('productivebees:advanced_spruce_beehive', [
  'PPP',
  'CBC',
  'FMS'
  ], {
    P: 'minecraft:spruce_planks',
    C: 'minecraft:honeycomb_block',
    B: 'minecraft:beehive',
    F: 'farmersdelight:stove',
    M: 'thermal:machine_frame',
    S: 'botania:elementium_shears'
  })

  // Advanced Birch Beehive
  event.remove({ output: 'productivebees:advanced_birch_beehive' })
  event.shaped('productivebees:advanced_birch_beehive', [
  'PPP',
  'CBC',
  'FMS'
  ], {
    P: 'minecraft:birch_planks',
    C: 'minecraft:honeycomb_block',
    B: 'minecraft:beehive',
    F: 'farmersdelight:stove',
    M: 'thermal:machine_frame',
    S: 'botania:elementium_shears'
  })

  // Advanced Jungle Beehive
  event.remove({ output: 'productivebees:advanced_jungle_beehive' })
  event.shaped('productivebees:advanced_jungle_beehive', [
  'PPP',
  'CBC',
  'FMS'
  ], {
    P: 'minecraft:jungle_planks',
    C: 'minecraft:honeycomb_block',
    B: 'minecraft:beehive',
    F: 'farmersdelight:stove',
    M: 'thermal:machine_frame',
    S: 'botania:elementium_shears'
  })

  // Advanced Acacia Beehive
  event.remove({ output: 'productivebees:advanced_acacia_beehive' })
  event.shaped('productivebees:advanced_acacia_beehive', [
  'PPP',
  'CBC',
  'FMS'
  ], {
    P: 'minecraft:acacia_planks',
    C: 'minecraft:honeycomb_block',
    B: 'minecraft:beehive',
    F: 'farmersdelight:stove',
    M: 'thermal:machine_frame',
    S: 'botania:elementium_shears'
  })

  // Advanced Acacia Beehive
  event.remove({ output: 'productivebees:advanced_dark_oak_beehive' })
  event.shaped('productivebees:advanced_dark_oak_beehive', [
  'PPP',
  'CBC',
  'FMS'
  ], {
    P: 'minecraft:dark_oak_planks',
    C: 'minecraft:honeycomb_block',
    B: 'minecraft:beehive',
    F: 'farmersdelight:stove',
    M: 'thermal:machine_frame',
    S: 'botania:elementium_shears'
  })

  // Advanced Crimson Beehive
  event.remove({ output: 'productivebees:advanced_crimson_beehive' })
  event.shaped('productivebees:advanced_crimson_beehive', [
  'PPP',
  'CBC',
  'FMS'
  ], {
    P: 'minecraft:crimson_planks',
    C: 'minecraft:honeycomb_block',
    B: 'minecraft:beehive',
    F: 'farmersdelight:stove',
    M: 'thermal:machine_frame',
    S: 'botania:elementium_shears'
  })

  // Advanced Warped Beehive
  event.remove({ output: 'productivebees:advanced_warped_beehive' })
  event.shaped('productivebees:advanced_warped_beehive', [
  'PPP',
  'CBC',
  'FMS'
  ], {
    P: 'minecraft:warped_planks',
    C: 'minecraft:honeycomb_block',
    B: 'minecraft:beehive',
    F: 'farmersdelight:stove',
    M: 'thermal:machine_frame',
    S: 'botania:elementium_shears'
  })

  // Upgrade: Productivity
  event.remove({ output: 'productivebees:upgrade_productivity' })
  event.shaped('productivebees:upgrade_productivity', [
  'TSM',
  'SBS',
  'MST'
  ], {
    T: 'productivebees:comb_terrasteel',
    S: 'minecraft:nether_star',
    M: 'productivebees:comb_supremium',
    B: 'productivebees:upgrade_base'
  })

  // Honey Generator
  event.remove({ output: 'productivebees:honey_generator' })
  event.shaped('productivebees:honey_generator', [
  'EBE',
  'EME',
  'EEE'
  ], {
    E: 'powah:steel_energized',
    B: 'productivebees:honey_bucket',
    M: 'mysticalagriculture:prudentium_furnace'
  })

  // Advanced Hellbark Beehive
  event.remove({ output: 'productivebees:advanced_bop_hellbark_beehive' })
  event.shaped('productivebees:advanced_bop_hellbark_beehive', [
  'PPP',
  'CBC',
  'FMS'
  ], {
    P: 'biomesoplenty:hellbark_planks',
    C: 'minecraft:honeycomb_block',
    B: 'minecraft:beehive',
    F: 'farmersdelight:stove',
    M: 'thermal:machine_frame',
    S: 'botania:elementium_shears'
  })

  // Advanced Umbran Beehive
  event.remove({ output: 'productivebees:advanced_bop_umbran_beehive' })
  event.shaped('productivebees:advanced_bop_umbran_beehive', [
  'PPP',
  'CBC',
  'FMS'
  ], {
    P: 'biomesoplenty:umbran_planks',
    C: 'minecraft:honeycomb_block',
    B: 'minecraft:beehive',
    F: 'farmersdelight:stove',
    M: 'thermal:machine_frame',
    S: 'botania:elementium_shears'
  })

  // Advanced Fir Beehive
  event.remove({ output: 'productivebees:advanced_bop_fir_beehive' })
  event.shaped('productivebees:advanced_bop_fir_beehive', [
  'PPP',
  'CBC',
  'FMS'
  ], {
    P: 'biomesoplenty:fir_planks',
    C: 'minecraft:honeycomb_block',
    B: 'minecraft:beehive',
    F: 'farmersdelight:stove',
    M: 'thermal:machine_frame',
    S: 'botania:elementium_shears'
  })

  // Advanced Redwood Beehive
  event.remove({ output: 'productivebees:advanced_bop_redwood_beehive' })
  event.shaped('productivebees:advanced_bop_redwood_beehive', [
  'PPP',
  'CBC',
  'FMS'
  ], {
    P: 'biomesoplenty:redwood_planks',
    C: 'minecraft:honeycomb_block',
    B: 'minecraft:beehive',
    F: 'farmersdelight:stove',
    M: 'thermal:machine_frame',
    S: 'botania:elementium_shears'
  })

  // Advanced Palm Beehive
  event.remove({ output: 'productivebees:advanced_bop_palm_beehive' })
  event.shaped('productivebees:advanced_bop_palm_beehive', [
  'PPP',
  'CBC',
  'FMS'
  ], {
    P: 'biomesoplenty:palm_planks',
    C: 'minecraft:honeycomb_block',
    B: 'minecraft:beehive',
    F: 'farmersdelight:stove',
    M: 'thermal:machine_frame',
    S: 'botania:elementium_shears'
  })

  // Advanced Dead Beehive
  event.remove({ output: 'productivebees:advanced_bop_dead_beehive' })
  event.shaped('productivebees:advanced_bop_dead_beehive', [
  'PPP',
  'CBC',
  'FMS'
  ], {
    P: 'biomesoplenty:dead_planks',
    C: 'minecraft:honeycomb_block',
    B: 'minecraft:beehive',
    F: 'farmersdelight:stove',
    M: 'thermal:machine_frame',
    S: 'botania:elementium_shears'
  })

  // Advanced Mahogany Beehive
  event.remove({ output: 'productivebees:advanced_bop_mahogany_beehive' })
  event.shaped('productivebees:advanced_bop_mahogany_beehive', [
  'PPP',
  'CBC',
  'FMS'
  ], {
    P: 'biomesoplenty:mahogany_planks',
    C: 'minecraft:honeycomb_block',
    B: 'minecraft:beehive',
    F: 'farmersdelight:stove',
    M: 'thermal:machine_frame',
    S: 'botania:elementium_shears'
  })

  // Advanced Jacaranda Beehive
  event.remove({ output: 'productivebees:advanced_bop_jacaranda_beehive' })
  event.shaped('productivebees:advanced_bop_jacaranda_beehive', [
  'PPP',
  'CBC',
  'FMS'
  ], {
    P: 'biomesoplenty:jacaranda_planks',
    C: 'minecraft:honeycomb_block',
    B: 'minecraft:beehive',
    F: 'farmersdelight:stove',
    M: 'thermal:machine_frame',
    S: 'botania:elementium_shears'
  })

  // Advanced Willow Beehive
  event.remove({ output: 'productivebees:advanced_bop_willow_beehive' })
  event.shaped('productivebees:advanced_bop_willow_beehive', [
  'PPP',
  'CBC',
  'FMS'
  ], {
    P: 'biomesoplenty:willow_planks',
    C: 'minecraft:honeycomb_block',
    B: 'minecraft:beehive',
    F: 'farmersdelight:stove',
    M: 'thermal:machine_frame',
    S: 'botania:elementium_shears'
  })

  // Advanced Cherry Beehive
  event.remove({ output: 'productivebees:advanced_bop_cherry_beehive' })
  event.shaped('productivebees:advanced_bop_cherry_beehive', [
  'PPP',
  'CBC',
  'FMS'
  ], {
    P: 'biomesoplenty:cherry_planks',
    C: 'minecraft:honeycomb_block',
    B: 'minecraft:beehive',
    F: 'farmersdelight:stove',
    M: 'thermal:machine_frame',
    S: 'botania:elementium_shears'
  })

  // Advanced Magic Beehive
  event.remove({ output: 'productivebees:advanced_bop_magic_beehive' })
  event.shaped('productivebees:advanced_bop_magic_beehive', [
  'PPP',
  'CBC',
  'FMS'
  ], {
    P: 'biomesoplenty:magic_planks',
    C: 'minecraft:honeycomb_block',
    B: 'minecraft:beehive',
    F: 'farmersdelight:stove',
    M: 'thermal:machine_frame',
    S: 'botania:elementium_shears'
  })

  // Stove
  event.remove({ output: 'farmersdelight:stove' })
  event.shaped('farmersdelight:stove', [
  'SSS',
  'B B',
  'BCB'
  ], {
    S: 'iceandfire:dragonsteel_fire_ingot',
    C: '#forge:campfires',
    B: 'minecraft:bricks'
  })

  // life blood
  event.custom({
    "type": "thermal:centrifuge",
    "ingredient":
    {
      "item": 'productivebees:honeycomb_bloody'
    },
    "result":
      [{
        "fluid": "bloodmagic:life_essence_fluid", "amount": 100
      },
      {
        "item": 'tconstruct:blood_slime_ball', "chance": 0.75
      }],
    "energy": 2000,
    "experience": 0.00
  })

  // pink slime comb
  event.custom({
    "type": "thermal:centrifuge",
    "ingredient":
    {
      "item": 'productivebees:honeycomb_pink_slimy'
    },
    "result":
      [{
        "fluid": "fluid:industrialforegoing:pink_slime>", "amount": 100
      },
      {
        "item": 'industrialforegoing:pink_slime', "chance": 1
      }],
    "energy": 3000,
    "experience": 0.00
  })
});
