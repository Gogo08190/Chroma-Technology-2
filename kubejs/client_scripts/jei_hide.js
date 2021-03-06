events.listen('jei.hide.items', function (event) {
  event.hide('mekanism:upgrade_anchor')
  event.hide('cyclic:uncrafter')

  // Immersive Engineering
  event.hide('immersiveengineering:ore_copper')
  event.hide('immersiveengineering:ingot_copper')
  event.hide('immersiveengineering:dust_copper')
  event.hide('immersiveengineering:nugget_copper')
  event.hide('immersiveengineering:storage_copper')
  event.hide('immersiveengineering:slab_storage_copper')
  event.hide('immersiveengineering:ore_aluminum')
  event.hide('immersiveengineering:ingot_aluminum')
  event.hide('immersiveengineering:dust_aluminum')
  event.hide('immersiveengineering:nugget_aluminum')
  event.hide('immersiveengineering:storage_aluminum')
  event.hide('immersiveengineering:slab_storage_aluminum')
  event.hide('immersiveengineering:ore_lead')
  event.hide('immersiveengineering:ingot_lead')
  event.hide('immersiveengineering:dust_lead')
  event.hide('immersiveengineering:nugget_lead')
  event.hide('immersiveengineering:storage_lead')
  event.hide('immersiveengineering:slab_storage_lead')
  event.hide('immersiveengineering:ore_silver')
  event.hide('immersiveengineering:ingot_silver')
  event.hide('immersiveengineering:dust_silver')
  event.hide('immersiveengineering:nugget_silver')
  event.hide('immersiveengineering:storage_silver')
  event.hide('immersiveengineering:slab_storage_silver')
  event.hide('immersiveengineering:ore_nickel')
  event.hide('immersiveengineering:ingot_nickel')
  event.hide('immersiveengineering:dust_nickel')
  event.hide('immersiveengineering:nugget_nickel')
  event.hide('immersiveengineering:storage_nickel')
  event.hide('immersiveengineering:slab_storage_nickel')
  event.hide('immersiveengineering:ore_uranium')
  event.hide('immersiveengineering:ingot_uranium')
  event.hide('immersiveengineering:dust_uranium')
  event.hide('immersiveengineering:nugget_uranium')
  event.hide('immersiveengineering:storage_uranium')
  event.hide('immersiveengineering:slab_storage_uranium')
  event.hide('immersiveengineering:dust_iron')
  event.hide('immersiveengineering:dust_gold')
  event.hide('immersiveengineering:dust_steel')
  event.hide('immersiveengineering:storage_steel')
  event.hide('immersiveengineering:ingot_steel')
  event.hide('immersiveengineering:nugget_steel')
  event.hide('immersiveengineering:nugget_electrum')
  event.hide('immersiveengineering:ingot_electrum')
  event.hide('immersiveengineering:storage_electrum')
  event.hide('immersiveengineering:slab_storage_electrum')
  event.hide('immersiveengineering:dust_electrum')
  event.hide('immersiveengineering:dust_constantan')
  event.hide('immersiveengineering:storage_constantan')
  event.hide('immersiveengineering:nugget_constantan')
  event.hide('immersiveengineering:ingot_constantan')
  event.hide('immersiveengineering:slab_storage_constantan')
  event.hide('tombstone:book_of_recycling')

  // Mekanism
  event.hide('mekanism:copper_ore')
  event.hide('mekanism:block_copper')
  event.hide('mekanism:ingot_copper')
  event.hide('mekanism:dust_copper')
  event.hide('mekanism:nugget_copper')
  event.hide('mekanism:tin_ore')
  event.hide('mekanism:block_tin')
  event.hide('mekanism:ingot_tin')
  event.hide('mekanism:dust_tin')
  event.hide('mekanism:nugget_tin')
  event.hide('mekanism:uranium_ore')
  event.hide('mekanism:block_uranium')
  event.hide('mekanism:ingot_uranium')
  event.hide('mekanism:dust_uranium')
  event.hide('mekanism:nugget_uranium')
  event.hide('mekanism:lead_ore')
  event.hide('mekanism:block_lead')
  event.hide('mekanism:ingot_lead')
  event.hide('mekanism:dust_lead')
  event.hide('mekanism:nugget_lead')
  event.hide('mekanism:dust_iron')
  event.hide('mekanism:dust_gold')
  event.hide('mekanism:block_steel')
  event.hide('mekanism:ingot_steel')
  event.hide('mekanism:dust_steel')
  event.hide('mekanism:nugget_steel')
  event.hide('mekanism:nugget_bronze')
  event.hide('mekanism:dust_bronze')
  event.hide('mekanism:ingot_bronze')
  event.hide('mekanism:block_bronze')

  // Ice And Fire
  event.hide('iceandfire:copper_ore')
  event.hide('iceandfire:copper_block')
  event.hide('iceandfire:copper_ingot')
  event.hide('iceandfire:copper_nugget')
  event.hide('iceandfire:silver_ore')
  event.hide('iceandfire:silver_block')
  event.hide('iceandfire:silver_ingot')
  event.hide('iceandfire:silver_nugget')
  event.hide('iceandfire:sapphire_ore')
  event.hide('iceandfire:sapphire_gem')
  event.hide('iceandfire:sapphire_block')
  event.hide('iceandfire:amythest_ore')
  event.hide('iceandfire:amythest_block')
  event.hide('iceandfire:amythest_gem')
  event.hide(Item.of('iceandfire:gorgon_head', {Damage:0}))

  // Reliquary
  event.hide('xreliquary:rod_of_lyssa')


  // Silent Gear
  event.hide('silentgear:iron_rod')

  // Silent Gems
  event.hide('silentgems:silver_ore')
  event.hide('silentgems:silver_block')
  event.hide('silentgems:silver_ingot')
  event.hide('silentgems:silver_nugget')
  event.hide('silentgems:amber')
  event.hide('silentgems:amber_ore')
  event.hide('silentgems:amber_block')
  event.hide('silentgems:moonstone')
  event.hide('silentgems:moonstone_ore')
  event.hide('silentgems:moonstone_block')

  // Basic Nether Ore
  event.hide('bno:aluminum_block')
  event.hide('bno:copper_block')
  event.hide('bno:lead_block')
  event.hide('bno:nickel_block')
  event.hide('bno:silver_block')
  event.hide('bno:tin_block')
  event.hide('bno:osmium_block')
  event.hide('bno:uranium_block')
  event.hide('bno:aluminum_ingot')
  event.hide('bno:copper_ingot')
  event.hide('bno:lead_ingot')
  event.hide('bno:nickel_ingot')
  event.hide('bno:silver_ingot')
  event.hide('bno:tin_ingot')
  event.hide('bno:osmium_ingot')
  event.hide('bno:uranium_ingot')
  event.hide('bno:aluminum_nugget')
  event.hide('bno:copper_nugget')
  event.hide('bno:lead_nugget')
  event.hide('bno:nickel_nugget')
  event.hide('bno:silver_nugget')
  event.hide('bno:tin_nugget')
  event.hide('bno:osmium_nugget')

  // Applied Energistics 2
  event.hide('appliedenergistics2:gold_dust')
  event.hide('appliedenergistics2:iron_dust')

  // Create
  event.hide('create:copper_ingot')
  event.hide('create:copper_ore')
  event.hide('create:copper_block')
  event.hide('create:copper_nugget')
  event.hide('create:zinc_ingot')
  event.hide('create:zinc_ore')
  event.hide('create:zinc_block')
  event.hide('create:zinc_nugget')
  event.hide('create:brass_block')
  event.hide('create:brass_nugget')
  event.hide('create:brass_ingot')

  //eidolon
  event.hide('eidolon:lead_ingot')
  event.hide('eidolon:lead_ore')
  event.hide('eidolon:lead_block')

  // Silent's Mechanisms
  event.hide('silents_mechanisms:copper_ingot')
  event.hide('silents_mechanisms:copper_dust')
  event.hide('silents_mechanisms:copper_nugget')
  event.hide('silents_mechanisms:copper_ore')
  event.hide('silents_mechanisms:copper_block')
  event.hide('silents_mechanisms:tin_ingot')
  event.hide('silents_mechanisms:tin_dust')
  event.hide('silents_mechanisms:tin_nugget')
  event.hide('silents_mechanisms:tin_ore')
  event.hide('silents_mechanisms:tin_block')
  event.hide('silents_mechanisms:iron_dust')
  event.hide('silents_mechanisms:silver_ingot')
  event.hide('silents_mechanisms:silver_dust')
  event.hide('silents_mechanisms:silver_nugget')
  event.hide('silents_mechanisms:silver_ore')
  event.hide('silents_mechanisms:lead_block')
  event.hide('silents_mechanisms:lead_ingot')
  event.hide('silents_mechanisms:lead_dust')
  event.hide('silents_mechanisms:lead_nugget')
  event.hide('silents_mechanisms:lead_ore')
  event.hide('silents_mechanisms:lead_block')
  event.hide('silents_mechanisms:nickel_ingot')
  event.hide('silents_mechanisms:nickel_dust')
  event.hide('silents_mechanisms:nickel_nugget')
  event.hide('silents_mechanisms:nickel_ore')
  event.hide('silents_mechanisms:nickel_block')
  event.hide('silents_mechanisms:bronze_ingot')
  event.hide('silents_mechanisms:bronze_dust')
  event.hide('silents_mechanisms:bronze_nugget')
  event.hide('silents_mechanisms:bronze_block')
  event.hide('silents_mechanisms:signalum_ingot')
  event.hide('silents_mechanisms:signalum_dust')
  event.hide('silents_mechanisms:signalum_nugget')
  event.hide('silents_mechanisms:signalum_block')
  event.hide('silents_mechanisms:lumium_ingot')
  event.hide('silents_mechanisms:lumium_dust')
  event.hide('silents_mechanisms:lumium_nugget')
  event.hide('silents_mechanisms:lumium_block')
  event.hide('silents_mechanisms:enderium_ingot')
  event.hide('silents_mechanisms:enderium_dust')
  event.hide('silents_mechanisms:enderium_nugget')
  event.hide('silents_mechanisms:enderium_block')
  event.hide('silents_mechanisms:electrum_block')
  event.hide('silents_mechanisms:electrum_ingot')
  event.hide('silents_mechanisms:electrum_nugget')
  event.hide('silents_mechanisms:electrum_dust')
  event.hide('silents_mechanisms:compressed_iron_ingot')
  event.hide('silents_mechanisms:invar_ingot')
  event.hide('silents_mechanisms:invar_dust')
  event.hide('silents_mechanisms:invar_nugget')
  event.hide('silents_mechanisms:invar_block')

  // Tinkers' Construct
  event.hide('tconstruct:copper_ingot')
  event.hide('tconstruct:copper_block')
  event.hide('tconstruct:copper_ore')
  event.hide('tconstruct:copper_nugget')
  event.hide('tconstruct:aluminum_ore')
  event.hide('tconstruct:aluminum_block')
  event.hide('tconstruct:aluminum_ingot')
  event.hide('tconstruct:aluminum_nugget')
  event.hide('tmechworks:copper_ingot')
  event.hide('tmechworks:copper_block')
  event.hide('tmechworks:copper_ore')
  event.hide('tmechworks:copper_nugget')
  event.hide('tmechworks:aluminum_ore')
  event.hide('tmechworks:aluminum_block')
  event.hide('tmechworks:aluminum_ingot')
  event.hide('tmechworks:aluminum_nugget')

  // Thermal
  event.hide('thermal:earth_tnt')
  event.hide('thermal:earth_grenade')
  event.hide('thermal:ruby_block')

  // Cyclic
  event.hide('cyclic:emerald_pickaxe')
  event.hide('cyclic:emerald_sword')
  event.hide('cyclic:emerald_hoe')
  event.hide('cyclic:emerald_axe')
  event.hide('cyclic:emerald_shovel')
  event.hide('cyclic:battery')
  event.hide('cyclic:crafting_bag')
  event.hide('cyclic:crafting_stick')

  // Extra Disk
  event.hide('extradisks:256k_storage_part')
  event.hide('extradisks:1024k_storage_part')
  event.hide('extradisks:4096k_storage_part')
  event.hide('extradisks:16384k_storage_part')
  event.hide('extradisks:256k_storage_disk')
  event.hide('extradisks:1024k_storage_disk')
  event.hide('extradisks:4096k_storage_disk')
  event.hide('extradisks:16384k_storage_disk')
  event.hide('extradisks:16384k_fluid_storage_part')
  event.hide('extradisks:65536k_fluid_storage_part')
  event.hide('extradisks:262144k_fluid_storage_part')
  event.hide('extradisks:1048576k_fluid_storage_part')
  event.hide('extradisks:16384k_fluid_storage_disk')
  event.hide('extradisks:65536k_fluid_storage_disk')
  event.hide('extradisks:262144k_fluid_storage_disk')
  event.hide('extradisks:1048576k_fluid_storage_disk')
  event.hide('extradisks:1048576k_fluid_storage_disk')

  // Extra Storage
  event.hide('extrastorage:block_256k')
  event.hide('extrastorage:block_1024k')
  event.hide('extrastorage:block_4096k')
  event.hide('extrastorage:block_16384k')
  event.hide('extrastorage:block_16384k_fluid')
  event.hide('extrastorage:block_65536k_fluid')
  event.hide('extrastorage:block_262144k_fluid')
  event.hide('extrastorage:block_1048576k_fluid')

  // KubeJS
  event.hide('kubejs:vous_verrez_en_temps_voulu')

  // Refined Storage
  event.hide('refinedstorage:external_storage')

  // Extended Crafting
  event.hide('extendedcrafting:nether_star_block')

  // Dark Utilities
  event.hide('darkutils:ender_hopper')

  // MobGrindings
  event.hide('mob_grinding_utils:entity_spawner')

  // Rats
  event.hide('rats:raw_plastic')

  // Extended Crafting
  event.hide('extendedcrafting:handheld_table')

  // Iventory Pets
  event.hide(Item.of('inventorypets:pet_cloud', {Damage:0}))
  event.hide(Item.of('inventorypets:pet_illuminati', {Damage:0,slowDelay:1625604491239}))
  event.hide(Item.of('inventorypets:pet_qcm', {Damage:0}))

  // Better End
  event.hide('betterendforge:pearlberry_seed')

  // Mekanism
  event.hide ('joapca:mekanism.ore_to_material.certus_quatrz')

  event.hide([
    /appliedenergistics2:facade/,
    /mysticalagriculture:soul_jar/,
    /ftblibrary:fluid_container/,
    /tconstruct:part_builder/,
    /tconstruct:tinker_station/,
    /tconstruct:crafting_station/
  ])
})

onEvent('jei.hide.items', event => {
  // Hide duplicate Refined Storage things that are just different colour variants. You can still see that they can be dyed by looking at the recipes / uses.
  event.hide([
    /refinedstorage:(white|orange|magenta|yellow|lime|pink|gray|light_gray|cyan|purple|blue|brown|green|red|black)_(controller|creative_controller|grid|crafting_grid|pattern_grid|fluid_grid|network_receiver|network_transmitter|relay|wireless_transmitter|disk_manipulator|crafter|crafter_manager|crafting_monitor|security_manager|detector)/
  ])
})

onEvent('jei.add.items', e => {
  e.add([
    'tconstruct:crafting_station',
    'mysticalagriculture:soul_jar',
    Item.of('appliedenergistics2:facade', '{item:"minecraft:stone"}'),
    Item.of('tconstruct:part_builder', '{texture:"minecraft:oak_planks"}'),
    Item.of('tconstruct:tinker_station', '{texture:"minecraft:oak_planks"}')
  ])
})
