import { Paso } from './paso'

export type Receta = {
  name: string,
  year: number,
  pasos: Paso[]
}