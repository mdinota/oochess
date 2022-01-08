import Piece from "../../domain/piece";
import Board from "../../domain/board/board";
import Player from "../../domain/player";
import {assertMovementIsNotPermitted, assertPieceMoved} from "../assertions";

require('should');

suite('Rook', () => {
    let board;
    let player;

    setup(() => {
        board = Board.newEmptyBoard();
        player = Player.newWhitePlayerFor(board);
    })

    test('A rook can be created', () => {
        const rook = Piece.newRook();

        rook.name().should.equal('rook');
    });

    test('A rook can move forward', () => {
        const rook = player.placeRook('a1');

        player.move(rook, 'a3');

        assertPieceMoved(rook, 'a1', 'a3', board);
    });

    test('A rook can move backwards', () => {
        const rook = player.placeRook('a5');

        player.move(rook, 'a1');

        assertPieceMoved(rook, 'a5', 'a1', board);
    });

    test('A rook can move right', () => {
        const rook = player.placeRook('a1');

        player.move(rook, 'e1');

        assertPieceMoved(rook, 'a1', 'e1', board);
    });

    test('A rook can move left', () => {
        const rook = player.placeRook('e1');

        player.move(rook, 'a1');

        assertPieceMoved(rook, 'e1', 'a1', board);
    });

    test('A rook cannot move forward if it is blocked by another piece', () => {
        const rook = player.placeRook('a1');
        player.placePawn('a2');

        assertMovementIsNotPermitted(player, rook, 'a3');
    });

    test('A rook cannot move backward if it is blocked by another piece', () => {
        const rook = player.placeRook('a3');
        player.placePawn('a2');

        assertMovementIsNotPermitted(player, rook, 'a1');
    });

    test('A rook cannot move sideways if it is blocked', () => {
        const rook = player.placeRook('a1');
        player.placePawn('b1');

        assertMovementIsNotPermitted(player, rook, 'c1');
    });

    test('A rook cannot move diagonally', () => {
        const rook = player.placeRook('a1');

        assertMovementIsNotPermitted(player, rook, 'c3');
    });
});
