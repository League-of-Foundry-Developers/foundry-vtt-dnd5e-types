/**
 * An Actor sheet for Vehicle type actors.
 * Extends the base ActorSheet5e class.
 * @type {ActorSheet5e}
 */
declare class ActorSheet5eVehicle extends ActorSheet5e {
  /**
   * Define default rendering options for the Vehicle sheet.
   */
  static get defaultOptions(): import('@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/utils/helpers.mjs').InsertKeys<
    {
      token?: TokenConfig<TokenConfig.Options> | null | undefined;
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
   */
  static get newCargo(): {
    name: string;
    quantity: number;
  };
  /**
   * Compute the total weight of the vehicle's cargo.
   * @param {Number} totalWeight    The cumulative item weight from inventory items
   * @param {Object} actorData      The data object for the Actor being rendered
   * @returns {{max: number, value: number, pct: number}}
   * @private
   */
  private _computeEncumbrance;
  /**
   * Prepare items that are mounted to a vehicle and require one or more crew
   * to operate.
   * @private
   */
  private _prepareCrewedItem;
  /**
   * Organize Owned Items for rendering the Vehicle sheet.
   * @private
   */
  private _prepareItems;
  /**
   * Handle saving a cargo row (i.e. crew or passenger) in-sheet.
   * @param event {Event}
   * @returns {Promise<Actor>|null}
   * @private
   */
  private _onCargoRowChange;
  /**
   * Handle editing certain values like quantity, price, and weight in-sheet.
   * @param event {Event}
   * @returns {Promise<Item>}
   * @private
   */
  private _onEditInSheet;
  /**
   * Special handling for editing HP to clamp it within appropriate range.
   * @param event {Event}
   * @returns {Promise<Item>}
   * @private
   */
  private _onHPChange;
  /**
   * Handle toggling an item's crewed status.
   * @param event {Event}
   * @returns {Promise<Item>}
   * @private
   */
  private _onToggleItem;
}
