ServerEvents.recipes(event => {
   
    // remove item filters
    event.remove({mod: 'itemfilters'})
    
    // add rabbits food
    event.shaped('minecraft:rabbit_foot',
        [
            'HHH',
            'HBH',
            'HHH'
        ],
        {
            H: 'minecraft:rabbit_hide',
            B: 'minecraft:bone'
        }
    )
});