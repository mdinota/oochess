
export default class CompositeMovementRule {
    static from(firstRule, secondRule) {
        return new this(firstRule, secondRule);
    }

    constructor(firstRule, secondRule) {
        this._firstRule = firstRule;
        this._secondRule = secondRule;
    }

    or(anotherRule) {
        return this.constructor.from(this, anotherRule);
    }

    canMove(piece, from, to, board) {
        return this._firstRule.canMove(piece, from, to, board) ||  this._secondRule.canMove(piece, from, to, board);
    }
}