import { describe, test, expect } from 'vitest'
import { Receta } from '../../src/ejercicio-3/receta.ts'
import { Chef } from '../../src/ejercicio-3/chef.ts'
import { Paso } from '../../src/ejercicio-3/paso.ts' 
import { System } from '../../src/ejercicio-3/system.ts'

const pasos1: Paso[] = [{name: 'Lechecondensada', segundos: 10, opcional: false, completado: 2}, 
  {name: 'Comer', segundos: 120, opcional: true, completado: 3}
]
const pasos2: Paso[] = [{name: 'Lechecondensada', segundos: 10, opcional: false, completado: 2}, 
  {name: 'Galleta', segundos: 300, opcional: false, completado: 5},
  {name: 'Comer', segundos: 120, opcional: true, completado: 3}
]

const pasos3: Paso[] = [{name: 'Lechecondensada', segundos: 10, opcional: false, completado: 2}, 
  {name: 'Galleta', segundos: 300, opcional: false, completado: 5},
  {name: 'Comer', segundos: 120, opcional: true, completado: 3},
  {name: 'Limpiar', segundos: 900, opcional: false, completado: 1}
]

const receta1: Receta = {name: 'LecheGalleta1', year: 2026, pasos: pasos1} 
const receta2: Receta = {name: 'LecheGalleta2', year: 2023, pasos: pasos2} 
const receta3: Receta = {name: 'LecheGalleta3', year: 1900, pasos: pasos3} 

const recetario1: Receta[] = [receta1, receta2]
const recetario2: Receta[] = [receta3, receta2]
const chef1: Chef = new Chef('Chicote', 5000, recetario1)
const chef2: Chef = new Chef('Arguiñano', 15000, recetario2)

describe('System class test', () => {
  test('System initialize', () => {
    expect(new System([chef1, chef2])).toBeInstanceOf(System)
  })
})
