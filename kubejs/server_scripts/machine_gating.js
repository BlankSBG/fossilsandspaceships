ServerEvents.recipes(event =>{
    
    //early game electricity

        // windmill
        event.remove({id: 'immersiveengineering:crafting/windmill'})
        event.shaped('immersiveengineering:windmill',
            [
                'WWW',
                'WPW',
                'WWW'
            ],
            {
                W: 'immersiveengineering:windmill_blade',
                P: 'thermal:iron_plate'
            }
        );

        // LV wire connector / relay
        event.remove({id: 'immersiveengineering:crafting/connector_lv'});
        event.remove({id: 'immersiveengineering:crafting/connector_lv_relay'});
        event.shaped(
            Item.of('immersiveengineering:connector_lv', 4),
            [
                ' P ',
                'BPB',
                'BPB'
            ],
            {
                P: 'thermal:copper_plate',
                B: 'tconstruct:seared_brick'
            }
        );
        event.shaped(
            Item.of('immersiveengineering:connector_lv_relay', 6),
            [
                ' P ',
                'BPB',
                'BPB'
            ],
            {
                P: 'thermal:copper_plate',
                B: 'minecraft:brick'
            }
        );
    
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
                L: 'thermal:iron_plate',
                I: 'thermal:tin_plate',
                F: 'thermal:flux_capacitor'
            }
        );

            // press molds
            event.remove({id: 'immersiveengineering:blueprint/mold_plate'});
            event.shaped('immersiveengineering:mold_plate',
                [
                    ' T ',
                    'TCT',
                    ' T '
                ],
                {
                    T: 'thermal:tin_plate',
                    C: 'thermal:wrench'
                }
            ).keepIngredient('thermal:wrench');
            
            event.remove({id: 'immersiveengineering:blueprint/mold_gear'});
            event.shaped('immersiveengineering:mold_gear',
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