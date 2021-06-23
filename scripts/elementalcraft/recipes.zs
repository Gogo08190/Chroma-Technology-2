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
