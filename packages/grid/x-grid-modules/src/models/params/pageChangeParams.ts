/**
 * Object passed as parameter of the page change event handler.
 */
export interface PageChangeParams {
  /**
   * The new page
   */
  page: number;
  /**
   * The total number of pages
   */
  pageCount: number;
  /**
   * The number of rows in a page
   */
  pageSize: number;
  /**
   * The total number of rows
   */
  rowCount: number;
}