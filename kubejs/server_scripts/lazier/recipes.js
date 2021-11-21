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
                  tag: 'refinedstorage:raw_basic_processor'
              }
          },
          {
              input: {
                  tag: 'forge:dusts/redstone'
              }
          },
          {
              input: {
                  item: '#forge:silicon'
              }
          }
      ]
  });

  event.custom({
    type: 'lazierae2:circuit_etcher',
    processing_time: 150,
    output: {
        item: 'refinedstorage:improved_processor'
    },
    inputs: [
        {
            input: {
                tag: 'refinedstorage:raw_improved_processor'
            }
        },
        {
            input: {
                tag: 'forge:dusts/redstone'
            }
        },
        {
            input: {
                item: '#forge:silicon'
            }
        }
    ]
  });

  event.custom({
    type: 'lazierae2:circuit_etcher',
    processing_time: 150,
    output: {
        item: 'refinedstorage:advanced_processor'
    },
    inputs: [
        {
            input: {
                tag: 'refinedstorage:raw_advanced_processor'
            }
        },
        {
            input: {
                tag: 'forge:dusts/redstone'
            }
        },
        {
            input: {
                item: '#forge:silicon'
            }
        }
    ]
  });

  event.custom({
    type: 'lazierae2:circuit_etcher',
    processing_time: 150,
    output: {
        item: 'refinedstorage:construction_core'
    },
    inputs: [
        {
            input: {
                tag: 'refinedstorage:raw_basic_processor'
            }
        },
        {
            input: {
                tag: 'minecraft:glowstone_dust'
            }
        },
        {
            input: {
                item: '#forge:silicon'
            }
        }
    ]
  });

  event.custom({
    type: 'lazierae2:circuit_etcher',
    processing_time: 150,
    output: {
        item: 'refinedstorage:destruction_core'
    },
    inputs: [
        {
            input: {
                tag: 'refinedstorage:raw_basic_processor'
            }
        },
        {
            input: {
                tag: 'minecraft:quartz'
            }
        },
        {
            input: {
                item: '#forge:silicon'
            }
        }
    ]
  });
});
