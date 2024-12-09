import Square from "../square.js";
import Player from "../player.js";
import Piece from "./piece.js";

export default class Pawn extends Piece {
  constructor(player) {
    super(player);
    this.player = player;
  }

  getAvailableMoves(board) {
    // Get the square currently occupied by the pawn
    let location = board.findPiece(this);

    // The list of valid moves
    let moves = [];

    // Determine the direction of movement
    const direction = this.player === Player.WHITE ? 1 : -1;

    // Move one square forward
    moves.push(new Square(location.row + direction, location.col));

    // Check if the pawn is in its starting position for the two-square move
    const startingRow = this.player === Player.WHITE ? 1 : 6;
    if (location.row === startingRow) {
      moves.push(new Square(location.row + 2 * direction, location.col));
    }

    return moves;
  }
}
