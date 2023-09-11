import type { Piece } from "./pieces";

export type PlayerData = {
    name: string;
    color: string;
    piece_data: Piece[];
}