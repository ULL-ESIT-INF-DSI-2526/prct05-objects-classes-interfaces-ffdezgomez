import { describe, test, expect } from 'vitest'
import { Receta } from '../../src/ejercicio-3/receta.ts'
import { Paso } from '../../src/ejercicio-3/paso.ts'

const pasos: Paso[] = [{name: 'Lechecondensada', segundos: 10, opcional: false, completado: 2}, 
  {name: 'Comer', segundos: 120, opcional: true, completado: 3}
]
const receta1: Receta = {name: 'LecheGalleta', year: 2026, pasos: pasos} 

describe('Receta type test', () => {
  test('receta1 must initialized well', () => {
    expect(receta1.name).toBe('LecheGalleta')
    expect(receta1.year).toBe(2026)
    expect(receta1.pasos).toEqual([
      {name: 'Lechecondensada', segundos: 10, opcional: false, completado: 2}, 
      {name: 'Comer', segundos: 120, opcional: true, completado: 3}])
  })
})