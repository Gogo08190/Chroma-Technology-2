events.listen('recipes', e => {

    const compressed_singu = Item.of('extendedcrafting:singularity', {Id:"extendedcrafting:compressed_iron"})

    function pressure(inputs, result, rCount, pressure) {
        e.recipes.pneumaticcraft.pressure_chamber({
            inputs: inputs,
            pressure: pressure,
            results: [{
                item: result,
                count: rCount
            }]
        })
    }

    // Creative Compressor
    pressure([{
            'type': 'pneumaticcraft:stacked_item',
            'item': 'pneumaticcraft:electrostatic_compressor',
            'count': 16
        },
        {
            'type': 'pneumaticcraft:stacked_item',
            'item': 'pneumaticcraft:advanced_air_compressor',
            'count': 16
        },
        {
            'type': 'pneumaticcraft:stacked_item',
            'item': 'pneumaticcraft:advanced_liquid_compressor',
            'count': 16
        },
        {
            'type': 'pneumaticcraft:stacked_item',
            'item': 'pneumaticcraft:advanced_pressure_tube',
            'count': 64
        },
        {
            'type': 'pneumaticcraft:stacked_item',
            'item': 'pneumaticcraft:advanced_pcb',
            'count': 8
        },
        {
            'type': 'pneumaticcraft:stacked_item',
            'item': 'pneumaticcraft:advanced_pressure_tube',
            'count': 64
        },
        {
            'type': 'pneumaticcraft:stacked_item',
            'item': 'extendedcrafting:ultimate_singularity',
            'count': 4
        },
        {
            'type': 'pneumaticcraft:stacked_item',
            'item': 'extendedcrafting:the_ultimate_block',
            'count': 8
        },
        {
            'type': 'pneumaticcraft:stacked_item',
            'item': 'kubejs:chroma_ingot',
            'count': 10
        }
    ], 'pneumaticcraft:creative_compressor', 1, 4.9)
});
