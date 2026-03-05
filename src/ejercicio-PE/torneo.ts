import { Jugador, Rango} from './jugador.ts'
import { Equipo } from './equipo.ts'
import { Participante } from './participante.js'

export type Inscripcion = Equipo | Jugador
export type Partida = {
  participante1: Inscripcion,
  participante2: Inscripcion,
  date: Date,
  winner: number
  puntuacion: [number, number]
}

/**
 * Representa un torneo
 */
export class Torneo {
  private _matchs: Partida[] = []
  constructor(private _teams: Equipo[], private _players: Jugador[], private _max_pl: number, private _max_tm: number) {
    if (_teams.length > _max_tm || _players.length > _max_pl) throw Error('Equipos o jugadores llenos')
  }

  /**
   * Inscribe a alguien en el torneo
   * @param x - Quien se inscribe
   */
  public add(x: Inscripcion): void {
    if (x instanceof Equipo) {
      if (this._teams.length === this._max_tm) throw Error('No mas equipos')
      else this._teams.push(x)
    } else if  (x instanceof Jugador) {
      if (this._players.length === this._max_pl) throw Error('No mas jugadores')
      else this._players.push(x)
    }
  }

  /**
   * Añade una partida a la collecion de partidas
   * @param participante1 - Elemento de la partida
   * @param participante2 - Elemento de la partida
   * @param date - Elemento de la partida
   * @param winner - Elemento de la partida
   * @param puntuacion - Elemento de la partida
   */
  public match(participante1: Inscripcion, participante2: Inscripcion, date: Date, winner: number, puntuacion: [number, number]) {
    if (participante1 instanceof Equipo && !this._teams.includes(participante1)) 
      throw Error('participantes no inscritos')
    if (participante1 instanceof Jugador && !this._players.includes(participante1)) 
      throw Error('participantes no inscritos')
    if (participante2 instanceof Equipo && !this._teams.includes(participante2)) 
      throw Error('participantes no inscritos')
    if (participante2 instanceof Jugador && !this._players.includes(participante2)) 
      throw Error('participantes no inscritos')

    const result: Partida = {
      participante1: participante1,
      participante2: participante2,
      date: date,
      winner: winner,
      puntuacion: puntuacion
    }

    this._matchs.push(result)
  }

  /**
   * Imprime tabla con todos los equipos
   */
  public printTeams(): void {
    console.table(this._teams)
  }

  /**
   * Imprime tabla con los jugadores
   */
  public printPlayers(): void {
    console.table(this._players)
  }

  /**
   * Busca participante `por id o usertag en caso de jugador
   * @param x - Participante
   * @returns - Lista con la busqueda
   */
  public search(x: Participante): Participante[] {
    if (x instanceof Jugador) return this._players.filter(pl => pl.username === x.username)
    else return this._teams.filter(tm => tm.id === tm.id)
  }

  public filterRango(x: Rango): Participante[] {
    result: Participante[] = this.
  }




}

