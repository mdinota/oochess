import MovementRule from "./movement_rule";

export default class LinearMovementRule extends MovementRule {
	static new() {
		return new this();
	}

	static by(squaresAtATime) {
		return new this(squaresAtATime);
	}

	constructor(squaresAtATime) {
		super();
		this._squaresAtATime = squaresAtATime;
	}

	canMove(piece, from, to, board) {
		return this._directionIsValid(from, to) && this.noSquaresOccupied(from, to, board) && this._distanceIsValid(from, to);
	}

	_distanceIsValid(from, to) {
		return !this._squaresAtATime || this._distance(from, to) === this._squaresAtATime;
	}

	_distance(from, to) {
		throw 'Subclass responsibility';
	}

	_directionIsValid(from, to) {
		throw 'Subclass responsibility';
	}
}
