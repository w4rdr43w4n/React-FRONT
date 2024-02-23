export type resData = {
  id?:number,
  title?:string,
  authors?:unknown ,
  author?:unknown ,
  published?:string ,
  pdf_url?:string ,
  abstract?:string,
  subject?:string,
}
export type Data = {
  title:string,
  authors?:unknown,
  author?:unknown,
  published:unknown,
  pdf_url:string,
}
export type paper = {
  paperId?:string,
  title:string,
  year:string,
  authors:unknown[],
  abstract:string,
  openAccessPdf:string
}