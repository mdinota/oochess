import Piece from "./piece";
import PieceColour from "./piece_colour";
import Capture from './moves/capture';
import MoveToUnoccupiedSquare from './moves/move_to_unccupied_sqaure';

export default class Player {
    static newWhitePlayerFor(board) {
        return this.newPlayer(board, PieceColour.white());
    }

    static newBlackPlayerFor(board) {
        return this.newPlayer(board, PieceColour.black());
    }

    static newPlayer(board, colour) {
        return new this(board, colour);
    }

    constructor(board, colour) {
        this._board = board;
        this._colour = colour;
    }

    board() {
        return this._board;
    }

    colour() {
        return this._colour;
    }

    move(piece, targetSquare) {
        let move;

        if(this.board().squareIsOccupied(targetSquare)) {
            move = Capture.of(piece, targetSquare, this.board());
        } else {
            move = MoveToUnoccupiedSquare.of(piece, targetSquare, this.board());
        }

        move.apply();
    }

    placePawn(targetSquare) {
        return this.placePieceInBoard(Piece.newPawn(this.colour()), targetSquare);
    }

    placeRook(targetSquare) {
        return this.placePieceInBoard(Piece.newRook(this.colour()), targetSquare);
    }

    placeBishop(targetSquare) {
        return this.placePieceInBoard(Piece.newBishop(this.colour()), targetSquare);
    }

    placeQueen(targetSquare) {
        return this.placePieceInBoard(Piece.newQueen(this.colour()), targetSquare);
    }

    placeKnight(targetSquare) {
        return this.placePieceInBoard(Piece.newKnight(this.colour()), targetSquare);
    }

    placeKing(targetSquare) {
        return this.placePieceInBoard(Piece.newKing(this.colour()), targetSquare);
    }

    placePieceInBoard(piece, targetSquare) {
        this.board().placePiece(piece, targetSquare);

        return piece;
    }
}
