import { SHADOW_ITEM_MARKER_PROPERTY_NAME, TRIGGERS } from "svelte-dnd-action-gungi";
import type { BoardPiece, BoardSquare, Piece } from "./pieces";

export type PlayerData = {
    name: string;
    color: string;
    piece_data: Piece[];
}

export type DragData = {piece: Piece, color: 'black' | 'white'}

export function stockpileDragStart(e: DragEvent,piece: Piece,player_number: number): {piece: Piece, element: HTMLElement} {
    const element = (e.target as HTMLElement).cloneNode(true) as HTMLElement;
    e.dataTransfer?.setData("application/json", JSON.stringify({piece , color: player_number === 0 ? 'white' : 'black'}));
    return { piece, element};
}

let shouldIgnoreDndEvents = false;
export function handleStockpileDnDConsider(e: CustomEvent,player_data: PlayerData): PlayerData {
    const { trigger, id } = e.detail.info;
    const items = player_data.piece_data;
    if (trigger === TRIGGERS.DRAG_STARTED) {
        const idx = items.findIndex((item) => item.id === id);
        const newId = `${id}_copy_${Math.round(Math.random() * 100000)}`;
        // the line below was added in order to be compatible with version svelte-dnd-action 0.7.4 and above
        e.detail.items = e.detail.items.filter(
            (item: Piece) => !item[SHADOW_ITEM_MARKER_PROPERTY_NAME as keyof Piece]
        );
        e.detail.items.splice(idx, 0, { ...items[idx], id: newId });
        player_data.piece_data = e.detail.items;
        shouldIgnoreDndEvents = true;
    } else if (!shouldIgnoreDndEvents) {
        player_data.piece_data = e.detail.items;
    } else {
        player_data.piece_data = [...items];
    }

    return player_data
}
