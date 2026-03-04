import { Chef } from './chef'
import { Receta } from '../../src/ejercicio-3/receta'
import { Paso } from '../../src/ejercicio-3/paso' 

/**
 * System class that manages chefs and their recipes. It allows adding chefs, printing chefs and recipes, and searching for chefs, recipes, and steps by name.
 */
export class System {
  #chefs: Chef[]
  
  /**
   *  Initializes the System with an array of chefs.
   * @param chefs - An array of Chef objects to initialize the system with.
   */
  constructor(chefs: Chef[]) { this.#chefs = chefs }

  /**
   *  Adds a new chef to the system.
   * @param chef - A Chef object to be added to the system.
   */
  public add(chef: Chef) { this.#chefs.push(chef) }

  /**
   *  Prints the chefs in the system. If an array of chefs is provided as an argument, it prints that array instead. The output includes the chef's name, followers, and a summary of their recipes.
   * @param chefs - An optional array of Chef objects to be printed. If not provided, it defaults to printing all chefs in the system.
   */
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

  /**
   * Prints the recipes in the system. It takes an array of Receta objects as an argument and prints their details, including the name, year, and a summary of the steps involved in each recipe.
   * @param recetas - An array of Receta objects to be printed. Each recipe's details include the name, year, and a summary of its steps (name, duration in seconds, and whether the step is optional).
   */
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

  /**
   *  Searches for chefs in the system whose names include the provided string. It returns an array of Chef objects that match the search criteria.
   * @param name - A string to search for in the names of the chefs. The search is case-sensitive and checks if the chef's name includes the provided string.
   * @returns 
   */
  public searchChef(name: string): Chef[] {
    return this.#chefs.filter(chef => chef.name.includes(name))
  }

  /**
   *  Searches for recipes in the system whose names include the provided string. It returns an array of Receta objects that match the search criteria.
   * @param name - A string to search for in the names of the recipes. The search is case-sensitive and checks if the recipe's name includes the provided string.
   * @returns 
   */
  public searchReceta(name: string): Receta[] {
    let result: Receta[] = []

    this.#chefs.forEach(value => {
      const aux = value.recetario.filter(receta => receta.name.includes(name))
      result = result.concat(aux)
    })

    return result
  }

  /**
   * Searches for recipes in the system that contain a step with a name that includes the provided string. It returns an array of Receta objects that match the search criteria.
   * @param name - A string to search for in the names of the steps within the recipes. The search is case-sensitive and checks if any step's name includes the provided string.
   * @returns 
   */
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
