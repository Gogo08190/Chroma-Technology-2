onEvent('recipes', event => {

  event.remove({id: "rats:plastic_smelting"})
  event.remove({id: "rats:plastic_blast_furnace"})
  event.smelting(Item.of('industrialforegoing:tinydryrubber', 1), 'rats:plastic_waste').xp(0.05)
  event.blasting(Item.of('industrialforegoing:tinydryrubber', 1), 'rats:plastic_waste').xp(0.05)
  event.remove({ output: 'rats:rat_upgrade_basic' })

  event.custom(
    {
      "type": "powah:energizing",
      "ingredients": [
      {"item": "powah:crystal_niotic"},
      {"item": "rats:cheese"},
      {"item": "rats:cheese"},
      {"item": "rats:cheese"},
      {"item": "rats:cheese"},
      {"item": "rats:cheese"},
      {"item": "rats:cheese"},
      {"item": "rats:cheese"},
      {"item": "rats:cheese"}
      ],
      "energy": 5000,
      "result": {
      "item": "rats:rat_upgrade_basic",
      "count": 1
      }
    }
  )

  event.shapeless('4x rats:rat_upgrade_basic', ['rats:rat_upgrade_block'])
});
