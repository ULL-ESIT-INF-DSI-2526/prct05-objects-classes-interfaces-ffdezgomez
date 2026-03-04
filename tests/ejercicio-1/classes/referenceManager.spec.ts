import { describe, expect, test } from "vitest"
import { BibliographicItem } from "../../../src/ejercicio-1/classes/bibliographicItem"
import { JournalArticle } from "../../../src/ejercicio-1/classes/journalArticle"
import { ConferancePaper } from "../../../src/ejercicio-1/classes/conferancePaper"
import { MyDate } from "../../../src/ejercicio-1/classes/date"
import { ReferenceManager } from "../../../src/ejercicio-1/classes/referenceManager"

describe("ReferenceManager class test", () => {
  test("ReferenceManager constructor test", () => {
    const referenceManager = new ReferenceManager([])
    expect(referenceManager).toBeInstanceOf(ReferenceManager)
  })

  test("ReferenceManager ", () => {
    const items: BibliographicItem[] = [
      new JournalArticle("title1", ["author1"], ["keyword1"], "summary1", new MyDate(2020, 1, 1), 10, "publisher1", "journal1", 1, 1),
      new ConferancePaper("title2", ["author2"], ["keyword2"], "summary2", new MyDate(2021, 1, 1), 20, "publisher2", "conferance1", "location1"),
      new BibliographicItem("title3", ["author3"], ["keyword3"], "summary3", new MyDate(2022, 1, 1), 30, "publisher3"),
      new BibliographicItem("title4", ["author4"], ["keyword4"], "summary4", new MyDate(2023, 1, 1), 40, "publisher4"),
      new BibliographicItem("title5", ["author5"], ["keyword5"], "summary5", new MyDate(2024, 1, 1), 50, "publisher5")
    ]
    const referenceManager = new ReferenceManager(items)
    expect(referenceManager.searchByKeyword("keyword1")).toEqual([items[0]])
    expect(referenceManager.searchByTitle("title")).toEqual(items)
    expect(referenceManager.searchByAuthor("author")).toEqual(items)
    expect(referenceManager.searchByPublisher("publisher")).toEqual(items)
    expect(referenceManager.searchByYear(2020)).toEqual([items[0]])
  })

  test("ReferenceManager searchByKeyword test", () => {
    const items: BibliographicItem[] = [
      new JournalArticle("title1", ["author1"], ["keyword1"], "summary1", new MyDate(2020, 1, 1), 10, "publisher1", "journal1", 1, 1),
      new ConferancePaper("title2", ["author2"], ["keyword2"], "summary2", new MyDate(2021, 1, 1), 20, "publisher2", "conferance1", "location1"),
      new BibliographicItem("title3", ["author3"], ["keyword3"], "summary3", new MyDate(2022, 1, 1), 30, "publisher3"),
      new BibliographicItem("title4", ["author4"], ["keyword4"], "summary4", new MyDate(2023, 1, 1), 40, "publisher4"),
      new BibliographicItem("title5", ["author5"], ["keyword5"], "summary5", new MyDate(2024, 1, 1), 50, "publisher5")
    ]
    const referenceManager = new ReferenceManager(items)
    expect(referenceManager.searchByKeyword("keyword1")).toEqual([items[0]])
    expect(referenceManager.searchByKeyword("keyword2")).toEqual([items[1]])
    expect(referenceManager.searchByKeyword("keyword3")).toEqual([items[2]])
    expect(referenceManager.searchByKeyword("keyword4")).toEqual([items[3]])
    expect(referenceManager.searchByKeyword("keyword5")).toEqual([items[4]])
  })
  
  test("ReferenceManager searchByTitle test", () => {
    const items: BibliographicItem[] = [
      new JournalArticle("title1", ["author1"], ["keyword1"], "summary1", new MyDate(2020, 1, 1), 10, "publisher1", "journal1", 1, 1),
      new ConferancePaper("title2", ["author2"], ["keyword2"], "summary2", new MyDate(2021, 1, 1), 20, "publisher2", "conferance1", "location1"),
      new BibliographicItem("title3", ["author3"], ["keyword3"], "summary3", new MyDate(2022, 1, 1), 30, "publisher3"),
      new BibliographicItem("title4", ["author4"], ["keyword4"], "summary4", new MyDate(2023, 1, 1), 40, "publisher4"),
      new BibliographicItem("title5", ["author5"], ["keyword5"], "summary5", new MyDate(2024, 1, 1), 50, "publisher5")
    ]
    const referenceManager = new ReferenceManager(items)
    expect(referenceManager.searchByTitle("title1")).toEqual([items[0]])
    expect(referenceManager.searchByTitle("title2")).toEqual([items[1]])
    expect(referenceManager.searchByTitle("title3")).toEqual([items[2]])
    expect(referenceManager.searchByTitle("title4")).toEqual([items[3]])
    expect(referenceManager.searchByTitle("title5")).toEqual([items[4]])
  })

  test("ReferenceManager searchByAuthor test", () => {
    const items: BibliographicItem[] = [
      new JournalArticle("title1", ["author1"], ["keyword1"], "summary1", new MyDate(2020, 1, 1), 10, "publisher1", "journal1", 1, 1),
      new ConferancePaper("title2", ["author2"], ["keyword2"], "summary2", new MyDate(2021, 1, 1), 20, "publisher2", "conferance1", "location1"),
      new BibliographicItem("title3", ["author3"], ["keyword3"], "summary3", new MyDate(2022, 1, 1), 30, "publisher3"),
      new BibliographicItem("title4", ["author4"], ["keyword4"], "summary4", new MyDate(2023, 1, 1),  40, "publisher4"),
      new BibliographicItem("title5", ["author5"], ["keyword5"], "summary5", new MyDate(2024, 1, 1), 50, "publisher5")
    ]
    const referenceManager = new ReferenceManager(items)
    expect(referenceManager.searchByAuthor("author1")).toEqual([items[0]])
    expect(referenceManager.searchByAuthor("author2")).toEqual([items[1]])
    expect(referenceManager.searchByAuthor("author3")).toEqual([items[2]])
    expect(referenceManager.searchByAuthor("author4")).toEqual([items[3]])
    expect(referenceManager.searchByAuthor("author5")).toEqual([items[4]])
    expect(referenceManager.searchByAuthor("author")).toEqual(items)
  })
  
  test("ReferenceManager searchByPublisher test", () => {
    const items: BibliographicItem[] = [
      new JournalArticle("title1", ["author1"], ["keyword1"], "summary1", new MyDate(2020, 1, 1), 10, "publisher1", "journal1", 1, 1),
      new ConferancePaper("title2", ["author2"], ["keyword2"], "summary2", new MyDate(2021, 1, 1), 20, "publisher2", "conferance1", "location1"),
      new BibliographicItem("title3", ["author3"], ["keyword3"], "summary3", new MyDate(2022, 1, 1), 30, "publisher3"),
      new BibliographicItem("title4", ["author4"], ["keyword4"], "summary4", new MyDate(2023, 1, 1), 40, "publisher4"),
      new BibliographicItem("title5", ["author5"], ["keyword5"], "summary5", new MyDate(2024, 1, 1), 50, "publisher5")
    ]
    const referenceManager = new ReferenceManager(items)
    expect(referenceManager.searchByPublisher("publisher1")).toEqual([items[0]])
    expect(referenceManager.searchByPublisher("publisher2")).toEqual([items[1]])
    expect(referenceManager.searchByPublisher("publisher3")).toEqual([items[2]])
    expect(referenceManager.searchByPublisher("publisher4")).toEqual([items[3]])
    expect(referenceManager.searchByPublisher("publisher5")).toEqual([items[4]])
  })

  test("ReferenceManager searchByYear test", () => {
    const items: BibliographicItem[] = [
      new JournalArticle("title1", ["author1"], ["keyword1"], "summary1", new MyDate(2020, 1, 1), 10, "publisher1", "journal1", 1, 1),
      new ConferancePaper("title2", ["author2"], ["keyword2"], "summary2", new MyDate   (2021, 1, 1), 20, "publisher2", "conferance1", "location1"),      
      new BibliographicItem("title3", ["author3"], ["keyword3"], "summary3", new MyDate(2022, 1, 1), 30, "publisher3"),
      new BibliographicItem("title4", ["author4"], ["keyword4"], "summary4", new MyDate(2023, 1, 1), 40, "publisher4"),
      new BibliographicItem("title5", ["author5"], ["keyword5"], "summary5", new MyDate(2024, 1, 1), 50, "publisher5")
    ]
    const referenceManager = new ReferenceManager(items)
    expect(referenceManager.searchByYear(2020)).toEqual([items[0]])
    expect(referenceManager.searchByYear(2021)).toEqual([items[1]])
    expect(referenceManager.searchByYear(2022)).toEqual([items[2]])
    expect(referenceManager.searchByYear(2023)).toEqual([items[3]])
    expect(referenceManager.searchByYear(2024)).toEqual([items[4]])
  })

  test("ReferenceManager prinTable test", () => {
    const items: BibliographicItem[] = [
      new JournalArticle("title1", ["author1"], ["keyword1"], "summary1", new MyDate(2020, 1, 1), 10, "publisher1", "journal1", 1, 1),
      new ConferancePaper("title2", ["author2"], ["keyword2"], "summary2", new MyDate(2021, 1, 1), 20, "publisher2", "conferance1", "location1"),
      new BibliographicItem("title3", ["author3"], ["keyword3"], "summary3", new MyDate(2022, 1, 1), 30, "publisher3"),
      new BibliographicItem("title4", ["author4"], ["keyword4"], "summary4", new MyDate(2023, 1, 1), 40, "publisher4"),
      new BibliographicItem("title5", ["author5"], ["keyword5"], "summary5", new MyDate(2024, 1, 1), 50, "publisher5")
    ]
    const referenceManager = new ReferenceManager(items)
    expect(referenceManager.printTable()).toBeUndefined()
  })

  test("ReferenceManager exportIEEE test", () => {
    const items: BibliographicItem[] = [
      new JournalArticle("title1", ["author1"], ["keyword1"], "summary1", new MyDate(2020, 1, 1), 10, "publisher1", "journal1", 1, 1),
      new ConferancePaper("title2", ["author2"], ["keyword2"], "summary2", new MyDate(2021, 1, 1), 20, "publisher2", "conferance1", "location1"),
      new BibliographicItem("title3", ["author3"], ["keyword3"], "summary3", new MyDate(2022, 1, 1), 30, "publisher3"),
      new BibliographicItem("title4", ["author4"], ["keyword4"], "summary4", new MyDate(2023, 1, 1), 40, "publisher4"),
      new BibliographicItem("title5", ["author5"], ["keyword5"], "summary5", new MyDate(2024, 1, 1), 50, "publisher5")
    ]
    const referenceManager = new ReferenceManager(items)
    expect(referenceManager.exportIEEE()).toEqual([
      "[1] author1, title1, publisher1, 2020, pp. 10 journal1, vol. 1, no. 1",
      "[2] author2, title2, publisher2, 2021, pp. 20 conferance1, location1",
      "[3] author3, title3, publisher3, 2022, pp. 30",
      "[4] author4, title4, publisher4, 2023, pp. 40",
      "[5] author5, title5, publisher5, 2024, pp. 50"
    ])
  })
})