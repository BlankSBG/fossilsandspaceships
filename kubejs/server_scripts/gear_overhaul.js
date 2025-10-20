ServerEvents.recipes(event => {

/* thermal:invar_gear
thermal:electrum_gear
thermal:bronze_gear
thermal:nickel_gear
thermal:silver_gear
thermal:lead_gear
thermal:tin_gear
thermal:rose_gold_gear
thermal:steel_gear
thermal:diamond_gear
thermal:lapis_gear
thermal:netherite_gear
thermal:copper_gear
thermal:gold_gear
thermal:iron_gear
thermal:sapphire_gear
thermal:ruby_gear
thermal:constantan_gear
thermal:enderium_gear
thermal:lumium_gear
thermal:signalum_gear
thermal:quartz_gear
thermal:emerald_gear */

    // remove all gears and gear recipes 
    event.remove({output: '#forge:gears'})
    //RecipeViewerEvents.removeEntriesCompletely('item', event => {
	//    event.remove('industrialforegoing:iron_gear')
    //});
    //RecipeViewerEvents.removeEntriesCompletely('item', event => {
	//    event.remove('industrialforegoing:gold_gear')
    //});
    //RecipeViewerEvents.removeEntriesCompletely('item', event => {
	//    event.remove('industrialforegoing:diamond_gear')
    //});

    // add gears back only press

    event.recipes.thermal.press('thermal:invar_gear', ['2x thermal:invar_ingot', 'immersiveengineering:mold_gear']);
    event.recipes.thermal.press('thermal:electrum_gear', ['2x thermal:electrum_ingot', 'immersiveengineering:mold_gear']);
    event.recipes.thermal.press('thermal:bronze_gear', ['2x thermal:bronze_ingot', 'immersiveengineering:mold_gear']);
    event.recipes.thermal.press('thermal:nickel_gear', ['2x thermal:nickel_ignot', 'immersiveengineering:mold_gear']);
    event.recipes.thermal.press('thermal:silver_gear', ['2x thermal:silver_ingot', 'immersiveengineering:mold_gear']);
    event.recipes.thermal.press('thermal:lead_gear', ['2x thermal:lead_ingot', 'immersiveengineering:mold_gear']);
    event.recipes.thermal.press('thermal:tin_gear', ['2x thermal:tin_ingot', 'immersiveengineering:mold_gear']);
    event.recipes.thermal.press('thermal:rose_gold_gear', ['2x thermal:rose_gold_ingot', 'immersiveengineering:mold_gear']);
    event.recipes.thermal.press('thermal:steel_gear', ['2x thermal:steel_ingot', 'immersiveengineering:mold_gear']);
    event.recipes.thermal.press('thermal:diamond_gear', ['2x minecraft:diamond_ingot', 'immersiveengineering:mold_gear']);
    event.recipes.thermal.press('thermal:lapis_gear', ['2x minecraft:lapis_ingot', 'immersiveengineering:mold_gear']);
    event.recipes.thermal.press('thermal:netherite_gear', ['2x minecraft:netherite_ingot', 'immersiveengineering:mold_gear']);
    event.recipes.thermal.press('thermal:copper_gear', ['2x minecraft:copper_ingot', 'immersiveengineering:mold_gear']);
    event.recipes.thermal.press('thermal:gold_gear', ['2x minecraft:gold_ingot', 'immersiveengineering:mold_gear']);
    event.recipes.thermal.press('thermal:iron_gear', ['2x minecraft:iron_ingot', 'immersiveengineering:mold_gear']);
    event.recipes.thermal.press('thermal:sapphire_gear', ['2x thermal:sapphire', 'immersiveengineering:mold_gear']);
    event.recipes.thermal.press('thermal:ruby_gear', ['2x thermal:ruby', 'immersiveengineering:mold_gear']);
    event.recipes.thermal.press('thermal:constantan_gear', ['2x thermal:constantan_ingot', 'immersiveengineering:mold_gear']);
    event.recipes.thermal.press('thermal:enderium_gear', ['2x thermal:enderium_ingot', 'immersiveengineering:mold_gear']);
    event.recipes.thermal.press('thermal:lumium_gear', ['2x thermal:lumium_ingot', 'immersiveengineering:mold_gear']);
    event.recipes.thermal.press('thermal:signalum_gear', ['2x thermal:signalum_ingot', 'immersiveengineering:mold_gear']);
    event.recipes.thermal.press('thermal:quartz_gear', ['2x minecraft:quartz', 'immersiveengineering:mold_gear']);
    event.recipes.thermal.press('thermal:emerald_gear', ['2x inecraft:emerald', 'immersiveengineering:mold_gear']);
    
});