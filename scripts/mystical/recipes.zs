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

mods.mysticalagriculture.InfusionCrafting.addRecipe("condensed_magical_ingot", <item:kubejs:condensed_magical_ingot> * 2, [<item:upgradednetherite:corrupt_upgraded_netherite_ingot>, <item:mysticalagradditions:insanium_essence>, <item:kubejs:fallen_pet>, <item:mysticalagradditions:insanium_essence>, <item:kubejs:condensed_mana>, <item:mysticalagradditions:insanium_essence>, <item:kubejs:pure_evil>, <item:mysticalagradditions:insanium_essence>, <item:kubejs:elemental_essence>]);

// Prosperity Seed
craftingTable.removeRecipe(<item:mysticalagriculture:prosperity_seed_base>);

mods.extendedcrafting.TableCrafting.addShaped("prosperity_seed", <item:mysticalagriculture:prosperity_seed_base>, [
	[<item:mysticalagriculture:supremium_essence>, <item:mysticalagriculture:prosperity_gemstone_block>, <item:mysticalagriculture:tertium_gemstone>, <item:mysticalagriculture:prosperity_gemstone_block>, <item:mysticalagriculture:supremium_essence>],
	[<item:mysticalagriculture:prosperity_gemstone_block>, <item:bloodmagic:etherealslate>, <item:minecraft:wheat_seeds>, <item:bloodmagic:etherealslate>, <item:mysticalagriculture:prosperity_gemstone_block>],
	[<item:mysticalagriculture:tertium_gemstone>, <item:minecraft:wheat_seeds>, <item:mysticalagriculture:infusion_crystal>.withTag({Damage: 0 as int}), <item:minecraft:wheat_seeds>, <item:mysticalagriculture:tertium_gemstone>],
	[<item:mysticalagriculture:prosperity_gemstone_block>, <item:bloodmagic:etherealslate>, <item:minecraft:wheat_seeds>, <item:bloodmagic:etherealslate>, <item:mysticalagriculture:prosperity_gemstone_block>],
	[<item:mysticalagriculture:supremium_essence>, <item:mysticalagriculture:prosperity_gemstone_block>, <item:mysticalagriculture:tertium_gemstone>, <item:mysticalagriculture:prosperity_gemstone_block>, <item:mysticalagriculture:supremium_essence>]
]);
