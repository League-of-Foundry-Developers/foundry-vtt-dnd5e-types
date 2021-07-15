/**
 * An Actor sheet for player character type actors.
 * Extends the base ActorSheet5e class.
 * @type {ActorSheet5e}
 */
declare class ActorSheet5eCharacter extends ActorSheet5e {
  /**
   * Define default rendering options for the NPC sheet
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
   * Organize and classify Owned Items for Character sheets
   * @private
   */
  private _prepareItems;
  /**
   * A helper method to establish the displayed preparation state for an item
   * @param {Item} item
   * @private
   */
  private _prepareItemToggleState;
  /**
   * Handle mouse click events for character sheet actions
   * @param {MouseEvent} event    The originating click event
   * @private
   */
  private _onSheetAction;
  /**
   * Handle toggling the state of an Owned Item within the Actor
   * @param {Event} event   The triggering click event
   * @private
   */
  private _onToggleItem;
  /**
   * Take a short rest, calling the relevant function on the Actor instance
   * @param {Event} event   The triggering click event
   * @private
   */
  private _onShortRest;
  /**
   * Take a long rest, calling the relevant function on the Actor instance
   * @param {Event} event   The triggering click event
   * @private
   */
  private _onLongRest;
}
