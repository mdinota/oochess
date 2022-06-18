import Move from './move';

export default class MoveToUnoccupiedSquare extends Move {
	applyWhenLegal() {
		this._board.movePiece(this._piece, this._targetSquare);
	}
}
