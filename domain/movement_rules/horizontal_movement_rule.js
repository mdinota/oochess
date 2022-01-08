import MovementRule from "./movement_rule";

export default class HorizontalMovementRule extends MovementRule {
    static new() {
        return new this();
    }

    canMove(piece, from, to, board) {
        return to.row() === from.row() && this.noSquaresOccupied(from, to, board);
    }
}
