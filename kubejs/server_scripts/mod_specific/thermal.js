ServerEvents.recipes(event => {

    // machines
    
        // multiservo press

            // changed recipe
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

            // plates

                // remove all plate recipes
                event.remove({ output: '#forge:plates' })

                // plates with TiC hammer
                event.shapeless('thermal:nickel_plate', ['thermal:nickel_ingot', 'tconstruct:sledge_hammer']).damageIngredient('tconstruct:sledge_hammer', 10)
                event.shapeless('thermal:silver_plate', ['thermal:silver_ingot', 'tconstruct:sledge_hammer']).damageIngredient('tconstruct:sledge_hammer', 10)
                event.shapeless('thermal:lead_plate', ['thermal:lead_ingot', 'tconstruct:sledge_hammer']).damageIngredient('tconstruct:sledge_hammer', 10)
                event.shapeless('thermal:tin_plate', ['thermal:tin_ingot', 'tconstruct:sledge_hammer']).damageIngredient('tconstruct:sledge_hammer', 10)
                event.shapeless('thermal:copper_plate', ['minecraft:copper_ingot', 'tconstruct:sledge_hammer']).damageIngredient('tconstruct:sledge_hammer', 10)
                event.shapeless('thermal:gold_plate', ['minecraft:gold_ingot', 'tconstruct:sledge_hammer']).damageIngredient('tconstruct:sledge_hammer', 10)
                event.shapeless('thermal:iron_plate', ['minecraft:iron_ingot', 'tconstruct:sledge_hammer']).damageIngredient('tconstruct:sledge_hammer', 10)

                // plates with multiservo press
                event.recipes.thermal.press('thermal:steel_plate', [Item.of('thermal:steel_ingot', 2), 'immersiveengineering:mold_plate']);
                event.recipes.thermal.press('thermal:rose_gold_plate', [Item.of('thermal:rose_gold_ingot', 2), 'immersiveengineering:mold_plate']);
                event.recipes.thermal.press('thermal:tin_plate', [Item.of('thermal:tin_ingot'), 'immersiveengineering:mold_plate']);
                event.recipes.thermal.press('thermal:lead_plate', [Item.of('thermal:lead_ingot'), 'immersiveengineering:mold_plate']);
                event.recipes.thermal.press('thermal:silver_plate', [Item.of('thermal:silver_ingot'), 'immersiveengineering:mold_plate']);
                event.recipes.thermal.press('thermal:nickel_plate', [Item.of('thermal:nickel_ingot'), 'immersiveengineering:mold_plate']);
                event.recipes.thermal.press('thermal:bronze_plate', [Item.of('thermal:bronze_ingot', 2), 'immersiveengineering:mold_plate']);
                event.recipes.thermal.press('thermal:electrum_plate', [Item.of('thermal:electrum_ingot', 2), 'immersiveengineering:mold_plate']);
                event.recipes.thermal.press('thermal:invar_plate', [Item.of('thermal:invar_ingot', 2), 'immersiveengineering:mold_plate']);
                event.recipes.thermal.press('thermal:constantan_plate', [Item.of('thermal:constantan_ingot', 2), 'immersiveengineering:mold_plate']);
                event.recipes.thermal.press('thermal:iron_plate', [Item.of('minecraft:iron_ingot'), 'immersiveengineering:mold_plate']);
                event.recipes.thermal.press('thermal:gold_plate', [Item.of('minecraft:gold_ingot'), 'immersiveengineering:mold_plate']);
                event.recipes.thermal.press('thermal:copper_plate', [Item.of('minecraft:copper_ingot'), 'immersiveengineering:mold_plate']);
                event.recipes.thermal.press('thermal:netherite_plate', [Item.of('minecraft:netherite_ingot'), 'immersiveengineering:mold_plate']);
                event.recipes.thermal.press('thermal:signalum_plate', [Item.of('thermal:signalum_ingot', 2), 'immersiveengineering:mold_plate']);
                event.recipes.thermal.press('thermal:lumium_plate', [Item.of('thermal:lumium_ingot', 2), 'immersiveengineering:mold_plate']);
                event.recipes.thermal.press('thermal:enderium_plate', [Item.of('thermal:enderium_ingot', 2), 'immersiveengineering:mold_plate']);
                event.recipes.thermal.press('ad_astra:desh_plate', [Item.of('ad_astra:desh_ingot'), 'immersiveengineering:mold_plate']);
                event.recipes.thermal.press('ad_astra:ostrum_plate', [Item.of('ad_astra:ostrum_ingot'), 'immersiveengineering:mold_plate']);
                event.recipes.thermal.press('ad_astra:calorite_plate', [Item.of('ad_astra:calorite_ingot'), 'immersiveengineering:mold_plate']);

            // gears

                // remove all gear recipes
                event.remove({ output: '#forge:gears' });

                // gears with multiservo press
                event.recipes.thermal.press('thermal:steel_gear', [Item.of('thermal:steel_ingot', 2), 'immersiveengineering:mold_gear']);
                event.recipes.thermal.press('thermal:rose_gold_gear', [Item.of('thermal:rose_gold_ingot', 2), 'immersiveengineering:mold_gear']);
                event.recipes.thermal.press('thermal:tin_gear', [Item.of('thermal:tin_ingot', 2), 'immersiveengineering:mold_gear']);
                event.recipes.thermal.press('thermal:lead_gear', [Item.of('thermal:lead_ingot', 2), 'immersiveengineering:mold_gear']);
                event.recipes.thermal.press('thermal:silver_gear', [Item.of('thermal:silver_ingot', 2), 'immersiveengineering:mold_gear']);
                event.recipes.thermal.press('thermal:nickel_gear', [Item.of('thermal:nickel_ingot', 2), 'immersiveengineering:mold_gear']);
                event.recipes.thermal.press('thermal:bronze_gear', [Item.of('thermal:bronze_ingot', 2), 'immersiveengineering:mold_gear']);
                event.recipes.thermal.press('thermal:electrum_gear', [Item.of('thermal:electrum_ingot', 2), 'immersiveengineering:mold_gear']);
                event.recipes.thermal.press('thermal:invar_gear', [Item.of('thermal:invar_ingot', 2), 'immersiveengineering:mold_gear']);
                event.recipes.thermal.press('thermal:constantan_gear', [Item.of('thermal:constantan_ingot', 2), 'immersiveengineering:mold_gear']);
                event.recipes.thermal.press('thermal:ruby_gear', [Item.of('thermal:ruby', 2), 'immersiveengineering:mold_gear']);
                event.recipes.thermal.press('thermal:sapphire_gear', [Item.of('thermal:sapphire', 2), 'immersiveengineering:mold_gear']);
                event.recipes.thermal.press('thermal:iron_gear', [Item.of('minecraft:iron_ingot', 2), 'immersiveengineering:mold_gear']);
                event.recipes.thermal.press('thermal:gold_gear', [Item.of('minecraft:gold_ingot', 2), 'immersiveengineering:mold_gear']);
                event.recipes.thermal.press('thermal:copper_gear', [Item.of('minecraft:copper_ingot', 2), 'immersiveengineering:mold_gear']);
                event.recipes.thermal.press('thermal:netherite_gear', [Item.of('minecraft:netherite_ingot', 2), 'immersiveengineering:mold_gear']);
                event.recipes.thermal.press('thermal:lapis_gear', [Item.of('minecraft:lapis_lazuli', 2), 'immersiveengineering:mold_gear']);
                event.recipes.thermal.press('thermal:diamond_gear', [Item.of('minecraft:diamond', 2), 'immersiveengineering:mold_gear']);
                event.recipes.thermal.press('thermal:emerald_gear', [Item.of('minecraft:emerald', 2), 'immersiveengineering:mold_gear']);
                event.recipes.thermal.press('thermal:quartz_gear', [Item.of('minecraft:quartz', 2), 'immersiveengineering:mold_gear']);
                event.recipes.thermal.press('thermal:signalum_gear', [Item.of('thermal:signalum_ingot', 2), 'immersiveengineering:mold_gear']);
                event.recipes.thermal.press('thermal:lumium_gear', [Item.of('thermal:lumium_ingot', 2), 'immersiveengineering:mold_gear']);
                event.recipes.thermal.press('thermal:enderium_gear', [Item.of('thermal:enderium_ingot', 2), 'immersiveengineering:mold_gear']);

            // wires

                // remove all wire recipes using mold to preserve wire cutter recipes
                event.remove({ id: 'immersiveengineering:metalpress' });

                // wires with multiservo press
                event.recipes.thermal.press('2x immersiveengineering:wire_copper', [Item.of('thermal:copper_plate'), 'immersiveengineering:mold_wire'])
                event.recipes.thermal.press('2x immersiveengineering:wire_electrum', [Item.of('thermal:electrum_plate'), 'immersiveengineering:mold_wire'])
                event.recipes.thermal.press('2x immersiveengineering:wire_steel', [Item.of('thermal:steel_plate'), 'immersiveengineering:mold_wire'])
                event.recipes.thermal.press('2x immersiveengineering:wire_lead', [Item.of('thermal:lead_plate'), 'immersiveengineering:mold_wire'])

            // rods

                // remove all rod recipes
                event.remove({ input: 'immersiveengineering:mold_rod' });

                // rods with multiservo press
                event.recipes.thermal.press('2x immersiveengineering:stick_iron', [Item.of('minecraft:iron_ingot'), 'immersiveengineering:mold_rod'])
                event.recipes.thermal.press('2x immersiveengineering:stick_steel', [Item.of('thermal:steel_ingot'), 'immersiveengineering:mold_rod'])
                event.recipes.thermal.press('immersiveengineering:graphite_electrode', [Item.of('immersiveengineering:ingot_hop_graphite', 4), 'immersiveengineering:mold_rod'])

            // bullet casing lol
            event.recipes.thermal.press('2x immersiveengineering:empty_casing', [Item.of('minecraft:copper_ingot'), 'immersiveengineering:mold_bullet_casing'])

        // redstone furnace

            // changed recipe
            event.remove({ id: 'thermal:machine_furnace' });
            event.shaped('thermal:machine_furnace',
                [
                    ' R ',
                    'BFB',
                    'PCP'
                ],
                {
                    R: 'minecraft:redstone',
                    B: 'minecraft:bricks',
                    F: 'thermal:machine_frame',
                    P: 'thermal:copper_plate',
                    C: 'immersiveengineering:furnace_heater'
                }
            )
    
    // misc recipe changes

        // machine frame recipe
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
    
        // replace flux coil with capacitor
        event.replaceInput(
            { mod: 'thermal'},
            'thermal:rf_coil',
            'thermal:flux_capacitor'
        );

        // crescent hammer
        event.remove({ id: 'thermal:tools/wrench' });
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
        event.remove({ id: 'thermal:redstone_servo' });
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
        event.remove({ id: 'thermal:rf_coil' });
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
        event.remove({ id: 'thermal:flux_capacitor' });
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
        event.remove({ id: 'thermal:energy_duct_4' });
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

    

});