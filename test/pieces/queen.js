import Piece from "../../domain/piece";
import Board from "../../domain/board/board";
import Player from "../../domain/player";
import {assertMovementIsNotPermitted, assertPieceMoved} from "../assertions";
import PieceColour from "../../domain/piece_colour";

require('should');

suite('Queen', () => {
  let board;
  let player;

  setup(() => {
    board = Board.newEmptyBoard();
    player = Player.newWhitePlayerFor(board);
  })

  test('A queen can be created', () => {
    const queen = Piece.newQueen(PieceColour.white());

    queen.name().should.equal('queen');
  });

  test('A queen can move sideways', () => {
    const queen = player.placeQueen('a1');

    player.move(queen, 'e1');

    assertPieceMoved(queen, 'a1', 'e1', board);
  });

  test('A queen can move vertically', () => {
    const queen = player.placeQueen('a1');

    player.move(queen, 'a4');

    assertPieceMoved(queen, 'a1', 'a4', board);
  });

  test('A queen can move diagonally', () => {
    const queen = player.placeQueen('a1');

    player.move(queen, 'd4');

    assertPieceMoved(queen, 'a1', 'd4', board);
  });

  test('A queen cannot move in L-shape', () => {
    const queen = player.placeQueen('a1');

    assertMovementIsNotPermitted(player, queen, 'c2');
  });
});
