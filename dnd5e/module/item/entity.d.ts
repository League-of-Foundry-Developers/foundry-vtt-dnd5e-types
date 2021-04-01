import '@league-of-foundry-developers/foundry-vtt-types';
import type DND5e from '../../dnd5e';

/**
 * Override and extend the basic :class:`Item` implementation
 */
declare class Item5e extends Item<Item5e.Data> {
  /**
   * Get the valid item consumption targets which exist on the actor
   * @param item         Item data for the item being displayed
   * @return {{string: string}}   An object of potential consumption targets
   * @private
   */
  _getItemConsumptionTargets(
    item: Item5e.Data
  ): {
    [K: string]: string;
  };

  /* -------------------------------------------- */

  /**
   * Get the text item status which is shown beneath the Item type in the top-right corner of the sheet
   * @return {string}
   * @private
   */
  _getItemStatus(item: Item5e.Data): string;

  /* -------------------------------------------- */

  /**
   * Get the Array of item properties which are used in the small sidebar of the description tab
   * @return {Array}
   * @private
   */
  _getItemProperties(item: Item5e.Data): string[];

  /* -------------------------------------------- */

  /**
   * Is this item a separate large object like a siege engine or vehicle
   * component that is usually mounted on fixtures rather than equipped, and
   * has its own AC and HP.
   * @param item
   * @returns {boolean}
   * @private
   */
  _isItemMountable(item: Item5e.Data): boolean;

  /* -------------------------------------------- */

  /**
   * Add or remove a damage part from the damage formula
   * @param {Event} event     The original click event
   * @return {Promise}
   * @private
   */
  _onDamageControl(event: MouseEvent): Promise<this>;

  /* -------------------------------------------- */

  /**
   * Handle spawning the TraitSelector application which allows a checkbox of multiple trait options
   * @param {Event} event   The click event which originated the selection
   * @private
   */
  _onConfigureClassSkills(event: MouseEvent): void;
}

declare namespace Item5e {
  export namespace Templates {
    export interface ItemDescription {
      description: {
        value: string;
        chat: string;
        unidentified: string;
      };
      source: string;
    }

    export interface PhysicalItem {
      quantity: number;
      weight: number;
      price: number;
      attuned: boolean;
      attunement: number;
      equipped: boolean;
      rarity: string;
      identified: false;
    }

    export interface ActivatedEffect {
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

    export interface Action {
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

    export interface Mountable {
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

    export interface Weapon {
      weaponType: string;
      properties: {};
      proficient: boolean;
    }

    export interface Equipment {
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

    export interface Consumable {
      consumableType: string;
      uses: {
        autoDestroy: boolean;
      };
    }

    export interface Tool {
      ability: DND5e.Ability;
      chatFlavor: string;
      proficient: number;
    }

    export interface Class<Choices extends DND5e.SkillType[] = DND5e.SkillType[]> {
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

    export interface Spell {
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

    export interface Feat {
      requirements: string;
      recharge: {
        value: number | string;
        charged: boolean;
      };
    }

    export interface Backpack {
      capacity: {
        type: string;
        value: number;
        weightless: boolean;
      };
      currency: Record<DND5e.Currency, number>;
    }
  }

  export interface Data extends Item.Data<Data.Data> {
    data: Data.Data;
    effects: ActiveEffect.Data[];
    img: string;
    name: string;
    permission: Entity.Permission;
    sort: number;
    type: DND5e.ItemType;
  }

  export namespace Data {
    export type Weapon = Templates.ItemDescription &
      Templates.PhysicalItem &
      Templates.ActivatedEffect &
      Templates.Action &
      Templates.Mountable &
      Templates.Weapon;

    export type Equipment = Templates.ItemDescription &
      Templates.PhysicalItem &
      Templates.ActivatedEffect &
      Templates.Action &
      Templates.Mountable &
      Templates.Equipment;

    export type Consumable = Templates.ItemDescription &
      Templates.PhysicalItem &
      Templates.ActivatedEffect &
      Templates.Action &
      Templates.Consumable;

    export type Tool = Templates.ItemDescription & Templates.PhysicalItem & Templates.Tool;
    export type Loot = Templates.ItemDescription & Templates.PhysicalItem;
    export type Class<Choices extends DND5e.SkillType[] = DND5e.SkillType[]> = Templates.ItemDescription &
      Templates.Class<Choices>;

    export type Spell = Templates.ItemDescription & Templates.ActivatedEffect & Templates.Action & Templates.Spell;
    export type Feat = Templates.ItemDescription & Templates.ActivatedEffect & Templates.Action & Templates.Feat;
    export type Backpack = Templates.ItemDescription & Templates.PhysicalItem & Templates.Backpack;

    export type Data = Weapon | Equipment | Consumable | Tool | Loot | Class | Spell | Feat | Backpack;
  }
}

export default Item5e;
