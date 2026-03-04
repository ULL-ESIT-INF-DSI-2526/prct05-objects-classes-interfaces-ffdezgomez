import { describe, test, expect } from "vitest"
import { BibliographicItem } from "../../../src/ejercicio-1/classes/bibliographicItem"
import { MyDate } from "../../../src/ejercicio-1/classes/date"

describe("BibliographicItem function test", () => {
  test("BibliographicItem constructor test", () => {
    const bibliographicItem = new BibliographicItem("Title", ["Author1", "Author2"], ["Keyword1", "Keyword2"], "Summary", new MyDate(1, 1, 2020), 100, "Editorial")
    expect(bibliographicItem.title).toBe("Title")
    expect(bibliographicItem.authors).toEqual(["Author1", "Author2"])
    expect(bibliographicItem.keywords).toEqual(["Keyword1", "Keyword2"])
    expect(bibliographicItem.summary).toBe("Summary")
    expect(bibliographicItem.date).toEqual(new MyDate(1, 1, 2020))
    expect(bibliographicItem.pages).toBe(100)
    expect(bibliographicItem.editorial).toBe("Editorial")
  })

  test("BibliographicItem toIEEE test", () => {
    const bibliographicItem = new BibliographicItem("Title", ["Author1", "Author2"], ["Keyword1", "Keyword2"], "Summary", new MyDate(1, 1, 2020), 100, "Editorial")
    expect(bibliographicItem.toIEEE(1)).toBe("[1] Author1, Author2, Title, Editorial, 2020, pp. 100")
  })
})