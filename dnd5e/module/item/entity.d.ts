/**
 * Override and extend the basic Item implementation.
 * @extends {Item}
 */
declare class Item5e extends Item {
  /**
   * Apply listeners to chat messages.
   * @param {HTML} html  Rendered chat message.
   */
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
   * @returns {Actor|null}         The Actor entity or null
   * @private
   */
  private static _getChatCardActor;
  /**
   * Get the Actor which is the author of a chat card
   * @param {HTMLElement} card    The chat card being used
   * @returns {Actor[]}            An Array of Actor entities, if any
   * @private
   */
  private static _getChatCardTargets;
  /**
   * Create a consumable spell scroll Item from a spell Item.
   * @param {Item5e} spell      The spell to be made into a scroll
   * @returns {Item5e}          The created scroll consumable item
   */
  static createScrollFromSpell(spell: Item5e): Item5e;
  /**
   * Which ability score modifier is used by this item.
   * @type {string|null}
   */
  get abilityMod(): string | null;
  /**
   * Does the Item implement an attack roll as part of its usage?
   * @type {boolean}
   */
  get hasAttack(): boolean;
  /**
   * Does the Item implement a damage roll as part of its usage?
   * @type {boolean}
   */
  get hasDamage(): boolean;
  /**
   * Does the Item implement a versatile damage roll as part of its usage?
   * @type {boolean}
   */
  get isVersatile(): boolean;
  /**
   * Does the item provide an amount of healing instead of conventional damage?
   * @type {boolean}
   */
  get isHealing(): boolean;
  /**
   * Does the Item implement a saving throw as part of its usage?
   * @type {boolean}
   */
  get hasSave(): boolean;
  /**
   * Does the Item implement an ability check as part of its usage?
   * @type {boolean}
   */
  get hasAbilityCheck(): boolean;
  /**
   * Does the Item have a target?
   * @type {boolean}
   */
  get hasTarget(): boolean;
  /**
   * Does the Item have an area of effect target?
   * @type {boolean}
   */
  get hasAreaTarget(): boolean;
  /**
   * Is this Item limited in its ability to be used by charges or by recharge?
   * @type {boolean}
   */
  get hasLimitedUses(): boolean;
  /**
   * Is this item any of the armor subtypes?
   * @type {boolean}
   */
  get isArmor(): boolean;
  labels: {} | undefined;
  /**
   * Compute item attributes which might depend on prepared actor data. If this item is
   * embedded this method will be called after the actor's data is prepared. Otherwise it
   * will be called at the end of `Item5e#prepareDerivedData`.
   */
  prepareFinalAttributes(): void;
  /**
   * Populate a label with the compiled and simplified damage formula based on owned item
   * actor data. This is only used for display purposes and is not related to `Item5e#rollDamage`.
   * @returns {{damageType: number, formula: string}[]}
   */
  getDerivedDamageLabel(): {
    damageType: number;
    formula: string;
  }[];
  /**
   * Update the derived spell DC for an item that requires a saving throw.
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
   * @returns {{rollData: object, parts: string[]}|null}  Data used in the item's Attack roll.
   */
  getAttackToHit(): {
    rollData: object;
    parts: string[];
  } | null;
  /**
   * Retrieve an item's critical hit threshold. Uses the smallest value from among the
   * following sources:
   * - item entity
   * - item entity's actor (if it has one)
   * - the constant '20'
   *
   * @returns {number|null}  The minimum value that must be rolled to be considered a critical hit.
   */
  getCriticalThreshold(): number | null;
  /**
   * Populates the max uses of an item. If the item is an owned item and the `max`
   * is not numeric, calculate based on actor data.
   */
  prepareMaxUses(): void;
  /**
   * Roll the item to Chat, creating a chat card which contains follow up attack or damage roll options
   * @param {object} [options]
   * @param {boolean} [options.configureDialog]     Display a configuration dialog for the item roll, if applicable?
   * @param {string} [options.rollMode]             The roll display mode with which to display (or not) the card
   * @param {boolean} [options.createMessage]       Whether to automatically create a chat message (if true) or simply
   *                                                return
   *                                                the prepared chat message data (if false).
   * @returns {Promise<ChatMessage|object|void>}
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
   * @param {object} options
   * @param {boolean} options.consumeQuantity     Consume quantity of the item if other consumption modes are not
   *                                              available?
   * @param {boolean} options.consumeRecharge     Whether the item consumes the recharge mechanic
   * @param {boolean} options.consumeResource     Whether the item consumes a limited resource
   * @param {string|null} options.consumeSpellLevel The category of spell slot to consume, or null
   * @param {boolean} options.consumeUsage        Whether the item consumes a limited usage
   * @returns {object|boolean}            A set of data changes to apply when the item is used, or false
   * @private
   */
  private _getUsageUpdates;
  /**
   * Handle update actions required when consuming an external resource
   * @param {object} itemUpdates        An object of data updates applied to this item
   * @param {object} actorUpdates       An object of data updates applied to the item owner (Actor)
   * @param {object} resourceUpdates    An object of data updates applied to a different resource item (Item)
   * @returns {boolean|void}            Return false to block further progress, or return nothing to continue
   * @private
   */
  private _handleConsumeResource;
  /**
   * Display the chat card for an Item as a Chat Message
   * @param {object} [options]                Options which configure the display of the item chat card
   * @param {string} [options.rollMode]       The message visibility mode to apply to the created card
   * @param {boolean} [options.createMessage] Whether to automatically create a ChatMessage entity (if true), or only
   *                                          return the prepared message data (if false)
   * @returns {ChatMessage|object} Chat message if `createMessage` is true, otherwise an object containing message data.
   */
  displayCard({
    rollMode,
    createMessage
  }?:
    | {
        rollMode?: string | undefined;
        createMessage?: boolean | undefined;
      }
    | undefined): ChatMessage | object;
  /**
   * Prepare an object of chat data used to display a card for the Item in the chat log.
   * @param {object} htmlOptions    Options used by the TextEditor.enrichHTML function.
   * @returns {object}              An object of chat data to render.
   */
  getChatData(htmlOptions?: object): object;
  /**
   * Prepare chat card data for equipment type items.
   * @param {object} data     Copy of item data being use to display the chat message.
   * @param {object} labels   Specially prepared item labels.
   * @param {string[]} props  Existing list of properties to be displayed. *Will be mutated.*
   * @private
   */
  private _equipmentChatData;
  /**
   * Prepare chat card data for weapon type items.
   * @param {object} data     Copy of item data being use to display the chat message.
   * @param {object} labels   Specially prepared item labels.
   * @param {string[]} props  Existing list of properties to be displayed. *Will be mutated.*
   * @private
   */
  private _weaponChatData;
  /**
   * Prepare chat card data for consumable type items.
   * @param {object} data     Copy of item data being use to display the chat message.
   * @param {object} labels   Specially prepared item labels.
   * @param {string[]} props  Existing list of properties to be displayed. *Will be mutated.*
   * @private
   */
  private _consumableChatData;
  /**
   * Prepare chat card data for tool type items.
   * @param {object} data     Copy of item data being use to display the chat message.
   * @param {object} labels   Specially prepared item labels.
   * @param {string[]} props  Existing list of properties to be displayed. *Will be mutated.*
   * @private
   */
  private _toolChatData;
  /**
   * Prepare chat card data for loot type items.
   * @param {object} data     Copy of item data being use to display the chat message.
   * @param {object} labels   Specially prepared item labels.
   * @param {string[]} props  Existing list of properties to be displayed. *Will be mutated.*
   * @private
   */
  private _lootChatData;
  /**
   * Render a chat card for Spell type data.
   * @param {object} data     Copy of item data being use to display the chat message.
   * @param {object} labels   Specially prepared item labels.
   * @param {string[]} props  Existing list of properties to be displayed. *Will be mutated.*
   * @private
   */
  private _spellChatData;
  /**
   * Prepare chat card data for items of the Feat type.
   * @param {object} data     Copy of item data being use to display the chat message.
   * @param {object} labels   Specially prepared item labels.
   * @param {string[]} props  Existing list of properties to be displayed. *Will be mutated.*
   * @private
   */
  private _featChatData;
  /**
   * Place an attack roll using an item (weapon, feat, spell, or equipment)
   * Rely upon the d20Roll logic for the core implementation
   *
   * @param {object} options        Roll options which are configured and provided to the d20Roll function
   * @returns {Promise<Roll|null>}   A Promise which resolves to the created Roll instance
   */
  rollAttack(options?: object): Promise<Roll | null>;
  _ammo: Item | undefined;
  /**
   * Place a damage roll using an item (weapon, feat, spell, or equipment)
   * Rely upon the damageRoll logic for the core implementation.
   * @param {object} [config]
   * @param {MouseEvent} [config.event]    An event which triggered this roll, if any
   * @param {boolean} [config.critical]    Should damage be rolled as a critical hit?
   * @param {number} [config.spellLevel]   If the item is a spell, override the level for damage scaling
   * @param {boolean} [config.versatile]   If the item is a weapon, roll damage using the versatile formula
   * @param {object} [config.options]      Additional options passed to the damageRoll function
   * @returns {Promise<Roll>}        A Promise which resolves to the created Roll instance
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
        options?: object;
      }
    | undefined): Promise<Roll>;
  /**
   * Adjust a cantrip damage formula to scale it for higher level characters and monsters.
   * @param {string[]} parts   The original parts of the damage formula.
   * @param {string} scale     The scaling formula.
   * @param {number} level     Level at which the spell is being cast.
   * @param {object} rollData  A data object that should be applied to the scaled damage roll.
   * @returns {string[]}       The parts of the damage formula with the scaling applied.
   * @private
   */
  private _scaleCantripDamage;
  /**
   * Adjust the spell damage formula to scale it for spell level up-casting.
   * @param {string[]} parts      The original parts of the damage formula.
   * @param {number} baseLevel    Default level for the spell.
   * @param {number} spellLevel   Level at which the spell is being cast.
   * @param {string} formula      The scaling formula.
   * @param {object} rollData     A data object that should be applied to the scaled damage roll.
   * @returns {string[]}          The parts of the damage formula with the scaling applied.
   * @private
   */
  private _scaleSpellDamage;
  /**
   * Scale an array of damage parts according to a provided scaling formula and scaling multiplier.
   * @param {string[]} parts    The original parts of the damage formula.
   * @param {string} scaling    The scaling formula.
   * @param {number} times      A number of times to apply the scaling formula.
   * @param {object} rollData   A data object that should be applied to the scaled damage roll
   * @returns {string[]}        The parts of the damage formula with the scaling applied.
   * @private
   */
  private _scaleDamage;
  /**
   * Prepare data needed to roll an attack using an item (weapon, feat, spell, or equipment)
   * and then pass it off to `d20Roll`.
   * @param {object} [options]
   * @param {boolean} [options.spellLevel]  Level at which a spell is cast.
   * @returns {Promise<Roll>}   A Promise which resolves to the created Roll instance.
   */
  rollFormula({
    spellLevel
  }?:
    | {
        spellLevel?: boolean | undefined;
      }
    | undefined): Promise<Roll>;
  /**
   * Perform an ability recharge test for an item which uses the d6 recharge mechanic.
   * @returns {Promise<Roll>}   A Promise which resolves to the created Roll instance
   */
  rollRecharge(): Promise<Roll>;
  /**
   * Prepare data needed to roll a tool check and then pass it off to `d20Roll`.
   * @param {object} [options]  Roll configuration options provided to the d20Roll function.
   * @returns {Promise<Roll>}   A Promise which resolves to the created Roll instance.
   */
  rollToolCheck(options?: object): Promise<Roll>;
  /**
   * Pre-creation logic for the automatic configuration of owned equipment type Items.
   *
   * @param {object} data       Data for the newly created item.
   * @param {object} actorData  Data for the actor to which the item is being added.
   * @param {boolean} isNPC     Is this actor an NPC?
   * @returns {object}          Updates to apply to the item data.
   * @private
   */
  private _onCreateOwnedEquipment;
  /**
   * Pre-creation logic for the automatic configuration of owned spell type Items.
   *
   * @param {object} data       Data for the newly created item.
   * @param {object} actorData  Data for the actor to which the item is being added.
   * @param {boolean} isNPC     Is this actor an NPC?
   * @returns {object}          Updates to apply to the item data.
   * @private
   */
  private _onCreateOwnedSpell;
  /**
   * Pre-creation logic for the automatic configuration of owned tool type Items.
   *
   * @param {object} data       Data for the newly created item.
   * @param {object} actorData  Data for the actor to which the item is being added.
   * @param {boolean} isNPC     Is this actor an NPC?
   * @returns {object}          Updates to apply to the item data.
   * @private
   */
  private _onCreateOwnedTool;
  /**
   * Pre-creation logic for the automatic configuration of owned weapon type Items.
   * @param {object} data       Data for the newly created item.
   * @param {object} actorData  Data for the actor to which the item is being added.
   * @param {boolean} isNPC     Is this actor an NPC?
   * @returns {object}          Updates to apply to the item data.
   * @private
   */
  private _onCreateOwnedWeapon;
}
