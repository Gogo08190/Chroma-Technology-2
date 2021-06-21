events.listen('recipes', event => {

  event.recipes.thermal.centrifuge([Item.of('mythicbotany:alfsteel_nugget', 12), Fluid.of('productivebees:honey', 400)], 'productivebees:comb_alfsteel')
});
