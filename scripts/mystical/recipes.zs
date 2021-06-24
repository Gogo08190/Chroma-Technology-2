// Master Infusion Crystal
craftingTable.removeRecipe(<item:mysticalagriculture:master_infusion_crystal>);

mods.extendedcrafting.TableCrafting.addShaped("master_infusion_crystal", <item:mysticalagriculture:master_infusion_crystal>, [
	[<item:mysticalagriculture:supremium_essence>, <item:mysticalagriculture:supremium_essence>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagriculture:supremium_essence>, <item:mysticalagriculture:supremium_essence>],
	[<item:mysticalagriculture:supremium_essence>, <item:mysticalagriculture:prosperity_block>, <item:mysticalagriculture:supremium_gemstone>, <item:mysticalagriculture:prosperity_block>, <item:mysticalagriculture:supremium_essence>],
	[<item:mysticalagradditions:insanium_essence>, <item:mysticalagriculture:supremium_gemstone>, <item:mysticalagriculture:infusion_crystal>, <item:mysticalagriculture:supremium_gemstone>, <item:mysticalagradditions:insanium_essence>],
	[<item:mysticalagriculture:supremium_essence>, <item:mysticalagriculture:prosperity_block>, <item:mysticalagriculture:supremium_gemstone>, <item:mysticalagriculture:prosperity_block>, <item:mysticalagriculture:supremium_essence>],
	[<item:mysticalagriculture:supremium_essence>, <item:mysticalagriculture:supremium_essence>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagriculture:supremium_essence>, <item:mysticalagriculture:supremium_essence>]
]);

mods.mysticalagriculture.InfusionCrafting.addRecipe("chroma_ingot", <item:kubejs:chroma_ingot> * 2, [<item:kubejs:unassembled_chroma_ingot>, <item:kubejs:assembled_technical_ingot>, <item:appliedenergistics2:singularity>, <item:kubejs:condensed_magical_ingot>, <item:iceandfire:dragonsteel_lightning_ingot>, <item:kubejs:assembled_technical_ingot>, <item:iceandfire:dragonsteel_ice_ingot>, <item:kubejs:condensed_magical_ingot>, <item:iceandfire:dragonsteel_fire_ingot>]);
