import ForwardMovementRule from "./movement_rules/forward_movement_rule";
import VerticalMovementRule from "./movement_rules/vertical_movement_rule";
import HorizontalMovementRule from "./movement_rules/horizontal_movement_rule";
import DiagonalMovementRule from "./movement_rules/diagonal_movement_rule";
import KnightMovementRule from './movement_rules/knight_movement_rule';

export default class Piece {
    static newPawn(colour) {
        return new this('pawn', colour, ForwardMovementRule.by(1));
    }

    static newRook(colour) {
        const verticalMovement = VerticalMovementRule.new();
        const horizontalMovement = HorizontalMovementRule.new();
        return new this('rook', colour, verticalMovement.or(horizontalMovement));
    }

    static newBishop(colour) {
        return new this('bishop', colour, DiagonalMovementRule.new());
    }

    static newKnight(colour) {
        return new this('knight', colour, new KnightMovementRule());
    }

    static newQueen(colour) {
        const verticalMovement = VerticalMovementRule.new();
        const horizontalMovement = HorizontalMovementRule.new();
        const diagonalMovement = DiagonalMovementRule.new();
        return new this('queen', colour, verticalMovement.or(horizontalMovement).or(diagonalMovement));
    }

    constructor(name, colour, movementRule) {
        this._name = name;
        this._colour = colour;
        this._movementRule = movementRule;
    }

    name() {
        return this._name;
    }

    colour() {
        return this._colour;
    }

    hasSameColourAs(anotherPiece) {
        return this.hasColour(anotherPiece.colour());
    }

    hasColour(colour) {
        return this.colour() === colour;
    }

    canBeMoved(targetSquareName, board) {
        const currentSquare = board.findPieceSquare(this);
        const targetSquare = board.squareNamed(targetSquareName);

        return this._movementRule.canMove(this, currentSquare, targetSquare, board);
    }
}
