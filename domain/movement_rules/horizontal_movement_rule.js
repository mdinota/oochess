import LinearMovementRule from './linear_movement_rule';

export default class HorizontalMovementRule extends LinearMovementRule {
    _directionIsValid(from, to) {
        return to.row() === from.row();
    }

    _distance(from, to) {
        return from.absoluteColumnDistanceTo(to);
    }
}
