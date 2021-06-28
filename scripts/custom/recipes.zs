// Item Tunnel
craftingTable.addShaped("item_tunnel", <item:compactmachines:tunnel>.withTag({definition: {id: "compactmachines:item" as string}}), [
    [<item:compactmachines:solid_wall>, <item:compactmachines:solid_wall>, <item:compactmachines:solid_wall>],
    [<item:compactmachines:solid_wall>, <tag:items:forge:chests>, <item:compactmachines:solid_wall>],
    [<item:compactmachines:solid_wall>, <item:compactmachines:solid_wall>, <item:compactmachines:solid_wall>]
]);

// Redstone Tunnel
craftingTable.addShaped("redstone_tunnel", <item:compactmachines:tunnel>.withTag({definition: {id: "compactmachines:redstone_in" as string}}), [
    [<item:compactmachines:solid_wall>, <item:compactmachines:solid_wall>, <item:compactmachines:solid_wall>],
    [<item:compactmachines:solid_wall>, <item:minecraft:redstone_block>, <item:compactmachines:solid_wall>],
    [<item:compactmachines:solid_wall>, <item:compactmachines:solid_wall>, <item:compactmachines:solid_wall>]
]);
