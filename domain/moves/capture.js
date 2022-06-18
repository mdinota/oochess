import Move from './move';

export default class Capture extends Move {
	constructor(piece, targetSquare, board) {
		super(piece, targetSquare, board);

		this._pieceInTargetSquare = this._board.pieceInSquare(this._targetSquare);
	}

	isLegal() {
		return super.isLegal() && this.targetSquarePieceHasDifferentColour();
	}

	targetSquarePieceHasDifferentColour() {
		return !this._pieceInTargetSquare.hasSameColourAs(this._piece);
	}

	applyWhenLegal() {
		this._board.removePiece(this._pieceInTargetSquare);
		this._board.movePiece(this._piece, this._targetSquare);
	}
}
