import Item5e from './entity';

/**
 * Override and extend the core ItemSheet implementation to handle specific item types
 * @extends {ItemSheet}
 */
declare class ItemSheet5e extends ItemSheet {
  /**
   * Get the valid item consumption targets which exist on the actor
   * @param item         Item data for the item being displayed
   * @return {{string: string}}   An object of potential consumption targets
   * @private
   */
  _getItemConsumptionTargets(
    item: Item5e.Data
  ): {
    [K: string]: string;
  };

  /* -------------------------------------------- */

  /**
   * Get the text item status which is shown beneath the Item type in the top-right corner of the sheet
   * @return {string}
   * @private
   */
  _getItemStatus(item: Item5e.Data): string;

  /* -------------------------------------------- */

  /**
   * Get the Array of item properties which are used in the small sidebar of the description tab
   * @return {Array}
   * @private
   */
  _getItemProperties(item: Item5e.Data): string[];

  /* -------------------------------------------- */

  /**
   * Is this item a separate large object like a siege engine or vehicle
   * component that is usually mounted on fixtures rather than equipped, and
   * has its own AC and HP.
   * @param item
   * @returns {boolean}
   * @private
   */
  _isItemMountable(item: Item5e.Data): boolean;

  /* -------------------------------------------- */

  /**
   * Add or remove a damage part from the damage formula
   * @param {Event} event     The original click event
   * @return {Promise}
   * @private
   */
  _onDamageControl(event: MouseEvent): Promise<this>;

  /* -------------------------------------------- */

  /**
   * Handle spawning the TraitSelector application which allows a checkbox of multiple trait options
   * @param {Event} event   The click event which originated the selection
   * @private
   */
  _onConfigureClassSkills(event: MouseEvent): void;
}

export default ItemSheet5e;
