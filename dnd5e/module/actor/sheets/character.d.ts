/**
 * An Actor sheet for player character type actors.
 * @extends {ActorSheet5e}
 */
declare class ActorSheet5eCharacter extends ActorSheet5e {
  /**
   * Define default rendering options for the NPC sheet.
   * @returns {object}
   */
  static get defaultOptions(): any;
  /**
   * Organize and classify Owned Items for Character sheets
   * @param {object} data  Copy of the actor data being prepared for display. *Will be mutated.*
   * @private
   */
  private _prepareItems;
  /**
   * A helper method to establish the displayed preparation state for an item.
   * @param {Item5e} item  Item being prepared for display. *Will be mutated.*
   * @private
   */
  private _prepareItemToggleState;
  /**
   * Handle mouse click events for character sheet actions.
   * @param {MouseEvent} event  The originating click event.
   * @returns {Promise}         Dialog or roll result.
   * @private
   */
  private _onSheetAction;
  /**
   * Handle toggling the state of an Owned Item within the Actor.
   * @param {Event} event        The triggering click event.
   * @returns {Promise<Item5e>}  Item with the updates applied.
   * @private
   */
  private _onToggleItem;
  /**
   * Take a short rest, calling the relevant function on the Actor instance.
   * @param {Event} event             The triggering click event.
   * @returns {Promise<RestResult>}  Result of the rest action.
   * @private
   */
  private _onShortRest;
  /**
   * Take a long rest, calling the relevant function on the Actor instance.
   * @param {Event} event             The triggering click event.
   * @returns {Promise<RestResult>}  Result of the rest action.
   * @private
   */
  private _onLongRest;
}
