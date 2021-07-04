events.listen('recipes', event => {

  // Unassembled Chroma Ingot
  event.recipes.thermal.smelter(Item.of('kubejs:unassembled_chroma_ingot', 8), ['silentgear:blueprint_paper', 'lazierae2:spec_core_64', 'botania:terrasteel_ingot']).energy(10000)

  event.recipes.thermal.smelter(Item.of('kubejs:unassembled_chroma_ingot', 4), ['silentgear:blueprint_paper', 'lazierae2:spec_core_32', 'botania:terrasteel_ingot']).energy(7000)

  event.recipes.thermal.smelter('kubejs:unassembled_chroma_ingot', ['silentgear:blueprint_paper', 'lazierae2:spec_core_16', 'botania:terrasteel_ingot']).energy(5000)

  // Time In A Bottle
  event.remove({ output: 'tiab:timeinabottle' })
  event.shaped('tiab:timeinabottle', [
  'GHG',
  'DCD',
  'LBL'
  ], {
    G: '#forge:ingots/gold',
    D: 'tombstone:impregnated_diamond',
    C: 'create:cuckoo_clock',
    L: 'create:lapis_sheet',
    B: 'minecraft:glass_bottle',
    H: 'supplementaries:hourglass'
  })

  // Dense Technical Ingot
  event.custom(
    {
        "input": [
            {
                "item": "mekanism:ingot_refined_obsidian"
            },
            {
                "item": "mekanism:pellet_polonium"
            },
            {
                "item": "mekanism:ingot_refined_obsidian"
            },
            {
                "item": "powah:nitro_crystal_block"
            },
            {
                "item": "powah:nitro_crystal_block"
            },
            {
                "item": "mekanism:ingot_refined_obsidian"
            },
            {
                "item": "mekanism:pellet_polonium"
            },
            {
                "item": "mekanism:ingot_refined_obsidian"
            }
        ],
        "inputFluid": "{FluidName:\"industrialforegoing:ether_gas\",Amount:1000}",
        "processingTime": 320,
        "output": {
            "item": "kubejs:assembled_technical_ingot",
            "count": 1
        },
        "type": "industrialforegoing:dissolution_chamber"
    }
  )

  event.custom(
    {
        "type": "botania:runic_altar",
        "output": {
            "item": "kubejs:condensed_mana"
        },
        "mana": 20000,
        "ingredients": [
            {
                "item": "botania:rune_mana"
            },
            {
                "item": "botania:terrasteel_ingot"
            },
            {
                "item": "botania:gaia_ingot"
            },
            {
                "item": "botania:elementium_ingot"
            },
    		    {
                "item": "botania:manasteel_ingot"
            },
            {
                "item": "mythicbotany:asgard_rune"
            },
            {
                "item": "botania:blacker_lotus"
            },
            {
                "item": "botania:lens_influence"
            },
            {
                "item": "botania:pixie_dust"
            },
            {
                "item": "botania:dragonstone"
            },
            {
                "item": "botanicalmachinery:mana_emerald"
            },
            {
                "item": "botania:mana_pearl"
            },
            {
                "item": "botania:mana_powder"
            },
            {
                "item": "botania:mana_diamond"
            },
            {
                "item": "botania:quartz_mana"
            },
            {
                "item": "botania:manaweave_cloth"
            }
        ]
    }
  )
});
