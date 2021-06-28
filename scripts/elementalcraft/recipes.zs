// Elemental Essence
<recipetype:elementalcraft:pureinfusion>.addJSONRecipe("elemental_essence",
{
  "element_amount": 5000, "ingredients":
  [ {
    "item": "elementalcraft:receptacle_empty"       //middle item
  },
  { "item": "elementalcraft:element_holder_water"   //item with water element
  },
  { "item": "elementalcraft:element_holder_fire"    //item with fire elements
  },
  { "item": "elementalcraft:element_holder_earth"  //item with earth element
  },
  { "item": "elementalcraft:element_holder_air"     //item with wind element
  } ],
  "output":
  {
  "item": "kubejs:elemental_essence"                //output
  }
});


//worn notebook

//remove craft worn notebook
craftingTable.removeRecipe(<item:ars_nouveau:worn_notebook>);

<recipetype:elementalcraft:pureinfusion>.addJSONRecipe("worn_notebook",
{
  "element_amount": 5000, "ingredients":
  [ {
    "item": "ars_nouveau:mana_gem"       //middle item
  },
  { "item": "elementalcraft:purecrystal"   //item with water element
  },
  { "item": "minecraft:book"    //item with fire elements
  },
  { "item": "elementalcraft:purecrystal"  //item with earth element
  },
  { "item": "elementalcraft:purecrystal"     //item with wind element
  } ],
  "output":
  {
  "item": "ars_nouveau:worn_notebook"                //output
  }
});
