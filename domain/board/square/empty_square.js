import Square from "./square";
import OccupiedSquare from "./occupied_square";

export default class EmptySquare extends Square {
    static for(row, column) {
        return new this(row, column);
    }

    occupyWith(piece) {
        return OccupiedSquare.with(piece, this.row(), this.column());
    }

    isOccupied() {
        return false;
    }
}