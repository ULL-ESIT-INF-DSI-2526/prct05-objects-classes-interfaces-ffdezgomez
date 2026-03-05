/**
 * Clase abstracta para representar a un participante
 */
export abstract class Participante{
  constructor(protected _id: number, protected _name: string, protected _country: string, protected _date: Date, protected _score: number = 0) {
    if (_id < 0) throw Error('El id no debe ser negativo')
    if (_name.length === 0) throw Error('El nombre no puede estar vacío')
    if (_country.length === 0) throw Error('El pais no puede estar vacío')
    if (!(_date instanceof Date) || Number.isNaN(_date.getTime())) throw Error('La fecha no es válida')
    if (_date.getTime() > new Date().getTime()) throw Error('La fecha no puede ser futura')
    if (_score < 0) throw Error('El score no debe ser negativo')
  }

  get id() { return this._id}
  get name() { return this._name}
  get country() { return this._country}
  get date() { return this._date}
  get score() { return this._score}
  
  abstract perfil(): string
  
}