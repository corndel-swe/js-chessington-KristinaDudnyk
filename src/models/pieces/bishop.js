import Square from "../square.js";
import Piece from "./piece.js";
import King from "./king.js";

class Bishop extends Piece {
  constructor(player) {
    super(player);
  }

  getAvailableMoves(board) {
    const { row: rowStart, col: colStart } = board.findPiece(this);
    const moves = [];

    const dirs = [
      { dr: 1, dc: 1 },
      { dr: 1, dc: -1 },
      { dr: -1, dc: 1 },
      { dr: -1, dc: -1 },
    ];

    for (let { dr, dc } of dirs) {
      // first vector is { dr: 1, dc: 1 }
      let candidate = new Square(rowStart + dr, colStart + dc); // 2 + 1 , 3 + 1 = (3, 4) ==> last is (7,8)
      while (board.contains(candidate)) {
        // checking if the pies is not outside of thee board
        // Check if there is a piece in the way
        const capturable = board.getPiece(candidate); // is there a piece?
        if (capturable) {
          if (
            capturable.player !== this.player &&
            !(capturable instanceof King)
          ) {
            moves.push(candidate); // valid move
          }
          break;
        }

        moves.push(candidate);

        candidate = new Square(candidate.row + dr, candidate.col + dc);
      }
    }

    return moves;
  }
}

export default Bishop;
