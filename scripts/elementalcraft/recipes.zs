<recipetype:elementalcraft:pureinfusion>.addJSONRecipe("test_recipes",
{
  "element_amount": 60000, "ingredients":
  [ {
    "tag": "forge:gems/diamond"   //middle item
  },
  { "item": "minecraft:emerald"   //item with water element
  },
  { "item": "minecraft:iron_ingot"//item with fire elements
  },
  { "item": "minecraft:gold_ingot"//item with earth element
  },
  { "item": "minecraft:cobblestone"//item with wind element
  } ],
  "output":
  {
  "item": "minecraft:dirt"         //output
  }
});

<recipetype:elementalcraft:pureinfusion>.addJSONRecipe("test_recipes",
{
  "element_amount": 5000, "ingredients":
  [ {
    "tag": "elementalcraft:receptacle_empty"   //middle item
  },
  { "item": "elementalcraft:element_holder_water"   //item with water element
  },
  { "item": "elementalcraft:element_holder_fire"//item with fire elements
  },
  { "item": "elementalcraft:element_holder_hearth"//item with earth element
  },
  { "item": "elementalcraft:element_holder_air"//item with wind element
  } ],
  "output":
  {
  "item": "kubejs:elemental_essence"         //output
  }
});
