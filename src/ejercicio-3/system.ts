import { Chef } from './chef'
import { Receta } from '../../src/ejercicio-3/receta'
import { Paso } from '../../src/ejercicio-3/paso' 

export class System {
  #chefs: Chef[]
  
  constructor(chefs: Chef[]) { this.#chefs = chefs }

  public add(chef: Chef) { this.#chefs.push(chef) }

  public printChefs(chefs: Chef[] = this.#chefs): void {
    console.table(
      chefs.map((chef) => ({
        name: chef.name,
        followers: chef.followers,
        recetario: chef.recetario
          .map((r) => `${r.name} (${r.year}) [${r.pasos.length} pasos]`)
          .join(", "),
      })),
    );
  }

  public printRecipes(recetas: Receta[]): void {
    console.table(
      recetas.map((receta) => ({
        name: receta.name,
        year: receta.year,
        pasos: receta.pasos
          .map((r) => `${r.name} (${r.segundos} segundos) Opcional: [${r.opcional}]`)
          .join(", "),
      })),
    )
  }

  public searchChef(name: string): Chef[] {
    return this.#chefs.filter(chef => chef.name.includes(name))
  }

  public searchReceta(name: string): Receta[] {
    let result: Receta[] = []

    this.#chefs.forEach(value => {
      const aux = value.recetario.filter(receta => receta.name.includes(name))
      result = result.concat(aux)
    })

    return result
  }

  public searchStep(name: string): Receta[] {
    let result: Receta[] = []

    this.#chefs.forEach(value => {
      const aux = value.recetario.filter(receta => receta.pasos.some(step => step.name.includes(name) ))
      result = result.concat(aux)
    })

    return result
  }


  get chefs() { return this.#chefs }
}

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

const system: System = new System([chef1, chef2])

system.printChefs()
system.printChefs(system.searchChef('Chico'))
system.printRecipes(system.searchReceta('3'))
system.printRecipes(system.searchStep('Galleta'))
