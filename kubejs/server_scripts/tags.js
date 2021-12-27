// priority: 100
onEvent("item.tags", (event) => {
    event.add("itemfilters:check_nbt", ["extendedcrafting:singularity", "patchouli:guide_book", "immersiveengineering:blueprint", "productivebees:configurable_comb", "productivebees:spawn_egg_configurable_bee", "productivebees:honey_treat", "productivebees:gene"]);
});
