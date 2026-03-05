import { Participante } from "./participante"

/**
 * Representa a equipo participante
 */
export class Equipo extends Participante {
  constructor(protected _id: number, protected _name: string, protected _country: string, protected _date: Date, private _sponsor: string, private _members: string[], private _min: number, private _max: number, protected _score: number = 0) {
    super(_id, _name, _country, _date, _score)
    if (_sponsor.length === 0) throw Error('Sponsor no puede estar vacío')
    if (_members.length === 0) throw Error('Debe haber algun miembro')
    if (_members.length > _max || _members.length < _min) throw Error('Los miembros no estan en los limites')
    if (_min < 1 || _min > _max) throw Error('Minimo debe ser mayor que 1 y menor que max')
  }

  get sponsor() { return this._sponsor }
  get members() { return this._members }
  get min() { return this._min }
  set min(minimo: number) { this._min = minimo }
  get max() { return this._max }
  set max(maximo: number) { this._max = maximo }

  /**
   * Imprime la informacion del equipo
   * @returns Cadena con info
   */
  public perfil() {
     return `Soy el equipo ${this._name}, con ID: ${this._id}, representando a ${this.country},
     incritos el día ${this._date}, nuestro sponsor es ${this._sponsor}, tenemos ${this._members.length} miembros,
      nuestro minimo y máximo son [${this._min}-${this._max}] y tenemos una puntuación de ${this.score}pts.`
  }
}