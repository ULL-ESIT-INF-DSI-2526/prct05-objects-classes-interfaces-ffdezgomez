import { MyDate } from "../classes/date"  

export interface BibliographicItemI {
  title: string,
  authors: string[],
  keywords: string[],
  summary: string,
  date: MyDate,
  pages: number,
  editorial: string
}

export interface JournalArticleI extends BibliographicItemI {
  journalName: string,
  volume: number,
  issue: number
}

export interface ConferancePaperI extends BibliographicItemI {
  conferenceName: string,
  location: string
}

export interface BookChapterI extends BibliographicItemI {
  chapterName: string,
  location: string
}

export interface TFGorTGMI extends BibliographicItemI {
  type: 'TFG' | 'TFM' | 'PhD',
  university: string,
  department?: string,
  location: string
}