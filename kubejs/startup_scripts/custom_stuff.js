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
  event.create('damage').displayName('Damage Core')

  event.create('chroma_ingot').displayName('Chroma Ingot')
  event.create('unassembled_chroma_ingot').displayName('Unassembled Chroma Ingot')
  event.create('assembled_magical_ingot').displayName('Assembled Magical Ingot')
  event.create('assembled_technical_ingot').displayName('Dense Technical Ingot')

  event.create('elemental_essence').displayName('Elemental Essence')
  event.create('fallen_pet').displayName('Shard Of The Fallen Pet')
  event.create('pure_evil').displayName('Essence Of Pure Evil')
  event.create('condensed_mana').displayName('Condensed Mana')
})
