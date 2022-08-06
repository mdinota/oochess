import { assertPieceInSquareIs } from "./assertions";
import PieceColour from '../domain/piece_colour';
import Game from '../domain/game';

require('should');

suite('Game', () => {
	let game;

	setup(() => {
		game = Game.newStandard();
	});

	test('games have 2 players: one white and the other black', () => {
		game.whitePlayer().hasColour(PieceColour.white()).should.be.true;
		game.blackPlayer().hasColour(PieceColour.black()).should.be.true;
	});

	test('games start with pieces setup', () => {
		const board = game.board();
		const white = PieceColour.white();
		const black = PieceColour.black();

		assertPieceInSquareIs('rook', white, 'a1', board);
		assertPieceInSquareIs('knight', white, 'b1', board);
		assertPieceInSquareIs('bishop', white, 'c1', board);
		assertPieceInSquareIs('queen', white, 'd1', board);
		assertPieceInSquareIs('king', white, 'e1', board);
		assertPieceInSquareIs('bishop', white, 'f1', board);
		assertPieceInSquareIs('knight', white, 'g1', board);
		assertPieceInSquareIs('rook', white, 'h1', board);
		assertPieceInSquareIs('pawn', white, 'a2', board);
		assertPieceInSquareIs('pawn', white, 'b2', board);
		assertPieceInSquareIs('pawn', white, 'c2', board);
		assertPieceInSquareIs('pawn', white, 'd2', board);
		assertPieceInSquareIs('pawn', white, 'e2', board);
		assertPieceInSquareIs('pawn', white, 'f2', board);
		assertPieceInSquareIs('pawn', white, 'g2', board);
		assertPieceInSquareIs('pawn', white, 'h2', board);

		assertPieceInSquareIs('rook', black, 'a8', board);
		assertPieceInSquareIs('knight', black, 'b8', board);
		assertPieceInSquareIs('bishop', black, 'c8', board);
		assertPieceInSquareIs('queen', black, 'd8', board);
		assertPieceInSquareIs('king', black, 'e8', board);
		assertPieceInSquareIs('bishop', black, 'f8', board);
		assertPieceInSquareIs('knight', black, 'g8', board);
		assertPieceInSquareIs('rook', black, 'h8', board);
		assertPieceInSquareIs('pawn', black, 'a7', board);
		assertPieceInSquareIs('pawn', black, 'b7', board);
		assertPieceInSquareIs('pawn', black, 'c7', board);
		assertPieceInSquareIs('pawn', black, 'd7', board);
		assertPieceInSquareIs('pawn', black, 'e7', board);
		assertPieceInSquareIs('pawn', black, 'f7', board);
		assertPieceInSquareIs('pawn', black, 'g7', board);
		assertPieceInSquareIs('pawn', black, 'h7', board);
	});
});
