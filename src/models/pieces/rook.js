import Square from "../square.js";
import Piece from "./piece.js";

export default class Rook extends Piece {
  constructor(player) {
    super(player);
    this.player = player;
  }

  getAvailableMoves(board) {
    return [];
  }
}
