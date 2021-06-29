onEvent('recipes', event => {

    // Auto-feeder

    event.shaped('powersuits:auto_feeder', [
        ' C ',
        'GSG',
        'WSW'
    ], {
        G: '#forge:glass',
        W: 'numina:component_wiring',
        S: 'numina:component_servo',
        C: 'numina:component_control_circuit'
    })

    // Cooling System

    event.shaped('powersuits:cooling_system', [
        'BBB',
        'ICI',
        'S S'
    ], {
        B: 'minecraft:ice',
        I: 'numina:component_rubber_hose',
        S: 'numina:component_servo',
        C: 'numina:component_control_circuit'
    })


    // Mob Repulsor

    event.shaped('powersuits:mob_repulsor', [
        ' B ',
        'SMS',
        'RCG'
    ], {
        B: 'minecraft:bone',
        M: 'numina:component_magnet',
        S: 'numina:component_solenoid',
        R: 'minecraft:rotten_flesh',
        C: 'numina:component_control_circuit',
        G: 'minecraft:gunpowder'
    })


    // Glider

    event.shaped('powersuits:glider', [
        ' T ',
        'GCG',
        'SRS'
    ], {
        T: 'minecraft:redstone_torch',
        G: 'numina:component_glider_wing',
        C: 'numina:component_computer_chip',
        S: 'numina:component_solenoid',
        R: 'minecraft:redstone'

    })

    // Swim Boost

    event.shaped('powersuits:swim_assist', [
        ' W ',
        'GBG',
        'SIS'
    ], {
        S: 'numina:component_solenoid',
        I: 'numina:component_ion_thruster',
        W: 'numina:component_wiring',
        G: 'minecraft:glass',
        B: 'minecraft:water_bucket'

    })

});
