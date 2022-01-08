import Piece from "../../domain/piece";
import Board from "../../domain/board/board";
import Player from "../../domain/player";
import {assertMovementIsNotPermitted, assertPieceMoved} from "../assertions";
import PieceColour from "../../domain/piece_colour";

require('should');

suite('Bishop', () => {
  let board;
  let player;

  setup(() => {
    board = Board.newEmptyBoard();
    player = Player.newWhitePlayerFor(board);
  })

  test('A bishop can be created', () => {
    const bishop = Piece.newBishop(PieceColour.white());

    bishop.name().should.equal('bishop');
  });

  test('A bishop can move diagonally right', () => {
    const bishop = player.placeBishop('a1');

    player.move(bishop, 'c3');

    assertPieceMoved(bishop, 'a1', 'c3', board);
  });

  test('A bishop cannot move horizontally', () => {
    const bishop = player.placeBishop('a1');

    assertMovementIsNotPermitted(player, bishop, 'c1');
  });

  test('A bishop can move diagonally left', () => {
    const bishop = player.placeBishop('c1');

    player.move(bishop, 'a3');

    assertPieceMoved(bishop, 'c1', 'a3', board);
  });

  test('A bishop cannot move vertically', () => {
    const bishop = player.placeBishop('a1');

    assertMovementIsNotPermitted(player, bishop, 'a3');
  });

  test('A bishop cannot move if its blocked', () => {
    const bishop = player.placeBishop('a1');

    player.placePawn('b2');

    assertMovementIsNotPermitted(player, bishop, 'c3');
  });
});
