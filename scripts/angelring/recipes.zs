// Angel Ring
craftingTable.removeRecipe(<item:angelring:itemring>);

mods.extendedcrafting.TableCrafting.addShaped("angelring", <item:angelring:itemring>, [
	[<item:simplyjetpacks:thruster_ie3>, <item:angelring:itemdiamondring>, <item:xreliquary:phoenix_down>, <item:angelring:itemdiamondring>, <item:simplyjetpacks:thruster_ie3>],
	[<item:iceandfire:pixie_wings>, <item:bloodmagic:airsigil>, <item:mekanism:jetpack_armored>, <item:bloodmagic:airsigil>, <item:iceandfire:cyclops_eye>],
	[<item:xreliquary:angelic_feather>, <item:powah:nitro_crystal_block>, <item:botania:flight_tiara>, <item:powah:nitro_crystal_block>, <item:xreliquary:angelic_feather>],
	[<item:iceandfire:siren_tear>, <item:powersuits:jetpack>, <item:enigmaticlegacy:fabulous_scroll>, <item:powersuits:jetpack>, <item:iceandfire:hippogryph_talon>],
	[<item:simplyjetpacks:thruster_mek4>, <item:cyclic:antigravity>, <item:xreliquary:rending_gale>, <item:cyclic:antigravity>, <item:simplyjetpacks:thruster_mek4>]
]);

// Diamond Ring
craftingTable.removeRecipe(<item:angelring:itemdiamondring>);

craftingTable.addShaped("diamondring", <item:angelring:itemdiamondring>, [
    [<item:botania:mana_diamond>, <item:powah:niotic_crystal_block>, <item:botania:mana_diamond>],
    [<item:powah:niotic_crystal_block>, <item:minecraft:elytra>, <item:powah:niotic_crystal_block>],
    [<item:botania:mana_diamond>, <item:powah:niotic_crystal_block>, <item:botania:mana_diamond>]
]);
