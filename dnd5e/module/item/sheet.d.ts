/**
 * Override and extend the core ItemSheet implementation to handle specific item types.
 * @extends {ItemSheet}
 */
declare class ItemSheet5e extends ItemSheet<DocumentSheet.Options, ItemSheet.Data<DocumentSheet.Options>> {
  /** @inheritdoc */
  static get defaultOptions(): import('@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/utils/helpers.mjs').InsertKeys<
    {
      classes: string[];
      template: string;
      viewPermission: 0 | 2 | 1 | 3;
      baseApplication: string | null;
      width: number;
      height: number;
      top: number | null;
      left: number | null;
      scale?: number | null | undefined;
      popOut: boolean;
      minimizable: boolean;
      resizable: boolean;
      id: string;
      title: string;
      scrollY: string[];
      tabs: {
        navSelector: string;
        contentSelector: string;
        initial: string;
      }[];
      dragDrop: Omit<DragDrop.Options, 'permissions' | 'callbacks'>[];
      filters: Omit<SearchFilter.Options, 'callback'>[];
      closeOnSubmit: boolean;
      submitOnChange: boolean;
      submitOnClose: boolean;
      editable: boolean;
    },
    import('@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/utils/helpers.mjs').OmitByValue<
      {
        width: number;
        height: number;
        classes: string[];
        resizable: boolean;
        scrollY: string[];
        tabs: {
          navSelector: string;
          contentSelector: string;
          initial: string;
        }[];
      },
      never
    >
  >;
  constructor(...args: any[]);
  /**
   * Get the base weapons and tools based on the selected type.
   *
   * @param {object} item        Item data for the item being displayed
   * @returns {Promise<object>}  Object with base items for this type formatted for selectOptions.
   * @protected
   */
  protected _getItemBaseTypes(item: object): Promise<object>;
  /**
   * Get the valid item consumption targets which exist on the actor
   * @param {object} item         Item data for the item being displayed
   * @returns {{string: string}}   An object of potential consumption targets
   * @private
   */
  private _getItemConsumptionTargets;
  /**
   * Get the text item status which is shown beneath the Item type in the top-right corner of the sheet.
   * @param {object} item    Copy of the item data being prepared for display.
   * @returns {string|null}  Item status string if applicable to item's type.
   * @private
   */
  private _getItemStatus;
  /**
   * Get the Array of item properties which are used in the small sidebar of the description tab.
   * @param {object} item  Copy of the item data being prepared for display.
   * @returns {string[]}   List of property labels to be shown.
   * @private
   */
  private _getItemProperties;
  /**
   * Is this item a separate large object like a siege engine or vehicle component that is
   * usually mounted on fixtures rather than equipped, and has its own AC and HP.
   * @param {object} item  Copy of item data being prepared for display.
   * @returns {boolean}    Is item siege weapon or vehicle equipment?
   * @private
   */
  private _isItemMountable;
  /**
   * Add or remove a damage part from the damage formula.
   * @param {Event} event             The original click event.
   * @returns {Promise<Item5e>|null}  Item with updates applied.
   * @private
   */
  private _onDamageControl;
  /**
   * Handle spawning the TraitSelector application for selection various options.
   * @param {Event} event   The click event which originated the selection.
   * @private
   */
  private _onConfigureTraits;
}
