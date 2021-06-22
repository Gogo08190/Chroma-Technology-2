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

  //molten shadowsteel
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

  /*
  exemple
  event.custom({"type": "tconstruct:melting","ingredient": {"item": "tinycoal:tinycoal"},"result": {"fluid": "thermal:crude_oil","amount": 10},"temperature": 200,"time": 350})
 */

  //molten to item
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

  //molten coke brick
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
      "fluid": "kubejs:molten_coke_brick", "amount": 4000
    },
    "temperature": 800
  })

  /*
 
  Exempl
   event.custom({"type": "tconstruct:alloy","inputs": [{"name": "kubejs:organic_fluid","amount": 500},{"name": "tconstruct:molten_tin","amount": 144},{"name": "tconstruct:molten_clay","amount": 250}],
   "result": {"fluid": "kubejs:molten_overworld_matter","amount": 1000},"temperature": 800})
   */

  //molten to block
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
});
