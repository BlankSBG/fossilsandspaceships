ServerEvents.recipes(event => {

    // remove metal press recipes
    event.remove({id: 'immersiveengineering:metalpress/wire_copper'})
    event.remove({id: 'immersiveengineering:metalpress/wire_electrum'})
    event.remove({id: 'immersiveengineering:metalpress/wire_steel'})
    event.remove({id: 'immersiveengineering:metalpress/wire_lead'})
    event.remove({id: 'immersiveengineering:metalpress/rod_iron'})
    event.remove({id: 'immersiveengineering:metalpress/rod_steel'})
    event.remove({id: 'immersiveengineering:metalpress/electrode'})
    event.remove({id: 'immersiveengineering:metalpress/bullet_casing'})
    event.remove({id: 'immersiveengineering:metalpress/'})
    event.remove({id: 'immersiveengineering:metalpress/'})
    
    // electricity crafting changes
        
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

        // LV accumulator
        event.remove({id: 'immersiveengineering:crafting/capacitor_lv'});
        event.shaped('immersiveengineering:capacitor_lv',
            [
                'WEW',
                'LPL',
                'WCW'
            ],
            {
                W: '#forge:treated_wood',
                E: 'thermal:electrum_plate',
                L: 'thermal:lead_plate',
                P: 'thermal:flux_capacitor',
                C: 'immersiveengineering:coil_lv'
            }
        )

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

    // remove hammer recipes, make it only activate multiblocks

    event.remove({ input: 'immersiveengineering:hammer'});

    // make IE hammer with plates

    event.remove({id: 'immersiveengineering:crafting/hammer'})
    event.shaped('immersiveengineering:hammer',
        [
            ' IS',
            ' TI',
            'T  '
        ],
        {
            I: 'thermal:invar_plate',
            S: '#forge:string',
            T: '#forge:rods/wooden'
        }
    );

    // make wire cutter with plate
    
    event.remove({id: 'immersiveengineering:crafting/wirecutter'});
    event.shaped('immersiveengineering:wirecutter',
        [
            'SI',
            ' S'
        ],
        {
            S: 'immersiveengineering:stick_treated',
            I: 'thermal:iron_plate'
        }
    )

    // remove mold blueprint recipes
    event.remove({ id: 'immersiveengineering:blueprint/mold_plate' });
    event.remove({ id: 'immersiveengineering:blueprint/mold_packing_4' })
    event.remove({ id: 'immersiveengineering:blueprint/mold_unpacking' })
    event.remove({ id: 'immersiveengineering:blueprint/mold_gear' });
    event.remove({ id: 'immersiveengineering:blueprint/mold_rod' });
    event.remove({ id: 'immersiveengineering:blueprint/mold_bullet_casing' });
    event.remove({ id: 'immersiveengineering:blueprint/mold_packing_9' });
    event.remove({ id: 'immersiveengineering:blueprint/mold_wire' })

    // new mold recipes

        // plate mold
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

        // gear mold
        event.remove({ id: 'thermal:press_gear_die' });
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

        // wire mold
        event.shaped('immersiveengineering:mold_wire',
            [
                ' C ',
                'CWC',
                ' C '
            ],
            {
                C: 'thermal:copper_plate',
                W: 'thermal:wrench'
            }
        ).keepIngredient('thermal:wrench')
            
    // external heater recipe
            event.remove({id: 'immersiveengineering:crafting/furnace_heater'});
            event.shaped('immersiveengineering:furnace_heater',
                [
                    'PWP',
                    'WMW',
                    'PCP'
                ],
                {
                    P: 'thermal:copper_plate',
                    W: 'immersiveengineering:wirecoil_copper',
                    M: 'immersiveengineering:sheetmetal_iron',
                    C: 'thermal:flux_capacitor'
                }
            )

})
