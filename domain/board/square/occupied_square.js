import Square from "./square";
import EmptySquare from "./empty_square";

export default class OccupiedSquare extends Square {
    static with(piece, row, column) {
        return new this(piece, row, column);
    }

    constructor(piece, row, column) {
        super(row, column);

        this._piece = piece;
    }

    occupyWith(piece) {
        throw new Error('square is occupied');
    }

    ocuppiedBy() {
        return this._piece;
    }

    isOccupied() {
        return true;
    }

    empty() {
        return EmptySquare.for(this.row(), this.column());
    }
}