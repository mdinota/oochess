import Piece from "../../domain/piece";
import Board from "../../domain/board/board";
import Player from "../../domain/player";
import {assertMovementIsNotPermitted, assertPieceMoved} from "../assertions";

require('should');


suite('Pawn', () => {
    test('A pawn can be created', () => {
        const pawn = Piece.newPawn();

        pawn.name().should.equal('pawn');
    });

    test('White pawns can move forward', () => {
        const board = Board.newEmptyBoard();
        const player = Player.newWhitePlayerFor(board);

        const pawn = player.placePawn('a1');
        player.move(pawn, 'a2');

        assertPieceMoved(pawn, 'a1', 'a2', board);
    });

    test('Black pawns cannot move backwards', () => {
        const board = Board.newEmptyBoard();
        const player = Player.newBlackPlayerFor(board);

        const pawn = player.placePawn('a1');

        assertMovementIsNotPermitted(player, pawn, 'a2');
    });

    test('Pawns cannot move backwards', () => {
        const board = Board.newEmptyBoard();
        const player = Player.newWhitePlayerFor(board);

        const pawn = player.placePawn('b1');

        assertMovementIsNotPermitted(player, pawn, 'a1');
    });

    test('Pawns cannot move in a diagonal', () => {
        const board = Board.newEmptyBoard();
        const player = Player.newWhitePlayerFor(board);

        const pawn = player.placePawn('a1');
        assertMovementIsNotPermitted(player, pawn, 'b2');
    });

    test('Pawns cannot move more than 2 squares at a time', () => {
        const board = Board.newEmptyBoard();
        const player = Player.newWhitePlayerFor(board);

        const pawn = player.placePawn('a1');
        assertMovementIsNotPermitted(player, pawn, 'a4');
    });
});
