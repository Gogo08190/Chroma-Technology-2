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
	[<item:mysticalagriculture:tertium_gemstone>, <item:minecraft:wheat_seeds>, <tag:items:mysticalagriculture:infusion_crystals>, <item:minecraft:wheat_seeds>, <item:mysticalagriculture:tertium_gemstone>],
	[<item:mysticalagriculture:prosperity_gemstone_block>, <item:bloodmagic:etherealslate>, <item:minecraft:wheat_seeds>, <item:bloodmagic:etherealslate>, <item:mysticalagriculture:prosperity_gemstone_block>],
	[<item:mysticalagriculture:supremium_essence>, <item:mysticalagriculture:prosperity_gemstone_block>, <item:mysticalagriculture:tertium_gemstone>, <item:mysticalagriculture:prosperity_gemstone_block>, <item:mysticalagriculture:supremium_essence>]
]);

// Dragon Egg Seed
mods.mysticalagriculture.InfusionCrafting.remove(<item:mysticalagriculture:dragon_egg_seeds>);

mods.extendedcrafting.TableCrafting.addShaped("dragon_egg_seeds",<item:mysticalagriculture:dragon_egg_seeds>, [
	[<item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:dragon_scale>, <item:mysticalagradditions:dragon_scale>, <item:mysticalagradditions:dragon_scale>, <item:mysticalagradditions:dragon_scale>, <item:mysticalagradditions:dragon_scale>, <item:mysticalagradditions:dragon_scale>, <item:mysticalagradditions:dragon_scale>, <item:mysticalagradditions:insanium_essence>],
	[<item:mysticalagradditions:dragon_scale>, <item:mysticalagradditions:insanium_essence>, <item:minecraft:dragon_egg>, <item:minecraft:dragon_egg>, <item:minecraft:dragon_egg>, <item:minecraft:dragon_egg>, <item:minecraft:dragon_egg>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:dragon_scale>],
	[<item:mysticalagradditions:dragon_scale>, <item:minecraft:dragon_egg>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_ingot>, <item:mysticalagradditions:insanium_ingot>, <item:mysticalagradditions:insanium_ingot>, <item:mysticalagradditions:insanium_essence>, <item:minecraft:dragon_egg>, <item:mysticalagradditions:dragon_scale>],
	[<item:mysticalagradditions:dragon_scale>, <item:minecraft:dragon_egg>, <item:mysticalagradditions:insanium_ingot>, <item:mysticalagradditions:insanium_essence>, <item:iceandfire:dragonsteel_fire_ingot>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_ingot>, <item:minecraft:dragon_egg>, <item:mysticalagradditions:dragon_scale>],
	[<item:mysticalagradditions:dragon_scale>, <item:minecraft:dragon_egg>, <item:mysticalagradditions:insanium_ingot>, <item:iceandfire:dragonsteel_fire_ingot>, <item:mysticalagriculture:prosperity_seed_base>, <item:iceandfire:dragonsteel_fire_ingot>, <item:mysticalagradditions:insanium_ingot>, <item:minecraft:dragon_egg>, <item:mysticalagradditions:dragon_scale>],
	[<item:mysticalagradditions:dragon_scale>, <item:minecraft:dragon_egg>, <item:mysticalagradditions:insanium_ingot>, <item:mysticalagradditions:insanium_essence>, <item:iceandfire:dragonsteel_fire_ingot>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_ingot>, <item:minecraft:dragon_egg>, <item:mysticalagradditions:dragon_scale>],
	[<item:mysticalagradditions:dragon_scale>, <item:minecraft:dragon_egg>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_ingot>, <item:mysticalagradditions:insanium_ingot>, <item:mysticalagradditions:insanium_ingot>, <item:mysticalagradditions:insanium_essence>, <item:minecraft:dragon_egg>, <item:mysticalagradditions:dragon_scale>],
	[<item:mysticalagradditions:dragon_scale>, <item:mysticalagradditions:insanium_essence>, <item:minecraft:dragon_egg>, <item:minecraft:dragon_egg>, <item:minecraft:dragon_egg>, <item:minecraft:dragon_egg>, <item:minecraft:dragon_egg>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:dragon_scale>],
	[<item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:dragon_scale>, <item:mysticalagradditions:dragon_scale>, <item:mysticalagradditions:dragon_scale>, <item:mysticalagradditions:dragon_scale>, <item:mysticalagradditions:dragon_scale>, <item:mysticalagradditions:dragon_scale>, <item:mysticalagradditions:dragon_scale>, <item:mysticalagradditions:insanium_essence>]
]);

// Dragon Egg Crux
craftingTable.removeRecipe(<item:mysticalagradditions:dragon_egg_crux>);

mods.extendedcrafting.TableCrafting.addShaped("dragon_egg_crux",<item:mysticalagradditions:dragon_egg_crux>, [
	[<item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_essence>],
	[<item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:dragon_scale>, <item:minecraft:dragon_egg>, <item:mysticalagradditions:dragon_scale>, <item:minecraft:dragon_egg>, <item:mysticalagradditions:dragon_scale>, <item:mysticalagradditions:insanium_essence>],
	[<item:mysticalagradditions:insanium_essence>, <item:minecraft:dragon_egg>, <item:mysticalagradditions:withering_soul>, <item:mysticalagradditions:creative_essence>, <item:mysticalagradditions:withering_soul>, <item:minecraft:dragon_egg>, <item:mysticalagradditions:insanium_essence>],
	[<item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:dragon_scale>, <item:mysticalagradditions:creative_essence>, <item:botania:mana_diamond_block>, <item:mysticalagradditions:creative_essence>, <item:mysticalagradditions:dragon_scale>, <item:mysticalagradditions:insanium_essence>],
	[<item:mysticalagradditions:insanium_essence>, <item:minecraft:dragon_egg>, <item:mysticalagradditions:withering_soul>, <item:mysticalagradditions:creative_essence>, <item:mysticalagradditions:withering_soul>, <item:minecraft:dragon_egg>, <item:mysticalagradditions:insanium_essence>],
	[<item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:dragon_scale>, <item:minecraft:dragon_egg>, <item:mysticalagradditions:dragon_scale>, <item:minecraft:dragon_egg>, <item:mysticalagradditions:dragon_scale>, <item:mysticalagradditions:insanium_essence>],
	[<item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_essence>]
]);

// Nether Star Seed
mods.mysticalagriculture.InfusionCrafting.remove(<item:mysticalagriculture:nether_star_seeds>);

mods.extendedcrafting.TableCrafting.addShaped("nether_star_seeds",<item:mysticalagriculture:nether_star_seeds>, [
	[<item:mysticalagradditions:insanium_essence>, <item:mysticalagriculture:supremium_ingot>, <item:mysticalagriculture:supremium_ingot>, <item:mysticalagriculture:supremium_ingot>, <item:mysticalagriculture:supremium_ingot>, <item:mysticalagriculture:supremium_ingot>, <item:mysticalagriculture:supremium_ingot>, <item:mysticalagriculture:supremium_ingot>, <item:mysticalagradditions:insanium_essence>],
	[<item:mysticalagriculture:supremium_ingot>, <item:mysticalagradditions:insanium_essence>, <item:overloaded:nether_star_block>, <item:overloaded:nether_star_block>, <item:overloaded:nether_star_block>, <item:overloaded:nether_star_block>, <item:overloaded:nether_star_block>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagriculture:supremium_ingot>],
	[<item:mysticalagriculture:supremium_ingot>, <item:overloaded:nether_star_block>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_ingot>, <item:mysticalagradditions:insanium_ingot>, <item:mysticalagradditions:insanium_ingot>, <item:mysticalagradditions:insanium_essence>, <item:overloaded:nether_star_block>, <item:mysticalagriculture:supremium_ingot>],
	[<item:mysticalagriculture:supremium_ingot>, <item:overloaded:nether_star_block>, <item:mysticalagradditions:insanium_ingot>, <item:mysticalagradditions:insanium_essence>, <item:cagedmobs:star_infused_netherite_ingot>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_ingot>, <item:overloaded:nether_star_block>, <item:mysticalagriculture:supremium_ingot>],
	[<item:mysticalagriculture:supremium_ingot>, <item:overloaded:nether_star_block>, <item:mysticalagradditions:insanium_ingot>, <item:cagedmobs:star_infused_netherite_ingot>, <item:mysticalagriculture:prosperity_seed_base>, <item:cagedmobs:star_infused_netherite_ingot>, <item:mysticalagradditions:insanium_ingot>, <item:overloaded:nether_star_block>, <item:mysticalagriculture:supremium_ingot>],
	[<item:mysticalagriculture:supremium_ingot>, <item:overloaded:nether_star_block>, <item:mysticalagradditions:insanium_ingot>, <item:mysticalagradditions:insanium_essence>, <item:cagedmobs:star_infused_netherite_ingot>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_ingot>, <item:overloaded:nether_star_block>, <item:mysticalagriculture:supremium_ingot>],
	[<item:mysticalagriculture:supremium_ingot>, <item:overloaded:nether_star_block>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_ingot>, <item:mysticalagradditions:insanium_ingot>, <item:mysticalagradditions:insanium_ingot>, <item:mysticalagradditions:insanium_essence>, <item:overloaded:nether_star_block>, <item:mysticalagriculture:supremium_ingot>],
	[<item:mysticalagriculture:supremium_ingot>, <item:mysticalagradditions:insanium_essence>, <item:overloaded:nether_star_block>, <item:overloaded:nether_star_block>, <item:overloaded:nether_star_block>, <item:overloaded:nether_star_block>, <item:overloaded:nether_star_block>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagriculture:supremium_ingot>],
	[<item:mysticalagradditions:insanium_essence>, <item:mysticalagriculture:supremium_ingot>, <item:mysticalagriculture:supremium_ingot>, <item:mysticalagriculture:supremium_ingot>, <item:mysticalagriculture:supremium_ingot>, <item:mysticalagriculture:supremium_ingot>, <item:mysticalagriculture:supremium_ingot>, <item:mysticalagriculture:supremium_ingot>, <item:mysticalagradditions:insanium_essence>]
]);

// Nether Star Crux
craftingTable.removeRecipe(<item:mysticalagradditions:nether_star_crux>);

mods.extendedcrafting.TableCrafting.addShaped("nether_star_crux",<item:mysticalagradditions:nether_star_crux>, [
	[<item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_essence>],
	[<item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:withering_soul>, <item:overloaded:nether_star_block>, <item:mysticalagradditions:withering_soul>, <item:overloaded:nether_star_block>, <item:mysticalagradditions:withering_soul>, <item:mysticalagradditions:insanium_essence>],
	[<item:mysticalagradditions:insanium_essence>, <item:overloaded:nether_star_block>, <item:minecraft:nether_star>, <item:mysticalagradditions:creative_essence>, <item:minecraft:nether_star>, <item:overloaded:nether_star_block>, <item:mysticalagradditions:insanium_essence>],
	[<item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:withering_soul>, <item:mysticalagradditions:creative_essence>, <item:botania:mana_diamond_block>, <item:mysticalagradditions:creative_essence>, <item:mysticalagradditions:withering_soul>, <item:mysticalagradditions:insanium_essence>],
	[<item:mysticalagradditions:insanium_essence>, <item:overloaded:nether_star_block>, <item:minecraft:nether_star>, <item:mysticalagradditions:creative_essence>, <item:minecraft:nether_star>, <item:overloaded:nether_star_block>, <item:mysticalagradditions:insanium_essence>],
	[<item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:withering_soul>, <item:overloaded:nether_star_block>, <item:mysticalagradditions:withering_soul>, <item:overloaded:nether_star_block>, <item:mysticalagradditions:withering_soul>, <item:mysticalagradditions:insanium_essence>],
	[<item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_essence>]
]);

// Nitro Crystal Seed
mods.mysticalagriculture.InfusionCrafting.remove(<item:mysticalagriculture:nitro_crystal_seeds>);

mods.extendedcrafting.TableCrafting.addShaped("nitro_crystal_seeds",<item:mysticalagriculture:nitro_crystal_seeds>, [
	[<item:mysticalagradditions:insanium_essence>, <item:mysticalagriculture:supremium_ingot>, <item:mysticalagriculture:supremium_ingot>, <item:mysticalagriculture:supremium_ingot>, <item:mysticalagriculture:supremium_ingot>, <item:mysticalagriculture:supremium_ingot>, <item:mysticalagriculture:supremium_ingot>, <item:mysticalagriculture:supremium_ingot>, <item:mysticalagradditions:insanium_essence>],
	[<item:mysticalagriculture:supremium_ingot>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_ingot>, <item:powah:nitro_crystal_block>, <item:mysticalagradditions:creative_essence>, <item:powah:nitro_crystal_block>, <item:mysticalagradditions:insanium_ingot>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagriculture:supremium_ingot>],
	[<item:mysticalagriculture:supremium_ingot>, <item:mysticalagradditions:insanium_ingot>, <item:mysticalagradditions:insanium_essence>, <item:powah:nitro_crystal_block>, <item:mysticalagradditions:insanium_gemstone>, <item:powah:nitro_crystal_block>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_ingot>, <item:mysticalagriculture:supremium_ingot>],
	[<item:mysticalagriculture:supremium_ingot>, <item:powah:nitro_crystal_block>, <item:powah:nitro_crystal_block>, <item:mysticalagradditions:insanium_essence>, <item:powah:capacitor_nitro>, <item:mysticalagradditions:insanium_essence>, <item:powah:nitro_crystal_block>, <item:powah:nitro_crystal_block>, <item:mysticalagriculture:supremium_ingot>],
	[<item:mysticalagriculture:supremium_ingot>, <item:mysticalagradditions:creative_essence>, <item:mysticalagradditions:insanium_gemstone>, <item:powah:capacitor_nitro>, <item:mysticalagriculture:prosperity_seed_base>, <item:powah:capacitor_nitro>, <item:mysticalagradditions:insanium_gemstone>, <item:mysticalagradditions:creative_essence>, <item:mysticalagriculture:supremium_ingot>],
	[<item:mysticalagriculture:supremium_ingot>, <item:powah:nitro_crystal_block>, <item:powah:nitro_crystal_block>, <item:mysticalagradditions:insanium_essence>, <item:powah:capacitor_nitro>, <item:mysticalagradditions:insanium_essence>, <item:powah:nitro_crystal_block>, <item:powah:nitro_crystal_block>, <item:mysticalagriculture:supremium_ingot>],
	[<item:mysticalagriculture:supremium_ingot>, <item:mysticalagradditions:insanium_ingot>, <item:mysticalagradditions:insanium_essence>, <item:powah:nitro_crystal_block>, <item:mysticalagradditions:insanium_gemstone>, <item:powah:nitro_crystal_block>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_ingot>, <item:mysticalagriculture:supremium_ingot>],
	[<item:mysticalagriculture:supremium_ingot>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_ingot>, <item:powah:nitro_crystal_block>, <item:mysticalagradditions:creative_essence>, <item:powah:nitro_crystal_block>, <item:mysticalagradditions:insanium_ingot>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagriculture:supremium_ingot>],
	[<item:mysticalagradditions:insanium_essence>, <item:mysticalagriculture:supremium_ingot>, <item:mysticalagriculture:supremium_ingot>, <item:mysticalagriculture:supremium_ingot>, <item:mysticalagriculture:supremium_ingot>, <item:mysticalagriculture:supremium_ingot>, <item:mysticalagriculture:supremium_ingot>, <item:mysticalagriculture:supremium_ingot>, <item:mysticalagradditions:insanium_essence>]
]);

// Nitro Crystal Crux
craftingTable.removeRecipe(<item:mysticalagradditions:nitro_crystal_crux>);

mods.extendedcrafting.TableCrafting.addShaped("nitro_crystal_crux",<item:mysticalagradditions:nitro_crystal_crux>, [
	[<item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_essence>],
	[<item:mysticalagradditions:insanium_essence>, <item:powah:nitro_crystal_block>, <item:powah:nitro_crystal_block>, <item:powah:nitro_crystal_block>, <item:powah:nitro_crystal_block>, <item:powah:nitro_crystal_block>, <item:mysticalagradditions:insanium_essence>],
	[<item:mysticalagradditions:insanium_essence>, <item:powah:nitro_crystal_block>, <item:powah:crystal_nitro>, <item:powah:capacitor_nitro>, <item:powah:crystal_nitro>, <item:powah:nitro_crystal_block>, <item:mysticalagradditions:insanium_essence>],
	[<item:mysticalagradditions:insanium_essence>, <item:powah:nitro_crystal_block>, <item:powah:capacitor_nitro>, <item:botania:mana_diamond_block>, <item:powah:capacitor_nitro>, <item:powah:nitro_crystal_block>, <item:mysticalagradditions:insanium_essence>],
	[<item:mysticalagradditions:insanium_essence>, <item:powah:nitro_crystal_block>, <item:powah:crystal_nitro>, <item:powah:capacitor_nitro>, <item:powah:crystal_nitro>, <item:powah:nitro_crystal_block>, <item:mysticalagradditions:insanium_essence>],
	[<item:mysticalagradditions:insanium_essence>, <item:powah:nitro_crystal_block>, <item:powah:nitro_crystal_block>, <item:powah:nitro_crystal_block>, <item:powah:nitro_crystal_block>, <item:powah:nitro_crystal_block>, <item:mysticalagradditions:insanium_essence>],
	[<item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_essence>, <item:mysticalagradditions:insanium_essence>]
]);
