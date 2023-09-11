export const piece_data: Record<
    string,
    { id: number,amount: number; levels: number; display_name?: string; note?: string }
> = {
    majorgeneral: {id: 1, amount: 4, levels: 3, display_name: 'Major General' },
    lieutenantgeneral: {id: 2, amount: 4, levels: 3, display_name: 'Lieutenant General' },
    general: {id: 3, amount: 6, levels: 3 },
    archer: {id: 4, amount: 2, levels: 3 },
    knight: {id: 5, amount: 2, levels: 3 },
    musketeer: {id: 6, amount: 1, levels: 3 },
    captain: {
        id: 7,
        amount: 1,
        levels: 1,
        note: 'The captain takes on the movement ability of the piece (friendly or opponent) that is directly below it.'
    },
    samurai: {id: 8, amount: 2, levels: 3 },
    fortress: {
        id: 9,
        amount: 1,
        levels: 1,
        note: "Fortresses can't stack on other pieces; they can only be stacked upon."
    },
    cannon: {id: 10, amount: 2, levels: 3 },
    spy: {id: 11, amount: 2, levels: 3 },
    pawn: {id: 12, amount: 9, levels: 3 },
    marshal: {
        id: 14,
        amount: 1,
        levels: 1,
        display_name: 'Marshal (King)',
        note: 'The Marshal moves the same for all tiers. Pieces cannot be stacked on the Marshal.'
    }
};