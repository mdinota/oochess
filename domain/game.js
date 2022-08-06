import Board from './board/board';
import Player from './player';

export default class Game {
	static newStandard() {
		const board = Board.newEmptyBoard();

		return new this(
			board,
			Player.newWhitePlayerFor(board),
			Player.newBlackPlayerFor(board)
		);
	}

	constructor(board, whitePlayer, blackPlayer) {
		this._board = board;
		this._whitePlayer = whitePlayer;
		this._blackPlayer = blackPlayer;

		this._setupPiecesInBoard();
	}

	_setupPiecesInBoard() {
		this.whitePlayer().placeRook('a1');
		this.whitePlayer().placeKnight('b1');
		this.whitePlayer().placeBishop('c1');
		this.whitePlayer().placeQueen('d1');
		this.whitePlayer().placeKing('e1');
		this.whitePlayer().placeBishop('f1');
		this.whitePlayer().placeKnight('g1');
		this.whitePlayer().placeRook('h1');
		this.whitePlayer().placePawn('a2');
		this.whitePlayer().placePawn('b2');
		this.whitePlayer().placePawn('c2');
		this.whitePlayer().placePawn('d2');
		this.whitePlayer().placePawn('e2');
		this.whitePlayer().placePawn('f2');
		this.whitePlayer().placePawn('g2');
		this.whitePlayer().placePawn('h2');

		this.blackPlayer().placeRook('a8');
		this.blackPlayer().placeKnight('b8');
		this.blackPlayer().placeBishop('c8');
		this.blackPlayer().placeQueen('d8');
		this.blackPlayer().placeKing('e8');
		this.blackPlayer().placeBishop('f8');
		this.blackPlayer().placeKnight('g8');
		this.blackPlayer().placeRook('h8');
		this.blackPlayer().placePawn('a7');
		this.blackPlayer().placePawn('b7');
		this.blackPlayer().placePawn('c7');
		this.blackPlayer().placePawn('d7');
		this.blackPlayer().placePawn('e7');
		this.blackPlayer().placePawn('f7');
		this.blackPlayer().placePawn('g7');
		this.blackPlayer().placePawn('h7');
	}

	whitePlayer() {
		return this._whitePlayer;
	}

	blackPlayer() {
		return this._blackPlayer;
	}

	board() {
		return this._board;
	}
}
