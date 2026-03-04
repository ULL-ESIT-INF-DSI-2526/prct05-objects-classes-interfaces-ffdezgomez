import { describe, expect, it } from "vitest"
import { MyDate } from "../../../src/ejercicio-1/classes/date"
import { ConferancePaper } from "../../../src/ejercicio-1/classes/conferancePaper"

describe("ConferancePaper class test", () => {
  it("ConferancePaper constructor test", () => {
    const conferancePaper = new ConferancePaper("Title", ["Author1", "Author2"], ["Keyword1", "Keyword2"], "Summary", new MyDate(1, 1, 2020), 100, "Editorial", "ConferenceName", "Location")
    expect(conferancePaper.title).toBe("Title")
    expect(conferancePaper.authors).toEqual(["Author1", "Author2"])
    expect(conferancePaper.keywords).toEqual(["Keyword1", "Keyword2"])
    expect(conferancePaper.summary).toBe("Summary")
    expect(conferancePaper.date).toEqual(new MyDate(1, 1, 2020))
    expect(conferancePaper.pages).toBe(100)
    expect(conferancePaper.editorial).toBe("Editorial")
    expect(conferancePaper.conferenceName).toBe("ConferenceName")
    expect(conferancePaper.location).toBe("Location")
  })

  it("ConferancePaper toIEEE test", () => {
    const conferancePaper = new ConferancePaper("Title", ["Author1", "Author2"], ["Keyword1", "Keyword2"], "Summary", new MyDate(1, 1, 2020), 100, "Editorial", "ConferenceName", "Location")
    expect(conferancePaper.toIEEE(1)).toBe("[1] Author1, Author2, Title, Editorial, 2020, pp. 100 ConferenceName, Location")
  })
})