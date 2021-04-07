interface Labels {
  spell: {
    level: string;
    school: string;
    components: Record<DND5e.SpellComponent, string>;
    materials: string;
  };

  feat: {
    featType: string;
  };

  equipment: {
    armor: string;
  };

  activation: {
    target: string;
    range: string;
    duration: string;
    recharge: string;
  };

  actionType: {
    damage: string[];
    damageTypes: string[];
  };
}

type AnyLabel = Labels[keyof Labels];

/**
 * Override and extend the basic :class:`Item` implementation
 */
declare class Item5e extends Item<Item5e.Data> {
  /* -------------------------------------------- */
  /*  Item Properties                             */
  /* -------------------------------------------- */

  /**
   * Determine which ability score modifier is used by this item
   */
  get abilityMod(): string | null;

  /* -------------------------------------------- */

  /**
   * Does the Item implement an attack roll as part of its usage
   */
  get hasAttack(): boolean;

  /* -------------------------------------------- */

  /**
   * Does the Item implement a damage roll as part of its usage
   */
  get hasDamage(): boolean;

  /* -------------------------------------------- */

  /**
   * Does the Item implement a versatile damage roll as part of its usage
   */
  get isVersatile(): boolean;

  /* -------------------------------------------- */

  /**
   * Does the item provide an amount of healing instead of conventional damage?
   */
  get isHealing(): boolean;

  /* -------------------------------------------- */

  /**
   * Does the Item implement a saving throw as part of its usage
   */
  get hasSave(): boolean;

  /* -------------------------------------------- */

  /**
   * Does the Item have a target
   */
  get hasTarget(): boolean;

  /* -------------------------------------------- */

  /**
   * Does the Item have an area of effect target
   */
  get hasAreaTarget(): boolean;

  /* -------------------------------------------- */

  /**
   * A flag for whether this Item is limited in it's ability to be used by charges or by recharge.
   */
  get hasLimitedUses(): boolean;

  /* -------------------------------------------- */
  /*	Data Preparation														*/
  /* -------------------------------------------- */

  /**
   * Update the derived spell DC for an item that requires a saving throw
   */
  getSaveDC(): number | null;

  /* -------------------------------------------- */

  /**
   * Update a label to the Item detailing its total to hit bonus.
   * Sources:
   * - item entity's innate attack bonus
   * - item's actor's proficiency bonus if applicable
   * - item's actor's global bonuses to the given item type
   * - item's ammunition if applicable
   *
   * @returns returns `rollData` and `parts` to be used in the item's Attack roll
   */
  getAttackToHit(): { rollData: any; parts: string[] };

  /* -------------------------------------------- */

  /**
   * Roll the item to Chat, creating a chat card which contains follow up attack or damage roll options
   * @param configureDialog - Display a configuration dialog for the item roll, if applicable?
   * @param rollMode - The roll display mode with which to display (or not) the card
   * @param createMessage - Whether to automatically create a chat message (if true) or simply return
   *                                        the prepared chat message data (if false).
   * @returns The resulting chat message or its data.
   */
  roll({
    configureDialog,
    rollMode,
    createMessage
  }: {
    configureDialog?: boolean;
    rollMode: DND5e.RollMode;
    createMessage?: boolean;
  }): Promise<ChatMessage | ChatMessage.Data | void>;

  /* -------------------------------------------- */
  /*  Chat Cards																	*/
  /* -------------------------------------------- */

  /**
   * Prepare an object of chat data used to display a card for the Item in the chat log
   * @param htmlOptions - Options used by the TextEditor.enrichHTML function
   * @returns An object of chat data to render
   */
  getChatData({
    secrets,
    entities,
    links,
    rolls,
    rollData // TODO: _createInlineRoll
  }?: {
    secrets: boolean;
    entities: boolean;
    links: boolean;
    rolls: boolean;
    rollData: object;
  }): void;

  /* -------------------------------------------- */

  /**
   * Prepare chat card data for equipment type items
   */
  private _equipmentChatData(data: Item5e.Data.Data, labels: AnyLabel, props: Array<any>): void;

  /* -------------------------------------------- */

  /**
   * Prepare chat card data for weapon type items
   */
  private _weaponChatData(data: Item5e.Data.Data, labels: AnyLabel, props: Array<any>): void;

  /* -------------------------------------------- */

  /**
   * Prepare chat card data for consumable type items
   */
  private _consumableChatData(data: Item5e.Data.Data, labels: AnyLabel, props: Array<any>): void;

  /* -------------------------------------------- */

  /**
   * Prepare chat card data for tool type items
   */
  private _toolChatData(data: Item5e.Data.Data, labels: AnyLabel, props: Array<any>): void;

  /* -------------------------------------------- */

  /**
   * Prepare chat card data for tool type items
   */
  private _lootChatData(data: Item5e.Data.Data, labels: AnyLabel, props: Array<any>): void;

  /* -------------------------------------------- */

  /**
   * Render a chat card for Spell type data
   * @returns the chat card for spells
   */
  private _spellChatData(data: Item5e.Data.Data, labels: AnyLabel, props: Array<any>): any;

  /* -------------------------------------------- */

  /**
   * Prepare chat card data for items of the "Feat" type
   */
  private _featChatData(data: Item5e.Data.Data, labels: AnyLabel, props: Array<any>): void;

  /* -------------------------------------------- */
  /*  Item Rolls - Attack, Damage, Saves, Checks  */
  /* -------------------------------------------- */

  /**
   * Place an attack roll using an item (weapon, feat, spell, or equipment)
   * Rely upon the d20Roll logic for the core implementation
   *
   * @param options - Roll options which are configured and provided to the d20Roll function
   * @returns A Promise which resolves to the created Roll instance
   */
  rollAttack: typeof d20Roll;

  /* -------------------------------------------- */

  /**
   * Place a damage roll using an item (weapon, feat, spell, or equipment)
   * Rely upon the damageRoll logic for the core implementation.
   * @param event - An event which triggered this roll, if any
   * @param critical - Should damage be rolled as a critical hit?
   * @param spellLevel - If the item is a spell, override the level for damage scaling
   * @param versatile - If the item is a weapon, roll damage using the versatile formula
   * @param options - Additional options passed to the damageRoll function
   * @returns A Promise which resolves to the created Roll instance
   */
  rollDamage({
    event,
    critical,
    versatile,
    options
  }?: {
    event?: MouseEvent;
    critical?: boolean;
    versatile?: boolean;
    options?: Parameters<typeof damageRoll>[0];
  }): Promise<Roll>;

  /* -------------------------------------------- */

  /**
   * Adjust a cantrip damage formula to scale it for higher level characters and monsters
   */
  private _scaleCantripDamage(parts: string[], scale: string, level: number, rollData: Record<string, unknown>): void;

  /* -------------------------------------------- */

  /**
   * Adjust the spell damage formula to scale it for spell level up-casting
   * @param parts - The original damage parts
   * @param baseLevel - The default spell level
   * @param spellLevel - The casted spell level
   * @param formula - The scaling formula
   * @param rollData - A data object that should be applied to the scaled damage roll
   * @returns The scaled roll parts
   */
  private _scaleSpellDamage(
    parts: string[],
    baseLevel: number,
    spellLevel: number,
    formula: string,
    rollData: Record<string, unknown>
  ): void;

  /* -------------------------------------------- */

  /**
   * Scale an array of damage parts according to a provided scaling formula and scaling multiplier
   * @param parts - Initial roll parts
   * @param scaling - A scaling formula
   * @param times - A number of times to apply the scaling formula
   * @param rollData - A data object that should be applied to the scaled damage roll
   * @returns The scaled roll parts
   */
  private _scaleDamage(parts: string[], scaling: string, times: number, rollData: Record<string, unknown>): string[];

  /* -------------------------------------------- */

  /**
   * Place an attack roll using an item (weapon, feat, spell, or equipment)
   * Rely upon the d20Roll logic for the core implementation
   *
   * @returns A Promise which resolves to the created Roll instance
   */
  rollFormula({ spellLevel }?: { spellLevel: DND5e.SpellLevel }): Promise<Roll>;

  /* -------------------------------------------- */

  /**
   * Perform an ability recharge test for an item which uses the d6 recharge mechanic
   * @returns A Promise which resolves to the created Roll instance
   */
  rollRecharge(): Promise<Roll>;

  /* -------------------------------------------- */

  /**
   * Roll a Tool Check. Rely upon the d20Roll logic for the core implementation
   * @param options - Roll configuration options provided to the d20Roll function
   * @returns A Promise which resolves to the created Roll instance
   */
  rollToolCheck: typeof d20Roll;

  /* -------------------------------------------- */

  static chatListeners(html: JQuery): void;

  /* -------------------------------------------- */

  /**
   * Handle execution of a chat card action via a click event on one of the card buttons
   * @param event - The originating click event
   * @returns A promise which resolves once the handler workflow is complete
   */
  private static _onChatCardAction(event: MouseEvent): Promise<void>;

  /* -------------------------------------------- */

  /**
   * Handle toggling the visibility of chat card content when the name is clicked
   * @param event - The originating click event
   */
  private static _onChatCardToggleContent(event: MouseEvent): void;

  /* -------------------------------------------- */

  /**
   * Get the Actor which is the author of a chat card
   * @param card - The chat card being used
   * @returns The Actor entity or null
   */
  private static _getChatCardActor(card: HTMLElement): Actor5e | null;

  /* -------------------------------------------- */

  /**
   * Get the Actor which is the author of a chat card
   * @param card - The chat card being used
   * @returns An Array of Actor entities, if any
   */
  private static _getChatCardTargets(card: HTMLElement): Actor5e[];

  /* -------------------------------------------- */
  /*  Factory Methods                             */
  /* -------------------------------------------- */

  /**
   * Create a consumable spell scroll Item from a spell Item.
   * @param spell - The spell to be made into a scroll
   * @returns The created scroll consumable item
   */
  private static createScrollFromSpell(spell: Item5e): Promise<Item5e>;
}

declare namespace Item5e {
  namespace Templates {
    interface ItemDescription {
      description: {
        value: string;
        chat: string;
        unidentified: string;
      };
      source: string;
    }

    interface PhysicalItem {
      quantity: number;
      weight: number;
      price: number;
      attuned: boolean;
      attunement: number;
      equipped: boolean;
      rarity: string;
      identified: false;
    }

    interface ActivatedEffect {
      activation: {
        type: DND5e.ActivationType;
        cost: number;
        condition: string;
      };

      duration: {
        value: number | null;
        units: DND5e.DurationType | null;
      };

      target: {
        value: number | null;
        width: number | null;
        units: DND5e.TargetUnitType | '';
        type: DND5e.TargetType | '';
      };

      range: {
        value: number | null;
        long: number | null;
        units: DND5e.TargetUnitType | '';
      };

      uses: {
        value: number;
        max: number;
        per: number | null;
      };

      consume: {
        type: DND5e.ConsumeType;
        target: DND5e.ConsumeTarget | null;
        amount: number | null;
      };
    }

    interface Action {
      ability: DND5e.AbilityType | null;
      actionType: DND5e.ActionType | null;
      attackBonus: number;
      chatFlavor: string;
      critical: boolean | null;
      damage: {
        parts: [string, DND5e.DamageType | 'none'][];
        versatile: string;
      };
      formula: string;
      save: {
        ability: DND5e.AbilityType;
        dc: number | null;
        scaling: string;
      };
    }

    interface Mountable {
      armor: {
        value: number;
      };
      hp: {
        value: number;
        max: number;
        dt: number | null;
        conditions: string;
      };
    }

    interface Weapon {
      weaponType: string;
      properties: {};
      proficient: boolean;
    }

    interface Equipment {
      armor: {
        type: DND5e.ArmorType;
        value: number;
        dex: number | null;
      };

      speed: {
        value: number | null;
        conditions: string;
      };

      strength: number;
      stealth: boolean;
      proficient: boolean;
    }

    interface Consumable {
      consumableType: string;
      uses: {
        autoDestroy: boolean;
      };
    }

    interface Tool {
      ability: DND5e.Ability;
      chatFlavor: string;
      proficient: number;
    }

    interface Class<Choices extends DND5e.SkillType[] = DND5e.SkillType[]> {
      levels: number;
      subclass: string;
      hitDice: `d${number}`;
      hitDiceUsed: number;
      skills: {
        number: number;
        choices: Choices;

        // value is a subset of choices
        value: Choices;
      };
    }

    interface Spell {
      level: DND5e.SpellLevel;
      school: DND5e.SpellSchool;
      components: {
        value: string;
        vocal: boolean;
        somatic: boolean;
        material: boolean;
        ritual: boolean;
        concentration: boolean;
      };

      materials: {
        value: string;
        consumed: boolean;
        cost: number;
        supply: number;
      };

      preparation: {
        mode: DND5e.Preparation;
        prepared: boolean;
      };

      scaling: {
        mode: string;
        formula: string | null;
      };
    }

    interface Feat {
      requirements: string;
      recharge: {
        value: number | string;
        charged: boolean;
      };
    }

    interface Backpack {
      capacity: {
        type: string;
        value: number;
        weightless: boolean;
      };
      currency: Record<DND5e.Currency, number>;
    }
  }

  interface Data extends Item.Data<Data.Data> {
    data: Data.Data;
    effects: ActiveEffect.Data[];
    img: string;
    name: string;
    permission: Entity.Permission;
    sort: number;
    type: DND5e.ItemType;
  }

  namespace Data {
    type Weapon = Templates.ItemDescription &
      Templates.PhysicalItem &
      Templates.ActivatedEffect &
      Templates.Action &
      Templates.Mountable &
      Templates.Weapon;

    type Equipment = Templates.ItemDescription &
      Templates.PhysicalItem &
      Templates.ActivatedEffect &
      Templates.Action &
      Templates.Mountable &
      Templates.Equipment;

    type Consumable = Templates.ItemDescription &
      Templates.PhysicalItem &
      Templates.ActivatedEffect &
      Templates.Action &
      Templates.Consumable;

    type Tool = Templates.ItemDescription & Templates.PhysicalItem & Templates.Tool;
    type Loot = Templates.ItemDescription & Templates.PhysicalItem;
    type Class<Choices extends DND5e.SkillType[] = DND5e.SkillType[]> = Templates.ItemDescription &
      Templates.Class<Choices>;

    type Spell = Templates.ItemDescription & Templates.ActivatedEffect & Templates.Action & Templates.Spell;
    type Feat = Templates.ItemDescription & Templates.ActivatedEffect & Templates.Action & Templates.Feat;
    type Backpack = Templates.ItemDescription & Templates.PhysicalItem & Templates.Backpack;

    type Data = Weapon | Equipment | Consumable | Tool | Loot | Class | Spell | Feat | Backpack;
  }
}
