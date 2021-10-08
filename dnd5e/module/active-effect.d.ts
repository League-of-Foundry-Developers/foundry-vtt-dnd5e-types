/**
 * Extend the base ActiveEffect class to implement system-specific logic.
 * @extends {ActiveEffect}
 */
declare class ActiveEffect5e extends ActiveEffect {
  /**
   * Manage Active Effect instances through the Actor Sheet via effect control buttons.
   * @param {MouseEvent} event      The left-click event on the effect control
   * @param {Actor|Item} owner      The owning entity which manages this effect
   * @returns {Promise|null}        Promise that resolves when the changes are complete.
   */
  static onManageActiveEffect(event: MouseEvent, owner: Actor | Item): Promise<any> | null;
  /**
   * Prepare the data structure for Active Effects which are currently applied to an Actor or Item.
   * @param {ActiveEffect[]} effects    The array of Active Effect instances to prepare sheet data for
   * @returns {object}                  Data for rendering
   */
  static prepareActiveEffectCategories(effects: ActiveEffect[]): object;
  /**
   * Is this active effect currently suppressed?
   * @type {boolean}
   */
  isSuppressed: boolean;
  /**
   * Determine whether this Active Effect is suppressed or not.
   */
  determineSuppression(): void;
}
