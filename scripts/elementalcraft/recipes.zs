// Elemental Essence
<recipetype:elementalcraft:pureinfusion>.addJSONRecipe("test_recipes",
{
  "element_amount": 5000, "ingredients":
  [ {
    "item": "elementalcraft:receptacle_empty"       //middle item
  },
  { "item": "elementalcraft:element_holder_water"   //item with water element
  },
  { "item": "elementalcraft:element_holder_fire"    //item with fire elements
  },
  { "item": "elementalcraft:element_holder_hearth"  //item with earth element
  },
  { "item": "elementalcraft:element_holder_air"     //item with wind element
  } ],
  "output":
  {
  "item": "kubejs:elemental_essence"                //output
  }
});
