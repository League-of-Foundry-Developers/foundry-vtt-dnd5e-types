/**
 * A specialized Dialog subclass for ability usage.
 * @extends {Dialog}
 */
declare class AbilityUseDialog extends Dialog<Dialog.Options> {
  /**
   * A constructor function which displays the Spell Cast Dialog app for a given Actor and Item.
   * Returns a Promise which resolves to the dialog FormData once the workflow has been completed.
   * @param {Item5e} item  Item being used.
   * @returns {Promise}    Promise that is resolved when the use dialog is acted upon.
   */
  static create(item: any): Promise<any>;
  /**
   * Get dialog data related to limited spell slots.
   * @param {object} actorData  Data from the actor using the spell.
   * @param {object} itemData   Data from the spell being used.
   * @param {object} data       Data for the dialog being presented.
   * @returns {object}          Modified dialog data.
   * @private
   */
  private static _getSpellData;
  /**
   * Get the ability usage note that is displayed.
   * @param {object} item                                     Data for the item being used.
   * @param {{value: number, max: number, per: string}} uses  Object uses and recovery configuration.
   * @param {{charged: boolean, value: string}} recharge      Object recharge configuration.
   * @returns {string}                                        Localized string indicating available uses.
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
