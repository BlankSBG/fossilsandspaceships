ServerEvents.recipes(event =>{
//thermal:invar_plate
//thermal:electrum_plate
//thermal:bronze_plate
//thermal:nickel_plate
//thermal:silver_plate
//thermal:lead_plate
//thermal:tin_plate
//thermal:rose_gold_plate
//thermal:steel_plate
//thermal:enderium_plate
//thermal:lumium_plate
//thermal:signalum_plate
//thermal:netherite_plate
//thermal:copper_plate
//thermal:gold_plate
//thermal:iron_plate
//thermal:constantan_plate
//ad_astra:calorite_plate
//ad_astra:ostrum_plate
//ad_astra:desh_plate
//ad_astra:etrium_plate

/* thermal:invar_ingot
thermal:electrum_ingot
thermal:bronze_ingot
thermal:nickel_ingot
thermal:silver_ingot
thermal:lead_ingot
thermal:tin_ingot
thermal:rose_gold_ingot
thermal:steel_ingot
thermal:enderium_ingot
thermal:lumium_ingot
thermal:signalum_ingot
minecraft:netherite_ingot
minecraft:copper_ingot
minecraft:gold_ingot
minecraft:iron_ingot
thermal:constantan_ingot
ad_astra:calorite_ingot
ad_astra:ostrum_ingot
ad_astra:desh_ingot */

    // make plates with tinkers hammer

//    event.shapeless('thermal:invar_plate', ['thermal:invar_ingot', 'tconstruct:sledge_hammer']).damageIngredient('tconstruct:sledge_hammer', 10)
//    event.shapeless('thermal:electrum_plate', ['thermal:electrum_ingot', 'tconstruct:sledge_hammer']).damageIngredient('tconstruct:sledge_hammer', 10)
//    event.shapeless('thermal:bronze_plate', ['thermal:bronze_ingot', 'tconstruct:sledge_hammer']).damageIngredient('tconstruct:sledge_hammer', 10)
    event.shapeless('thermal:nickel_plate', ['thermal:nickel_ingot', 'tconstruct:sledge_hammer']).damageIngredient('tconstruct:sledge_hammer', 10)
    event.shapeless('thermal:silver_plate', ['thermal:silver_ingot', 'tconstruct:sledge_hammer']).damageIngredient('tconstruct:sledge_hammer', 10)
    event.shapeless('thermal:lead_plate', ['thermal:lead_ingot', 'tconstruct:sledge_hammer']).damageIngredient('tconstruct:sledge_hammer', 10)
    event.shapeless('thermal:tin_plate', ['thermal:tin_ingot', 'tconstruct:sledge_hammer']).damageIngredient('tconstruct:sledge_hammer', 10)
//    event.shapeless('thermal:rose_gold_plate', ['thermal:rose_gold_ingot', 'tconstruct:sledge_hammer']).damageIngredient('tconstruct:sledge_hammer', 10)
//    event.shapeless('thermal:steel_plate', ['thermal:steel_ingot', 'tconstruct:sledge_hammer']).damageIngredient('tconstruct:sledge_hammer', 10)
//    event.shapeless('thermal:enderium_plate', ['thermal:enderium_ingot', 'tconstruct:sledge_hammer']).damageIngredient('tconstruct:sledge_hammer', 10)
//    event.shapeless('thermal:lumium_plate', ['thermal:lumium_ingot', 'tconstruct:sledge_hammer']).damageIngredient('tconstruct:sledge_hammer', 10)
//    event.shapeless('thermal:signalum_plate', ['thermal:signalum_ingot', 'tconstruct:sledge_hammer']).damageIngredient('tconstruct:sledge_hammer', 10)
//    event.shapeless('thermal:netherite_plate', ['minecraft:netherite_ingot', 'tconstruct:sledge_hammer']).damageIngredient('tconstruct:sledge_hammer', 10)
    event.shapeless('thermal:copper_plate', ['minecraft:copper_ingot', 'tconstruct:sledge_hammer']).damageIngredient('tconstruct:sledge_hammer', 10)
    event.shapeless('thermal:gold_plate', ['minecraft:gold_ingot', 'tconstruct:sledge_hammer']).damageIngredient('tconstruct:sledge_hammer', 10)
    event.shapeless('thermal:iron_plate', ['minecraft:iron_ingot', 'tconstruct:sledge_hammer']).damageIngredient('tconstruct:sledge_hammer', 10)
//    event.shapeless('thermal:constantan_plate', ['thermal:constantan_ingot', 'tconstruct:sledge_hammer']).damageIngredient('tconstruct:sledge_hammer', 10)
//    event.shapeless('ad_astra:calorite_plate', ['ad_astra:calorite_ingot', 'tconstruct:sledge_hammer']).damageIngredient('tconstruct:sledge_hammer', 10)
//    event.shapeless('ad_astra:ostrum_plate', ['ad_astra:ostrum_ingot', 'tconstruct:sledge_hammer']).damageIngredient('tconstruct:sledge_hammer', 10)
//    event.shapeless('ad_astra:desh_plate', ['ad_astra:desh_ingot', 'tconstruct:sledge_hammer']).damageIngredient('tconstruct:sledge_hammer', 10)
    
    // make plates with press
     event.recipes.thermal.press('thermal:invar_plate', ['2x thermal:invar_ingot', 'immersiveengineering:mold_plate'])
     event.recipes.thermal.press('thermal:electrum_plate', ['2x thermal:electrum_ingot', 'immersiveengineering:mold_plate'])
     event.recipes.thermal.press('thermal:bronze_plate', ['2x thermal:bronze_ingot', 'immersiveengineering:mold_plate'])
     event.recipes.thermal.press('thermal:nickel_plate', ['thermal:nickel_ingot', 'immersiveengineering:mold_plate'])
     event.recipes.thermal.press('thermal:silver_plate', ['thermal:silver_ingot', 'immersiveengineering:mold_plate'])
     event.recipes.thermal.press('thermal:lead_plate', ['thermal:lead_ingot', 'immersiveengineering:mold_plate'])
     event.recipes.thermal.press('thermal:tin_plate', ['thermal:tin_ingot', 'immersiveengineering:mold_plate'])
     event.recipes.thermal.press('thermal:rose_gold_plate', ['2x thermal:rose_gold_ingot', 'immersiveengineering:mold_plate'])
     event.recipes.thermal.press('thermal:steel_plate', ['2x thermal:steel_plate', 'immersiveengineering:mold_plate'])
     event.recipes.thermal.press('thermal:enderium_plate', ['2x thermal:enderium_ingot', 'immersiveengineering:mold_plate'])
     event.recipes.thermal.press('thermal:lumium_plate', ['2x thermal:lumium_ingot', 'immersiveengineering:mold_plate'])
     event.recipes.thermal.press('thermal:signalum_plate', ['2x thermal:signalum_ingot', 'immersiveengineering:mold_plate'])
     event.recipes.thermal.press('thermal:netherite_plate', ['2x thermal:netherite_ingot', 'immersiveengineering:mold_plate'])
     event.recipes.thermal.press('thermal:copper_plate', ['thermal:copper_ingot', 'immersiveengineering:mold_plate'])
     event.recipes.thermal.press('thermal:gold_plate', ['thermal:gold_ingot', 'immersiveengineering:mold_plate'])
     event.recipes.thermal.press('thermal:iron_plate', ['thermal:iron_ingot', 'immersiveengineering:mold_plate'])
     event.recipes.thermal.press('thermal:constantan_plate', ['2x thermal:constantan_ingot', 'immersiveengineering:mold_plate'])
     event.recipes.thermal.press('ad_astra:calorite_plate', ['2x ad_astra:calorite_ingot', 'immersiveengineering:mold_plate'])
     event.recipes.thermal.press('ad_astra:ostrum_plate', ['2x ad_astra:ostrum_ingot', 'immersiveengineering:mold_plate'])
     event.recipes.thermal.press('ad_astra:desh_plate', ['2x ad_astra:desh_ingot', 'immersiveengineering:mold_plate'])


    }
);

