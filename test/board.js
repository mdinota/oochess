import Board from "../domain/board/board";
import Square from "../domain/board/square/square";
import Piece from "../domain/piece";

require('should');


suite('Board', () => {
    let board;
    let piece;

    setup(() => {
        board = Board.newEmptyBoard();
        piece = Piece.newPawn();
    });


    test('Boards have 64 squares', () => {
        board.squares().length.should.equal(64);
    });

    test('Boards have 8 rows', () => {
        Board.rows().length.should.equal(8);
    });

    test('Boards have 8 columns', () => {
        Board.columns().length.should.equal(8);
    });

    test('Squares are named', () => {
        board.squareNamed('a1').should.be.an.instanceOf(Square);
    });

    test('raise an error if square is out of the board', () => {
        (() => { board.squareNamed('c9') }).should.throw('square out of board');
    });

    test('Place a piece in a square', () => {
        board.placePiece(piece, 'a1');

        board.squareIsOccupied('a1').should.equal(true);
        board.occupiedSquares('a1').should.eql([board.squareNamed('a1')])
    });

    test('Piece in a square should be the one placed there', () => {
        board.placePiece(piece, 'a1');

        board.pieceInSquare('a1').should.equal(piece);
    });

    test('Placing a piece in an ocuppied square should raise an error', () => {
        board.placePiece(piece, 'a1');

        (() => { board.placePiece(piece, 'a1'); }).should.throw('square is occupied');
    });
});