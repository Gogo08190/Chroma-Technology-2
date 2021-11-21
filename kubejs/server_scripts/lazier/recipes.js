onEvent('recipes', event => {
    event.custom({
      type: 'lazierae2:circuit_etcher',
      processing_time: 150,
      output: {
          item: 'refinedstorage:basic_processor'
      },
      inputs: [
          {
              input: {
                  item: 'refinedstorage:raw_basic_processor'
              }
          },
          {
              input: {
                  item: 'minecraft:redstone'
              }
          },
          {
              input: {
                  tag: '#forge:silicon'
              }
          }
      ]
  })

  event.custom({
    type: 'lazierae2:circuit_etcher',
    processing_time: 150,
    output: {
        item: 'refinedstorage:improved_processor'
    },
    inputs: [
        {
            input: {
                item: 'refinedstorage:raw_improved_processor'
            }
        },
        {
            input: {
                item: 'minecraft:redstone'
            }
        },
        {
            input: {
                tag: '#forge:silicon'
            }
        }
    ]
  })

  event.custom({
    type: 'lazierae2:circuit_etcher',
    processing_time: 150,
    output: {
        item: 'refinedstorage:advanced_processor'
    },
    inputs: [
        {
            input: {
                item: 'refinedstorage:raw_advanced_processor'
            }
        },
        {
            input: {
                item: 'minecraft:redstone'
            }
        },
        {
            input: {
                tag: '#forge:silicon'
            }
        }
    ]
  })

  event.custom({
    type: 'lazierae2:circuit_etcher',
    processing_time: 150,
    output: {
        item: 'refinedstorage:construction_core'
    },
    inputs: [
        {
            input: {
                item: 'refinedstorage:raw_basic_processor'
            }
        },
        {
            input: {
                item: 'minecraft:glowstone_dust'
            }
        },
        {
            input: {
                tag: '#forge:silicon'
            }
        }
    ]
  })

  event.custom({
    type: 'lazierae2:circuit_etcher',
    processing_time: 150,
    output: {
        item: 'refinedstorage:destruction_core'
    },
    inputs: [
        {
            input: {
                item: 'refinedstorage:raw_basic_processor'
            }
        },
        {
            input: {
                item: 'minecraft:quartz'
            }
        },
        {
            input: {
                tag: '#forge:silicon'
            }
        }
    ]
  })
});
