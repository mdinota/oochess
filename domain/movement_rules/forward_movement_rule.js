import VerticalMovementRule from './vertical_movement_rule';

export default class ForwardMovementRule extends VerticalMovementRule {
    _directionIsValid(from, to, piece) {
        const attackDirection = piece.colour().attackDirection();

        return super._directionIsValid(from, to) && attackDirection.isAhead(to, from);
    }
}
