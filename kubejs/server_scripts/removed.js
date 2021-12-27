onEvent('recipes', event => {

  // Mystical
  event.remove({id: 'mysticalagriculture:essence/common/constantan_ingot'})
  event.remove({id: 'mysticalagriculture:essence/common/invar_ingot'})
  event.remove({id: 'mysticalagriculture:essence/common/electrum_ingot'})
  event.remove({id: 'mysticalagriculture:essence/common/bronze_ingot'})
  event.remove({id: 'mysticalagriculture:essence/common/nickel_ingot'})
  event.remove({id: 'mysticalagriculture:essence/common/silver_ingot'})
  event.remove({id: 'mysticalagriculture:essence/common/lead_ingot'})
  event.remove({id: 'mysticalagriculture:essence/common/tin_ingot'})
  event.remove({id: 'mysticalagriculture:essence/common/copper_ingot'})

  // Mekanism
  event.remove({id: 'mekanism:processing/uranium/dust/from_ingot'})
  event.remove({id: 'mekanism:processing/uranium/dust/from_ore'})
  event.remove({id: 'mekanism:processing/uranium/dust/from_dirty_dust'})
  event.remove({output: 'mekanism:block_bronze'})
  event.remove({output: 'mekanism:nugget_bronze'})
  event.remove({id: 'mekanism:processing/bronze/ingot/from_block'})
  event.remove({id: 'mekanism:processing/bronze/ingot/from_nuggets'})
  event.remove({id: 'mekanism:processing/bronze/ingot/from_dust_smelting'})
  event.remove({id: 'mekanism:processing/bronze/ingot/from_dust_blasting'})
  event.remove({output: 'mekanism:block_charcoal'})
  event.remove({output: 'mekanism:upgrade_anchor'})

  // Thermal
  event.remove({output: 'thermal:apple_block'})
  event.remove({output: 'thermal:potato_block'})
  event.remove({output: 'thermal:carrot_block'})
  event.remove({output: 'thermal:beetroot_block'})
  event.remove({output: 'thermal:bamboo_block'})
  event.remove({id: 'thermal:enderium_dust_2'})
  event.remove({id: 'thermal:lumium_dust_4'})
  event.remove({id: 'thermal:signalum_dust_4'})
  event.remove({id: 'thermal:constantan_dust_2'})
  event.remove({id: 'thermal:invar_dust_3'})
  event.remove({id: 'thermal:electrum_dust_2'})
  event.remove({id: 'thermal:bronze_dust_4'})
  event.remove({id: 'thermal:fire_charge/signalum_ingot_4'})
  event.remove({id: 'thermal:fire_charge/bronze_ingot_4'})
  event.remove({id: 'thermal:fire_charge/electrum_ingot_2'})
  event.remove({id: 'thermal:fire_charge/enderium_ingot_2'})
  event.remove({id: 'thermal:fire_charge/invar_ingot_3'})
  event.remove({id: 'thermal:fire_charge/constantan_ingot_2'})
  event.remove({id: 'thermal:fire_charge/lumium_ingot_4'})
  event.remove({output: 'thermal:apple_block'})
  event.remove({output: 'thermal:potato_block'})
  event.remove({output: 'thermal:carrot_block'})
  event.remove({output: 'thermal:beetroot_block'})
  event.remove({output: 'thermal:bamboo_block'})
  event.remove({output: 'thermal:ruby_block'})

  // Tinker
  event.remove({id: 'tmechworks:copper_ingot_from_copper_block'})
  event.remove({id: 'tmechworks:copper_ingot_from_copper_nugget'})
  event.remove({id: 'tmechworks:copper_nugget_from_copper_ingot'})
  event.remove({id: 'tmechworks:aluminum_ingot_from_aluminum_block'})
  event.remove({id: 'tmechworks:aluminum_ingot_from_aluminum_nugget'})
  event.remove({id: 'tmechworks:aluminum_nugget_from_aluminum_ingot'})

  // Cyclic
  event.remove({output: 'cyclic:crafting_stick'})
  event.remove({output: 'cyclic:crafting_bag'})
  event.remove({output: 'cyclic:uncrafter'})
  event.remove({output: 'cyclic:emerald_helmet'})
  event.remove({output: 'cyclic:emerald_chestplate'})
  event.remove({output: 'cyclic:emerald_leggings'})
  event.remove({output: 'cyclic:emerald_boots'})
  event.remove({output: 'cyclic:emerald_sword'})
  event.remove({output: 'cyclic:emerald_pickaxe'})
  event.remove({output: 'cyclic:emerald_shovel'})
  event.remove({output: 'cyclic:emerald_axe'})
  event.remove({output: 'cyclic:emerald_hoe'})
  event.remove({output: 'cyclic:tile_transporter_empty'})
  event.remove({output: 'cyclic:battery'})

  //create
  event.remove({output: 'jaopca:create_crushed_ores.netherite_scrap', type: 'create:millstone'})


  // Badic Nether Ore
  event.remove({output: 'bno:aluminum_block'})
  event.remove({output: 'bno:copper_block'})
  event.remove({output: 'bno:lead_block'})
  event.remove({output: 'bno:nickel_block'})
  event.remove({output: 'bno:silver_block'})
  event.remove({output: 'bno:tin_block'})
  event.remove({output: 'bno:osmium_block'})
  event.remove({output: 'bno:uranium_block'})
  event.remove({output: 'bno:aluminum_nugget'})
  event.remove({output: 'bno:copper_nugget'})
  event.remove({output: 'bno:lead_nugget'})
  event.remove({output: 'bno:nickel_nugget'})
  event.remove({output: 'bno:silver_nugget'})
  event.remove({output: 'bno:tin_nugget'})
  event.remove({output: 'bno:osmium_nugget'})
  event.remove({output: 'bno:aluminum_ingot'})
  event.remove({output: 'bno:copper_ingot'})
  event.remove({output: 'bno:lead_ingot'})
  event.remove({output: 'bno:nickel_ingot'})
  event.remove({output: 'bno:silver_ingot'})
  event.remove({output: 'bno:tin_ingot'})
  event.remove({output: 'bno:osmium_ingot'})
  event.remove({output: 'bno:uranium_ingot'})

  event.remove({output: 'titanium:gold_gear'})
  event.remove({output: 'titanium:iron_gear'})
  event.remove({output: 'titanium:diamond_gear'})

  event.remove({output: 'quark:charcoal_block'})

  event.remove({output: 'vanillatweaks:charcoalblock'})

  event.remove({id: 'silentgear:iron_rod'})

  event.remove({output: 'darkutils:ender_hopper'})

  event.remove({output: 'variant16x:obsidian_pressure_plate'})
  event.remove({output: 'variant16x:glass_wall'})

  event.remove({output: 'farmersdelight:potato_crate'})
  event.remove({output: 'farmersdelight:beetroot_crate'})
  event.remove({output: 'farmersdelight:carrot_crate'})
  event.remove({output: 'tombstone:book_of_recycling'})

  event.remove({output: 'minecraft:enchanted_golden_apple'})
  event.remove({id: 'apotheosis:enchanted_golden_apple'})

  event.remove({output: 'extradisks:256k_storage_part'})
  event.remove({output: 'extradisks:1024k_storage_part'})
  event.remove({output: 'extradisks:4096k_storage_part'})
  event.remove({output: 'extradisks:16384k_storage_part'})
  event.remove({output: 'extradisks:256k_storage_disk'})
  event.remove({output: 'extradisks:1024k_storage_disk'})
  event.remove({output: 'extradisks:4096k_storage_disk'})
  event.remove({output: 'extradisks:16384k_storage_disk'})
  event.remove({output: 'extradisks:16384k_fluid_storage_part'})
  event.remove({output: 'extradisks:65536k_fluid_storage_part'})
  event.remove({output: 'extradisks:262144k_fluid_storage_part'})
  event.remove({output: 'extradisks:1048576k_fluid_storage_part'})
  event.remove({output: 'extradisks:16384k_fluid_storage_disk'})
  event.remove({output: 'extradisks:65536k_fluid_storage_disk'})
  event.remove({output: 'extradisks:262144k_fluid_storage_disk'})
  event.remove({output: 'extradisks:1048576k_fluid_storage_disk'})
  event.remove({output: 'extradisks:1048576k_fluid_storage_disk'})

  event.remove({output: 'extrastorage:block_256k'})
  event.remove({output: 'extrastorage:block_1024k'})
  event.remove({output: 'extrastorage:block_4096k'})
  event.remove({output: 'extrastorage:block_16384k'})
  event.remove({output: 'extrastorage:block_16384k_fluid'})
  event.remove({output: 'extrastorage:block_65536k_fluid'})
  event.remove({output: 'extrastorage:block_262144k_fluid'})
  event.remove({output: 'extrastorage:block_1048576k_fluid'})

  event.remove({id: 'compactmachines:wall'})

  event.remove({id: 'xreliquary:rod_of_lyssa'})

  event.remove({output: 'mob_grinding_utils:entity_spawner'})

  event.remove({output: 'thermal:earth_tnt'})
  event.remove({output: 'thermal:earth_grenade'})

  //Refined Storage
  event.remove({id: 'refinedstorage:quartz_enriched_iron'})
  event.remove({id: 'refinedstorage:external_storage'})

  event.remove({output: 'extendedcrafting:nether_star_block'})

  //silent mechanisme
  event.remove({output: 'silents_mechanisms:compressed_iron_ingot'})


});
