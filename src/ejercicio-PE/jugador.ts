import { Participante } from "./participante"

export type Rango = 'Bronce' | 'Plata' | 'Oro' | 'Platino' | 'Diamante'

export class Jugador extends Participante {
  constructor(protected _id: number, protected _name: string, protected _country: string, protected _date: Date, private _username: string, private _rango: Rango, private _partidas: number, protected _score: number = 0) {
    super(_id, _name, _country, _date, _score)
    if(_username.length === 0) throw Error('username no puede estar vacio')
    if(_partidas < 0) throw Error('Partidas no puede ser negativo')
  }

  get username() { return this._username}
  get rango() { return this._rango}
  get partidas() { return this._partidas}

  /**
   * Representa Jugador particpante
   * @returns Info del Jugador
   */
  public perfil(): string {
    return `Soy ${this.name}, con ID: ${this.id}, nacido en ${this.country},
     me inscribí el día ${this.date}, mi username es ${this.username}, he jugado ${this.partidas} partidas,
      mi rango es ${this.rango} y tengo una puntuación de ${this.score}pts.`
  }
}