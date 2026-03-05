import { describe, test, expect } from 'vitest'
import { Jugador } from '../../src/ejercicio-PE/jugador'


describe('Jugador class tests', () => {
  test('Jugador initialize correctly', () => {
    const registration = new Date('2024-01-01')
    const player1: Jugador = new Jugador(1001, 'Yo', 'España', registration, 'soyyo', 'Oro', 15, 100)
    expect(player1).toBeInstanceOf(Jugador)
    expect(player1.id).toEqual(1001)
    expect(player1.name).toEqual('Yo')
    expect(player1.country).toEqual('España')
    expect(player1.date).toEqual(registration)
    expect(player1.username).toEqual('soyyo')
    expect(player1.rango).toEqual('Oro')
    expect(player1.partidas).toEqual(15)
    expect(player1.score).toEqual(100)
  })

  test('Jugador name can not be empty', () => {
    expect(() => new Jugador(1001, '', 'España', new Date('2024-01-01'), '', 'Oro', 15, 100)).toThrowError('El nombre no puede estar vacío')
  })

  test('Jugador username can not be empty', () => {
    expect(() => new Jugador(1001, 'Yo', 'España', new Date('2024-01-01'), '', 'Oro', 15, 100)).toThrowError('username no puede estar vacio')
  })

  test('Jugador country can not be empty', () => {
    expect(() => new Jugador(1001, 'Yo', '', new Date('2024-01-01'), 'soy yo', 'Oro', 15, 100)).toThrowError('El pais no puede estar vacío')
  })
  
  test('Jugador fecha no puede ser futura', () => {
    expect(() => new Jugador(1001, 'Yo', 'España', new Date('2027-01-01'), 'soy yo', 'Oro', 15, 100)).toThrowError('La fecha no puede ser futura')
  })

  test('Jugador score no puede ser negativo', () => {
    expect(() => new Jugador(1001, 'Yo', 'España', new Date('2025-01-01'), 'soy yo', 'Oro', 15, -100)).toThrowError('El score no debe ser negativo')
  })
  
  test('Jugador perfil devuelve perfil válido', ()=> {
    expect(new Jugador(1001, 'Yo', 'España', new Date('2024-01-01'), 'soyyo', 'Oro', 15, 100).perfil()).toEqual('Soy Yo, con ID: 1001, nacido en España,\n     me inscribí el día Mon Jan 01 2024 00:00:00 GMT+0000 (tiempo universal coordinado), mi username es soyyo, he jugado 15 partidas,\n      mi rango es Oro y tengo una puntuación de 100pts.')
  })
})