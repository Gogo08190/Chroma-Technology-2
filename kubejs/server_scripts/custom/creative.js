events.listen('recipes', e => {

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

    // Creative Motor
    e.recipes.create.mechanical_crafting('create:creative_motor', [
          '  AAAAAA ',
          ' ABBBBBBA',
          ' ACCCDFBA',
          'AEEEGDFBA',
          ' ACCCDFBA',
          ' ABBBBBBA',
          '  AAAAAA '
      ], {
          A: 'create:shadow_steel',
          B: 'extendedcrafting:the_ultimate_ingot',
          C: 'kubejs:assembled_technical_ingot',
          D: 'kubejs:chroma_ingot',
          E: 'create:shaft',
          F: 'extendedcrafting:ultimate_singularity',
          G: 'createaddition:electric_motor'
      })
});
