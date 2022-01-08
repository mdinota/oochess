import Board from "../board";

export default class Square {
    constructor(row, column) {
        this._row = parseInt(row);
        this._column = column;
    }

    row() {
        return this._row;
    }

    column() {
        return this._column;
    }

    columnNumber() {
        return Board.columns().indexOf(this.column()) + 1;
    }

    name() {
        return this.column() + this.row();
    }

    occupyWith(piece) {
        throw new Error('subclass responsibility');
    }

    isOccupied() {
        throw new Error('subclass responsibility');
    }

    absoluteRowDistanceTo(anotherSquare) {
        return Math.abs(this.rowDistanceTo(anotherSquare));
    }

    absoluteColumnDistanceTo(anotherSquare) {
        return Math.abs(this.columnDistanceTo(anotherSquare));
    }

    rowDistanceTo(anotherSquare) {
        return this.row() - anotherSquare.row();
    }

    columnDistanceTo(anotherSquare) {
        return this.columnNumber() - anotherSquare.columnNumber();
    }

    isEqualTo(anotherSquare) {
        return this.row() === anotherSquare.row() && this.column() === anotherSquare.column();
    }
}
