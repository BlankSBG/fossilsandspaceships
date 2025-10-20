ServerEvents.recipes(event => {

    // stirling dynamo
    event.remove({id: 'thermal:dynamo_stirling'});
    event.shaped('thermal:dynamo_stirling',
        [
            ' F ',
            'IEI',
           'SRS'
        ],
        {
            F: 'thermal:rf_coil',
            I: 'thermal:iron_plate',
            E: 'thermal:electrum_plate',
            S: '#forge:stone',
            R: 'minecraft:redstone'
        }
    );



});