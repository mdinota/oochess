import MovementRule from "./movement_rule";

export default class KnightMovementRule extends MovementRule {
	static new() {
		return new this();
	}

	canMove(piece, from, to, board) {
		return from.column() !== to.column() &&
			from.row() !== to.row() &&
			from.absoluteRowDistanceTo(to) + from.absoluteColumnDistanceTo(to) === 3
		;
	}
}
