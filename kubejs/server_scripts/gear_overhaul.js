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

    // remove all gear recipes 
    event.remove({output: '#forge:gears'})

    // add gears back only press

    event.recipes.thermal.press('thermal:invar_gear', ['thermal:invar_ingot', 'thermal:press_gear_die']);
    event.recipes.thermal.press('thermal:electrum_gear', ['thermal:electrum_ingot', 'thermal:press_gear_die']);
    event.recipes.thermal.press('thermal:bronze_gear', ['thermal:bronze_ingot', 'thermal:press_gear_die']);
    event.recipes.thermal.press('thermal:nickel_gear', ['thermal:nickel_ignot', 'thermal:press_gear_die']);
    event.recipes.thermal.press('thermal:silver_gear', ['thermal:silver_ingot', 'thermal:press_gear_die']);
    event.recipes.thermal.press('thermal:lead_gear', ['thermal:lead_ingot', 'thermal:press_gear_die']);
    event.recipes.thermal.press('thermal:tin_gear', ['thermal:tin_ingot', 'thermal:press_gear_die']);
    event.recipes.thermal.press('thermal:rose_gold_gear', ['thermal:rose_gold_ingot', 'thermal:press_gear_die']);
    event.recipes.thermal.press('thermal:steel_gear', ['thermal:steel_ingot', 'thermal:press_gear_die']);
    event.recipes.thermal.press('thermal:diamond_gear', ['minecraft:diamond_ingot', 'thermal:press_gear_die']);
    event.recipes.thermal.press('thermal:lapis_gear', ['minecraft:lapis_ingot', 'thermal:press_gear_die']);
    event.recipes.thermal.press('thermal:netherite_gear', ['minecraft:netherite_ingot', 'thermal:press_gear_die']);
    event.recipes.thermal.press('thermal:copper_gear', ['minecraft:copper_ingot', 'thermal:press_gear_die']);
    event.recipes.thermal.press('thermal:gold_gear', ['minecraft:gold_ingot', 'thermal:press_gear_die']);
    event.recipes.thermal.press('thermal:iron_gear', ['minecraft:iron_ingot', 'thermal:press_gear_die']);
    event.recipes.thermal.press('thermal:sapphire_gear', ['thermal:sapphire', 'thermal:press_gear_die']);
    event.recipes.thermal.press('thermal:ruby_gear', ['thermal:ruby', 'thermal:press_gear_die']);
    event.recipes.thermal.press('thermal:constantan_gear', ['thermal:constantan_ingot', 'thermal:press_gear_die']);
    event.recipes.thermal.press('thermal:enderium_gear', ['thermal:enderium_ingot', 'thermal:press_gear_die']);
    event.recipes.thermal.press('thermal:lumium_gear', ['thermal:lumium_ingot', 'thermal:press_gear_die']);
    event.recipes.thermal.press('thermal:signalum_gear', ['thermal:signalum_ingot', 'thermal:press_gear_die']);
    event.recipes.thermal.press('thermal:quartz_gear', ['minecraft:quartz', 'thermal:press_gear_die']);
    event.recipes.thermal.press('thermal:emerald_gear', ['minecraft:emerald', 'thermal:press_gear_die']);
    
});