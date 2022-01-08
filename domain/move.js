export default class Move {
    static of(piece, targetSquare, board) {
        return new this(piece, targetSquare, board);
    }

    constructor(piece, targetSquare, board) {
        this._piece = piece;
        this._targetSquare = targetSquare;
        this._board = board;
    }

    isLegal() {
        return this._piece.canBeMoved(this._targetSquare, this._board);
    }

    apply() {
        if(!this.isLegal()){
            throw new Error('Move is not permitted');
        }

        this._board.movePiece(this._piece, this._targetSquare);
    }
}
