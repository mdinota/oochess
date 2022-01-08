import Move from "./move";
import Piece from "./piece";
import PieceColour from "./piece_colour";

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
        const move = Move.of(piece, targetSquare, this.board());

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

    placePieceInBoard(piece, targetSquare) {
        this.board().placePiece(piece, targetSquare);

        return piece;
    }
}
