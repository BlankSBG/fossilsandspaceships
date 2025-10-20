ServerEvents.recipes(event => {

    // remove hammer recipes

    event.remove({ input: 'immersiveengineering:hammer'});

    // hammer with plates

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

    // wire cutter with plate
    
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
    }
)