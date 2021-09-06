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

    // ME Drive
    event.remove({ output: 'appliedenergistics2:drive' })
    event.shaped('appliedenergistics2:drive', [
        'QPQ',
        'CDC',
        'QPQ'
    ], {
        D: 'refinedstorage:disk_drive',
        Q: 'refinedstorage:quartz_enriched_iron',
        P: 'appliedenergistics2:engineering_processor',
        C: 'appliedenergistics2:fluix_glass_cable'
    })

  // Infinity Booster Card
  // event.remove({output: 'ae2wtlib:infinity_booster_card'})
  // event.shaped(Item.of('ae2wtlib:infinity_booster_card'), [
  //   'SWS',
  //   'FNF',
  //   'SWS'
  // ], {
  //     W: 'appliedenergistics2:wireless_receiver',
  //     F: 'appliedenergistics2:fluix_pearl',
  //     N: 'minecraft:nether_star',
  //     S: '#forge:ingots/steel'
  // })

});
