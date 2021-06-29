// Item Tunnel
craftingTable.addShaped("item_tunnel", <item:compactmachines:tunnel>.withTag({definition: {id: "compactmachines:item" as string}}), [
    [<item:compactmachines:wall>, <item:compactmachines:wall>, <item:compactmachines:wall>],
    [<item:compactmachines:wall>, <tag:items:forge:chests>, <item:compactmachines:wall>],
    [<item:compactmachines:wall>, <item:compactmachines:wall>, <item:compactmachines:wall>]
]);

// Redstone Tunnel
craftingTable.addShaped("redstone_tunnel", <item:compactmachines:tunnel>.withTag({definition: {id: "compactmachines:redstone_in" as string}}), [
    [<item:compactmachines:wall>, <item:compactmachines:wall>, <item:compactmachines:wall>],
    [<item:compactmachines:wall>, <item:minecraft:redstone_block>, <item:compactmachines:wall>],
    [<item:compactmachines:wall>, <item:compactmachines:wall>, <item:compactmachines:wall>]
]);
