/**
 * A Dialog to prompt the user to select from a list of items.
 * @type {Dialog}
 */
declare class SelectItemsPrompt extends Dialog<Dialog.Options> {
  /**
   * A constructor function which displays the AddItemPrompt app for a given Actor and Item set.
   * Returns a Promise which resolves to the dialog FormData once the workflow has been completed.
   * @param {Array<Item5e>} items  Items that might be added.
   * @param {object} options
   * @param {string} options.hint  Localized hint to display at the top of the prompt
   * @returns {Promise<string[]>}  list of item ids which the user has selected
   */
  static create(
    items: Array<any>,
    {
      hint
    }: {
      hint: string;
    }
  ): Promise<string[]>;
  constructor(items: any, dialogData?: {}, options?: {});
  /**
   * Store a reference to the Item entities being used
   * @type {Array<Item5e>}
   */
  items: Array<any>;
}
