// Digital Miner
craftingTable.removeRecipe(<item:mekanism:digital_miner>);

mods.extendedcrafting.TableCrafting.addShaped("digital_miner", <item:mekanism:digital_miner>, [
	[<item:mekanism:ultimate_control_circuit>, <item:mekanism:basic_control_circuit>, <item:mekanism:basic_control_circuit>, <item:mekanism:basic_control_circuit>, <item:mekanism:ultimate_control_circuit>],
	[<item:mekanism:ultimate_control_circuit>, <item:mekanism:teleportation_core>, <item:mekanism:steel_casing>, <item:mekanism:teleportation_core>, <item:mekanism:ultimate_control_circuit>],
	[<item:mekanism:logistical_sorter>, <item:mekanism:robit>, <item:mekanism:steel_casing>, <item:mekanism:robit>, <item:mekanism:logistical_sorter>],
	[<item:mekanism:ultimate_control_circuit>, <item:mekanism:teleportation_core>, <item:mekanism:alloy_atomic>, <item:mekanism:teleportation_core>, <item:mekanism:ultimate_control_circuit>],
	[<item:mekanism:steel_casing>, <item:mekanism:alloy_atomic>, <item:mekanism:ultimate_induction_cell>, <item:mekanism:alloy_atomic>, <item:mekanism:steel_casing>]
]);

// Enrichement Chamber
mods.mekanism.enrichment.removeRecipe(IIngredient inputStack, @Optional IIngredient outputStack);
mods.mekanism.enrichment.removeRecipe(<appliedenergistics2:quartz_ore>);
mods.mekanism.enrichment.removeRecipe(<joapca:mekanism.ore_to_material.certus_quartz:4>);