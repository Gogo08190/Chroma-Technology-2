events.listen('recipes', event => {

event.custom({type: 'compactcrafting:miniaturization',recipeSize: 1,layers:[{type: 'compactcrafting:filled', component: 'R'},{type: 'compactcrafting:filled', component: 'I'}],
catalyst: {"id": 'minecraft:redstone', Count: 1},
components:
{"R": {type: 'compactcrafting:block', block: 'botania:manasteel_block'},
"I": {type: 'compactcrafting:block', block: 'minecraft:redstone'}},
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

})
