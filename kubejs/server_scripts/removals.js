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
<<<<<<< HEAD
=======

            'mekanism:block_charcoal',

            'titanium:iron_gear',
            'titanium:gold_gear',
            'titanium:diamond_gear',
            'darkutils:ender_hopper',
>>>>>>> 14e411eecdfad1c74029431bbe3664dca87ec2bd
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
