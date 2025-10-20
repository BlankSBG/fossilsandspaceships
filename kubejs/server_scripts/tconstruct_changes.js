ServerEvents.recipes(event => {
    
    // normal smeltery
    
    event.remove({id: 'tconstruct:smeltery/seared/melter'});
    event.remove({id: 'tconstruct:smeltery/seared/heater'});
    event.shaped('tconstruct:smeltery_controller',
        [
            'BBB',
            'B B',
            'BBB'
        ],
        {
            B: 'tconstruct:seared_brick'
        }
    );

    // normal crafting station

    event.remove({id: 'tconstruct:tables/crafting_station'});
    event.remove({id: 'tconstruct:tables/crafting_station_from_logs'});
    event.shapeless('tconstruct:crafting_station', ['minecraft:crafting_table']);

    // normal part builder

    event.remove({id: 'tconstruct:tables/part_builder'});
    event.shaped('tconstruct:part_builder',
        [
            'P ',
            'L '
        ],
        {
            P: 'tconstruct:pattern',
            L: '#minecraft:logs'
        }
    );

    // normal tinker station

    event.remove({id: 'tconstruct:tables/tinker_station'});
    event.shaped('tconstruct:tinker_station',
        [
            'P ',
            'C '
        ],
        {
            P: 'tconstruct:pattern',
            C: '#forge:workbenches'
        }
    )
});

