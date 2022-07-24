// noinspection BadExpressionStatementJS

import Piece from "../../domain/piece";
import Board from "../../domain/board/board";
import Player from "../../domain/player";
import PieceColour from "../../domain/piece_colour";
import { assertMovementIsNotPermitted, assertPieceMoved } from '../assertions';

require('should');

suite('King', () => {
	let board;
	let player;

	setup(() => {
		board = Board.newEmptyBoard();
		player = Player.newWhitePlayerFor(board);
	})

	test('A king can be created', () => {
		const king = Piece.newKing(PieceColour.white());

		king.name().should.equal('king');
		king.hasColour(PieceColour.white()).should.be.true;
	});

	test('A king can move one forward', () => {
		const king = player.placeKing('a1');

		player.move(king, 'a2');

		assertPieceMoved(king, 'a1', 'a2', board);
	});

	test('A king cannot move two forward', () => {
		const king = player.placeKing('a1');

		assertMovementIsNotPermitted(player, king, 'a3');
	});

	test('A king can move one backward', () => {
		const king = player.placeKing('a2');

		player.move(king, 'a1');

		assertPieceMoved(king, 'a2', 'a1', board);
	});

	test('A king can move one horizontally', () => {
		const king = player.placeKing('a1');

		player.move(king, 'b1');

		assertPieceMoved(king, 'a1', 'b1', board);
	});

	test('A king cannot move more than one horizontally', () => {
		const king = player.placeKing('a1');

		assertMovementIsNotPermitted(player, king, 'c3');
	});

	test('A king can move one diagonally', () => {
		const king = player.placeKing('a1');

		player.move(king, 'b2');

		assertPieceMoved(king, 'a1', 'b2', board);
	});

	test('A king cannot more than one diagonally', () => {
		const king = player.placeKing('a1');

		assertMovementIsNotPermitted(player, king, 'c3');
	});
});
