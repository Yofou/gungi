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

export function dropPieceOnBoard(e: DragEvent,square: BoardSquare): BoardSquare {
    console.log(2)
    const { piece , color }: DragData = JSON.parse(e.dataTransfer?.getData("application/json") ?? '');
    square.pieces.unshift({color: color, piece_type: piece.display_name.toLowerCase().replaceAll(' ','') as BoardPiece['piece_type']});
    return square
}