// Custom Fluid
onEvent('fluid.registry', event => {
  // Molten Coke Brick
  event.create('molten_coke_brick').textureThick(0x292929).bucketColor(0x292929).displayName('Molten Coke Brick')

  // Molten Shadow Steel
  event.create('molten_shadow_steel').textureThick(0x4B006E).bucketColor(0x4B006E).displayName('Molten shadow steel')
})

// Custom Items
onEvent('item.registry', event => {
  event.create('boots').displayName('Boots Core')
  event.create('leggings').displayName('Leggings Core')
  event.create('chestplate').displayName('Chestplate Core')
  event.create('helmet').displayName('Helmet Core')

  event.create('chroma_ingot').displayName('Chroma Ingot')
})
