import CompositeMovementRule from "./composite_movement_rule";

export default class MovementRule {
    canMove(piece, from, to, board) {
        throw new Error('subclass responsibility');
    }

    or(anotherRule) {
        return CompositeMovementRule.from(this, anotherRule);
    }

    noSquaresOccupied(from, to, board) {
        const squares = board.squaresInBetween(from, to)

        return squares.every((square) => !square.isOccupied());
    }
}