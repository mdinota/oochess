// noinspection BadExpressionStatementJS

import Piece from "../../domain/piece";
import Board from "../../domain/board/board";
import Player from "../../domain/player";
import PieceColour from "../../domain/piece_colour";
import { assertMovementIsNotPermitted, assertPieceMoved } from '../assertions';

require('should');

suite('Knight', () => {
	let board;
	let player;

	setup(() => {
		board = Board.newEmptyBoard();
		player = Player.newWhitePlayerFor(board);
	})

	test('A knight can be created', () => {
		const knight = Piece.newKnight(PieceColour.white());

		knight.name().should.equal('knight');
		knight.hasColour(PieceColour.white()).should.be.true;
	});

	test('A knight can move two forward and one to the right', () => {
		const knight = player.placeKnight('a1');

		player.move(knight, 'b3');

		assertPieceMoved(knight, 'a1', 'b3', board);
	});

	test('A knight can move two forward and one to the left', () => {
		const knight = player.placeKnight('b1');

		player.move(knight, 'a3');

		assertPieceMoved(knight, 'b1', 'a3', board);
	});

	test('A knight can move two to the right and one down', () => {
		const knight = player.placeKnight('a2');

		player.move(knight, 'c1');

		assertPieceMoved(knight, 'a2', 'c1', board);
	});

	test('A knight can move two to the left and one down', () => {
		const knight = player.placeKnight('c2');

		player.move(knight, 'a1');

		assertPieceMoved(knight, 'c2', 'a1', board);
	});

	test('A knight can move even if it is blocked by another piece', () => {
		const knight = player.placeKnight('a1');
		player.placePawn('a2');

		player.move(knight, 'b3');

		assertPieceMoved(knight, 'a1', 'b3', board);
	});

	test('A knight cannot move three squares forward', () => {
		const knight = player.placeKnight('a1');

		assertMovementIsNotPermitted(player, knight, 'a4')
	});

	test('A knight cannot move three squares diagonally', () => {
		const knight = player.placeKnight('a1');

		assertMovementIsNotPermitted(player, knight, 'd4')
	});
});
