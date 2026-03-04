import { describe, test, expect } from 'vitest'
import { Paso } from '../../src/ejercicio-3/paso.ts'

const paso1: Paso = {name: 'Echar huevos', segundos: 120, opcional: false, completado: 7} 

describe('Paso object test', () => {
  test('paso1 must initialized well', () => {
    expect(paso1.name).toEqual('Echar huevos')
    expect(paso1.segundos).toEqual(120)
    expect(paso1.opcional).toEqual(false)
    expect(paso1.completado).toEqual(7)
  })
})