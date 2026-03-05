import { describe, test, expect } from 'vitest'
import { Equipo } from '../../src/ejercicio-PE/equipo'
import { Jugador } from '../../src/ejercicio-PE/jugador'


describe('Equipo class tests', () => {
  test('Equipo initialize correctly', () => {
    const registration = new Date('2024-01-01')
    const player1: Jugador = new Jugador(1001, 'Yo', 'España', registration, 'soyyo', 'Oro', 15, 100)
    const player2: Jugador = new Jugador(1002, 'Yo', 'España', registration, 'soyyo1', 'Oro', 15, 100)
    const player3: Jugador = new Jugador(1003, 'Yo', 'España', registration, 'soyyo2', 'Oro', 15, 100)
    const equipo: Equipo = new Equipo(2001, 'Equipo1', 'España', registration, 'Sponsor1', [player1.username, player2.username, player3.username], 2, 5, 300)
    expect(equipo).toBeInstanceOf(Equipo)
    expect(equipo.id).toEqual(2001)
    expect(equipo.name).toEqual('Equipo1')
    expect(equipo.country).toEqual('España')
    expect(equipo.date).toEqual(registration)
    expect(equipo.sponsor).toEqual('Sponsor1')
    expect(equipo.members).toEqual([player1.username, player2.username, player3.username])
    expect(equipo.min).toEqual(2)
    expect(equipo.max).toEqual(5)
    expect(equipo.score).toEqual(300)
  })

  test('Equipo sponsor can not be empty', () => {
    expect(() => new Equipo(2001, 'Equipo1', 'España', new Date('2024-01-01'), '', ['soyyo', 'soyyo1', 'soyyo2'], 2, 5, 300)).toThrowError('Sponsor no puede estar vacío')
  })

  test('Equipo member no puede ser menor que min', () => {
    expect(() => new Equipo(2001, 'Equipo1', 'España', new Date('2024-01-01'), 'Sponsor1', ['soyyo'], 2, 5, 300)).toThrowError('Los miembros no estan en los limites')
  })
  
  test('Equipo member no puede sermayor que max', ()=> {
    expect(() => new Equipo(2001, 'Equipo1', 'España', new Date('2024-01-01'), 'Sponsor1', ['soyyo', 'soyyo1', 'soyyo2', 'soyyo3', 'soyyo4', 'soyyo5'], 2, 5, 300)).toThrowError('Los miembros no estan en los limites')
  })

  test ('Equipo perfil devuelve perfil válido', () => {
    const registration = new Date('2024-01-01')
    const player1: Jugador = new Jugador(1001, 'Yo', 'España', registration, 'soyyo', 'Oro', 15, 100)
    const player2: Jugador = new Jugador(1002, 'Yo', 'España', registration, 'soyyo1', 'Oro', 15, 100)
    const player3: Jugador = new Jugador(1003, 'Yo', 'España', registration, 'soyyo2', 'Oro', 15, 100)
    const equipo: Equipo = new Equipo(2001, 'Equipo1', 'España', registration, 'Sponsor1', [player1.username, player2.username, player3.username], 2, 5, 300)
    expect(equipo.perfil()).toEqual(`Soy el equipo ${equipo.name}, con ID: ${equipo.id}, representando a ${equipo.country},\n     incritos el día ${equipo.date}, nuestro sponsor es ${equipo.sponsor}, tenemos ${equipo.members.length} miembros,\n      nuestro minimo y máximo son [${equipo.min}-${equipo.max}] y tenemos una puntuación de ${equipo.score}pts.`)
  })
})