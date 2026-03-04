import { Receta } from './receta'

export class Chef {
  #name: string
  #followers: number
  #recetario: Receta[]

  constructor(name: string, followers: number, recetario: Receta[]) {
    if (name.length <= 0) throw Error('Name can not be empty')
    if (followers < 0) throw Error('Followers can not be less than zero');
    
    this.#name = name
    this.#followers = followers
    this.#recetario = recetario
  }

  get name(): string {
    return this.#name;
  }

  get followers(): number {
    return this.#followers;
  }

  get recetario(): Receta[] {
    return this.#recetario;
  }
}