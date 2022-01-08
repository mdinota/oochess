import MovementRule from "./movement_rule";

export default class DiagonalMovementRule extends MovementRule {
  static new() {
    return new this();
  }

  canMove(piece, from, to, board) {
    return from.absoluteRowDistanceTo(to) === from.absoluteColumnDistanceTo(to) && this.noSquaresOccupied(from, to, board);
  }
}
