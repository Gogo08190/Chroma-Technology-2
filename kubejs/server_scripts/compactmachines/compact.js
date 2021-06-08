events.listen('recipes', event => {

event.custom({type: 'compactcrafting:miniaturization',recipeSize: 1,layers:[{type: 'compactcrafting:filled', component: 'R'},{type: 'compactcrafting:filled', component: 'I'}],
catalyst: {"id": 'botania:mana_powder', Count: 1},
components:
{"R": {type: 'compactcrafting:block', block: 'minecraft:redstone_block'},
"I": {type: 'compactcrafting:block', block: 'botania:manasteel_block'}},
outputs: [{id: 'compactmachines:wall',Count: 16}]})

event.custom({
    "type": "compactcrafting:miniaturization",
    "recipeSize": 5,
    "layers": [
      {
        "type": "compactcrafting:filled",
        "component": "W"
      },
      {
        "type": "compactcrafting:filled",
        "component": "W"
      },
      {
        "type": "compactcrafting:filled",
        "component": "W"
      },
      {
        "type": "compactcrafting:filled",
        "component": "W"
      },
      {
        "type": "compactcrafting:filled",
        "component": "W"
      }
    ],

    "catalyst": {
      "id": "minecraft:ender_pearl",
      "Count": 1
    },

    "components": {
      "W": {
        "type": "compactcrafting:block",
        "block": "compactmachines:wall"
      }
    },

    "outputs": [
      {
        "id": "compactmachines:machine_large",
        "Count": 1
      }
    ]

  })



event.custom(
  {
    "type": "compactcrafting:miniaturization",
    "recipeSize": 3,
    "layers": [
      {
        "type": "compactcrafting:filled",
        "component": "W"
      },
      {
        "type": "compactcrafting:mixed",
        "pattern": [
          ["W", "W", "W"],
          ["W", "I", "W"],
          ["W", "W", "W"]
        ]
      },
      {
        "type": "compactcrafting:filled",
        "component": "W"
      }
    ],

    "catalyst": {
      "id": "minecraft:ender_pearl",
      "Count": 1
    },

    "components": {
      "W": {
        "type": "compactcrafting:block",
        "block": "compactmachines:wall"
      },
      "I": {
        "type": "compactcrafting:block",
        "block": "minecraft:iron_block"
      }
    },

    "outputs": [
      {
        "id": "compactmachines:machine_small",
        "Count": 1
      }
    ]
  }

)
event.custom(

  {
    "type": "compactcrafting:miniaturization",
    "recipeSize": 3,
    "layers": [
      {
        "type": "compactcrafting:filled",
        "component": "W"
      },
      {
        "type": "compactcrafting:filled",
        "component": "W"
      },
      {
        "type": "compactcrafting:filled",
        "component": "W"
      }
    ],

    "catalyst": {
      "id": "minecraft:ender_pearl",
      "Count": 1
    },

    "components": {
      "W": {
        "type": "compactcrafting:block",
        "block": "compactmachines:wall"
      }
    },

    "outputs": [
      {
        "id": "compactmachines:machine_tiny",
        "Count": 1
      }
    ]
  }
)

event.custom({
  "type": "compactcrafting:miniaturization",
  "recipeSize": 3,
  "layers": [
    {
      "type": "compactcrafting:filled",
      "component": "W"
    },
    {
      "type": "compactcrafting:mixed",
      "pattern": [
        ["W", "W", "W"],
        ["W", "G", "W"],
        ["W", "W", "W"]
      ]
    },
    {
      "type": "compactcrafting:filled",
      "component": "W"
    }
  ],

  "catalyst": {
    "id": "minecraft:ender_pearl",
    "Count": 1
  },

  "components": {
    "W": {
      "type": "compactcrafting:block",
      "block": "compactmachines:wall"
    },
    "G": {
      "type": "compactcrafting:block",
      "block": "minecraft:gold_block"
    }
  },

  "outputs": [
    {
      "id": "compactmachines:machine_normal",
      "Count": 1
    }
  ]
})

event.custom(
  {
    "type": "compactcrafting:miniaturization",
    "recipeSize": 5,
    "layers":[
      {
        "type": "compactcrafting:mixed",
        "pattern": [
          ["S", "S", "S", "S", "S"],
          ["S", "S", "S", "S", "S"],
          ["S", "S", "S", "S", "S"],
          ["S", "S", "S", "S", "S"],
          ["S", "S", "S", "S", "S"]
        ]
      },
      {"type": "compactcrafting:mixed",
      "pattern":
      [
        ["S", "S", "S", "S", "S"],
        ["S", "S", "S", "S", "S"],
        ["S", "S", "S", "S", "S"],
        ["S", "S", "S", "S", "S"],
        ["S", "S", "S", "S", "S"]
      ]
    },
    {"type": "compactcrafting:mixed",
    "pattern":
    [
      ["S", "S", "S", "S", "S"],
      ["S", "S", "S", "S", "S"],
      ["S", "S", "D", "S", "S"],
      ["S", "S", "S", "S", "S"],
      ["S", "S", "S", "S", "S"]
    ]
  },
  {"type": "compactcrafting:mixed",
  "pattern":
  [
    ["S", "S", "S", "S", "S"],
    ["S", "S", "S", "S", "S"],
    ["S", "S", "S", "S", "S"],
    ["S", "S", "S", "S", "S"],
    ["S", "S", "S", "S", "S"]
  ]
},
  {"type": "compactcrafting:mixed",
  "pattern": [
    ["S", "S", "S", "S", "S"],
    ["S", "S", "S", "S", "S"],
    ["S", "S", "S", "S", "S"],
    ["S", "S", "S", "S", "S"],
    ["S", "S", "S", "S", "S"]
  ]
}],
"catalyst": {"id": 'minecraft:ender_pearl',"Count": 1},
"components": {"S": {"type": "compactcrafting:block","block": 'compactmachines:wall'}, "D": {"type": "compactcrafting:block","block": 'minecraft:diamond_block'}},
"outputs": [{"id": 'compactmachines:machine_giant',"Count": 1}]})

event.custom(
  {
    "type": "compactcrafting:miniaturization",
    "recipeSize": 5,
    "layers":[
      {"type": "compactcrafting:mixed",
      "pattern": [
        ["S", "S", "S", "S", "S"],
        ["S", "S", "S", "S", "S"],
        ["S", "S", "S", "S", "S"],
        ["S", "S", "S", "S", "S"],
        ["S", "S", "S", "S", "S"]
      ]},
      {
        "type": "compactcrafting:mixed",
        "pattern": [
          ["S", "S", "S", "S", "S"],
          ["S", "S", "S", "S", "S"],
          ["S", "S", "S", "S", "S"],
          ["S", "S", "S", "S", "S"],
          ["S", "S", "S", "S", "S"]
        ]},
        {"type": "compactcrafting:mixed",
        "pattern": [
          ["S", "S", "S", "S", "S"],
          ["S", "S", "S", "S", "S"],
          ["S", "S", "D", "S", "S"],
          ["S", "S", "S", "S", "S"],
          ["S", "S", "S", "S", "S"]
        ]},
        {
          "type": "compactcrafting:mixed",
          "pattern": [
            ["S", "S", "S", "S", "S"],
            ["S", "S", "S", "S", "S"],
            ["S", "S", "S", "S", "S"],
            ["S", "S", "S", "S", "S"],
            ["S", "S", "S", "S", "S"]
          ]},
          {"type": "compactcrafting:mixed",
          "pattern": [
            ["S", "S", "S", "S", "S"],
            ["S", "S", "S", "S", "S"],
            ["S", "S", "S", "S", "S"],
            ["S", "S", "S", "S", "S"],
            ["S", "S", "S", "S", "S"]
          ]}],
"catalyst": {"id": 'minecraft:ender_pearl',"Count": 1},
"components": {"S": {"type": "compactcrafting:block","block": 'compactmachines:wall'}, "D": {"type": "compactcrafting:block","block": 'minecraft:emerald_block'}},
"outputs": [{"id": 'compactmachines:machine_maximum',"Count": 1}]})

event.custom(
  {
    "type": "compactcrafting:miniaturization",
    "recipeSize": 3,
    "layers":[
      {"type": "compactcrafting:mixed",
      "pattern": [
        ["F", "Q", "F"],
        ["Q", "S", "Q"],
        ["F", "Q", "F"]
      ]},
      {
        "type": "compactcrafting:mixed",
        "pattern": [
          ["Q", "S", "Q"],
          ["S", "M", "S"],
          ["Q", "S", "Q"]
        ]},
        {"type": "compactcrafting:mixed",
        "pattern": [
          ["F", "Q", "F"],
          ["Q", "S", "Q"],
          ["F", "Q", "F"]
        ]}],
"catalyst": {"id": 'appliedenergistics2:engineering_processor',"Count": 1},
"components": {"F": {"type": "compactcrafting:block","block": 'appliedenergistics2:fluix_block'}, "Q": {"type": "compactcrafting:block","block": 'appliedenergistics2:quartz_block'}, "S": {"type": "compactcrafting:block","block": 'appliedenergistics2:smooth_sky_stone_block'}, "M": {"type": "compactcrafting:block","block": 'appliedenergistics2:energy_cell'}},
"outputs": [{"id": 'appliedenergistics2:controller',"Count": 1}]})

event.custom(
  {
    "type": "compactcrafting:miniaturization",
    "recipeSize": 3,
    "layers":[
      {"type": "compactcrafting:mixed",
      "pattern": [
        ["I", "Q", "I"],
        ["Q", "I", "Q"],
        ["I", "Q", "I"]
      ]},
      {
        "type": "compactcrafting:mixed",
        "pattern": [
          ["Q", "I", "Q"],
          ["I", "M", "I"],
          ["Q", "I", "Q"]
        ]},
        {"type": "compactcrafting:mixed",
        "pattern": [
          ["I", "Q", "I"],
          ["Q", "I", "Q"],
          ["I", "Q", "I"]
        ]}],
"catalyst": {"id": 'refinedstorage:advanced_processor',"Count": 1},
"components": {"I": {"type": "compactcrafting:block","block": 'minecraft:quartz_block'}, "Q": {"type": "compactcrafting:block","block": 'refinedstorage:quartz_enriched_iron_block'}, "M": {"type": "compactcrafting:block","block": 'refinedstorage:machine_casing'}},
"outputs": [{"id": 'refinedstorage:controller',"Count": 1}]})

event.custom(
  {
    "type": "compactcrafting:miniaturization",
    "recipeSize": 2,
    "layers":[
      {
        "type": "compactcrafting:mixed",
        "pattern": [
          ["N", "R", "N"],
          ["R", "C", "R"],
          ["N", "R", "N"]
        ]},
        {"type": "compactcrafting:mixed",
        "pattern": [
          ["B", "B", "B"],
          ["B", "D", "B"],
          ["B", "B", "B"]
        ]}],
"catalyst": {"id": 'tconstruct:blood_slime_ball',"Count": 1},
"components": {"N": {"type": "compactcrafting:block","block": 'powah:nitro_crystal_block'}, "R": {"type": "compactcrafting:block","block": 'minecraft:redstone_block'}, "B": {"type": "compactcrafting:block","block": 'minecraft:blackstone'}, "D": {"type": "compactcrafting:block","block": 'botania:mana_diamond_block'}, "C": {"type": "compactcrafting:block","block": 'minecraft:cauldron'}},
"outputs": [{"id": 'bloodmagic:altar',"Count": 1}]})

event.custom(
  {
    "type": "compactcrafting:miniaturization",
    "recipeSize": 3,
    "layers":[
      {"type": "compactcrafting:filled",
        "component": "B"
      },
      {
        "type": "compactcrafting:mixed",
        "pattern": [
          ["B", "B", "B"],
          ["B", "C", "B"],
          ["B", "B", "B"]
        ]},
        {"type": "compactcrafting:mixed",
        "pattern": [
          ["S", "S", "S"],
          ["S", "E", "S"],
          ["S", "S", "S"]
        ]}],
"catalyst": {"id": 'minecraft:netherite_ingot',"Count": 1},
"components": {"B": {"type": "compactcrafting:block","block": 'minecraft:iron_bars'}, "C": {"type": "compactcrafting:block","block": 'minecraft:chain'}, "S": {"type": "compactcrafting:block","block": 'silents_mechanisms:steel_block'}, "E": {"type": "compactcrafting:block","block": 'botanicalmachinery:mana_emerald_block'}},
"outputs": [{"id": 'cagedmobs:mobcage',"Count": 1}]})

})
