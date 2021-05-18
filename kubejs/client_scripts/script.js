var colors = [
    `white`,
    `light_gray`,
    `gray`,
    `black`,
    `red`,
    `orange`,
    `yellow`,
    `lime`,
    `green`,
    `light_blue`,
    `cyan`,
    `blue`,
    `purple`,
    `magenta`,
    `pink`,
    `brown`
];

var refined = [
    `controller`,
    `creative_controller`,
    `grid`,
    `crafting_grid`,
    `pattern_grid`,
    `fluid_grid`,
    `network_receiver`,
    `network_transmitter`,
    `relay`,
    `detector`,
    `security_manager`,
    `wireless_transmitter`,
    `disk_manipulator`,
    `crafter`,
    `crafter_manager`,
    `crafting_monitor`
];

onEvent(`jei.add.items`, e => {
    e.add([
        `minecraft:dragon_egg`
    ]);
});

onEvent(`jei.hide.items`, e => {
    e.hide([
        `quark:ancient_tome`,

        `@curios`,

        `appliedenergistics2:silicon`,
        `appliedenergistics2:flour`,
        /appliedenergistics2:facade/,

        `cyclic:tile_transporter_empty`,

        `naturesaura:chunk_loader`,

        /titanium:.+/,

        `mekanism:block_charcoal`,
        /mekanism:creative_chemical_tank/,
        /mekanism:creative_fluid_tank/,

        /immersiveengineering:.+coke/,
        `immersiveengineering:coke`,
        `immersiveengineering:slag`,

        `darkutils:ender_hopper`,

        /biggerreactors:yello.+/,

        /engineerstools:.+_grit/,

        `pamhc2foodcore:cheeseitem`,

        `rats:ratlantis_portal`,

        `eidolon:sulfur`,

        `mob_grinding_utils:mob_swab`,
        `mob_grinding_utils:mob_swab_used`,
        `mob_grinding_utils:gm_chicken_feed`
    ]);

    colors.forEach(color => {
        refined.forEach(refin => {
            e.hide([
                `refinedstorage:${color}_${refin}`
            ]);
        });
    });

    colors.forEach(color => {
        e.hide([
            `creativewirelesstransmitter:${color}_creative_wireless_transmitter`
        ]);
    });

onEvent(`item.tooltip`, e => {
    refined.forEach(refin => {
        e.add(`refinedstorage:${refin}`, `Right click or craft with a dye to color`);
    });
    e.add(`creativewirelesstransmitter:creative_wireless_transmitter`, [`Right click or craft with a dye to color`])
});
