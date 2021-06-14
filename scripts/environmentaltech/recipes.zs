// Solar CCU
craftingTable.removeRecipe(<item:enviroenergy:litherite_solar_ccu>);

mods.extendedcrafting.TableCrafting.addShaped("solar_ccu", <item:enviroenergy:litherite_solar_ccu>, [
	[<item:envirocore:litherite>, <item:envirocore:litherite>, <item:enviroenergy:litherite_solar_cell>, <item:envirocore:litherite>, <item:envirocore:litherite>],
	[<item:envirocore:litherite>, <item:mekanismgenerators:advanced_solar_generator>, <item:enviroenergy:litherite_solar_cell>, <item:mekanismgenerators:advanced_solar_generator>, <item:envirocore:litherite>],
	[<item:enviroenergy:litherite_solar_cell>, <item:enviroenergy:litherite_solar_cell>, <item:envirocore:structure_panel>, <item:enviroenergy:litherite_solar_cell>, <item:enviroenergy:litherite_solar_cell>],
	[<item:envirocore:litherite>, <item:mekanismgenerators:advanced_solar_generator>, <item:enviroenergy:litherite_solar_cell>, <item:mekanismgenerators:advanced_solar_generator>, <item:envirocore:litherite>],
	[<item:envirocore:litherite>, <item:envirocore:litherite>, <item:enviroenergy:litherite_solar_cell>, <item:envirocore:litherite>, <item:envirocore:litherite>]
]);

// Void Miner CCU
craftingTable.removeRecipe(<item:envirotech:litherite_void_miner_ccu>);

mods.extendedcrafting.TableCrafting.addShaped("void_miner_ccu", <item:envirotech:litherite_void_miner_ccu>, [
	[<item:envirocore:litherite>, <item:powah:niotic_crystal_block>, <item:powah:niotic_crystal_block>, <item:powah:niotic_crystal_block>, <item:envirocore:litherite>],
	[<item:envirocore:litherite>, <item:mekanism:digital_miner>, <item:powah:niotic_crystal_block>, <item:mekanism:digital_miner>, <item:envirocore:litherite>],
	[<item:envirocore:litherite>, <item:industrialforegoing:laser_drill>, <item:envirocore:laser_diode>, <item:industrialforegoing:laser_drill>, <item:envirocore:litherite>],
	[<item:pneumaticcraft:transistor>, <item:pneumaticcraft:capacitor>, <item:industrialforegoing:ore_laser_base>, <item:pneumaticcraft:capacitor>, <item:pneumaticcraft:transistor>],
	[<item:envirocore:structure_panel>, <item:envirocore:structure_panel>, <item:envirocore:laser_core>, <item:envirocore:structure_panel>, <item:envirocore:structure_panel>]
]);
