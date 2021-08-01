onEvent('recipes', event => {

  // Power armor Tinker Table
  event.remove({ output: 'powersuits:tinkertable' })
  event.shaped('powersuits:tinkertable', [
    'SES',
    'LIL',
    'PEP'
    ], {
      P: 'powah:crystal_blazing',
      E: 'thermal:enderium_plate',
      L: 'thermal:lapis_gear',
      I: 'immersiveengineering:craftingtable',
      S: 'powah:steel_energized'
    })

  // Jetpack
  event.remove({ output: 'powersuits:jetpack' })
  event.shaped('powersuits:jetpack', [
    'RBR',
    'JIV',
    'PSP'
    ], {
      P: 'rftoolspower:power_core2',
      S: 'thermal:redstone_servo',
      J: 'simplyjetpacks:jetpack_mek1',
      I: 'minecraft:iron_block',
      V: 'simplyjetpacks:jetpack_ie1',
      R: 'minecraft:redstone_block',
      B: 'minecraft:stone_button'
    })

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
        G: '#forge:glass',
        B: 'minecraft:water_bucket'
    })

    // Active Camouflage
    event.shaped('powersuits:invisibility', [
        'CFC',
        'HSH',
        'HFH'
    ], {
        S: 'numina:component_solenoid',
        H: 'numina:component_laser_emitter',
        F: 'numina:component_field_emitter',
        C: 'numina:component_control_circuit'
    })

    // Magnet
    event.shaped('powersuits:magnet', [
        ' I ',
        'WSW',
        'MCM'
    ], {
        I: 'numina:component_rubber_hose',
        S: 'numina:component_servo',
        W: 'numina:component_wiring',
        M: 'numina:component_magnet',
        C: 'numina:component_control_circuit'
    })

    // Flight Control
    event.shaped('powersuits:flight_control', [
        ' F ',
        'FSF',
        'MCM'
    ], {
        F: 'minecraft:feather',
        S: 'numina:component_solenoid',
        M: 'numina:component_servo',
        C: 'numina:component_control_circuit'
    })

    // Dimensional Tear Generator
    event.shaped('powersuits:dim_rift_gen', [
        'ILI',
        'TRT',
        'ILI'
    ], {
        I: 'minecraft:iron_ingot',
        L: 'minecraft:lapis_lazuli',
        T: 'numina:component_ion_thruster',
        R: 'numina:component_rubber_hose'
    })

    // Uphill Step Assist
    event.shaped('powersuits:climb_assist', [
        'III',
        'WWW',
        'SCS'
    ], {
        I: 'minecraft:iron_ingot',
        W: 'numina:component_wiring',
        S: 'numina:component_servo',
        C: 'numina:component_control_circuit'
    })

    // Blink Drive
    event.shaped('powersuits:blink_drive', [
        ' E ',
        'SCS',
        'FIF'
    ], {
        E: 'minecraft:ender_pearl',
        S: 'numina:component_servo',
        C: 'numina:component_control_circuit',
        F: 'numina:component_field_emitter',
        I: 'numina:component_ion_thruster'
    })

    // Fortune Enchantment
    event.shaped('powersuits:fortune', [
        'ISI',
        'TET',
        'ISI'
    ], {
        I: 'minecraft:iron_ingot',
        S: 'numina:component_servo',
        E: 'minecraft:emerald',
        T: 'numina:component_ion_thruster'
    })

    // Aqua Affinity
    event.shaped('powersuits:aqua_affinity', [
        'ISI',
        'TWT',
        'ISI'
    ], {
        I: 'minecraft:iron_ingot',
        S: 'numina:component_servo',
        W: 'minecraft:water_bucket',
        T: 'numina:component_ion_thruster'
    })

    // Silk Touch
    event.shaped('powersuits:silk_touch', [
        'ISI',
        'TBT',
        'ISI'
    ], {
        I: 'minecraft:iron_ingot',
        S: 'numina:component_servo',
        B: 'minecraft:slime_ball',
        T: 'numina:component_ion_thruster'
    })

    // Sprint Assist
    event.shaped('powersuits:sprint_assist', [
        'ISI',
        'SFS',
        'ISI'
    ], {
        I: 'minecraft:iron_ingot',
        S: 'numina:component_servo',
        F: 'numina:component_field_emitter'
    })

    // Shock Absorber
    event.shaped('powersuits:shock_absorber', [
        'I I',
        'SIS',
        'WCW'
    ], {
        I: 'numina:component_rubber_hose',
        S: 'numina:component_servo',
        W: '#forge:wool',
        C: 'numina:component_computer_chip'
    })

    // Parachute
    event.shaped('powersuits:parachute', [
        'MPM',
        'SIS',
        ' S '
    ], {
        P: 'numina:component_parachute',
        M: 'numina:component_servo',
        I: 'numina:component_ion_thruster',
        S: 'minecraft:string'
    })

    // Jump Assist
    event.shaped('powersuits:jump_assist', [
        'ISI',
        'STS',
        'ISI'
    ], {
        I: 'minecraft:iron_ingot',
        S: 'numina:component_servo',
        T: 'numina:component_ion_thruster'
    })

    // Jet Boots
    event.shaped('powersuits:jet_boots', [
        'I I',
        'SIS',
        'TCT'
    ], {
        I: 'numina:component_rubber_hose',
        S: 'numina:component_servo',
        T: 'numina:component_ion_thruster',
        C: 'numina:component_computer_chip'
    })

    // Fluid tank
    event.shaped('item:powersuits:fluid_tank', [
        'GWG',
        'GBG',
        'GWG'
    ], {
        W: 'numina:component_wiring',
        G: 'minecraft:glass_pane',
        B: 'minecraft:water_bucket'
    })

    // Water Electrolyzer
    event.shaped('powersuits:water_electrolyzer', [
        'CRC',
        'IEI',
        'CRC'
    ], {
        C: 'numina:component_control_circuit',
        R: 'silents_mechanisms:redstone_alloy_ingot',
        I: 'minecraft:iron_ingot',
        E: 'mekanism:electrolytic_core'
    })
});
