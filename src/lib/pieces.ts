export const piece_data: Record<
    string,
    { amount: number; levels: number; display_name?: string; note?: string }
> = {
    majorgeneral: { amount: 4, levels: 3, display_name: 'Major General' },
    lieutenantgeneral: { amount: 4, levels: 3, display_name: 'Lieutenant General' },
    general: { amount: 6, levels: 3 },
    archer: { amount: 2, levels: 3 },
    knight: { amount: 2, levels: 3 },
    musketeer: { amount: 1, levels: 3 },
    captain: {
        amount: 1,
        levels: 1,
        note: 'The captain takes on the movement ability of the piece (friendly or opponent) that is directly below it.'
    },
    samurai: { amount: 2, levels: 3 },
    fortress: {
        amount: 1,
        levels: 1,
        note: "Fortresses can't stack on other pieces; they can only be stacked upon."
    },
    cannon: { amount: 2, levels: 3 },
    spy: { amount: 2, levels: 3 },
    pawn: { amount: 9, levels: 3 },
    marshal: {
        amount: 1,
        levels: 1,
        display_name: 'Marshal (King)',
        note: 'The Marshal moves the same for all tiers. Pieces cannot be stacked on the Marshal.'
    }
};