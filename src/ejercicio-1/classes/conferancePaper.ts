import { ConferancePaperI } from "../interfaces/bibliographicItems"
import { BibliographicItem } from "./bibliographicItem"
import { MyDate } from "./date"

/**
 * Class that represents a conference paper. It extends the BibliographicItem class and it implements the ConferancePaperI interface. It has the following properties:
 * - conferenceName: The name of the conference where the paper was presented
 * - location: The location where the conference was held
 */
export class ConferancePaper extends BibliographicItem implements ConferancePaperI {
  constructor(readonly title: string,
                readonly authors: string[],
                readonly keywords: string[],
                readonly summary: string,
                readonly date: MyDate,
                readonly pages: number,
                readonly editorial: string,
                readonly conferenceName: string,
                readonly location: string) {
                  super(title, authors, keywords, summary, date, pages, editorial)
  }
    
  /**
   * Exports the conference paper in IEEE format. The format is the following:
   * [index] authors, title, editorial, year, pp. pages conferenceName, location
   * @param index - The index of the conference paper in the list of bibliographic items. It is used to generate the reference number in the IEEE format. It starts from 1.
   * @returns - A string that represents the conference paper in IEEE format
   */
  public toIEEE(index: number): string {
    return super.toIEEE(index) + ` ${this.conferenceName}, ${this.location}`
  }
}