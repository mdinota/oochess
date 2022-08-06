export function assertMovementIsNotPermitted(player, piece, targetSquare) {
    (() => {
        player.move(piece, targetSquare);
    }).should.throw('Move is not permitted');
}

export function assertPieceMoved(piece, from, to, board) {
    board.pieceInSquare(to).should.equal(piece);
    board.squareIsOccupied(from).should.be.false;
}

export function assertPieceInSquareIs(piece, colour, square, board) {
    let pieceInSquare = board.squareNamed(square).occupiedBy();

    pieceInSquare.name().should.equal(piece);
    pieceInSquare.hasColour(colour).should.be.true;
}
