onEvent('recipes', event => {

  // Engineers Hammer
  event.remove({ output: 'immersiveengineering:hammer' })
  event.recipes.create.mechanical_crafting(Item.of('immersiveengineering:hammer'),[
    ' IP',
    ' SI',
    'S  '
  ], {
    P: 'create:powdered_obsidian',
    S: 'createaddition:copper_rod',
    I: 'create:iron_sheet'
  })
});
