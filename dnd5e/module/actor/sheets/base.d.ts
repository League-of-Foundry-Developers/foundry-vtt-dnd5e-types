/**
 * Extend the basic ActorSheet class to suppose system-specific logic and functionality.
 * @abstract
 * @extends {ActorSheet}
 */
declare class ActorSheet5e extends ActorSheet<ActorSheet.Options, ActorSheet.Data<ActorSheet.Options>> {
  /** @override */
  get defaultOptions(): import('@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/utils/helpers.mjs').InsertKeys<
    {
      token?: TokenDocument5e | null | undefined;
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
   * Prepare the display of movement speed data for the Actor.
   * @param {object} actorData                The Actor data being prepared.
   * @param {boolean} [largestPrimary=false]  Show the largest movement speed as "primary", otherwise show "walk".
   * @returns {{primary: string, special: string}}
   * @private
   */
  private _getMovementSpeed;
  /**
   * Prepare senses object for display.
   * @param {object} actorData  Copy of actor data being prepared for display.
   * @returns {object}          Senses grouped by key with localized and formatted string.
   * @protected
   */
  protected _getSenses(actorData: object): object;
  /**
   * Break down all of the Active Effects affecting a given target property.
   * @param {string} target               The data property being targeted.
   * @returns {AttributionDescription[]}  Any active effects that modify that property.
   * @protected
   */
  protected _prepareActiveEffectAttributions(target: string): any[];
  /**
   * Produce a list of armor class attribution objects.
   * @param {object} data                 Actor data to determine the attributions from.
   * @returns {AttributionDescription[]}  List of attribution descriptions.
   * @protected
   */
  protected _prepareArmorClassAttribution(data: object): any[];
  /**
   * Prepare the data structure for traits data like languages, resistances & vulnerabilities, and proficiencies.
   * @param {object} traits   The raw traits data object from the actor data. *Will be mutated.*
   * @private
   */
  private _prepareTraits;
  /**
   * Insert a spell into the spellbook object when rendering the character sheet.
   * @param {object} data      Copy of the Actor data being prepared for display.
   * @param {object[]} spells  Spells to be included in the spellbook.
   * @returns {object[]}       Spellbook sections in the proper order.
   * @private
   */
  private _prepareSpellbook;
  /**
   * Determine whether an Owned Item will be shown based on the current set of filters.
   * @param {object[]} items       Copies of item data to be filtered.
   * @param {Set<string>} filters  Filters applied to the item list.
   * @returns {object[]}           Subset of input items limited by the provided filters.
   * @private
   */
  private _filterItems;
  /**
   * Get the font-awesome icon used to display a certain level of skill proficiency.
   * @param {number} level  A proficiency mode defined in `CONFIG.DND5E.proficiencyLevels`.
   * @returns {string}      HTML string for the chosen icon.
   * @private
   */
  private _getProficiencyIcon;
  /**
   * Initialize Item list filters by activating the set of filters which are currently applied
   * @param {number} i  Index of the filter in the list.
   * @param {HTML} ul   HTML object for the list item surrounding the filter.
   * @private
   */
  private _initializeFilterItemList;
  /**
   * Handle input changes to numeric form fields, allowing them to accept delta-typed inputs
   * @param {Event} event  Triggering event.
   * @private
   */
  private _onChangeInputDelta;
  /**
   * Handle spawning the TraitSelector application which allows a checkbox of multiple trait options.
   * @param {Event} event   The click event which originated the selection.
   * @private
   */
  private _onConfigMenu;
  /**
   * Handle cycling proficiency in a Skill.
   * @param {Event} event   A click or contextmenu event which triggered the handler.
   * @returns {Promise}     Updated data for this actor after changes are applied.
   * @private
   */
  private _onCycleSkillProficiency;
  /**
   * Handle enabling editing for a spell slot override value.
   * @param {MouseEvent} event    The originating click event.
   * @private
   */
  private _onSpellSlotOverride;
  /**
   * Change the uses amount of an Owned Item within the Actor.
   * @param {Event} event        The triggering click event.
   * @returns {Promise<Item5e>}  Updated item.
   * @private
   */
  private _onUsesChange;
  /**
   * Handle rolling an item from the Actor sheet, obtaining the Item instance, and dispatching to its roll method.
   * @param {Event} event  The triggering click event.
   * @returns {Promise}    Results of the roll.
   * @private
   */
  private _onItemRoll;
  /**
   * Handle attempting to recharge an item usage by rolling a recharge check.
   * @param {Event} event      The originating click event.
   * @returns {Promise<Roll>}  The resulting recharge roll.
   * @private
   */
  private _onItemRecharge;
  /**
   * Handle toggling and items expanded description.
   * @param {Event} event   Triggering event.
   * @private
   */
  private _onItemSummary;
  /**
   * Handle creating a new Owned Item for the actor using initial data defined in the HTML dataset.
   * @param {Event} event          The originating click event.
   * @returns {Promise<Item5e[]>}  The newly created item.
   * @private
   */
  private _onItemCreate;
  /**
   * Handle editing an existing Owned Item for the Actor.
   * @param {Event} event    The originating click event.
   * @returns {ItemSheet5e}  The rendered item sheet.
   * @private
   */
  private _onItemEdit;
  /**
   * Handle deleting an existing Owned Item for the Actor.
   * @param {Event} event  The originating click event.
   * @returns {Promise<Item5e>|undefined}  The deleted item if something was deleted.
   * @private
   */
  private _onItemDelete;
  /**
   * Handle displaying the property attribution tooltip when a property is hovered over.
   * @param {Event} event   The originating mouse event.
   * @private
   */
  private _onPropertyAttribution;
  /**
   * Handle rolling an Ability test or saving throw.
   * @param {Event} event      The originating click event.
   * @private
   */
  private _onRollAbilityTest;
  /**
   * Handle rolling a Skill check.
   * @param {Event} event      The originating click event.
   * @returns {Promise<Roll>}  The resulting roll.
   * @private
   */
  private _onRollSkillCheck;
  /**
   * Handle toggling Ability score proficiency level.
   * @param {Event} event         The originating click event.
   * @returns {Promise<Actor5e>}  Updated actor instance.
   * @private
   */
  private _onToggleAbilityProficiency;
  /**
   * Handle toggling of filters to display a different set of owned items.
   * @param {Event} event     The click event which triggered the toggle.
   * @returns {ActorSheet5e}  This actor sheet with toggled filters.
   * @private
   */
  private _onToggleFilter;
  /**
   * Handle spawning the ProficiencySelector application to configure armor, weapon, and tool proficiencies.
   * @param {Event} event            The click event which originated the selection.
   * @returns {ProficiencySelector}  Newly displayed application.
   * @private
   */
  private _onProficiencySelector;
  /**
   * Handle spawning the TraitSelector application which allows a checkbox of multiple trait options.
   * @param {Event} event      The click event which originated the selection.
   * @returns {TraitSelector}  Newly displayed application.
   * @private
   */
  private _onTraitSelector;
}
