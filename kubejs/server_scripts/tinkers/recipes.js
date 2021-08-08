events.listen('recipes', event => {

  // Blazing Blood
  event.custom({
    "type": "thermal:pyrolyzer",
    "ingredient":
    {
      "item": "minecraft:blaze_rod"
    },
    "result":
      [{
        "fluid": "tconstruct:blazing_blood", "amount": 20
      },
      {
        "item": 'minecraft:blaze_powder', "chance": 0.50
      }],
    "energy": 1000,
    "experience": 0.00
  })

  // Molten shadowsteel
  event.custom({
    "type": "tconstruct:melting",
    "ingredient":
    {
      "item": "create:shadow_steel"
    },
    "result":
    {
      "fluid": "kubejs:molten_shadow_steel",
      "amount": 144
    },
    "temperature": 800, "time": 50
  })

  // Shadow Steel
  event.custom({
    "type": "tconstruct:casting_table",
    "cast":
    {
      "item": 'tconstruct:ingot_cast'
    },
    "cast_consumed": false,
    "fluid":
    {
      "name": "kubejs:molten_shadow_steel",
      "amount": 144
    },
    "result": 'create:shadow_steel',
    "cooling_time": 100
  })

  // Molten coke brick
  event.custom({
    "type": "tconstruct:alloy",
    "inputs":
      [{
        "name": "kubejs:molten_shadow_steel",
        "amount": 144
      },
      {
        "name": "tconstruct:molten_slimesteel",
        "amount": 576
      },
      {
        "name": "tconstruct:molten_clay", "amount": 4000
      }],
    "result":
    {
      "fluid": "kubejs:molten_coke_brick", "amount": 3000
    },
    "temperature": 800
  })

  // Coke Brick
  event.remove({ output: 'immersiveengineering:cokebrick' })
  event.custom({
    "type": "tconstruct:casting_basin",
    "fluid":
    {
      "name": "kubejs:molten_coke_brick",
      "amount": 1000
    },
    "result": "immersiveengineering:cokebrick",
    "cooling_time": 80
  })

  // Grout
  event.remove({ output: 'tconstruct:grout' })
  event.shapeless('8x tconstruct:grout', ['minecraft:clay', 'immersiveengineering:concrete', 'immersiveengineering:concrete', 'immersiveengineering:concrete', 'immersiveengineering:concrete', '#forge:sandstone', '#forge:sandstone', '#forge:sandstone', '#forge:sandstone'])
  event.shapeless('2x tconstruct:grout', ['minecraft:clay_ball', '#forge:sandstone', 'immersiveengineering:concrete'])
});
