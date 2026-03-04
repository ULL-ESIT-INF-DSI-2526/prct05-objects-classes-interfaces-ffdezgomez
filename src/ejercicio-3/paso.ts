/**
 * Paso type that represents a step in a recipe. It includes the name of the step, the duration in seconds, whether it is optional, and how many times it has been completed. This type is used within the Receta type to define the steps of a recipe.
 */
export type Paso = {
  name: string,
  segundos: number,
  opcional: boolean,
  completado: number
}