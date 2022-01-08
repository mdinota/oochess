import ForwardAttackDirection from "./attack_direction/forward_attack_direction";
import InverseAttackDirection from "./attack_direction/inverse_attack_direction";

export default class PieceColour {
    static white() {
        return new this(ForwardAttackDirection.new());
    }

    static black() {
        return new this(InverseAttackDirection.new());
    }

    constructor(attackDirection) {
        this._attackDirection = attackDirection;
    }

    attackDirection() {
        return this._attackDirection;
    }
}