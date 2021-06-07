// Centrifuge
craftingTable.removeRecipe(<item:productivebees:centrifuge>);

craftingTable.addShaped("centrifuge", <item:productivebees:centrifuge>, [
    [<tag:items:forge:ingots/steel>, <item:minecraft:air>, <tag:items:forge:ingots/steel>],
    [<tag:items:forge:ingots/steel>, <item:minecraft:grindstone>, <tag:items:forge:ingots/steel>],
    [<tag:items:forge:ingots/steel>, <tag:items:forge:ingots/steel>, <tag:items:forge:ingots/steel>]
]);


// Powered Centrifuge
craftingTable.removeRecipe(<item:productivebees:powered_centrifuge>);

craftingTable.addShaped("powered_centrifuge", <item:productivebees:powered_centrifuge>, [
    [<item:silents_mechanisms:redstone_alloy_ingot>, <item:thermal:rf_coil>, <item:silents_mechanisms:redstone_alloy_ingot>],
    [<tag:items:forge:ingots/steel>, <item:productivebees:centrifuge>, <tag:items:forge:ingots/steel>],
    [<item:silents_mechanisms:redstone_alloy_ingot>, <item:silents_mechanisms:alloy_machine_frame>, <item:silents_mechanisms:redstone_alloy_ingot>]
]);


// Upgrade Base
craftingTable.removeRecipe(<item:productivebees:upgrade_base>);

craftingTable.addShaped("upgrade_base", <item:productivebees:upgrade_base>, [
    [<item:pneumaticcraft:printed_circuit_board>, <item:minecraft:emerald_block>, <item:pneumaticcraft:printed_circuit_board>],
    [<item:minecraft:emerald_block>, <item:minecraft:honeycomb_block>, <item:minecraft:emerald_block>],
    [<item:mekanism:alloy_infused>, <item:minecraft:diamond_block>, <item:mekanism:alloy_infused>]
]);


// Nest Locator
craftingTable.removeRecipe(<item:productivebees:nest_locator>);

craftingTable.addShaped("nest_locator", <item:productivebees:nest_locator>, [
    [<item:minecraft:iron_bars>, <item:minecraft:redstone_block>, <item:minecraft:iron_bars>],
    [<item:minecraft:iron_bars>, <item:naturescompass:naturescompass>, <item:minecraft:iron_bars>],
    [<item:minecraft:iron_bars>, <item:minecraft:note_block>, <item:minecraft:iron_bars>]
]);
