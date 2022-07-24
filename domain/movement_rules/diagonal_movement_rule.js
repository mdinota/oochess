import LinearMovementRule from './linear_movement_rule';

export default class DiagonalMovementRule extends LinearMovementRule {
  _directionIsValid(from, to) {
    return from.absoluteRowDistanceTo(to) === from.absoluteColumnDistanceTo(to);
  }

  _distance(from, to) {
    return from.absoluteColumnDistanceTo(to);
  }
}
