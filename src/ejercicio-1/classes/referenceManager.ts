import { ConferancePaper } from "./conferancePaper"
import { BibliographicItem } from "./bibliographicItem"
import { JournalArticle } from "./journalArticle"

/**
 * Class that manages a list of bibliographic items. It has methods to search for bibliographic items by keyword, title, author, publisher and year. It also has a method to print the bibliographic items in a table format and a method to export the bibliographic items in IEEE format.
 */
export class ReferenceManager {
  accessor #items: BibliographicItem[]
  constructor(items:BibliographicItem[]) { this.#items = items }

  /**
   * Searches for bibliographic items by keyword. The search is case insensitive and it will return all the items that contain the given keyword in their keywords list 
   * @param keyword - The keyword to search for 
   * @returns - An array of bibliographic items that contain the given keyword in their keywords list
   */
  searchByKeyword(keyword: string): BibliographicItem[] {
    return this.#items.filter((value) => {
      return value.keywords.some(word => word.toLowerCase() === keyword.toLocaleLowerCase())
    })
  }

  /**
   *  Searches for bibliographic items by title. The search is case insensitive and it will return all the items that contain the given title as a substring
   * @param title - The title to search for
   * @returns  - An array of bibliographic items that contain the given title as a substring
   */
  searchByTitle(title: string): BibliographicItem[] {
    return this.#items.filter((value) => {
      return value.title.toLowerCase().includes(title.toLocaleLowerCase())
    })
  }

  /**
   * Searches for bibliographic items by author
   * @param author - The author to search for
   * @returns  - An array of bibliographic items that were written by the given author
   */
  searchByAuthor(author: string): BibliographicItem[] {
    return this.#items.filter((value) => {
      return value.authors.some(word => word.toLowerCase() === author.toLocaleLowerCase())
    })
  }

  /**
   * Searches for bibliographic items by publisher
   * @param publisher - The publisher to search for
   * @returns - An array of bibliographic items that were published by the given publisher
   */
  searchByPublisher(publisher: string): BibliographicItem[] {
    return this.#items.filter((value) => {
      return value.editorial.toLowerCase().includes(publisher.toLocaleLowerCase())
    })
  }

  /**
   * Searches for bibliographic items by year
   * 
   * @param year - The year to search for
   * @returns - An array of bibliographic items that were published in the given year
   */
  searchByYear(year: number): BibliographicItem[] {
    return this.#items.filter(value => 
      value.date.year === year
    )
  }

  /**
   * Prints the bibliographic items in a table format. The table will have the following columns:
   * - type: The type of the bibliographic item (JournalArticle, ConferancePaper, etc.)
   * - title: The title of the bibliographic item
   * - authors: The authors of the bibliographic item
   * - editorial: The editorial of the bibliographic item
   * - year: The year of the bibliographic item
   * - pages: The number of pages of the bibliographic item
   * - journal: If the bibliographic item is a JournalArticle, it will show the journal name
   * - volume: If the bibliographic item is a JournalArticle, it will show the volume number
   * - issue: If the bibliographic item is a JournalArticle, it will show the issue number
   * - conference: If the bibliographic item is a ConferancePaper, it will show the conference name
   * - location: If the bibliographic item is a ConferancePaper, it will show the location
   */
  printTable(): void {
    console.table(this.#items.map(item => {
      const base = {
        type: item.constructor.name,
        title: item.title,
        authors: item.authors,
        editorial: item.editorial,
        year: item.date.year,
        pages: item.pages
      }

      if (item instanceof JournalArticle) {
        return {
          ...base,
          journal: item.journalName,
          volume: item.volume,
          issue: item.issue
        }
      } 

      if (item instanceof ConferancePaper) {
        return {
          ...base,
          conference: item.conferenceName,
          location: item.location
        }
      }

      return base
    }))
  }

  /**
   * Exports the bibliographic items in IEEE format
   * 
   * @param items - If not provided, it will export all the items in the manager
   * @returns - An array of strings, each string is a bibliographic item in IEEE format
   */
  exportIEEE(items: BibliographicItem[] = this.#items): string[] {
    return items.map((item, index) => {
      return item.toIEEE(index + 1)
    })
  }
}
