ServerEvents.recipes(event => {

    // replace flux coil with capacitor
    event.replaceInput(
        { mod: 'thermal'},
        'thermal:rf_coil',
        'thermal:flux_capacitor'
    );

    // crescent hammer
    event.remove({id: 'thermal:tools/wrench'});
    event.shaped('thermal:wrench',
        [
            'I I',
            ' P ',
            ' I '
        ],
        {
            I: 'minecraft:iron_ingot',
            P: 'thermal:tin_plate'
        }
    );
    
    // redstone servo 
    event.remove({id: 'thermal:redstone_servo'});
    event.shaped('thermal:redstone_servo',
        [
            'R  ',
            'P  ',
            'R  '
        ],
        {
            R: 'minecraft:redstone',
            P: 'thermal:iron_plate'
        }
    );

    // flux coil 
    event.remove({id: 'thermal:rf_coil'});
    event.shaped('thermal:rf_coil',
        [
            '  P',
            ' R ',
            'P  '
        ],
        {
            P: 'thermal:gold_plate',
            R: 'minecraft:redstone'
        }
    );

    // flux capacitor
    event.remove({id: 'thermal:flux_capacitor'});
    event.shaped('thermal:flux_capacitor',
        [
            'RSR',
            'LCL',
            ' F '
        ],
        {
            R: 'minecraft:redstone',
            S: 'thermal:sulfur_dust',
            L: 'thermal:lead_ingot',
            C: 'minecraft:copper_ingot',
            F: 'thermal:rf_coil'
        }
    );

    // fluxduct
    event.remove({id: 'thermal:energy_duct_4'});
    event.shaped(
        Item.of('thermal:energy_duct', 6),
        [
            'LGL',
            'RRR',
            'LGL'
        ],
        {
            L: 'thermal:lead_plate',
            R: 'minecraft:redstone',
            G: '#forge:glass'
        }
    );

    // gearworking die
    event.remove({id: 'thermal:press_gear_die'});
    event.shaped('thermal:press_gear_die',
        [
            ' I ',
            'ICI',
            ' I '
        ],
        {
            I: 'thermal:invar_plate',
            C: 'thermal:wrench'
        }
    ).keepIngredient('thermal:wrench');

    
});