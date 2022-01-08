import AttackDirection from "./attack_direction";

export default class InverseAttackDirection extends AttackDirection{
    isAhead(thisSquare, of) {
        return thisSquare.row() < of.row()
    }
}