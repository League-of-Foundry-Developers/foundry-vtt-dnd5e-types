/**
 * Extend the base Actor class to implement additional system-specific logic.
 * @extends {Actor}
 */
declare class Actor5e extends Actor {
  /**
   * Return the features which a character is awarded for each class level.
   * @param {object} [options]
   * @param {string} [options.className]     Name of the class being added or updated.
   * @param {string} [options.subclassName]  Name of the subclass of the class being added, if any.
   * @param {number} [options.level]         The number of levels in the added class.
   * @param {number} [options.priorLevel]    The previous level of the added class.
   * @returns {Promise<Item5e[]>}            Items that should be added based on the changes made.
   */
  static loadClassFeatures({
    className,
    subclassName,
    level,
    priorLevel
  }?:
    | {
        className?: string | undefined;
        subclassName?: string | undefined;
        level?: number | undefined;
        priorLevel?: number | undefined;
      }
    | undefined): Promise<Item5e[]>;
  /**
   * Add additional system-specific sidebar directory context menu options for Actor entities
   * @param {jQuery} html         The sidebar HTML
   * @param {Array} entryOptions  The default array of context menu options
   */
  static addDirectoryContextOptions(html: JQueryStatic, entryOptions: any[]): void;
  /**
   * Format a type object into a string.
   * @param {object} typeData          The type data to convert to a string.
   * @returns {string}
   */
  static formatCreatureType(typeData: object): string;
  /**
   * Populate a proficiency object with a `selected` field containing a combination of
   * localizable group & individual proficiencies from `value` and the contents of `custom`.
   *
   * @param {object} data          Object containing proficiency data.
   * @param {string[]} data.value  Array of standard proficiency keys.
   * @param {string} data.custom   Semicolon-separated string of custom proficiencies.
   * @param {string} type          "armor", "weapon", or "tool"
   */
  static prepareProficiencies(
    data: {
      value: string[];
      custom: string;
    },
    type: string
  ): void;
  /**
   * The data source for Actor5e.classes allowing it to be lazily computed.
   * @type {object<string, Item5e>}
   * @private
   */
  private _classes;
  /**
   * A mapping of classes belonging to this Actor.
   * @type {object<string, Item5e>}
   */
  get classes(): any;
  /**
   * Is this Actor currently polymorphed into some other creature?
   * @type {boolean}
   */
  get isPolymorphed(): boolean;
  _preparationWarnings: any[] | undefined;
  labels: {} | undefined;
  armor: Item5e | null | undefined;
  shield: Item5e | null | undefined;
  /**
   * Return the amount of experience required to gain a certain character level.
   * @param {number} level  The desired level.
   * @returns {number}      The XP required.
   */
  getLevelExp(level: number): number;
  /**
   * Return the amount of experience granted by killing a creature of a certain CR.
   * @param {number} cr     The creature's challenge rating.
   * @returns {number}      The amount of experience granted per kill.
   */
  getCRExp(cr: number): number;
  /**
   * Given a list of items to add to the Actor, optionally prompt the
   * user for which they would like to add.
   * @param {Item5e[]} items         The items being added to the Actor.
   * @param {boolean} [prompt=true]  Whether or not to prompt the user.
   * @returns {Promise<Item5e[]>}
   */
  addEmbeddedItems(items: Item5e[], prompt?: boolean | undefined): Promise<Item5e[]>;
  /**
   * Get a list of features to add to the Actor when a class item is updated.
   * Optionally prompt the user for which they would like to add.
   * @param {object} [options]
   * @param {string} [options.className]     Name of the class if it has been changed.
   * @param {string} [options.subclassName]  Name of the selected subclass if it has been changed.
   * @param {number} [options.level]         New class level if it has been changed.
   * @returns {Promise<Item5e[]>}            Any new items that should be added to the actor.
   */
  getClassFeatures({
    className,
    subclassName,
    level
  }?:
    | {
        className?: string | undefined;
        subclassName?: string | undefined;
        level?: number | undefined;
      }
    | undefined): Promise<Item5e[]>;
  /**
   * Perform any Character specific preparation.
   * @param {object} actorData  Copy of the data for the actor being prepared. *Will be mutated.*
   */
  _prepareCharacterData(actorData: object): void;
  /**
   * Perform any NPC specific preparation.
   * @param {object} actorData  Copy of the data for the actor being prepared. *Will be mutated.*
   */
  _prepareNPCData(actorData: object): void;
  /**
   * Perform any Vehicle specific preparation.
   * @param {object} actorData  Copy of the data for the actor being prepared. *Will be mutated.*
   * @private
   */
  private _prepareVehicleData;
  /**
   * Prepare skill checks.
   * @param {object} actorData       Copy of the data for the actor being prepared. *Will be mutated.*
   * @param {object} bonusData       Data produced by `getRollData` to be applied to bonus formulas.
   * @param {object} bonuses         Global bonus data.
   * @param {number} checkBonus      Global ability check bonus.
   * @param {object} originalSkills  A transformed actor's original actor's skills.
   * @private
   */
  private _prepareSkills;
  /**
   * Convert a bonus value to a simple integer for displaying on the sheet.
   * @param {number|string|null} bonus  Actor's bonus value.
   * @param {object} data               Actor data to use for replacing @ strings.
   * @returns {number}                  Simplified bonus as an integer.
   * @protected
   */
  protected _simplifyBonus(bonus: number | string | null, data: object): number;
  /**
   * Initialize derived AC fields for Active Effects to target.
   * @param {object} actorData  Copy of the data for the actor being prepared. *Will be mutated.*
   * @private
   */
  private _prepareBaseArmorClass;
  /**
   * Calculate the initiative bonus to display on a character sheet
   *
   * @param {object} actorData         The actor data being prepared.
   * @param {number} globalCheckBonus  The simplified global ability check bonus for this actor
   * @param {object} bonusData         Actor data to use for replacing formula variables in bonuses
   */
  _computeInitiativeModifier(actorData: object, globalCheckBonus: number, bonusData: object): void;
  /**
   * Prepare data related to the spell-casting capabilities of the Actor.
   * @param {object} actorData  Copy of the data for the actor being prepared. *Will be mutated.*
   * @private
   */
  private _computeSpellcastingProgression;
  /**
   * Determine a character's AC value from their equipped armor and shield.
   * @param {object} data  Copy of the data for the actor being prepared. *Will be mutated.*
   * @returns {{
   *   calc: string,
   *   value: number,
   *   base: number,
   *   shield: number,
   *   bonus: number,
   *   cover: number,
   *   flat: number,
   *   equippedArmor: Item5e,
   *   equippedShield: Item5e,
   *   warnings: string[]
   * }}
   * @private
   */
  private _computeArmorClass;
  /**
   * Compute the level and percentage of encumbrance for an Actor.
   *
   * Optionally include the weight of carried currency across all denominations by applying the standard rule
   * from the PHB pg. 143
   * @param {object} actorData      The data object for the Actor being rendered
   * @returns {{max: number, value: number, pct: number}}  An object describing the character's encumbrance level
   * @private
   */
  private _computeEncumbrance;
  /**
   * Assign a class item as the original class for the Actor based on which class has the most levels.
   * @returns {Promise<Actor5e>}  Instance of the updated actor.
   * @protected
   */
  protected _assignPrimaryClass(): Promise<Actor5e>;
  /**
   * Apply a certain amount of damage or healing to the health pool for Actor
   * @param {number} amount       An amount of damage (positive) or healing (negative) to sustain
   * @param {number} multiplier   A multiplier which allows for resistance, vulnerability, or healing
   * @returns {Promise<Actor5e>}  A Promise which resolves once the damage has been applied
   */
  applyDamage(amount?: number, multiplier?: number): Promise<Actor5e>;
  /**
   * Determine whether the provided ability is usable for remarkable athlete.
   *
   * @param {string} ability  Ability type to check.
   * @returns {boolean}       Whether the actor has the remarkable athlete flag and the ability is physical.
   * @private
   */
  private _isRemarkableAthlete;
  /**
   * Roll a Skill Check
   * Prompt the user for input regarding Advantage/Disadvantage and any Situational Bonus
   * @param {string} skillId      The skill id (e.g. "ins")
   * @param {object} options      Options which configure how the skill check is rolled
   * @returns {Promise<Roll>}     A Promise which resolves to the created Roll instance
   */
  rollSkill(skillId: string, options?: object): Promise<Roll>;
  /**
   * Roll a generic ability test or saving throw.
   * Prompt the user for input on which variety of roll they want to do.
   * @param {string} abilityId    The ability id (e.g. "str")
   * @param {object} options      Options which configure how ability tests or saving throws are rolled
   */
  rollAbility(abilityId: string, options?: object): void;
  /**
   * Roll an Ability Test
   * Prompt the user for input regarding Advantage/Disadvantage and any Situational Bonus
   * @param {string} abilityId    The ability ID (e.g. "str")
   * @param {object} options      Options which configure how ability tests are rolled
   * @returns {Promise<Roll>}     A Promise which resolves to the created Roll instance
   */
  rollAbilityTest(abilityId: string, options?: object): Promise<Roll>;
  /**
   * Roll an Ability Saving Throw
   * Prompt the user for input regarding Advantage/Disadvantage and any Situational Bonus
   * @param {string} abilityId    The ability ID (e.g. "str")
   * @param {object} options      Options which configure how ability tests are rolled
   * @returns {Promise<Roll>}     A Promise which resolves to the created Roll instance
   */
  rollAbilitySave(abilityId: string, options?: object): Promise<Roll>;
  /**
   * Perform a death saving throw, rolling a d20 plus any global save bonuses
   * @param {object} options        Additional options which modify the roll
   * @returns {Promise<Roll|null>}  A Promise which resolves to the Roll instance
   */
  rollDeathSave(options?: object): Promise<Roll | null>;
  /**
   * Roll a hit die of the appropriate type, gaining hit points equal to the die roll plus your CON modifier
   * @param {string} [denomination]   The hit denomination of hit die to roll. Example "d8".
   *                                  If no denomination is provided, the first available HD will be used
   * @param {object} [options]        Show a dialog prompt for configuring the hit die roll?
   * @param {boolean} [options.dialog]        Show a dialog prompt for configuring the hit die roll?
   * @returns {Promise<Roll|null>}    The created Roll instance, or null if no hit die was rolled
   */
  rollHitDie(
    denomination?: string | undefined,
    {
      dialog
    }?:
      | {
          dialog?: boolean | undefined;
        }
      | undefined
  ): Promise<Roll | null>;
  /**
   * Results from a rest operation.
   *
   * @typedef {object} RestResult
   * @property {number} dhp            Hit points recovered during the rest.
   * @property {number} dhd            Hit dice recovered or spent during the rest.
   * @property {object} updateData     Updates applied to the actor.
   * @property {object[]} updateItems  Updates applied to actor's items.
   * @property {boolean} longRest      Whether the rest type was a long rest.
   * @property {boolean} newDay        Whether a new day occurred during the rest.
   */
  /**
   * Take a short rest, possibly spending hit dice and recovering resources, item uses, and pact slots.
   *
   * @param {object} [options]
   * @param {boolean} [options.dialog=true]         Present a dialog window which allows for rolling hit dice as part
   *                                                of the Short Rest and selecting whether a new day has occurred.
   * @param {boolean} [options.chat=true]           Summarize the results of the rest workflow as a chat message.
   * @param {boolean} [options.autoHD=false]        Automatically spend Hit Dice if you are missing 3 or more hit
   *                                                points.
   * @param {boolean} [options.autoHDThreshold=3]   A number of missing hit points which would trigger an automatic HD
   *                                                roll.
   * @returns {Promise<RestResult>}                 A Promise which resolves once the short rest workflow has completed.
   */
  shortRest({
    dialog,
    chat,
    autoHD,
    autoHDThreshold
  }?:
    | {
        dialog?: boolean | undefined;
        chat?: boolean | undefined;
        autoHD?: boolean | undefined;
        autoHDThreshold?: boolean | undefined;
      }
    | undefined): Promise<{
    /**
     * Hit points recovered during the rest.
     */
    dhp: number;
    /**
     * Hit dice recovered or spent during the rest.
     */
    dhd: number;
    /**
     * Updates applied to the actor.
     */
    updateData: object;
    /**
     * Updates applied to actor's items.
     */
    updateItems: object[];
    /**
     * Whether the rest type was a long rest.
     */
    longRest: boolean;
    /**
     * Whether a new day occurred during the rest.
     */
    newDay: boolean;
  }>;
  /**
   * Take a long rest, recovering hit points, hit dice, resources, item uses, and spell slots.
   *
   * @param {object} [options]
   * @param {boolean} [options.dialog=true]  Present a confirmation dialog window whether or not to take a long rest.
   * @param {boolean} [options.chat=true]    Summarize the results of the rest workflow as a chat message.
   * @param {boolean} [options.newDay=true]  Whether the long rest carries over to a new day.
   * @returns {Promise<RestResult>}          A Promise which resolves once the long rest workflow has completed.
   */
  longRest({
    dialog,
    chat,
    newDay
  }?:
    | {
        dialog?: boolean | undefined;
        chat?: boolean | undefined;
        newDay?: boolean | undefined;
      }
    | undefined): Promise<{
    /**
     * Hit points recovered during the rest.
     */
    dhp: number;
    /**
     * Hit dice recovered or spent during the rest.
     */
    dhd: number;
    /**
     * Updates applied to the actor.
     */
    updateData: object;
    /**
     * Updates applied to actor's items.
     */
    updateItems: object[];
    /**
     * Whether the rest type was a long rest.
     */
    longRest: boolean;
    /**
     * Whether a new day occurred during the rest.
     */
    newDay: boolean;
  }>;
  /**
   * Perform all of the changes needed for a short or long rest.
   *
   * @param {boolean} chat           Summarize the results of the rest workflow as a chat message.
   * @param {boolean} newDay         Has a new day occurred during this rest?
   * @param {boolean} longRest       Is this a long rest?
   * @param {number} [dhd=0]         Number of hit dice spent during so far during the rest.
   * @param {number} [dhp=0]         Number of hit points recovered so far during the rest.
   * @returns {Promise<RestResult>}  Consolidated results of the rest workflow.
   * @private
   */
  private _rest;
  /**
   * Display a chat message with the result of a rest.
   *
   * @param {RestResult} result         Result of the rest operation.
   * @param {boolean} [longRest=false]  Is this a long rest?
   * @returns {Promise<ChatMessage>}    Chat message that was created.
   * @protected
   */
  protected _displayRestResultMessage(
    result: {
      /**
       * Hit points recovered during the rest.
       */
      dhp: number;
      /**
       * Hit dice recovered or spent during the rest.
       */
      dhd: number;
      /**
       * Updates applied to the actor.
       */
      updateData: object;
      /**
       * Updates applied to actor's items.
       */
      updateItems: object[];
      /**
       * Whether the rest type was a long rest.
       */
      longRest: boolean;
      /**
       * Whether a new day occurred during the rest.
       */
      newDay: boolean;
    },
    longRest?: boolean | undefined
  ): Promise<ChatMessage>;
  /**
   * Automatically spend hit dice to recover hit points up to a certain threshold.
   *
   * @param {object} [options]
   * @param {number} [options.threshold=3]  A number of missing hit points which would trigger an automatic HD roll.
   * @returns {Promise<number>}             Number of hit dice spent.
   */
  autoSpendHitDice({
    threshold
  }?:
    | {
        threshold?: number | undefined;
      }
    | undefined): Promise<number>;
  /**
   * Recovers actor hit points and eliminates any temp HP.
   *
   * @param {object} [options]
   * @param {boolean} [options.recoverTemp=true]     Reset temp HP to zero.
   * @param {boolean} [options.recoverTempMax=true]  Reset temp max HP to zero.
   * @returns {object}                               Updates to the actor and change in hit points.
   * @protected
   */
  protected _getRestHitPointRecovery({
    recoverTemp,
    recoverTempMax
  }?:
    | {
        recoverTemp?: boolean | undefined;
        recoverTempMax?: boolean | undefined;
      }
    | undefined): object;
  /**
   * Recovers actor resources.
   * @param {object} [options]
   * @param {boolean} [options.recoverShortRestResources=true]  Recover resources that recharge on a short rest.
   * @param {boolean} [options.recoverLongRestResources=true]   Recover resources that recharge on a long rest.
   * @returns {object}                                          Updates to the actor.
   * @protected
   */
  protected _getRestResourceRecovery({
    recoverShortRestResources,
    recoverLongRestResources
  }?:
    | {
        recoverShortRestResources?: boolean | undefined;
        recoverLongRestResources?: boolean | undefined;
      }
    | undefined): object;
  /**
   * Recovers spell slots and pact slots.
   *
   * @param {object} [options]
   * @param {boolean} [options.recoverPact=true]     Recover all expended pact slots.
   * @param {boolean} [options.recoverSpells=true]   Recover all expended spell slots.
   * @returns {object}                               Updates to the actor.
   * @protected
   */
  protected _getRestSpellRecovery({
    recoverPact,
    recoverSpells
  }?:
    | {
        recoverPact?: boolean | undefined;
        recoverSpells?: boolean | undefined;
      }
    | undefined): object;
  /**
   * Recovers class hit dice during a long rest.
   *
   * @param {object} [options]
   * @param {number} [options.maxHitDice]  Maximum number of hit dice to recover.
   * @returns {object}                     Array of item updates and number of hit dice recovered.
   * @protected
   */
  protected _getRestHitDiceRecovery({
    maxHitDice
  }?:
    | {
        maxHitDice?: number | undefined;
      }
    | undefined): object;
  /**
   * Recovers item uses during short or long rests.
   *
   * @param {object} [options]
   * @param {boolean} [options.recoverShortRestUses=true]  Recover uses for items that recharge after a short rest.
   * @param {boolean} [options.recoverLongRestUses=true]   Recover uses for items that recharge after a long rest.
   * @param {boolean} [options.recoverDailyUses=true]      Recover uses for items that recharge on a new day.
   * @returns {Array<object>}                              Array of item updates.
   * @protected
   */
  protected _getRestItemUsesRecovery({
    recoverShortRestUses,
    recoverLongRestUses,
    recoverDailyUses
  }?:
    | {
        recoverShortRestUses?: boolean | undefined;
        recoverLongRestUses?: boolean | undefined;
        recoverDailyUses?: boolean | undefined;
      }
    | undefined): Array<object>;
  /**
   * Convert all carried currency to the highest possible denomination to reduce the number of raw coins being
   * carried by an Actor.
   * @returns {Promise<Actor5e>}
   */
  convertCurrency(): Promise<Actor5e>;
  /**
   * Transform this Actor into another one.
   *
   * @param {Actor5e} target            The target Actor.
   * @param {object} [options]
   * @param {boolean} [options.keepPhysical]    Keep physical abilities (str, dex, con)
   * @param {boolean} [options.keepMental]      Keep mental abilities (int, wis, cha)
   * @param {boolean} [options.keepSaves]       Keep saving throw proficiencies
   * @param {boolean} [options.keepSkills]      Keep skill proficiencies
   * @param {boolean} [options.mergeSaves]      Take the maximum of the save proficiencies
   * @param {boolean} [options.mergeSkills]     Take the maximum of the skill proficiencies
   * @param {boolean} [options.keepClass]       Keep proficiency bonus
   * @param {boolean} [options.keepFeats]       Keep features
   * @param {boolean} [options.keepSpells]      Keep spells
   * @param {boolean} [options.keepItems]       Keep items
   * @param {boolean} [options.keepBio]         Keep biography
   * @param {boolean} [options.keepVision]      Keep vision
   * @param {boolean} [options.transformTokens] Transform linked tokens too
   * @returns {Promise<Array<Token>>|null}      Updated token if the transformation was performed.
   */
  transformInto(
    target: Actor5e,
    {
      keepPhysical,
      keepMental,
      keepSaves,
      keepSkills,
      mergeSaves,
      mergeSkills,
      keepClass,
      keepFeats,
      keepSpells,
      keepItems,
      keepBio,
      keepVision,
      transformTokens
    }?:
      | {
          keepPhysical?: boolean | undefined;
          keepMental?: boolean | undefined;
          keepSaves?: boolean | undefined;
          keepSkills?: boolean | undefined;
          mergeSaves?: boolean | undefined;
          mergeSkills?: boolean | undefined;
          keepClass?: boolean | undefined;
          keepFeats?: boolean | undefined;
          keepSpells?: boolean | undefined;
          keepItems?: boolean | undefined;
          keepBio?: boolean | undefined;
          keepVision?: boolean | undefined;
          transformTokens?: boolean | undefined;
        }
      | undefined
  ): Promise<Array<Token>> | null;
  /**
   * If this actor was transformed with transformTokens enabled, then its
   * active tokens need to be returned to their original state. If not, then
   * we can safely just delete this actor.
   * @returns {Promise<Actor>|null}  Original actor if it was reverted.
   */
  revertOriginalForm(): Promise<Actor> | null;
  /**
   * Display changes to health as scrolling combat text.
   * Adapt the font size relative to the Actor's HP total to emphasize more significant blows.
   * @param {number} dhp      The change in hit points that was applied
   * @private
   */
  private _displayScrollingDamage;
  /**
   * Retrieve the spell save DC for the provided ability.
   * @param {string} ability  Ability key as defined in `CONFIG.DND5E.abilities`.
   * @returns {number}        Spell save DC for provided ability.
   * @deprecated since dnd5e 0.97
   */
  getSpellDC(ability: string): number;
  /**
   * Cast a Spell, consuming a spell slot of a certain level
   * @param {Item5e} item   The spell being cast by the actor
   * @param {Event} event   The originating user interaction which triggered the cast
   * @returns {Promise<ChatMessage|object|void>}  Dialog if `configureDialog` is true, else prepared dialog data.
   * @deprecated since dnd5e 1.2.0
   */
  useSpell(item: Item5e, { configureDialog }?: { configureDialog?: boolean }): Promise<ChatMessage | object | void>;
}
