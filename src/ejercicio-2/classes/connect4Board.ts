import { Token } from "../interfaces/token"

export class Connect4Board {
  private readonly rows: number
  private readonly cols: number
  private readonly grid: (Token | null)[][]

  constructor(rows = 6, cols = 7) {
    this.rows = rows
    this.cols = cols
    this.grid = Array.from({ length: rows }, () => Array<Token | null>(cols).fill(null))
  }

  dropToken(column: number, token: Token): number | null {
    if (column < 0 || column >= this.cols) {
      return null
    }

    for (let row = this.rows - 1; row >= 0; row--) {
      if (this.grid[row][column] === null) {
        this.grid[row][column] = token
        return row
      }
    }

    return null
  }

  isColumnFull(column: number): boolean {
    if (column < 0 || column >= this.cols) {
      return true
    }

    return this.grid[0][column] !== null
  }

  getGrid(): (Token | null)[][] {
    return this.grid.map(row => [...row])
  }

  toString(): string {
    return this.grid
      .map(row => row.map(cell => cell ?? ".").join(" "))
      .join("\n")
  }
}
