import { describe, expect, test } from "vitest"
import { Connect4Board } from "../../../src/ejercicio-2/classes/connect4Board"

describe("Connect4Board", () => {
  test("crea un tablero de 6x7 vacío por defecto", () => {
    const board = new Connect4Board()
    const snapshot = board.getGrid()

    expect(snapshot).toHaveLength(6)
    expect(snapshot[0]).toHaveLength(7)
    expect(snapshot.flat().every(cell => cell === null)).toBe(true)
  })

  test("dropToken coloca la ficha en la fila más baja de la columna", () => {
    const board = new Connect4Board()

    expect(board.dropToken(0, "R")).toBe(5)
    expect(board.dropToken(0, "Y")).toBe(4)
  })

  test("isColumnFull devuelve true cuando la columna está llena", () => {
    const board = new Connect4Board()

    for (let i = 0; i < 6; i++) {
      board.dropToken(0, i % 2 === 0 ? "R" : "Y")
    }

    expect(board.isColumnFull(0)).toBe(true)
    expect(board.dropToken(0, "R")).toBeNull()
  })

  test("si la columna es inválida no inserta fichas", () => {
    const board = new Connect4Board()

    expect(board.dropToken(-1, "R")).toBeNull()
    expect(board.dropToken(7, "R")).toBeNull()
  })
})
