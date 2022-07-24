import LinearMovementRule from './linear_movement_rule';

export default class VerticalMovementRule extends LinearMovementRule {
    _directionIsValid(from, to) {
        return to.column() === from.column()
    }

    _distance(from, to) {
        return from.absoluteRowDistanceTo(to);
    }
}
