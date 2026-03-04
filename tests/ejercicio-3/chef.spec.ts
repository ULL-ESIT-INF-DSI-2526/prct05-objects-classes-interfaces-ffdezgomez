import { describe, test, expect } from 'vitest'
import { Receta } from '../../src/ejercicio-3/receta.ts'
import { Chef } from '../../src/ejercicio-3/chef.ts'
import { Paso } from '../../src/ejercicio-3/paso.ts'   

const pasos1: Paso[] = [{name: 'Lechecondensada', segundos: 10, opcional: false, completado: 2}, 
  {name: 'Comer', segundos: 120, opcional: true, completado: 3}
]
const pasos2: Paso[] = [{name: 'Lechecondensada', segundos: 10, opcional: false, completado: 2}, 
  {name: 'Galleta', segundos: 300, opcional: false, completado: 5},
  {name: 'Comer', segundos: 120, opcional: true, completado: 3}
]
const receta1: Receta = {name: 'LecheGalleta1', year: 2026, pasos: pasos1} 
const receta2: Receta = {name: 'LecheGalleta2', year: 2023, pasos: pasos2} 

const recetario1: Receta[] = [receta1, receta2]

describe('Chef class test', () => {
  test('Chef initialize', () => {
    expect(new Chef('Arguiñano', 10000, recetario1)).toBeInstanceOf(Chef)
  })

  test('Chef name can not be empty', () => {
    expect(() => new Chef('', 10000, recetario1)).toThrowError('Name can not be empty')
  })

  test('Chef followers can not be negative', () => {
    expect(() => new Chef('Arguiñano', -2000, recetario1)).toThrowError('Followers can not be less than zero')
  })
})