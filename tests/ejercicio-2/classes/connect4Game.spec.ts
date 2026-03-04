import { describe, expect, test, vi } from "vitest"
import { Connect4Game } from "../../../src/ejercicio-2/classes/connect4Game"
import { Player } from "../../../src/ejercicio-2/interfaces/player"

const player1: Player = { id: 1, name: "Jugador 1", token: "R" }
const player2: Player = { id: 2, name: "Jugador 2", token: "Y" }

describe("Connect4Game - tests iniciales TDD", () => {
  test("comienza con el turno del Jugador 1 y lo anuncia por consola", () => {
    const logger = { log: vi.fn() }
    const game = new Connect4Game(player1, player2, logger)

    expect(game.getCurrentPlayer()).toEqual(player1)
    expect(logger.log).toHaveBeenCalledWith(expect.stringContaining("Jugador 1"))
  })

  test("al colocar una ficha válida alterna al siguiente jugador", () => {
    const logger = { log: vi.fn() }
    const game = new Connect4Game(player1, player2, logger)

    expect(game.makeMove(0)).toBe(true)
    expect(game.getCurrentPlayer()).toEqual(player2)

    expect(game.makeMove(1)).toBe(true)
    expect(game.getCurrentPlayer()).toEqual(player1)
  })

  test("si una columna está llena, avisa y mantiene el turno", () => {
    const logger = { log: vi.fn() }
    const game = new Connect4Game(player1, player2, logger)

    for (let i = 0; i < 6; i++) {
      expect(game.makeMove(0)).toBe(true)
    }

    const currentPlayerBeforeInvalidMove = game.getCurrentPlayer()

    expect(game.makeMove(0)).toBe(false)
    expect(game.getCurrentPlayer()).toEqual(currentPlayerBeforeInvalidMove)
    expect(logger.log).toHaveBeenCalledWith(expect.stringContaining("columna está completa"))
  })

  test("tras una jugada válida se muestra el estado del tablero", () => {
    const logger = { log: vi.fn() }
    const game = new Connect4Game(player1, player2, logger)

    game.makeMove(0)

    expect(logger.log).toHaveBeenCalledWith(expect.stringMatching(/[RY.]/))
  })

  test("detecta victoria horizontal, la anuncia y termina el juego", () => {
    const logger = { log: vi.fn() }
    const game = new Connect4Game(player1, player2, logger)

    expect(game.makeMove(0)).toBe(true)
    expect(game.makeMove(0)).toBe(true)
    expect(game.makeMove(1)).toBe(true)
    expect(game.makeMove(1)).toBe(true)
    expect(game.makeMove(2)).toBe(true)
    expect(game.makeMove(2)).toBe(true)
    expect(game.makeMove(3)).toBe(true)

    expect(game.isFinished()).toBe(true)
    expect(game.getWinner()).toEqual(player1)
    expect(logger.log).toHaveBeenCalledWith(expect.stringContaining("ha ganado"))
  })

  test("si el juego terminó no permite más jugadas", () => {
    const logger = { log: vi.fn() }
    const game = new Connect4Game(player1, player2, logger)

    game.makeMove(0)
    game.makeMove(0)
    game.makeMove(1)
    game.makeMove(1)
    game.makeMove(2)
    game.makeMove(2)
    game.makeMove(3)

    expect(game.makeMove(4)).toBe(false)
    expect(logger.log).toHaveBeenCalledWith(expect.stringContaining("ha terminado"))
  })
})
