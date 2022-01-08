import MovementRule from "./movement_rule";

export default class ForwardMovementRule extends MovementRule {
    static by(squaresAtATime) {
        return new this(squaresAtATime);
    }

    constructor(squaresAtATime) {
        super();
        this._squaresAtATime = squaresAtATime;
    }

    canMove(piece, from, to, board) {
        const attackDirection = piece.colour().attackDirection();

        return to.column() === from.column() && attackDirection.isAhead(to, from) && from.absoluteRowDistanceTo(to) === this._squaresAtATime;
    }
}