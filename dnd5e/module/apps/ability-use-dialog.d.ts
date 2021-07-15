/**
 * A specialized Dialog subclass for ability usage
 * @type {Dialog}
 */
declare class AbilityUseDialog extends Dialog<Dialog.Options> {
  /**
   * A constructor function which displays the Spell Cast Dialog app for a given Actor and Item.
   * Returns a Promise which resolves to the dialog FormData once the workflow has been completed.
   * @param {Item5e} item
   * @return {Promise}
   */
  static create(item: any): Promise<any>;
  /**
   * Get dialog data related to limited spell slots
   * @private
   */
  private static _getSpellData;
  /**
   * Get the ability usage note that is displayed
   * @private
   */
  private static _getAbilityUseNote;
  constructor(item: any, dialogData?: {}, options?: {});
  /**
   * Store a reference to the Item entity being used
   * @type {Item5e}
   */
  item: any;
}
