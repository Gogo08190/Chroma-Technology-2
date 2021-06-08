// Blanck Upgrade
craftingTable.removeRecipe(<item:solarflux:blank_upgrade>);

craftingTable.addShaped("blanck_upgrade", <item:solarflux:blank_upgrade>, [
    [<item:minecraft:paper>, <item:minecraft:paper>, <item:minecraft:paper>],
    [<item:minecraft:white_dye>, <item:solarflux:mirror>, <item:minecraft:white_dye>],
    [<item:minecraft:paper>, <item:minecraft:paper>, <item:minecraft:paper>]
]);

// Mirror
craftingTable.removeRecipe(<item:solarflux:mirror>);

craftingTable.addShaped("mirror", <item:solarflux:mirror>*3, [
    [<item:minecraft:glass_pane>, <item:minecraft:glass_pane>, <item:minecraft:glass_pane>],
    [<item:immersiveengineering:stick_steel>, <item:immersiveengineering:stick_steel>, <item:immersiveengineering:stick_steel>],
    [<item:minecraft:redstone>, <item:refinedstorage:quartz_enriched_iron>, <item:minecraft:redstone>]
]);

// Cell I
craftingTable.removeRecipe(<item:solarflux:photovoltaic_cell_1>);

craftingTable.addShaped("photovoltaic_cell_1", <item:solarflux:photovoltaic_cell_1>, [
    [<item:thermal:obsidian_glass>, <item:thermal:obsidian_glass>, <item:thermal:obsidian_glass>],
    [<item:minecraft:lapis_block>, <item:minecraft:lapis_block>, <item:minecraft:lapis_block>],
    [<item:solarflux:mirror>, <item:solarflux:mirror>, <item:solarflux:mirror>]
]);

// Cell II
craftingTable.removeRecipe(<item:solarflux:photovoltaic_cell_2>);

craftingTable.addShaped("photovoltaic_cell_2", <item:solarflux:photovoltaic_cell_2>, [
    [<item:minecraft:clay>, <item:minecraft:lapis_block>, <item:minecraft:clay>],
    [<item:minecraft:lapis_block>, <item:minecraft:clay>, <item:minecraft:lapis_block>],
    [<item:solarflux:mirror>, <item:solarflux:photovoltaic_cell_1>, <item:solarflux:mirror>]
]);

// Cell III
craftingTable.removeRecipe(<item:solarflux:photovoltaic_cell_3>);

craftingTable.addShaped("photovoltaic_cell_3", <item:solarflux:photovoltaic_cell_3>, [
    [<item:thermal:obsidian_glass>, <item:thermal:obsidian_glass>, <item:thermal:obsidian_glass>],
    [<item:minecraft:obsidian>, <item:minecraft:glowstone>, <item:minecraft:obsidian>],
    [<item:solarflux:photovoltaic_cell_2>, <item:solarflux:photovoltaic_cell_2>, <item:solarflux:photovoltaic_cell_2>]
]);

// Cell IV
craftingTable.removeRecipe(<item:solarflux:photovoltaic_cell_4>);

craftingTable.addShaped("photovoltaic_cell_4", <item:solarflux:photovoltaic_cell_4>, [
    [<item:powah:crystal_blazing>, <item:powah:crystal_blazing>, <item:powah:crystal_blazing>],
    [<item:minecraft:glowstone>, <item:rftoolsbase:infused_diamond>, <item:minecraft:glowstone>],
    [<item:refinedstorage:quartz_enriched_iron_block>, <item:solarflux:photovoltaic_cell_3>, <item:refinedstorage:quartz_enriched_iron_block>]
]);

// Cell V
craftingTable.removeRecipe(<item:solarflux:photovoltaic_cell_5>);

craftingTable.addShaped("photovoltaic_cell_5", <item:solarflux:photovoltaic_cell_5>, [
    [<item:powah:capacitor_blazing>, <item:powah:capacitor_blazing>, <item:powah:capacitor_blazing>],
    [<item:minecraft:glowstone>, <item:botania:mana_diamond_block>, <item:minecraft:glowstone>],
    [<item:refinedstorage:quartz_enriched_iron_block>, <item:solarflux:photovoltaic_cell_4>, <item:refinedstorage:quartz_enriched_iron_block>]
]);

// Cell VI
craftingTable.removeRecipe(<item:solarflux:photovoltaic_cell_6>);

craftingTable.addShaped("photovoltaic_cell_6", <item:solarflux:photovoltaic_cell_6>, [
    [<item:powah:crystal_spirited>, <item:powah:crystal_spirited>, <item:powah:crystal_spirited>],
    [<item:minecraft:glowstone>, <item:powah:niotic_crystal_block>, <item:minecraft:glowstone>],
    [<item:refinedstorage:quartz_enriched_iron_block>, <item:solarflux:photovoltaic_cell_5>, <item:refinedstorage:quartz_enriched_iron_block>]
]);

// Solar I
craftingTable.removeRecipe(<item:solarflux:sp_1>);

craftingTable.addShaped("sp_1", <item:solarflux:sp_1>, [
    [<item:solarflux:mirror>, <item:solarflux:mirror>, <item:solarflux:mirror>],
    [<item:immersiveengineering:treated_wood_horizontal>, <item:minecraft:redstone_block>, <item:immersiveengineering:treated_wood_horizontal>],
    [<item:immersiveengineering:treated_wood_horizontal>, <item:immersiveengineering:treated_wood_horizontal>, <item:immersiveengineering:treated_wood_horizontal>]
]);

// Solar II
craftingTable.removeRecipe(<item:solarflux:sp_2>);

craftingTable.addShaped("sp_2", <item:solarflux:sp_2>, [
    [<item:solarflux:sp_1>, <item:solarflux:sp_1>, <item:solarflux:sp_1>],
    [<item:solarflux:sp_1>, <item:create:mechanical_piston>, <item:solarflux:sp_1>],
    [<item:solarflux:sp_1>, <item:solarflux:sp_1>, <item:solarflux:sp_1>]
]);

// Solar III
craftingTable.removeRecipe(<item:solarflux:sp_3>);

craftingTable.addShaped("sp_3", <item:solarflux:sp_3>*2, [
    [<item:solarflux:photovoltaic_cell_1>, <item:solarflux:photovoltaic_cell_1>, <item:solarflux:photovoltaic_cell_1>],
    [<item:solarflux:sp_2>, <item:create:adjustable_pulse_repeater>, <item:solarflux:sp_2>],
    [<item:solarflux:sp_2>, <item:refinedstorage:quartz_enriched_iron_block>, <item:solarflux:sp_2>]
]);

// Solar IV
craftingTable.removeRecipe(<item:solarflux:sp_4>);

craftingTable.addShaped("sp_4", <item:solarflux:sp_4>*2, [
    [<item:solarflux:photovoltaic_cell_2>, <item:solarflux:photovoltaic_cell_2>, <item:solarflux:photovoltaic_cell_2>],
    [<item:solarflux:sp_3>, <item:botania:cosmetic_clock_eye>, <item:solarflux:sp_3>],
    [<item:solarflux:sp_3>, <item:silents_mechanisms:steel_block>, <item:solarflux:sp_3>]
]);

// Solar V
craftingTable.removeRecipe(<item:solarflux:sp_5>);

craftingTable.addShaped("sp_5", <item:solarflux:sp_5>*2, [
    [<item:solarflux:photovoltaic_cell_3>, <item:solarflux:photovoltaic_cell_3>, <item:solarflux:photovoltaic_cell_3>],
    [<item:solarflux:sp_4>, <item:minecraft:glowstone>, <item:solarflux:sp_4>],
    [<item:solarflux:sp_4>, <item:botania:mana_diamond_block>, <item:solarflux:sp_4>]
]);

// Solar VI
craftingTable.removeRecipe(<item:solarflux:sp_6>);

craftingTable.addShaped("sp_6", <item:solarflux:sp_6>*2, [
    [<item:solarflux:photovoltaic_cell_4>, <item:solarflux:photovoltaic_cell_4>, <item:solarflux:photovoltaic_cell_4>],
    [<item:solarflux:sp_5>, <item:quark:lit_lamp>, <item:solarflux:sp_5>],
    [<item:solarflux:sp_5>, <item:powah:niotic_crystal_block>, <item:solarflux:sp_5>]
]);

// Solar VII
craftingTable.removeRecipe(<item:solarflux:sp_7>);

craftingTable.addShaped("sp_7", <item:solarflux:sp_7>*2, [
    [<item:solarflux:photovoltaic_cell_5>, <item:solarflux:photovoltaic_cell_5>, <item:solarflux:photovoltaic_cell_5>],
    [<item:solarflux:sp_6>, <item:enigmaticlegacy:mending_mixture>, <item:solarflux:sp_6>],
    [<item:solarflux:sp_6>, <item:enigmaticlegacy:mending_mixture>, <item:solarflux:sp_6>]
]);

// Solar VIII
craftingTable.removeRecipe(<item:solarflux:sp_8>);

craftingTable.addShaped("sp_8", <item:solarflux:sp_8>*2, [
    [<item:solarflux:photovoltaic_cell_6>, <item:solarflux:photovoltaic_cell_6>, <item:solarflux:photovoltaic_cell_6>],
    [<item:solarflux:sp_7>, <item:botania:dragonstone>, <item:solarflux:sp_7>],
    [<item:solarflux:sp_7>, <item:botania:dragonstone>, <item:solarflux:sp_7>]
]);
