/**
 * An Actor sheet for Vehicle type actors.
 * Extends the base ActorSheet5e class.
 * @type {ActorSheet5e}
 */
declare class ActorSheet5eVehicle extends ActorSheet5e {
  /** @inheritdoc */
  static get defaultOptions(): import('@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/utils/helpers.mjs').InsertKeys<
    {
      token?: TokenDocument | null | undefined;
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
        classes: string[];
        width: number;
        height: number;
      },
      never
    >
  >;
  /**
   * Creates a new cargo entry for a vehicle Actor.
   * @type {object}
   */
  static get newCargo(): any;
  /**
   * Compute the total weight of the vehicle's cargo.
   * @param {number} totalWeight    The cumulative item weight from inventory items
   * @param {object} actorData      The data object for the Actor being rendered
   * @returns {{max: number, value: number, pct: number}}
   * @private
   */
  private _computeEncumbrance;
  /**
   * Prepare items that are mounted to a vehicle and require one or more crew
   * to operate.
   * @param {object} item  Copy of the item data being prepared for display. *Will be mutated.*
   * @private
   */
  private _prepareCrewedItem;
  /**
   * Organize Owned Items for rendering the Vehicle sheet.
   * @param {object} data  Copy of the actor data being prepared for display. *Will be mutated.*
   * @private
   */
  private _prepareItems;
  /**
   * Handle saving a cargo row (i.e. crew or passenger) in-sheet.
   * @param {Event} event  Triggering event.
   * @returns {Promise<Actor5e>|null}  Actor after update if any changes were made.
   * @private
   */
  private _onCargoRowChange;
  /**
   * Handle editing certain values like quantity, price, and weight in-sheet.
   * @param {Event} event  Triggering event.
   * @returns {Promise<Item5e>}  Item with updates applied.
   * @private
   */
  private _onEditInSheet;
  /**
   * Special handling for editing HP to clamp it within appropriate range.
   * @param {Event} event  Triggering event.
   * @returns {Promise<Item5e>}  Item after the update is applied.
   * @private
   */
  private _onHPChange;
  /**
   * Special handling for editing quantity value of equipment and weapons inside the features tab.
   * @param {Event} event  Triggering event.
   * @returns {Promise<Item5e>}  Item after the update is applied.
   * @private
   */
  private _onQtyChange;
  /**
   * Handle toggling an item's crewed status.
   * @param {Event} event  Triggering event.
   * @returns {Promise<Item5e>}  Item after the toggling is applied.
   * @private
   */
  private _onToggleItem;
}
