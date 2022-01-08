import MovementRule from "./movement_rule";

export default class VerticalMovementRule extends MovementRule {
    static new() {
        return new this();
    }

    canMove(piece, from, to, board) {
        return to.column() === from.column() && this.noSquaresOccupied(from, to, board);
    }


}
