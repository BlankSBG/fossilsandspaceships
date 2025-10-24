ServerEvents.recipes(event => {
    // warp stone
    event.remove({id: 'waystones:warp_stone'});
    event.shaped('waystones:warp_stone',
        [
            'AEA',
            'ECE',
            'AEA'
        ],
        {
            A: 'minecraft:amethyst_shard',
            E: 'thermal:enderium_ingot',
            C: 'mekanism:teleportation_core'
        }
    );

    // waystone
    event.remove({id: 'waystones:waystone'});
    event.shaped('waystones:waystone',
        [
            ' S ',
            'SWS',
            'SSS'
        ],
        {
            S: 'minecraft:stone_bricks',
            W: 'waystones:warp_stone'
        }
    );

    // mossy waystone
    event.remove({id: 'waystones:mossy_waystone'});
    event.shaped('waystones:mossy_waystone',
        [
            ' S ',
            'SWS',
            'SSS'
        ],
        {
            S: 'minecraft:mossy_stone_bricks',
            W: 'waystones:warp_stone'
        }
    );

    // sandy waystone
    event.remove({id: 'waystones:sandy_waystone'});
    event.shaped('waystones:sandy_waystone',
        [
            ' S ',
            'SWS',
            'SSS'
        ],
        {
            S: 'minecraft:chiseled_sandstone',
            W: 'waystones:warp_stone'
        }
    );

    // deepslate waystone
    event.remove({id: 'waystones:deepslate_waystone'});
    event.shaped('waystones:deepslate_waystone',
        [
            ' S ',
            'SWS',
            'SSS'
        ],
        {
            S: 'minecraft:deepslate_bricks',
            W: 'waystones:warp_stone'
        }
    );

    // blackstone waystone
    event.remove({id: 'waystones:blackstone_waystone'});
    event.shaped('waystones:blackstone_waystone',
        [
            ' S ',
            'SWS',
            'SSS'
        ],
        {
            S: 'minecraft:blackstone',
            W: 'waystones:warp_stone'
        }
    );

    // endstone waystone
    event.remove({id: 'waystones:end_stone_waystone'});
    event.shaped('waystones:end_stone_waystone',
        [
            ' S ',
            'SWS',
            'SSS'
        ],
        {
            S: 'minecraft:end_stone_bricks',
            W: 'waystones:warp_stone'
        }
    );
})