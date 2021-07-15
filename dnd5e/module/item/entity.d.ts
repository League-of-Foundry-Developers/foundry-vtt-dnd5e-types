/**
 * Override and extend the basic Item implementation
 * @extends {Item}
 */
declare class Item5e extends Item {
  static chatListeners(html: any): void;
  /**
   * Handle execution of a chat card action via a click event on one of the card buttons
   * @param {Event} event       The originating click event
   * @returns {Promise}         A promise which resolves once the handler workflow is complete
   * @private
   */
  private static _onChatCardAction;
  /**
   * Handle toggling the visibility of chat card content when the name is clicked
   * @param {Event} event   The originating click event
   * @private
   */
  private static _onChatCardToggleContent;
  /**
   * Get the Actor which is the author of a chat card
   * @param {HTMLElement} card    The chat card being used
   * @return {Actor|null}         The Actor entity or null
   * @private
   */
  private static _getChatCardActor;
  /**
   * Get the Actor which is the author of a chat card
   * @param {HTMLElement} card    The chat card being used
   * @return {Actor[]}            An Array of Actor entities, if any
   * @private
   */
  private static _getChatCardTargets;
  /**
   * Create a consumable spell scroll Item from a spell Item.
   * @param {Item5e} spell      The spell to be made into a scroll
   * @return {Item5e}           The created scroll consumable item
   */
  static createScrollFromSpell(spell: Item5e): Item5e;
  /**
   * Determine which ability score modifier is used by this item
   * @type {string|null}
   */
  get abilityMod(): string | null;
  /**
   * Does the Item implement an attack roll as part of its usage
   * @type {boolean}
   */
  get hasAttack(): boolean;
  /**
   * Does the Item implement a damage roll as part of its usage
   * @type {boolean}
   */
  get hasDamage(): boolean;
  /**
   * Does the Item implement a versatile damage roll as part of its usage
   * @type {boolean}
   */
  get isVersatile(): boolean;
  /**
   * Does the item provide an amount of healing instead of conventional damage?
   * @return {boolean}
   */
  get isHealing(): boolean;
  /**
   * Does the Item implement a saving throw as part of its usage
   * @type {boolean}
   */
  get hasSave(): boolean;
  /**
   * Does the Item have a target
   * @type {boolean}
   */
  get hasTarget(): boolean;
  /**
   * Does the Item have an area of effect target
   * @type {boolean}
   */
  get hasAreaTarget(): boolean;
  /**
   * A flag for whether this Item is limited in it's ability to be used by charges or by recharge.
   * @type {boolean}
   */
  get hasLimitedUses(): boolean;
  labels: {} | undefined;
  /**
   * Compute item attributes which might depend on prepared actor data.
   */
  prepareFinalAttributes(): void;
  /**
   * Populate a label with the compiled and simplified damage formula
   * based on owned item actor data. This is only used for display
   * purposes and is not related to Item5e#rollDamage
   *
   * @returns {Array} array of objects with `formula` and `damageType`
   */
  getDerivedDamageLabel(): any[];
  /**
   * Update the derived spell DC for an item that requires a saving throw
   * @returns {number|null}
   */
  getSaveDC(): number | null;
  /**
   * Update a label to the Item detailing its total to hit bonus.
   * Sources:
   * - item entity's innate attack bonus
   * - item's actor's proficiency bonus if applicable
   * - item's actor's global bonuses to the given item type
   * - item's ammunition if applicable
   *
   * @returns {Object} returns `rollData` and `parts` to be used in the item's Attack roll
   */
  getAttackToHit(): Object;
  /**
   * Populates the max uses of an item.
   * If the item is an owned item and the `max` is not numeric, calculate based on actor data.
   */
  prepareMaxUses(): void;
  /**
   * Roll the item to Chat, creating a chat card which contains follow up attack or damage roll options
   * @param {object} [options]
   * @param {boolean} [options.configureDialog]     Display a configuration dialog for the item roll, if applicable?
   * @param {string} [options.rollMode]             The roll display mode with which to display (or not) the card
   * @param {boolean} [options.createMessage]       Whether to automatically create a chat message (if true) or simply return
   *                                        the prepared chat message data (if false).
   * @return {Promise<ChatMessage|object|void>}
   */
  roll({
    configureDialog,
    rollMode,
    createMessage
  }?:
    | {
        configureDialog?: boolean | undefined;
        rollMode?: string | undefined;
        createMessage?: boolean | undefined;
      }
    | undefined): Promise<ChatMessage | object | void>;
  /**
   * Verify that the consumed resources used by an Item are available.
   * Otherwise display an error and return false.
   * @param {boolean} consumeQuantity     Consume quantity of the item if other consumption modes are not available?
   * @param {boolean} consumeRecharge     Whether the item consumes the recharge mechanic
   * @param {boolean} consumeResource     Whether the item consumes a limited resource
   * @param {string|null} consumeSpellLevel The category of spell slot to consume, or null
   * @param {boolean} consumeUsage        Whether the item consumes a limited usage
   * @returns {object|boolean}            A set of data changes to apply when the item is used, or false
   * @private
   */
  private _getUsageUpdates;
  /**
   * Handle update actions required when consuming an external resource
   * @param {object} itemUpdates        An object of data updates applied to this item
   * @param {object} actorUpdates       An object of data updates applied to the item owner (Actor)
   * @param {object} resourceUpdates    An object of data updates applied to a different resource item (Item)
   * @return {boolean|void}             Return false to block further progress, or return nothing to continue
   * @private
   */
  private _handleConsumeResource;
  /**
   * Display the chat card for an Item as a Chat Message
   * @param {object} [options]          Options which configure the display of the item chat card
   * @param {string} options.rollMode         The message visibility mode to apply to the created card
   * @param {boolean} [options.createMessage]   Whether to automatically create a ChatMessage entity (if true), or only return
   *                                  the prepared message data (if false)
   */
  displayCard({
    rollMode,
    createMessage
  }?:
    | {
        rollMode: string;
        createMessage?: boolean | undefined;
      }
    | undefined): Promise<
    | ChatMessage
    | {
        user: any;
        type: 0;
        content: string;
        flavor: any;
        speaker: import('@league-of-foundry-developers/foundry-vtt-types/src/types/helperTypes').PropertiesToSource<
          import('@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/data/data.mjs/chatSpeakerData').ChatSpeakerDataProperties
        >;
        flags: {
          'core.canPopout': boolean;
        };
      }
    | undefined
  >;
  /**
   * Prepare an object of chat data used to display a card for the Item in the chat log
   * @param {Object} htmlOptions    Options used by the TextEditor.enrichHTML function
   * @return {Object}               An object of chat data to render
   */
  getChatData(htmlOptions?: Object): Object;
  /**
   * Prepare chat card data for equipment type items
   * @private
   */
  private _equipmentChatData;
  /**
   * Prepare chat card data for weapon type items
   * @private
   */
  private _weaponChatData;
  /**
   * Prepare chat card data for consumable type items
   * @private
   */
  private _consumableChatData;
  /**
   * Prepare chat card data for tool type items
   * @private
   */
  private _toolChatData;
  /**
   * Prepare chat card data for tool type items
   * @private
   */
  private _lootChatData;
  /**
   * Render a chat card for Spell type data
   * @return {Object}
   * @private
   */
  private _spellChatData;
  /**
   * Prepare chat card data for items of the "Feat" type
   * @private
   */
  private _featChatData;
  /**
   * Place an attack roll using an item (weapon, feat, spell, or equipment)
   * Rely upon the d20Roll logic for the core implementation
   *
   * @param {object} options        Roll options which are configured and provided to the d20Roll function
   * @return {Promise<Roll|null>}   A Promise which resolves to the created Roll instance
   */
  rollAttack(options?: object): Promise<Roll | null>;
  _ammo: Item | undefined;
  /**
   * Place a damage roll using an item (weapon, feat, spell, or equipment)
   * Rely upon the damageRoll logic for the core implementation.
   * @param {object} [options]
   * @param {MouseEvent} [options.event]    An event which triggered this roll, if any
   * @param {boolean} [options.critical]    Should damage be rolled as a critical hit?
   * @param {number} [options.spellLevel]   If the item is a spell, override the level for damage scaling
   * @param {boolean} [options.versatile]   If the item is a weapon, roll damage using the versatile formula
   * @param {object} [options.options]      Additional options passed to the damageRoll function
   * @return {Promise<Roll>}        A Promise which resolves to the created Roll instance
   */
  rollDamage({
    critical,
    event,
    spellLevel,
    versatile,
    options
  }?:
    | {
        event?: MouseEvent | undefined;
        critical?: boolean | undefined;
        spellLevel?: number | undefined;
        versatile?: boolean | undefined;
        options?: object | undefined;
      }
    | undefined): Promise<Roll>;
  /**
   * Adjust a cantrip damage formula to scale it for higher level characters and monsters
   * @private
   */
  private _scaleCantripDamage;
  /**
   * Adjust the spell damage formula to scale it for spell level up-casting
   * @param {Array} parts         The original damage parts
   * @param {number} baseLevel    The default spell level
   * @param {number} spellLevel   The casted spell level
   * @param {string} formula      The scaling formula
   * @param {object} rollData     A data object that should be applied to the scaled damage roll
   * @return {string[]}           The scaled roll parts
   * @private
   */
  private _scaleSpellDamage;
  /**
   * Scale an array of damage parts according to a provided scaling formula and scaling multiplier
   * @param {string[]} parts    Initial roll parts
   * @param {string} scaling    A scaling formula
   * @param {number} times      A number of times to apply the scaling formula
   * @param {object} rollData   A data object that should be applied to the scaled damage roll
   * @return {string[]}         The scaled roll parts
   * @private
   */
  private _scaleDamage;
  /**
   * Place an attack roll using an item (weapon, feat, spell, or equipment)
   * Rely upon the d20Roll logic for the core implementation
   *
   * @return {Promise<Roll>}   A Promise which resolves to the created Roll instance
   */
  rollFormula(options?: {}): Promise<Roll>;
  /**
   * Perform an ability recharge test for an item which uses the d6 recharge mechanic
   * @return {Promise<Roll>}   A Promise which resolves to the created Roll instance
   */
  rollRecharge(): Promise<Roll>;
  /**
   * Roll a Tool Check. Rely upon the d20Roll logic for the core implementation
   * @prarm {Object} options   Roll configuration options provided to the d20Roll function
   * @return {Promise<Roll>}   A Promise which resolves to the created Roll instance
   */
  rollToolCheck(options?: {}): Promise<Roll>;
  /**
   * Pre-creation logic for the automatic configuration of owned equipment type Items
   * @private
   */
  private _onCreateOwnedEquipment;
  /**
   * Pre-creation logic for the automatic configuration of owned spell type Items
   * @private
   */
  private _onCreateOwnedSpell;
  /**
   * Pre-creation logic for the automatic configuration of owned weapon type Items
   * @private
   */
  private _onCreateOwnedWeapon;
}
