onEvent('recipes', event => {

  // Dust Unification
  var dusts = [
    "dust_copper",
    "dust_tin",
    "dust_silver",
    "dust_nickel",
    "dust_lead",
    "dust_gold",

    "copper_dust",
    "tin_dust",
    "lead_dust",
    "silver_dust",
    "nickel_dust",
    "gold_dust",
    "iron_dust",
  ]

  dusts.forEach(function (item, index) {
    event.replaceOutput({}, "immersiveengineering:" + item, "thermal:" + item)
    event.replaceOutput({}, "mekanism:" + item, "thermal:" + item)
    event.replaceOutput({}, "silents_mechanisms:" + item, "thermal:" + item)
    event.replaceOutput({}, "pedestals:" + item, "thermal:" + item)
  })

  // Copper Unification
  var copper = [
    "ingot_copper",
    "block_copper",
    "nugget_copper",
    "storage_copper",
    "copper_ingot",
    "copper_block",
    "copper_nugget",
  ]

  copper.forEach(function (item, index) {
    event.replaceOutput({}, "immersiveengineering:" + item, "thermal:" + item)
    event.replaceOutput({}, "mekanism:" + item, "thermal:" + item)
    event.replaceOutput({}, "iceandfire:" + item, "thermal:" + item)
    event.replaceOutput({}, "bno:" + item, "thermal:" + item)
    event.replaceOutput({}, "silents_mechanisms:" + item, "thermal:" + item)
    event.replaceOutput({}, "tmechworks:" + item, "thermal:" + item)
    event.replaceOutput({}, "create:" + item, "thermal:" + item)
    event.replaceOutput({}, "tconstruct:" + item, "thermal:" + item)
  })

  // Tin Unification
  var tin = [
    "ingot_tin",
    "block_tin",
    "storage_tin",
    "tin_ingot",
    "tin_block",
  ]

  tin.forEach(function (item, index) {
    event.replaceOutput({}, "immersiveengineering:" + item, "thermal:" + item)
    event.replaceOutput({}, "mekanism:" + item, "thermal:" + item)
    event.replaceOutput({}, "bno:" + item, "thermal:" + item)
    event.replaceOutput({}, "silents_mechanisms:" + item, "thermal:" + item)
  })

  // Tin Nugget Unification
  var tinnugget = [
    "nugget_tin",
    "tin_nugget",
  ]

  tinnugget.forEach(function (item, index) {
    event.replaceOutput({}, "mekanism:" + item, "thermal:" + item)
    event.replaceOutput({}, "bno:" + item, "thermal:" + item)
    event.replaceOutput({}, "silents_mechanisms:" + item, "thermal:" + item)
  })

  // Lead Unification
  var lead = [
    "ingot_lead",
    "block_lead",
    "nugget_lead",
    "storage_lead",
    "lead_ingot",
    "lead_block",
    "lead_nugget",
  ]

  lead.forEach(function (item, index) {
    event.replaceOutput({}, "immersiveengineering:" + item, "thermal:" + item)
    event.replaceOutput({}, "mekanism:" + item, "thermal:" + item)
    event.replaceOutput({}, "bno:" + item, "thermal:" + item)
    event.replaceOutput({}, "silents_mechanisms:" + item, "thermal:" + item)
    event.replaceOutput({}, "eidolon:" + item, "thermal:" + item)
  })

  // Silver Unification
  var silver = [
    "ingot_silver",
    "block_silver",
    "nugget_silver",
    "storage_silver",
    "silver_ingot",
    "silver_block",
    "silver_nugget",
  ]

  silver.forEach(function (item, index) {
    event.replaceOutput({}, "immersiveengineering:" + item, "thermal:" + item)
    event.replaceOutput({}, "iceandfire:" + item, "thermal:" + item)
    event.replaceOutput({}, "bno:" + item, "thermal:" + item)
    event.replaceOutput({}, "silentgems:" + item, "thermal:" + item)
    event.replaceOutput({}, "silents_mechanisms:" + item, "thermal:" + item)
  })

  // Nickel Unification
  var nickel = [
    "ingot_nickel",
    "block_nickel",
    "nugget_nickel",
    "storage_nickel",
    "nickel_ingot",
    "nickel_block",
    "nickel_nugget",
  ]

  nickel.forEach(function (item, index) {
    event.replaceOutput({}, "immersiveengineering:" + item, "thermal:" + item)
    event.replaceOutput({}, "bno:" + item, "thermal:" + item)
    event.replaceOutput({}, "silents_mechanisms:" + item, "thermal:" + item)
  })

  // Uranium Unification
  var uranium = [
    "ingot_uranium",
    "block_uranium",
    "nugget_uranium",
    "storage_uranium",
    "uranium_ingot",
    "uranium_block",
    "uranium_nugget",
  ]

  uranium.forEach(function (item, index) {
    event.replaceOutput({}, "immersiveengineering:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "mekanism:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "bno:" + item, "silents_mechanisms:" + item)
  })

  // Aluminum Unification
  var aluminum = [
    "ingot_aluminum",
    "block_aluminum",
    "nugget_aluminum",
    "storage_aluminum",
    "dust_aluminum",
    "dustaluminum",
    "aluminum_dust",
    "aluminum_ingot",
    "aluminum_block",
    "aluminum_nugget",
  ]

  aluminum.forEach(function (item, index) {
    event.replaceOutput({}, "immersiveengineering:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "bno:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "tmechworks:" + item, "silents_mechanisms:" + item)
  })

  // Steel Unification
  var steel = [
    "ingot_steel",
    "steel_ingot",
    "nugget_steel",
    "steel_nugget",
    "storage_steel",
    "block_steel",
    "steel_block",
  ]

  steel.forEach(function (item, index) {
    event.replaceOutput({}, "immersiveengineering:" + item, "silents_mechanisms:" + item)
    event.replaceOutput({}, "mekanism:" + item, "silents_mechanisms:" + item)
  })

  // Osmium Unification
  var osmium = [
    "osmium_ingot",
    "ingot_osmium",
    "osmium_nugget",
    "nugget_osmium",
    "osmium_block",
    "block_osmium",
  ]

  osmium.forEach(function (item, index) {
    event.replaceOutput({}, "bno:" + item, "mekanism:" + item)
  })

  // Bronze Unification
  var bronze = [
    "bronze_ingot",
    "ingot_bronze",
    "bronze_nugget",
    "nugget_bronze",
    "bronze_block",
    "block_bronze",
    "dust_bronze",
    "bronze_dust",
  ]

  bronze.forEach(function (item, index) {
    event.replaceOutput({}, "silents_mechanisms:" + item, "thermal:" + item)
    event.replaceOutput({}, "immersiveengineering:" + item, "thermal:" + item)
  })

  // Brass Unification
  var brass = [
    "brass_ingot",
    "brass_nugget",
    "brass_block",
  ]

  brass.forEach(function (item, index) {
    event.replaceOutput({}, "create:" + item, "silents_mechanisms:" + item)
  })

  // Electrum Unification
  var electrum = [
    "electrum_ingot",
    "ingot_electrum",
    "electrum_nugget",
    "nugget_electrum",
    "electrum_block",
    "block_electrum",
    "dust_electrum",
    "electrum_dust",
  ]

  electrum.forEach(function (item, index) {
    event.replaceOutput({}, "silents_mechanisms:" + item, "thermal:" + item)
    event.replaceOutput({}, "immersiveengineering:" + item, "thermal:" + item)
  })

  // Invar Unification
  var invar = [
    "invar_ingot",
    "ingot_invar",
    "invar_nugget",
    "nugget_invar",
    "invar_block",
    "block_invar",
    "dust_invar",
    "invar_dust",
  ]

  invar.forEach(function (item, index) {
    event.replaceOutput({}, "silents_mechanisms:" + item, "thermal:" + item)
    event.replaceOutput({}, "immersiveengineering:" + item, "thermal:" + item)
  })

  // Constantan Unification
  var constantan = [
    "constantan_ingot",
    "ingot_constantan",
    "constantan_nugget",
    "nugget_constantan",
    "constantan_block",
    "block_constantan",
    "dust_constantan",
    "constantan_dust",
  ]

  constantan.forEach(function (item, index) {
    event.replaceOutput({}, "silents_mechanisms:" + item, "thermal:" + item)
    event.replaceOutput({}, "immersiveengineering:" + item, "thermal:" + item)
  })

  // Lumium Unification
  var lumium = [
    "lumium_ingot",
    "ingot_lumium",
    "lumium_nugget",
    "nugget_lumium",
    "lumium_block",
    "block_lumium",
    "dust_lumium",
    "lumium_dust",
  ]

  lumium.forEach(function (item, index) {
    event.replaceOutput({}, "silents_mechanisms:" + item, "thermal:" + item)
    event.replaceOutput({}, "immersiveengineering:" + item, "thermal:" + item)
  })

  // Enderium Unification
  var enderium = [
    "enderium_ingot",
    "ingot_enderium",
    "enderium_nugget",
    "nugget_enderium",
    "enderium_block",
    "block_enderium",
    "dust_enderium",
    "enderium_dust",
  ]

  enderium.forEach(function (item, index) {
    event.replaceOutput({}, "silents_mechanisms:" + item, "thermal:" + item)
    event.replaceOutput({}, "immersiveengineering:" + item, "thermal:" + item)
  })

  // Signalum Unification
  var signalum = [
    "signalum_ingot",
    "ingot_signalum",
    "signalum_nugget",
    "nugget_signalum",
    "signalum_block",
    "block_signalum",
    "dust_signalum",
    "signalum_dust",
  ]

  signalum.forEach(function (item, index) {
    event.replaceOutput({}, "silents_mechanisms:" + item, "thermal:" + item)
    event.replaceOutput({}, "immersiveengineering:" + item, "thermal:" + item)
  })

  // Zinc Unification
  var zinc = [
    "zinc_ingot",
    "ingot_zinc",
    "zinc_nugget",
    "nugget_zinc",
    "zinc_block",
    "block_zinc",
  ]

  zinc.forEach(function (item, index) {
    event.replaceOutput({}, "create:" + item, "silents_mechanisms:" + item)
  })
});
