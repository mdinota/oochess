export default class BoardDirection {
  static fromDirectionVector(directionVector) {
    this.assertValidDirectionVector(directionVector);
    return new this(directionVector);
  }

  static assertValidDirectionVector(directionVector) {
    if(!(directionVector.length === 2 && directionVector.every((value) => value => -1 && value <= 1 ))) {
      throw new Error('Invalid direction vector: ' + directionVector);
    }
  }

  constructor(directionVector) {
    this._directionVector = directionVector;
  }

  nextSquareFrom(square, board) {
    return board.squareInRowAndColumn(square.row() + this.verticalDelta(), square.columnNumber() + this.horizontalDelta());
  }

  inverse() {
    return BoardDirection.fromDirectionVector(this._directionVector.map((direction) => -1 * direction));
  }

  verticalDelta() {
    return this._directionVector[1];
  }

  horizontalDelta() {
    return this._directionVector[0];
  }
}
