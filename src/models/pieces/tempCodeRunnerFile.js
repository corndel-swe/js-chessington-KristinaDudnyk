export default class Bishop {
  constructor(player) {
    this.player = player;
  }

  getAvailableMoves(board) {
    // get the square currently occupied by the pawn
    let moves = [];

    const { row: startRow, col: startCol } = board.findPiece(this);

    for (let step = 1; step < 8; step++) {
      let row = startRow - step; // Moving up
      let col = startCol + step; // Moving right

      if (row < 0 || col > 7) break; // Check if out of bounds
      moves.push([row, col]); // Add valid move
    }
    return moves;
  }

  moveTo(board, newSquare) {
    const currentSquare = board.findPiece(this);
    board.movePiece(currentSquare, newSquare);
  }
}
