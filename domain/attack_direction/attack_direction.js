export default class AttackDirection {
    static new() {
        return new this();
    }

    isAhead(thisSquare, of) {
        throw new Error('subclass responsibility');
    }
}