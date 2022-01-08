import Board from "../domain/board/board";
import Player from "../domain/player";
import {assertMovementIsNotPermitted, assertPieceMoved} from "./assertions";

require('should');

suite('Capturing pieces', () => {
  let board;
  let whitePiecesPlayer;
  let blackPiecesPlayer;

  setup(() => {
    board = Board.newEmptyBoard();
    whitePiecesPlayer = Player.newWhitePlayerFor(board);
    blackPiecesPlayer = Player.newBlackPlayerFor(board);
  });

  test('cannot capture a piece with the same color', () => {
    const rook = whitePiecesPlayer.placeRook('a1');
    whitePiecesPlayer.placePawn('a2');

    assertMovementIsNotPermitted(whitePiecesPlayer, rook, 'a2');
  });

  test('capturing should replace pieces in the board', () => {
    const rook = whitePiecesPlayer.placeRook('a1');
    blackPiecesPlayer.placePawn('a2');

    whitePiecesPlayer.move(rook, 'a2');

    assertPieceMoved(rook, 'a1', 'a2', board);
  });
});
