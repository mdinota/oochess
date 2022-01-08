export function assertMovementIsNotPermitted(player, piece, targetSquare) {
    (() => {
        player.move(piece, targetSquare);
    }).should.throw('Move is not permitted');
}

export function assertPieceMoved(piece, from, to, board) {
    board.pieceInSquare(to).should.equal(piece);
    board.squareIsOccupied(from).should.be.false;
}
