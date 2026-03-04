import { BibliographicItemI } from "../interfaces/bibliographicItems"
import { MyDate } from "./date"

/**
 * Class that represents a bibliographic item. It has the following properties:
 * - title: The title of the bibliographic item
 * - authors: The authors of the bibliographic item
 * - keywords: The keywords of the bibliographic item
 * - summary: The summary of the bibliographic item
 * - date: The date of the bibliographic item
 * - pages: The number of pages of the bibliographic item
 * - editorial: The editorial of the bibliographic item
 */
export class BibliographicItem implements BibliographicItemI {
  constructor(readonly title: string,
                readonly authors: string[],
                readonly keywords: string[],
                readonly summary: string,
                readonly date: MyDate,
                readonly pages: number,
                readonly editorial: string) {}
  
  /**
   * Exports the bibliographic item in IEEE format. The format is the following:
   * @param index - The index of the bibliographic item in the list of bibliographic items. It is used to generate the reference number in the IEEE format. It starts from 1.
   * @returns - A string that represents the bibliographic item in IEEE format
   */
  public toIEEE(index: number): string {
    let result: string = `[${index}] `
    result += `${this.authors.join(', ')}, ${this.title}, ${this.editorial}, ${this.date.year}, pp. ${this.pages}`
    return result
  }
}