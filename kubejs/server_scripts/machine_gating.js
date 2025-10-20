ServerEvents.recipes(event =>{
    
    // early game machines

        // multiservo press 
        event.remove({ id: 'thermal:machine_press' });
        event.shaped('thermal:machine_press',
            [
                ' P ',
                'SLS',
                'IFI'
            ],
            {
                P: 'minecraft:piston',
                S: 'thermal:redstone_servo',
                L: 'thermal:invar_plate',
                I: 'thermal:tin_plate',
                F: 'thermal:flux_capacitor'
            }
        );

        // machine frame
        event.remove({ id: 'thermal:machine_frame' });
        event.shaped('thermal:machine_frame',
            [
                'IGI',
                'GTG',
                'IGI'
            ],
            {
                I: 'thermal:iron_plate',
                G: '#forge:glass',
                T: 'thermal:tin_gear'
            }
        );

})