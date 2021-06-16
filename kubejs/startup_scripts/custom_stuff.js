
//fluid custom

onEvent('fluid.registry', event => {
    //create molten coke brick
    event.create('thick_fluid').textureThick(0x292929).bucketColor(0x292929).displayName('Molten Coke Brick')
})

//Item custom

onEvent('item.registry', event => {

    // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
    event.create('boot').displayName('Boot Core')
    event.create('leging').displayName('Legging Core')
    event.create('Chest').displayName('Chestplate Core')
    event.create('helmet').displayName('Helmet Core')
    
  })