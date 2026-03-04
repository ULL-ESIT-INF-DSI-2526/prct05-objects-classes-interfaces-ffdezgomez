import { DateI } from "../interfaces/dateInterface";

const months31: number[] = [1, 3, 5, 7, 8, 10, 12]

/**
 * Class that represents a date. It has the following properties:
 * - day: The day of the date. It must be a number between 1 and 31, depending on the month. It cannot be less than 1 or greater than 31.
 * - month: The month of the date. It must be a number between 1 and 12. It cannot be less than 1 or greater than 12.
 * - year: The year of the date. It can be any number.
 */
export class MyDate implements DateI {
  #day: number
  #month: number
  #year: number

  constructor(day: number, month: number, year: number) {
    if (day > 31 && year <= 31) {
      const realYear = day
      day = year
      year = realYear
    }

    if (month < 1 || month > 12) throw new Error('Months cannot be less than 1 or greater than 12')

    if (day < 1) throw new Error('Incorrect day')

    const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    if (month === 2) {
      if (day > 29 || (!isLeapYear && day > 28)) throw new Error('Febraury have less than 29 days')
    } else if (months31.includes(month)) {
      if (day > 31) throw new Error('Incorrect day')
    } else if (day > 30) {
      throw new Error('Incorrect day')
    }

    this.#day = day
    this.#month =  month
    this.#year = year
  }

  get day() { return this.#day }
  get month() { return this.#month }
  get year() { return this.#year }

  set day(day: number) { this.#day = day }
  set month(month: number) { this.#month = month }
  set year(year: number) { this.#year = year }

}