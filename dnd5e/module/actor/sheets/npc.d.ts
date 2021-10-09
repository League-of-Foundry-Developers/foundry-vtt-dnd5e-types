/**
 * An Actor sheet for NPC type characters.
 * @extends {ActorSheet5e}
 */
declare class ActorSheet5eNPC extends ActorSheet5e {
  /** @override */
  get defaultOptions(): import('@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/utils/helpers.mjs').InsertKeys<
    {
      token?: TokenDocument5e | null | undefined;
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
   * Organize Owned Items for rendering the NPC sheet.
   * @param {object} data  Copy of the actor data being prepared for displayed. *Will be mutated.*
   * @private
   */
  private _prepareItems;
  /**
   * Format NPC armor information into a localized string.
   * @returns {string}  Formatted armor label.
   */
  getArmorLabel(): string;
  /**
   * Handle rolling NPC health values using the provided formula.
   * @param {Event} event  The original click event.
   * @private
   */
  private _onRollHPFormula;
}
