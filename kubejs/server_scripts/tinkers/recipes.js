events.listen('recipes', event => {

  event.custom({"type": "thermal:pyrolyzer","ingredient": {"item": "minecraft:blaze_rod"},"result": [{"fluid": "tconstruct:blazing_blood","amount": 20},{"item": 'minecraft:blaze_powder',"chance": 0.50}],"energy": 1000,"experience": 0.00})

})
