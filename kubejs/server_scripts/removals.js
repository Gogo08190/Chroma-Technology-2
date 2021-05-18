//priority: 999
events.listen('recipes', e => {
    var idRemove = [
        'silentgear:iron_rod',
    ];

    idRemove.forEach(iR => {
        e.remove({
            id: iR
        });
    });

    //Recipe removals
    e.remove({
        output: [
            'appliedenergistics2:silicon',

            'mekanism:upgrade_anchor',

            'xreliquary:alkahestry_tome',

            'naturesaura:chunk_loader',

            'cyclic:uncrafter',
            'cyclic:tile_transporter_empty',

            'quark:apple_crate',
            'quark:potato_crate',
            'quark:carrot_crate',
            'quark:beetroot_crate',
            'quark:charcoal_block',
            'quark:gunpowder_sack',

            'mekanism:block_charcoal',

            'titanium:iron_gear',
            'titanium:gold_gear',
            'titanium:diamond_gear',
        ]
    });


    //Remove via mod name
    e.remove({
        input: [
            'appliedenergistics2:flour'
        ]
    });
    e.remove({
        type: 'xreliquary:alkahestry_charging'
    });
    e.remove({
        id: 'appliedenergistics2:grinder/flour'
    })
});
