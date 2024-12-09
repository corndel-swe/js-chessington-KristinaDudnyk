import Square from "../square.js";
import Piece from "./piece.js";

export default class King extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    const { row: rowStart, col: colStart } = board.findPiece(this);
    const moves = [];

    const dirs = [
      { dr: 1, dc: 0 },
      { dr: 0, dc: -1 },
      { dr: -1, dc: 0 },
      { dr: 0, dc: 1 },
      { dr: 1, dc: 1 },
      { dr: 1, dc: -1 },
      { dr: -1, dc: 1 },
      { dr: -1, dc: -1 },
    ];

    for (let { dr, dc } of dirs) {
      let candidate = new Square(rowStart + dr, colStart + dc);
      const capturable = board.getPiece(candidate); // is there a piece?
      if (capturable) {
        if (capturable.player !== this.player) {
          moves.push(candidate); // valid move
        }
        break;
      }

      moves.push(candidate);

      candidate = new Square(candidate.row + dr, candidate.col + dc);
    }
    console.log(moves);
    return moves;
  }
}
