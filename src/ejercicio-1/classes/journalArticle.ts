import { JournalArticleI } from '../interfaces/bibliographicItems'
import { BibliographicItem } from './bibliographicItem'
import { MyDate } from './date'

/**
 * Class that represents a journal article. It extends the BibliographicItem class and it implements the JournalArticleI interface. It has the following properties:
 * - journalName: The name of the journal where the article was published
 * - volume: The volume of the journal where the article was published
 * - issue: The issue of the journal where the article was published
 */
export class JournalArticle extends BibliographicItem implements JournalArticleI {
    constructor(readonly title: string,
                readonly authors: string[],
                readonly keywords: string[],
                readonly summary: string,
                readonly date: MyDate,
                readonly pages: number,
                readonly editorial: string,
                readonly journalName: string,
                readonly volume: number,
                readonly issue: number) {  
      super(title, authors, keywords, summary, date, pages, editorial)
    }
  
  /**
   * Exports the journal article in IEEE format. The format is the following:
   * [index] authors, title, editorial, year, pp. pages journalName, vol. volume, no. issue
   * @param index - The index of the journal article in the list of bibliographic items. It is used to generate the reference number in the IEEE format. It starts from 1.
   * @returns - A string that represents the journal article in IEEE format
   */
  public toIEEE(index: number): string {
    return super.toIEEE(index) + ` ${this.journalName}, vol. ${this.volume}, no. ${this.issue}`
  }
}
