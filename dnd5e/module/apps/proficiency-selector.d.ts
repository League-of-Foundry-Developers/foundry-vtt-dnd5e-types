/**
 * An application for selecting proficiencies with categories that can contain children.
 *
 * @extends {TraitSelector}
 */
declare class ProficiencySelector extends TraitSelector {
  /**
   * Cached version of the base items compendia indices with the needed subtype fields.
   * @type {object}
   */
  static _cachedIndices: object;
  /**
   * Structure representing proficiency choices split into categories.
   *
   * @typedef {object} ProficiencyChoice
   * @property {string} label                    Localized label for the choice.
   * @property {boolean} chosen                  Should this choice be selected by default?
   * @property {ProficiencyChoice[]} [children]  Array of children if this is a category.
   */
  /**
   * A static helper method to get a list of choices for a proficiency type.
   *
   * @param {string} type               Proficiency type to select, either `armor`, `tool`, or `weapon`.
   * @param {string[]} [chosen]         Optional list of items to be marked as chosen.
   * @returns {object<string, ProficiencyChoice>}  Object mapping proficiency ids to choice objects.
   */
  static getChoices(type: string, chosen?: string[] | undefined): object;
  /**
   * Fetch an item for the provided ID. If the provided ID contains a compendium pack name
   * it will be fetched from that pack, otherwise it will be fetched from the compendium defined
   * in `DND5E.sourcePacks.ITEMS`.
   *
   * @param {string} identifier            Simple ID or compendium name and ID separated by a dot.
   * @param {object} [options]
   * @param {boolean} [options.indexOnly]  If set to true, only the index data will be fetched (will never return
   *                                       Promise).
   * @param {boolean} [options.fullItem]   If set to true, the full item will be returned as long as `indexOnly` is
   *                                       false.
   * @returns {Promise<Item5e>|object}     Promise for a `Document` if `indexOnly` is false & `fullItem` is true,
   *                                       otherwise else a simple object containing the minimal index data.
   */
  static getBaseItem(
    identifier: string,
    {
      indexOnly,
      fullItem
    }?:
      | {
          indexOnly?: boolean | undefined;
          fullItem?: boolean | undefined;
        }
      | undefined
  ): Promise<any> | object;
  /**
   * Take the provided object and sort by the "label" property.
   *
   * @param {object} object  Object to be sorted.
   * @returns {object}        Sorted object.
   * @private
   */
  private static _sortObject;
  /**
   * Enable/disable all children when a category is checked.
   *
   * @param {HTMLElement} checkbox  Checkbox that was changed.
   * @private
   */
  private _onToggleCategory;
}
