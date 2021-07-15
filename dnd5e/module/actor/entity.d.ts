/**
 * Extend the base Actor class to implement additional system-specific logic.
 * @extends {Actor}
 */
declare class Actor5e extends Actor {
  /**
   * Return the features which a character is awarded for each class level
   * @param {object} options
   * @param {string} options.className        The class name being added
   * @param {string} options.subclassName     The subclass of the class being added, if any
   * @param {number} options.level            The number of levels in the added class
   * @param {number} options.priorLevel       The previous level of the added class
   * @return {Promise<Item5e[]>}     Array of Item5e entities
   */
  static loadClassFeatures({
    className,
    subclassName,
    level,
    priorLevel
  }?: {
    className: string;
    subclassName: string;
    level: number;
    priorLevel: number;
  }): Promise<Item5e[]>;
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
   * The data source for Actor5e.classes allowing it to be lazily computed.
   * @type {Object<string, Item5e>}
   * @private
   */
  private _classes;
  /**
   * A mapping of classes belonging to this Actor.
   * @type {Object<string, Item5e>}
   */
  get classes(): {
    [x: string]: Item5e;
  };
  /**
   * Is this Actor currently polymorphed into some other creature?
   * @type {boolean}
   */
  get isPolymorphed(): boolean;
  labels: {} | undefined;
  /**
   * Return the amount of experience required to gain a certain character level.
   * @param level {Number}  The desired level
   * @return {Number}       The XP required
   */
  getLevelExp(level: number): number;
  /**
   * Return the amount of experience granted by killing a creature of a certain CR.
   * @param cr {Number}     The creature's challenge rating
   * @return {Number}       The amount of experience granted per kill
   */
  getCRExp(cr: number): number;
  /**
   * Given a list of items to add to the Actor, optionally prompt the
   * user for which they would like to add.
   * @param {Array.<Item5e>} items - The items being added to the Actor.
   * @param {boolean} [prompt=true] - Whether or not to prompt the user.
   * @returns {Promise<Item5e[]>}
   */
  addEmbeddedItems(items: Array<Item5e>, prompt?: boolean | undefined): Promise<Item5e[]>;
  /**
   * Get a list of features to add to the Actor when a class item is updated.
   * Optionally prompt the user for which they would like to add.
   */
  getClassFeatures({
    className,
    subclassName,
    level
  }?: {
    className: any;
    subclassName: any;
    level: any;
  }): Promise<Item5e[]>;
  /**
   * Prepare Character type specific data
   */
  _prepareCharacterData(actorData: any): void;
  /**
   * Prepare NPC type specific data
   */
  _prepareNPCData(actorData: any): void;
  /**
   * Prepare vehicle type-specific data
   * @param actorData
   * @private
   */
  private _prepareVehicleData;
  /**
   * Prepare skill checks.
   * @param actorData
   * @param bonuses Global bonus data.
   * @param checkBonus Ability check specific bonus.
   * @param originalSkills A transformed actor's original actor's skills.
   * @private
   */
  private _prepareSkills;
  /**
   * Prepare data related to the spell-casting capabilities of the Actor
   * @private
   */
  private _computeSpellcastingProgression;
  /**
   * Compute the level and percentage of encumbrance for an Actor.
   *
   * Optionally include the weight of carried currency across all denominations by applying the standard rule
   * from the PHB pg. 143
   * @param {Object} actorData      The data object for the Actor being rendered
   * @returns {{max: number, value: number, pct: number}}  An object describing the character's encumbrance level
   * @private
   */
  private _computeEncumbrance;
  /**
   * Assign a class item as the original class for the Actor based on which class has the most levels
   * @protected
   */
  protected _assignPrimaryClass(): Promise<Actor5e | undefined>;
  /**
   * Apply a certain amount of damage or healing to the health pool for Actor
   * @param {number} amount       An amount of damage (positive) or healing (negative) to sustain
   * @param {number} multiplier   A multiplier which allows for resistance, vulnerability, or healing
   * @return {Promise<Actor>}     A Promise which resolves once the damage has been applied
   */
  applyDamage(amount?: number, multiplier?: number): Promise<Actor>;
  /**
   * Roll a Skill Check
   * Prompt the user for input regarding Advantage/Disadvantage and any Situational Bonus
   * @param {string} skillId      The skill id (e.g. "ins")
   * @param {Object} options      Options which configure how the skill check is rolled
   * @return {Promise<Roll>}      A Promise which resolves to the created Roll instance
   */
  rollSkill(skillId: string, options?: Object): Promise<Roll>;
  /**
   * Roll a generic ability test or saving throw.
   * Prompt the user for input on which variety of roll they want to do.
   * @param {String}abilityId     The ability id (e.g. "str")
   * @param {Object} options      Options which configure how ability tests or saving throws are rolled
   */
  rollAbility(abilityId: string, options?: Object): void;
  /**
   * Roll an Ability Test
   * Prompt the user for input regarding Advantage/Disadvantage and any Situational Bonus
   * @param {String} abilityId    The ability ID (e.g. "str")
   * @param {Object} options      Options which configure how ability tests are rolled
   * @return {Promise<Roll>}      A Promise which resolves to the created Roll instance
   */
  rollAbilityTest(abilityId: string, options?: Object): Promise<Roll>;
  /**
   * Roll an Ability Saving Throw
   * Prompt the user for input regarding Advantage/Disadvantage and any Situational Bonus
   * @param {String} abilityId    The ability ID (e.g. "str")
   * @param {Object} options      Options which configure how ability tests are rolled
   * @return {Promise<Roll>}      A Promise which resolves to the created Roll instance
   */
  rollAbilitySave(abilityId: string, options?: Object): Promise<Roll>;
  /**
   * Perform a death saving throw, rolling a d20 plus any global save bonuses
   * @param {Object} options        Additional options which modify the roll
   * @return {Promise<Roll|null>}   A Promise which resolves to the Roll instance
   */
  rollDeathSave(options?: Object): Promise<Roll | null>;
  /**
   * Roll a hit die of the appropriate type, gaining hit points equal to the die roll plus your CON modifier
   * @param {string} [denomination]   The hit denomination of hit die to roll. Example "d8".
   *                                  If no denomination is provided, the first available HD will be used
   * @param {object} [options]        Show a dialog prompt for configuring the hit die roll?
   * @param {boolean} [options.dialog]        Show a dialog prompt for configuring the hit die roll?
   * @return {Promise<Roll|null>}     The created Roll instance, or null if no hit die was rolled
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
   * @property {number} dhp                  Hit points recovered during the rest.
   * @property {number} dhd                  Hit dice recovered or spent during the rest.
   * @property {object} updateData           Updates applied to the actor.
   * @property {Array.<object>} updateItems  Updates applied to actor's items.
   * @property {boolean} newDay              Whether a new day occurred during the rest.
   */
  /**
   * Take a short rest, possibly spending hit dice and recovering resources, item uses, and pact slots.
   *
   * @param {object} [options]
   * @param {boolean} [options.dialog=true]         Present a dialog window which allows for rolling hit dice as part
   *                                                of the Short Rest and selecting whether a new day has occurred.
   * @param {boolean} [options.chat=true]           Summarize the results of the rest workflow as a chat message.
   * @param {boolean} [options.autoHD=false]        Automatically spend Hit Dice if you are missing 3 or more hit points.
   * @param {boolean} [options.autoHDThreshold=3]   A number of missing hit points which would trigger an automatic HD roll.
   * @return {Promise.<RestResult>}                 A Promise which resolves once the short rest workflow has completed.
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
    updateItems: Array<object>;
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
   * @return {Promise.<RestResult>}          A Promise which resolves once the long rest workflow has completed.
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
    updateItems: Array<object>;
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
   * @return {Promise.<RestResult>}  Consolidated results of the rest workflow.
   * @private
   */
  private _rest;
  /**
   * Display a chat message with the result of a rest.
   *
   * @param {RestResult} result         Result of the rest operation.
   * @param {boolean} [longRest=false]  Is this a long rest?
   * @return {Promise.<ChatMessage>}    Chat message that was created.
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
      updateItems: Array<object>;
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
   * @return {Promise.<number>}             Number of hit dice spent.
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
   * @return {object)                                Updates to the actor and change in hit points.
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
   * @return {object}                                           Updates to the actor.
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
   * @return {object}                                Updates to the actor.
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
   * @return {object}                      Array of item updates and number of hit dice recovered.
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
   * @return {Array.<object>}                              Array of item updates.
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
   * @return {Promise<Actor5e>}
   */
  convertCurrency(): Promise<Actor5e>;
  /**
   * Transform this Actor into another one.
   *
   * @param {Actor5e} target            The target Actor.
   * @param {object} [options]            The target Actor.
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
  ): Promise<
    | void
    | TokenDocument
    | import('@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/abstract/document.mjs').default<
        any,
        Scene
      >[]
  >;
  /**
   * If this actor was transformed with transformTokens enabled, then its
   * active tokens need to be returned to their original state. If not, then
   * we can safely just delete this actor.
   */
  revertOriginalForm(): Promise<any>;
  /**
   * @deprecated since dnd5e 0.97
   */
  getSpellDC(ability: any): any;
  /**
   * Cast a Spell, consuming a spell slot of a certain level
   * @param {Item5e} item   The spell being cast by the actor
   * @param {Event} event   The originating user interaction which triggered the cast
   * @deprecated since dnd5e 1.2.0
   */
  useSpell(item: Item5e): Promise<void | object | ChatMessage>;
}
