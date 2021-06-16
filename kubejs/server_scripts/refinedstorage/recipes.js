onEvent('recipes', event => {

  // Raw Basic Processor
  event.remove({ output: 'refinedstorage:raw_basic_processor' })
  event.shapeless('refinedstorage:raw_basic_processor', ['refinedstorage:processor_binding', '#forge:ingots/iron'])

  // Raw Improved Processor
  event.remove({ output: 'refinedstorage:raw_improved_processor' })
  event.shapeless('refinedstorage:raw_improved_processor', ['refinedstorage:processor_binding', '#forge:ingots/gold'])

  // Raw Advanced Processor
  event.remove({ output: 'refinedstorage:raw_advanced_processor' })
  event.shapeless('refinedstorage:raw_advanced_processor', ['refinedstorage:processor_binding', '#forge:gems/diamond'])

  // Raw Withering Processor
  event.remove({ output: 'extradisks:raw_withering_processor' })
  event.shapeless('extradisks:raw_withering_processor', ['refinedstorage:processor_binding', 'minecraft:nether_star'])

  // Basic Processor
  event.remove({ output: 'refinedstorage:basic_processor' })
  event.custom(
    {
      "type": "appliedenergistics2:inscriber",
      "mode": "press",
      "result": {
        "item": "refinedstorage:basic_processor"
      },
      "ingredients": {
        "top": {
          "item": "refinedstorage:raw_basic_processor"
        },
        "middle": {
          "tag": "forge:dusts/redstone"
        },
        "bottom": {
          "item": "appliedenergistics2:printed_silicon"
        }
      }
    }
  )

  // Improved Processor
  event.remove({ output: 'refinedstorage:improved_processor' })
  event.custom(
    {
      "type": "appliedenergistics2:inscriber",
      "mode": "press",
      "result": {
        "item": "refinedstorage:improved_processor"
      },
      "ingredients": {
        "top": {
          "item": "refinedstorage:raw_improved_processor"
        },
        "middle": {
          "tag": "forge:dusts/redstone"
        },
        "bottom": {
          "item": "appliedenergistics2:printed_silicon"
        }
      }
    }
  )

  // Advanced Processor
  event.remove({ output: 'refinedstorage:advanced_processor' })
  event.custom(
    {
      "type": "appliedenergistics2:inscriber",
      "mode": "press",
      "result": {
        "item": "refinedstorage:advanced_processor"
      },
      "ingredients": {
        "top": {
          "item": "refinedstorage:raw_advanced_processor"
        },
        "middle": {
          "tag": "forge:dusts/redstone"
        },
        "bottom": {
          "item": "appliedenergistics2:printed_silicon"
        }
      }
    }
  )

  // Withering Processor
  event.remove({ output: 'extradisks:withering_processor' })
  event.custom(
    {
      "type": "appliedenergistics2:inscriber",
      "mode": "press",
      "result": {
        "item": "extradisks:withering_processor"
      },
      "ingredients": {
        "top": {
          "item": "extradisks:raw_withering_processor"
        },
        "middle": {
          "tag": "forge:dusts/redstone"
        },
        "bottom": {
          "item": "appliedenergistics2:printed_silicon"
        }
      }
    }
  )

  // Construction Core
  event.remove({ output: 'refinedstorage:construction_core' })
  event.custom(
    {
      "type": "appliedenergistics2:inscriber",
      "mode": "press",
      "result": {
        "item": "refinedstorage:construction_core"
      },
      "ingredients": {
        "top": {
          "item": "refinedstorage:raw_basic_processor"
        },
        "middle": {
          "tag": "forge:dusts/glowstone"
        },
        "bottom": {
          "item": "appliedenergistics2:printed_silicon"
        }
      }
    }
  )

  // Destruction Core
  event.remove({ output: 'refinedstorage:destruction_core' })
  event.custom(
    {
      "type": "appliedenergistics2:inscriber",
      "mode": "press",
      "result": {
        "item": "refinedstorage:destruction_core"
      },
      "ingredients": {
        "top": {
          "item": "refinedstorage:raw_basic_processor"
        },
        "middle": {
          "tag": "forge:gems/quartz"
        },
        "bottom": {
          "item": "appliedenergistics2:printed_silicon"
        }
      }
    }
  )
});
