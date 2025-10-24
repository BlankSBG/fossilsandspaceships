ServerEvents.tags('item', event => {

    //remove industrial foregoing gears from gear tag
    event.remove('forge:gears', [
        'industrialforegoing:iron_gear',
        'industrialforegoing:gold_gear',
        'industrialforegoing:diamond_gear'
    ]);
    event.remove('forge:gears/iron', [
        'industrialforegoing:iron_gear'
    ]);
    event.remove('forge:gears/gold', [
        'industrialforegoing:gold_gear'
    ]);
    event.remove('forge:gears/diamond', [
        'industrialforegoing:diamond_gear'
    ]);

    // immersive molds are dies
    event.add('thermal:crafting/dies', [
        'immersiveengineering:mold_plate',
        'immersiveengineering:mold_gear',
        'immersiveengineering:mold_rod',
        'immersiveengineering:mold_bullet_casing',
        'immersiveengineering:mold_wire'
    ]);

});