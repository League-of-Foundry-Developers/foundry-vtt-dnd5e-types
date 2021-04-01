import '@league-of-foundry-developers/foundry-vtt-types';

import type DND5e from '../../dnd5e';
import type Item5e from '../item/entity';

declare class Actor5e extends Actor<Actor5e.Data, Item5e> {
  get isPolymorphed(): boolean;

  /* -------------------------------------------- */

  /**
   * Return the amount of experience required to gain a certain character level.
   * @param level {Number}  The desired level
   * @return {Number}       The XP required
   */
  getLevelExp(level: number): number;

  /* -------------------------------------------- */

  /**
   * Return the amount of experience granted by killing a creature of a certain CR.
   * @param cr {Number}     The creature's challenge rating
   * @return {Number}       The amount of experience granted per kill
   */
  getCRExp(cr: number): number;

  /* -------------------------------------------- */

  /**
   * Return the features which a character is awarded for each class level
   * @param {string} className        The class name being added
   * @param {string} subclassName     The subclass of the class being added, if any
   * @param {number} level            The number of levels in the added class
   * @param {number} priorLevel       The previous level of the added class
   * @return {Promise<Item5e[]>}     Array of Item5e entities
   */
  static getClassFeatures({
    className,
    subclassName,
    level,
    priorLevel
  }: {
    className?: string;
    subclassName?: string;
    level: number;
    priorLevel: number;
  }): Promise<Item5e[]>;

  /* -------------------------------------------- */

  /**
   * Create additional class features in the Actor when a class item is updated.
   * @private
   */
  _createClassFeatures(updated: Actor5e.ClassFeatureUpdate | Actor5e.ClassFeatureUpdate[]): Promise<Item5e[]>;

  /* -------------------------------------------- */
  /*  Data Preparation Helpers                    */
  /* -------------------------------------------- */

  /**
   * Prepare Character type specific data
   */
  _prepareCharacterData(actorData: Actor5e.Data): void;

  /* -------------------------------------------- */

  /**
   * Prepare NPC type specific data
   */
  _prepareNPCData(actorData: Actor5e.Data): void;

  /* -------------------------------------------- */

  /**
   * Prepare vehicle type-specific data
   * @param actorData
   * @private
   */
  _prepareVehicleData(actorData: Actor5e.Data): void;

  /* -------------------------------------------- */

  /**
   * Prepare skill checks.
   * @param actorData
   * @param bonuses Global bonus data.
   * @param checkBonus Ability check specific bonus.
   * @param originalSkills A transformed actor's original actor's skills.
   * @private
   */
  _prepareSkills(
    actorData: Actor5e.Data,
    bonuses: DND5e.AbilityBonus,
    checkBonus: number,
    originalSkills: Record<DND5e.SkillType, DND5e.Skill>
  ): void;

  /* -------------------------------------------- */

  /**
   * Prepare data related to the spell-casting capabilities of the Actor
   * @private
   */
  _computeSpellcastingProgression(actorData: Actor5e.Data): void;

  /* -------------------------------------------- */

  /**
   * Compute the level and percentage of encumbrance for an Actor.
   *
   * Optionally include the weight of carried currency across all denominations by applying the standard rule
   * from the PHB pg. 143
   * @param {Object} actorData      The data object for the Actor being rendered
   * @returns {{max: number, value: number, pct: number}}  An object describing the character's encumbrance level
   * @private
   */
  _computeEncumbrance(actorData: Actor5e.Data): Actor5e.Encumbrance;

  /* -------------------------------------------- */
  /*  Socket Listeners and Handlers
  /* -------------------------------------------- */

  /**
   * A temporary shim function which will eventually (in core fvtt version 0.8.0+) be migrated to the new abstraction layer
   * @param itemData
   * @param options
   * @private
   */
  _preCreateOwnedItem(itemData: Item5e.Data, options: any): void;

  /* -------------------------------------------- */
  /*  Gameplay Mechanics                          */
  /* -------------------------------------------- */

  /**
   * Apply a certain amount of damage or healing to the health pool for Actor
   * @param {number} amount       An amount of damage (positive) or healing (negative) to sustain
   * @param {number} multiplier   A multiplier which allows for resistance, vulnerability, or healing
   * @return {Promise<Actor>}     A Promise which resolves once the damage has been applied
   */
  applyDamage(amount: number, multiplier: number): Promise<this>;

  /* -------------------------------------------- */

  /**
   * Roll a Skill Check
   * Prompt the user for input regarding Advantage/Disadvantage and any Situational Bonus
   * @param {string} skillId      The skill id (e.g. "ins")
   * @param {Object} options      Options which configure how the skill check is rolled
   * @return {Promise<Roll>}      A Promise which resolves to the created Roll instance
   */
  rollSkill<Options extends Object>(skillId: string, options: Options): Promise<Roll<Options>>;

  /* -------------------------------------------- */

  /**
   * Roll a generic ability test or saving throw.
   * Prompt the user for input on which variety of roll they want to do.
   * @param {String}abilityId     The ability id (e.g. "str")
   * @param {Object} options      Options which configure how ability tests or saving throws are rolled
   */
  rollAbility<Options extends Object>(abilityId: string, options: Options): void;

  /* -------------------------------------------- */

  /**
   * Roll an Ability Test
   * Prompt the user for input regarding Advantage/Disadvantage and any Situational Bonus
   * @param {String} abilityId    The ability ID (e.g. "str")
   * @param {Object} options      Options which configure how ability tests are rolled
   * @return {Promise<Roll>}      A Promise which resolves to the created Roll instance
   */
  rollAbilityTest<Options extends Object>(abilityId: string, options: Options): Promise<Roll<Options>>;

  /* -------------------------------------------- */

  /**
   * Roll an Ability Saving Throw
   * Prompt the user for input regarding Advantage/Disadvantage and any Situational Bonus
   * @param {String} abilityId    The ability ID (e.g. "str")
   * @param {Object} options      Options which configure how ability tests are rolled
   * @return {Promise<Roll>}      A Promise which resolves to the created Roll instance
   */
  rollAbilitySave<Options extends Object>(abilityId: string, options: Options): Promise<Roll<Options>>;

  /* -------------------------------------------- */

  /**
   * Perform a death saving throw, rolling a d20 plus any global save bonuses
   * @param {Object} options        Additional options which modify the roll
   * @return {Promise<Roll|null>}   A Promise which resolves to the Roll instance
   */
  rollDeathSave<Options extends Object>(options: Options): Promise<Roll<Options> | null>;

  /* -------------------------------------------- */

  /**
   * Roll a hit die of the appropriate type, gaining hit points equal to the die roll plus your CON modifier
   * @param {string} [denomination]   The hit denomination of hit die to roll. Example "d8".
   *                                  If no denomination is provided, the first available HD will be used
   * @param {boolean} [dialog]        Show a dialog prompt for configuring the hit die roll?
   * @return {Promise<Roll|null>}     The created Roll instance, or null if no hit die was rolled
   */
  rollHitDie(denomination: `d${number}`, { dialog }: { dialog: boolean }): Promise<Roll | null>;

  /* -------------------------------------------- */

  /**
   * Cause this Actor to take a Short Rest
   * During a Short Rest resources and limited item uses may be recovered
   * @param {boolean} dialog  Present a dialog window which allows for rolling hit dice as part of the Short Rest
   * @param {boolean} chat    Summarize the results of the rest workflow as a chat message
   * @param {boolean} autoHD  Automatically spend Hit Dice if you are missing 3 or more hit points
   * @param {boolean} autoHDThreshold   A number of missing hit points which would trigger an automatic HD roll
   * @return {Promise}        A Promise which resolves once the short rest workflow has completed
   */
  shortRest({
    dialog,
    chat,
    autoHD,
    autoHDThreshold
  }: {
    dialog: boolean;
    chat: boolean;
    autoHD: boolean;
    autoHDThreshold: boolean;
  }): Promise<Actor5e.RestData | undefined>;

  /* -------------------------------------------- */

  /**
   * Take a long rest, recovering HP, HD, resources, and spell slots
   * @param {boolean} dialog  Present a confirmation dialog window whether or not to take a long rest
   * @param {boolean} chat    Summarize the results of the rest workflow as a chat message
   * @param {boolean} newDay  Whether the long rest carries over to a new day
   * @return {Promise}        A Promise which resolves once the long rest workflow has completed
   */
  longRest({
    dialog,
    chat,
    newDay
  }: {
    dialog: boolean;
    chat: boolean;
    newDay: boolean;
  }): Promise<Actor5e.RestData | undefined>;

  /* -------------------------------------------- */

  /**
   * Convert all carried currency to the highest possible denomination to reduce the number of raw coins being
   * carried by an Actor.
   * @return {Promise<Actor5e>}
   */
  convertCurrency(): Promise<this>;

  /* -------------------------------------------- */

  /**
   * Transform this Actor into another one.
   *
   * @param {Actor} target The target Actor.
   * @param {boolean} [keepPhysical] Keep physical abilities (str, dex, con)
   * @param {boolean} [keepMental] Keep mental abilities (int, wis, cha)
   * @param {boolean} [keepSaves] Keep saving throw proficiencies
   * @param {boolean} [keepSkills] Keep skill proficiencies
   * @param {boolean} [mergeSaves] Take the maximum of the save proficiencies
   * @param {boolean} [mergeSkills] Take the maximum of the skill proficiencies
   * @param {boolean} [keepClass] Keep proficiency bonus
   * @param {boolean} [keepFeats] Keep features
   * @param {boolean} [keepSpells] Keep spells
   * @param {boolean} [keepItems] Keep items
   * @param {boolean} [keepBio] Keep biography
   * @param {boolean} [keepVision] Keep vision
   * @param {boolean} [transformTokens] Transform linked tokens too
   */
  transformInto(
    target: Actor,
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
    }: Record<DND5e.PolymorphSetting | 'transformTokens', boolean>
  ): ReturnType<Scene['updateEmbeddedEntity']> | undefined;

  /* -------------------------------------------- */

  /**
   * If this actor was transformed with transformTokens enabled, then its
   * active tokens need to be returned to their original state. If not, then
   * we can safely just delete this actor.
   */
  revertOriginalForm(): Promise<Actor5e | undefined>;

  /* -------------------------------------------- */

  /**
   * Add additional system-specific sidebar directory context menu options for Actor entities
   * @param {jQuery} html         The sidebar HTML
   * @param {Array} entryOptions  The default array of context menu options
   */
  static addDirectoryContextOptions<Options extends Array<any>>(html: JQuery, entryOptions: Options[]): void;

  /* -------------------------------------------- */
  /*  DEPRECATED METHODS                          */
  /* -------------------------------------------- */

  /**
   * @deprecated since dnd5e 0.97
   */
  getSpellDC(ability: DND5e.AbilityType): number;

  /* -------------------------------------------- */

  /**
   * Cast a Spell, consuming a spell slot of a certain level
   * @param {Item5e} item   The spell being cast by the actor
   * @param {Event} event   The originating user interaction which triggered the cast
   * @deprecated since dnd5e 1.2.0
   */
  useSpell(item: Item5e, { configureDialog }: { configureDialog: boolean }): Promise<Roll>;
}

declare namespace Actor5e {
  type ClassFeatureUpdate = {
    _id: string;
    data?: {
      subclass?: string;
      levels?: number;
    };
  };

  export type Encumbrance = {
    value: number;
    max: number;
    pct: number;
    encumbered: boolean;
  };

  export type RestData = {
    dhd: number;
    dhp: number;
    updateData: Record<string, number>;
    updateItems: { _id: string; [K: string]: unknown };
    newDay: boolean;
  };

  export interface Data extends Actor.Data<Data.Data, Item5e.Data> {
    folder: string;
    img: string;
    name: string;
    permission: Entity.Permission;
    sort: number;
  }

  export namespace Templates {
    type TraitData<Trait> = {
      values: Trait[];
      custom: string;
    };

    export interface Common {
      abilities: Record<
        DND5e.AbilityType,
        {
          value: number;
          proficient: number;
        }
      >;
      attributes: {
        ac: {
          value: number;
        };
        hp: {
          value: number;
          min: number;
          max: number;
          temp: number;
          tempmax: number;
        };
        init: {
          value: number;
          bonus: number;
        };
        movement: Record<DND5e.MovementType, number> & {
          hover: boolean;
          units: DND5e.Unit;
        };
      };
      details: {
        biography: {
          value: string;
          public: string;
        };
      };
      traits: {
        size: DND5e.Size;

        // Damage immunity
        di: TraitData<DND5e.DamageType>;

        // Damage resistance
        dr: TraitData<DND5e.DamageType>;

        // Damage vulnerability
        dv: TraitData<DND5e.DamageType>;

        // Condition immunity
        ci: TraitData<DND5e.DamageType>;
      };
      currency: Record<DND5e.Currency, number>;
    }

    export interface Creature {
      attributes: {
        senses: Record<DND5e.Senses, number> & {
          special: string;
          units: DND5e.Unit;
        };
        spellcasting: DND5e.AbilityType;
        details: {
          alignment: DND5e.Alignment;
          race: string;
        };
        skills: Record<
          DND5e.SkillType,
          {
            value: number;
            ability: DND5e.Ability;
          }
        >;
        traits: {
          languages: TraitData<string>;
        };
        spells: Record<DND5e.SpellType, { value: number; override: number | null }>;
        bonuses: Record<DND5e.AttackType, DND5e.AttackBonus> & {
          abilities: DND5e.AbilityBonus;
          spell: DND5e.SaveBonus;
        };
      };
    }

    export interface Character {
      attributes: {
        death: {
          success: number;
          failure: number;
        };

        encumbrance: {
          value: number | null;
          max: number | null;
        };

        exhaustion: number;
        inspiration: boolean;
      };

      details: {
        background: string;
        xp: {
          value: number;
          min: number;
          max: number;
        };
        appearance: string;
        trait: string;
        ideal: string;
        bond: string;
        flaw: string;
      };

      resources: Record<
        DND5e.Resources,
        {
          value: number;
          max: number;
          sr: number;
          lr: number;
        }
      >;

      traits: {
        weaponProf: TraitData<DND5e.WeaponProficiency>;
        armorProf: TraitData<string>;
        toolProf: TraitData<DND5e.ToolProficiency>;
      };
    }

    export interface NPC {
      details: {
        type: string;
        environment: string;
        cr: number;
        spellLevel: number;
        xp: {
          value: number;
        };
        source: string;
      };
      resources: {
        // Legendary action
        legact: {
          value: number;
          max: number;
        };

        // Legendary resistance
        legres: {
          value: number;
          max: number;
        };

        // Lair action
        lair: {
          value: number;
          initiative: number;
        };
      };
    }

    export interface Vehicle {
      abilities: Record<
        DND5e.MentalAbility,
        {
          value: number;
        }
      >;
      attributes: {
        ac: {
          value: number | null;
          motionless: string;
        };
        actions: {
          stations: boolean;
          value: number;
          thresholds: {
            // TODO: Check thresholds
            '2': null;
            '1': null;
            '0': null;
          };
        };
        hp: {
          value: number | null;
          max: number | null;
          dt: number | null;
          mt: number | null;
        };
        capacity: {
          creature: string;
          cargo: 0;
        };
      };
      traits: {
        size: DND5e.Size;
        dimensions: string;
        di: {
          value: DND5e.DamageType[];
        };
        ci: {
          value: DND5e.ConditionType[];
        };
      };
      cargo: {
        // TODO: Check crew/passengers
        crew: [];
        passengers: [];
      };
    }
  }

  export namespace Data {
    export type Character = Templates.Common & Templates.Creature & Templates.Character;
    export type NPC = Templates.Common & Templates.Creature & Templates.NPC;
    export type Vehicle = Templates.Common & Templates.Vehicle;

    export type Data = Character | NPC | Vehicle;
  }
}

export default Actor5e;
