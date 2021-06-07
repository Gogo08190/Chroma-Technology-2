// Stone Machine Frame
craftingTable.removeRecipe(<item:silents_mechanisms:stone_machine_frame>);

craftingTable.addShaped("stone_machine_frame", <item:silents_mechanisms:stone_machine_frame>, [
    [<item:minecraft:smooth_stone>, <item:immersiveengineering:stick_steel>, <item:minecraft:smooth_stone>],
    [<item:tconstruct:clear_glass>, <tag:items:forge:ingots/steel>, <item:tconstruct:clear_glass>],
    [<item:minecraft:smooth_stone>, <item:immersiveengineering:stick_steel>, <item:minecraft:smooth_stone>]
]);

// Alloy Machine Frame
craftingTable.removeRecipe(<item:silents_mechanisms:alloy_machine_frame>);

craftingTable.addShaped("alloy_machine_frame", <item:silents_mechanisms:alloy_machine_frame>, [
    [<item:silents_mechanisms:redstone_alloy_ingot>, <item:immersiveengineering:stick_steel>, <item:silents_mechanisms:redstone_alloy_ingot>],
    [<item:tconstruct:clear_glass>, <item:silents_mechanisms:stone_machine_frame>, <item:tconstruct:clear_glass>],
    [<item:silents_mechanisms:redstone_alloy_ingot>, <item:immersiveengineering:stick_steel>, <item:silents_mechanisms:redstone_alloy_ingot>]
]);
