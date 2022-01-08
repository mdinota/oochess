import EmptySquare from "./square/empty_square";
import BoardDirection from "./board_direction";

export default class Board {
    static newEmptyBoard() {
        return new this();
    }

    static rows() {
        return ['1', '2', '3', '4', '5', '6', '7', '8'];
    }

    static columns() {
        return ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    }

    constructor() {
        this.initializeSquares();
    }

    squares() {
        return Object.values(this.squaresByName());
    }

    squareNamed(name) {
        if (name in this.squaresByName()) {
            return this.squaresByName()[name];
        }

        throw new Error('square out of board');
    }

    initializeSquares() {
        this._squaresByName = {};
        this.constructor.columns().forEach((columnName) => {
            this.constructor.rows().forEach((rowName) => {
                const square = EmptySquare.for(rowName, columnName);
                this._squaresByName[square.name()] = square;
            });
        });
    }

    squaresByName() {
        return this._squaresByName;
    }

    occupiedSquares() {
        return this.squares().filter((square) => square.isOccupied());
    }

    placePiece(piece, squareName) {
        const newSquare = this.squareNamed(squareName).occupyWith(piece);
        this.inBoardPlacePut(squareName, newSquare);
    }

    squareIsOccupied(squareName) {
        return this.squareNamed(squareName).isOccupied();
    }

    pieceInSquare(squareName) {
        return this.squareNamed(squareName).ocuppiedBy();
    }

    movePiece(piece, toSquareName) {
        this.removePiece(piece);
        this.placePiece(piece, toSquareName);
    }

    removePiece(piece) {
        const pieceSquare = this.findPieceSquare(piece);
        this.inBoardPlacePut(pieceSquare.name(), pieceSquare.empty());
    }

    findPieceSquare(piece, ifNotFoundDo = () => { throw new Error('piece not found') }) {
        const square = this.occupiedSquares().find((square) => square.ocuppiedBy() === piece);

        if(square !== undefined) {
            return square;
        }

        ifNotFoundDo();
    }

    inBoardPlacePut(placeName, newSquare) {
        this._squaresByName[placeName] = newSquare;
    }

    squaresInBetween(fromSquare, toSquare) {
        const inBetween = [];
        const direction = this.findDirectionBetweenSquares(fromSquare, toSquare);
        const inverseDirection = direction.inverse();
        let currentSquare = fromSquare;
        const lastSquare = inverseDirection.nextSquareFrom(toSquare, this);

        while(!currentSquare.isEqualTo(lastSquare)) {
            currentSquare = direction.nextSquareFrom(currentSquare, this);
            inBetween.push(currentSquare);
        }

        return inBetween;
    }

    squareInRowAndColumn(row, columnNumber) {
        const column = this.constructor.columns()[columnNumber - 1];
        return this.squareNamed(column + row);
    }

    findDirectionBetweenSquares(fromSquare, toSquare) {
        const horizontalDistance = toSquare.columnDistanceTo(fromSquare);
        const verticalDistance = toSquare.rowDistanceTo(fromSquare);
        const horizontalDirection = horizontalDistance !== 0 ? horizontalDistance / Math.abs(horizontalDistance) : 0;
        const verticalDirection = verticalDistance !== 0 ? verticalDistance / Math.abs(verticalDistance) : 0;

        return BoardDirection.fromDirectionVector([horizontalDirection, verticalDirection]);
    }
}
