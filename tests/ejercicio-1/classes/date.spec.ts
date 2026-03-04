import { describe, test, expect } from "vitest"
import { MyDate } from "../../../src/ejercicio-1/classes/date"

describe("MyDate function test", () => {
  test("MyDate constructor test", () => {
    const date = new MyDate(1, 1, 2020)
    expect(date.day).toBe(1)
    expect(date.month).toBe(1)
    expect(date.year).toBe(2020)
  })

  test("MyDate constructor with incorrect month test", () => {
    expect(() => new MyDate(1, 0, 2020)).toThrow('Months cannot be less than 1 or greater than 12')
    expect(() => new MyDate(1, 13, 2020)).toThrow('Months cannot be less than 1 or greater than 12')
  })

  test("MyDate constructor with incorrect day test", () => {
    expect(() => new MyDate(0, 1, 2020)).toThrow('Incorrect day')
    expect(() => new MyDate(32, 1, 2020)).toThrow('Incorrect day')
    expect(() => new MyDate(31, 4, 2020)).toThrow('Incorrect day')
    expect(() => new MyDate(31, 6, 2020)).toThrow('Incorrect day')
    expect(() => new MyDate(31, 9, 2020)).toThrow('Incorrect day')
    expect(() => new MyDate(31, 11, 2020)).toThrow('Incorrect day')
    expect(() => new MyDate(30, 2, 2020)).toThrow('Febraury have less than 29 days')
    expect(() => new MyDate(29, 2, 2019)).toThrow('Febraury have less than 29 days')
  })

})