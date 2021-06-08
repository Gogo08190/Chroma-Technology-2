onEvent('recipes', event => {

    // Energy Cell
    event.remove({ output: 'appliedenergistics2:energy_cell' })

    event.shaped('appliedenergistics2:energy_cell', [
        'PHP',
        'DAD',
        'PHP'
    ], {
        D: 'powah:dielectric_rod',
        A: 'mekanism:alloy_atomic',
        P: 'appliedenergistics2:purified_certus_quartz_crystal',
        H: 'powah:dielectric_rod_horizontal'
    })




});
/*onEvent('recipes', event => {

    // Engineering Processor
>>>>>>> 39bf5e4f94645bddb612acbcccad18f0e3852fac
    event.remove({ output: 'appliedenergistics2:engineering_processor' })

    event.custom(
        {
            "type": "appliedenergistics2:inscriber",
            "mode": "press",
            "result": {
                "item": "appliedenergistics2:engineering_processor"
            },
            "ingredients": {
                "top": {
                    "item": "appliedenergistics2:printed_engineering_processor"
                },
                "middle": {
                    "tag": "refinedstorage:construction_core"
                },
                "bottom": {
                    "item": "appliedenergistics2:printed_silicon"
                }
            }
        }
    )


    // Logic Processor

    event.remove({ output: 'appliedenergistics2:logic_processor' })

    event.custom(
        {
            "type": "appliedenergistics2:inscriber",
            "mode": "press",
            "result": {
                "item": "appliedenergistics2:logic_processor"
            },
            "ingredients": {
                "top": {
                    "item": "appliedenergistics2:printed_logic_processor"
                },
                "middle": {
                    "tag": "refinedstorage:destruction_core"
                },
                "bottom": {
                    "item": "appliedenergistics2:printed_silicon"
                }
            }
        }
    )


    // Calculation Processor

    event.remove({ output: 'appliedenergistics2:calculation_processor' })
    
    event.custom(
        {
            "type": "appliedenergistics2:inscriber",
            "mode": "press",
            "result": {
                "item": "appliedenergistics2:calculation_processor"
            },
            "ingredients": {
                "top": {
                    "item": "appliedenergistics2:printed_calculation_processor"
                },
                "middle": {
                    "tag": "refinedstorage:construction_core"
                },
                "bottom": {
                    "item": "appliedenergistics2:printed_silicon"
                }
            }
        }
    )

})*/
