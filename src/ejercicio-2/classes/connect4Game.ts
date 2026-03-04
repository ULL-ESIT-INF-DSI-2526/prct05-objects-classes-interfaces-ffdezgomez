import { Connect4Board } from "./connect4Board"
import { Logger } from "../interfaces/logger"
import { Player } from "../interfaces/player"
import { Token } from "../interfaces/token"

export class Connect4Game {
  private readonly board: Connect4Board
  private readonly players: [Player, Player]
  private readonly logger: Logger
  private currentPlayerIndex = 0
  private finished = false
  private winner: Player | null = null

  constructor(player1: Player, player2: Player, logger: Logger = console, rows = 6, cols = 7) {
    this.players = [player1, player2]
    this.logger = logger
    this.board = new Connect4Board(rows, cols)
    this.logger.log(`Turno de ${this.players[this.currentPlayerIndex].name}`)
  }

  getCurrentPlayer(): Player {
    return this.players[this.currentPlayerIndex]
  }

  getWinner(): Player | null {
    return this.winner
  }

  isFinished(): boolean {
    return this.finished
  }

  getBoardSnapshot(): (Token | null)[][] {
    return this.board.getGrid()
  }

  makeMove(column: number): boolean {
    if (this.finished) {
      this.logger.log("La partida ya ha terminado")
      return false
    }

    if (this.board.isColumnFull(column)) {
      this.logger.log("La columna está completa")
      return false
    }

    const currentPlayer = this.getCurrentPlayer()
    const placedRow = this.board.dropToken(column, currentPlayer.token)

    if (placedRow === null) {
      this.logger.log("La columna está completa")
      return false
    }

    this.logger.log(this.board.toString())

    if (this.hasConnect4(placedRow, column, currentPlayer.token)) {
      this.finished = true
      this.winner = currentPlayer
      this.logger.log(`${currentPlayer.name} ha ganado`)
      return true
    }

    this.currentPlayerIndex = this.currentPlayerIndex === 0 ? 1 : 0
    this.logger.log(`Turno de ${this.players[this.currentPlayerIndex].name}`)
    return true
  }

  private hasConnect4(row: number, col: number, token: Token): boolean {
    const directions: [number, number][] = [
      [0, 1],
      [1, 0],
      [1, 1],
      [1, -1]
    ]

    return directions.some(([deltaRow, deltaCol]) => {
      const count = 1 +
        this.countDirection(row, col, deltaRow, deltaCol, token) +
        this.countDirection(row, col, -deltaRow, -deltaCol, token)

      return count >= 4
    })
  }

  private countDirection(row: number, col: number, deltaRow: number, deltaCol: number, token: Token): number {
    const grid = this.board.getGrid()
    let count = 0
    let currentRow = row + deltaRow
    let currentCol = col + deltaCol

    while (
      currentRow >= 0 &&
      currentRow < grid.length &&
      currentCol >= 0 &&
      currentCol < grid[0].length &&
      grid[currentRow][currentCol] === token
    ) {
      count++
      currentRow += deltaRow
      currentCol += deltaCol
    }

    return count
  }
}
