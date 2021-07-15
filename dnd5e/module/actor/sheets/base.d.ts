/**
 * Extend the basic ActorSheet class to suppose system-specific logic and functionality.
 * This sheet is an Abstract layer which is not used.
 * @extends {ActorSheet}
 */
declare class ActorSheet5e extends ActorSheet<ActorSheet.Options, ActorSheet.Data<ActorSheet.Options>> {
  /** @override */
  get defaultOptions(): import('@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/utils/helpers.mjs').InsertKeys<
    {
      token?: TokenConfig<TokenConfig.Options> | null | undefined;
      classes: string[];
      template: string;
      viewPermission: 0 | 2 | 1 | 3;
      baseApplication: string | null;
      width: number | null;
      height: number | 'auto' | null;
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
  /**
   * A set of item types that should be prevented from being dropped on this type of actor sheet.
   * @type {Set<string>}
   */
  static unsupportedItemTypes: Set<string>;
  constructor(...args: any[]);
  /**
   * Track the set of item filters which are applied
   * @type {Set}
   */
  _filters: Set<any>;
  /**
   * Prepare the display of movement speed data for the Actor*
   * @param {object} actorData                The Actor data being prepared.
   * @param {boolean} [largestPrimary=false]  Show the largest movement speed as "primary", otherwise show "walk"
   * @returns {{primary: string, special: string}}
   * @private
   */
  private _getMovementSpeed;
  _getSenses(
    actorData: any
  ): {
    special: any;
  };
  /**
   * Prepare the data structure for traits data like languages, resistances & vulnerabilities, and proficiencies
   * @param {object} traits   The raw traits data object from the actor data
   * @private
   */
  private _prepareTraits;
  /**
   * Insert a spell into the spellbook object when rendering the character sheet
   * @param {Object} data     The Actor data being prepared
   * @param {Array} spells    The spell data being prepared
   * @private
   */
  private _prepareSpellbook;
  /**
   * Determine whether an Owned Item will be shown based on the current set of filters
   * @return {boolean}
   * @private
   */
  private _filterItems;
  /**
   * Get the font-awesome icon used to display a certain level of skill proficiency
   * @private
   */
  private _getProficiencyIcon;
  /**
   * Iinitialize Item list filters by activating the set of filters which are currently applied
   * @private
   */
  private _initializeFilterItemList;
  /**
   * Handle input changes to numeric form fields, allowing them to accept delta-typed inputs
   * @param event
   * @private
   */
  private _onChangeInputDelta;
  /**
   * Handle spawning the TraitSelector application which allows a checkbox of multiple trait options
   * @param {Event} event   The click event which originated the selection
   * @private
   */
  private _onConfigMenu;
  /**
   * Handle cycling proficiency in a Skill
   * @param {Event} event   A click or contextmenu event which triggered the handler
   * @private
   */
  private _onCycleSkillProficiency;
  /**
   * Handle enabling editing for a spell slot override value
   * @param {MouseEvent} event    The originating click event
   * @private
   */
  private _onSpellSlotOverride;
  /**
   * Change the uses amount of an Owned Item within the Actor
   * @param {Event} event   The triggering click event
   * @private
   */
  private _onUsesChange;
  /**
   * Handle rolling of an item from the Actor sheet, obtaining the Item instance and dispatching to it's roll method
   * @private
   */
  private _onItemRoll;
  /**
   * Handle attempting to recharge an item usage by rolling a recharge check
   * @param {Event} event   The originating click event
   * @private
   */
  private _onItemRecharge;
  /**
   * Handle rolling of an item from the Actor sheet, obtaining the Item instance and dispatching to it's roll method
   * @private
   */
  private _onItemSummary;
  /**
   * Handle creating a new Owned Item for the actor using initial data defined in the HTML dataset
   * @param {Event} event   The originating click event
   * @private
   */
  private _onItemCreate;
  /**
   * Handle editing an existing Owned Item for the Actor
   * @param {Event} event   The originating click event
   * @private
   */
  private _onItemEdit;
  /**
   * Handle deleting an existing Owned Item for the Actor
   * @param {Event} event   The originating click event
   * @private
   */
  private _onItemDelete;
  /**
   * Handle rolling an Ability check, either a test or a saving throw
   * @param {Event} event   The originating click event
   * @private
   */
  private _onRollAbilityTest;
  /**
   * Handle rolling a Skill check
   * @param {Event} event   The originating click event
   * @private
   */
  private _onRollSkillCheck;
  /**
   * Handle toggling Ability score proficiency level
   * @param {Event} event     The originating click event
   * @private
   */
  private _onToggleAbilityProficiency;
  /**
   * Handle toggling of filters to display a different set of owned items
   * @param {Event} event     The click event which triggered the toggle
   * @private
   */
  private _onToggleFilter;
  /**
   * Handle spawning the TraitSelector application which allows a checkbox of multiple trait options
   * @param {Event} event   The click event which originated the selection
   * @private
   */
  private _onTraitSelector;
}
