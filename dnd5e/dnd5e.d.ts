import '@league-of-foundry-developers/foundry-vtt-types';

// Import Modules
import type { DND5e } from './module/config';
import './module/settings';
import './module/templates';
import type { _getInitiativeFormula } from './module/combat';
import type { measureDistances, getBarAttribute } from './module/canvas';

// Import Entities
import type Actor5e from './module/actor/entity';
import type Item5e from './module/item/entity';

// Import Applications
import type AbilityTemplate from './module/pixi/ability-template';
import type AbilityUseDialog from './module/apps/ability-use-dialog';
import type ActorSheetFlags from './module/apps/actor-flags';
import type ActorSheet5eCharacter from './module/actor/sheets/character';
import type ActorSheet5eNPC from './module/actor/sheets/npc';
import type ActorSheet5eVehicle from './module/actor/sheets/vehicle';
import type ItemSheet5e from './module/item/sheet';
import type ShortRestDialog from './module/apps/short-rest';
import type TraitSelector from './module/apps/trait-selector';
import type ActorMovementConfig from './module/apps/movement-config';
import './module/apps/senses-config';

// Import Helpers
import './module/chat';
import type * as dice from './module/dice';
import type * as macros from './module/macros';
import type * as migrations from './module/migration';

declare namespace DND5e {
  export type PhysicalAbility = 'str' | 'dex' | 'con';
  export type MentalAbility = 'int' | 'wis' | 'cha';
  export type AbilityType = PhysicalAbility | MentalAbility;

  export type ItemType =
    | 'weapon'
    | 'equipment'
    | 'consumable'
    | 'tool'
    | 'loot'
    | 'class'
    | 'spell'
    | 'feat'
    | 'backpack';

  export type TargetUnitType = 'none' | 'self' | 'touch' | 'special' | 'any' | 'ft' | 'miles';
  export type DamageType =
    | 'acid'
    | 'bludgeoning'
    | 'cold'
    | 'fire'
    | 'force'
    | 'lightning'
    | 'necrotic'
    | 'piercing'
    | 'poison'
    | 'psychic'
    | 'radiant'
    | 'slashing'
    | 'thunder'
    | 'none';

  export type AttackType = 'mwak' | 'rwak' | 'rsak' | 'msak';
  export type ActionType = AttackType | 'save';
  export type ActivationType = 'action' | 'bonus' | 'reaction' | 'special';
  export type ToolProficiency =
    | 'herb'
    | 'art'
    | 'disg'
    | 'forg'
    | 'game'
    | 'music'
    | 'navg'
    | 'pois'
    | 'thief'
    | 'vehicle';

  export type TargetType =
    | 'ally'
    | 'cone'
    | 'creature'
    | 'cube'
    | 'cylinder'
    | 'enemy'
    | 'line'
    | 'none'
    | 'object'
    | 'radius'
    | 'self'
    | 'space'
    | 'sphere'
    | 'square'
    | 'wall';

  export type DurationType =
    | 'days'
    | 'hours'
    | 'instantaneous'
    | 'minutes'
    | 'months'
    | 'permanent'
    | 'rounds'
    | 'special'
    | 'turns'
    | 'years';

  export type WeaponType = 'simpleM' | 'martialM' | 'simpleR' | 'martialR' | 'natural' | 'improv' | 'siege';

  export interface Skill {
    value: number;
    ability: DND5e.AbilityType;
    bonus: number;
    mod: number;
    passive: number;
    prof: number;
    total: number;
  }

  export type Skills =
    | 'acr'
    | 'ani'
    | 'arc'
    | 'ath'
    | 'dec'
    | 'his'
    | 'ins'
    | 'itm'
    | 'inv'
    | 'med'
    | 'nat'
    | 'prc'
    | 'prf'
    | 'per'
    | 'rel'
    | 'slt'
    | 'ste'
    | 'sur';

  export type AbilityBonus = {
    check: string;
    save: string;
    skill: string;
  };

  export type AttackBonus = {
    attack: string;
    damage: string;
  };

  export type SaveBonus = {
    dc: number;
  };

  export interface Ability {
    value: number;
    proficient: number;
    mod: number;
    save: number;
    prof: number;
  }

  export type MovementType = 'burrow' | 'climb' | 'fly' | 'swim' | 'walk' | 'hover';

  export type Senses = 'darkvision' | 'blindsense' | 'tremorsense' | 'truesight' | 'special';

  export type Currencies = 'cp' | 'sp' | 'gp' | 'ep' | 'pp';

  export type School = 'abj' | 'con' | 'div' | 'enc' | 'evo' | 'ill' | 'nec' | 'trs';
  export type Preparation = 'prepared' | 'always';

  export type SpellLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  export type SpellType = `spell${SpellLevel}` | 'pact';

  export type Resources = 'primary' | 'secondary' | 'tertiary';

  export type ConsumeType = string;
  export type ConsumeTarget = string;

  export type ArmorType = 'light' | 'medium' | 'heavy';

  export type Size = 'grg' | 'huge' | 'lg' | 'med' | 'sm' | 'tiny';
  export type Alignment = 'ce' | 'cg' | 'cn' | 'le' | 'lg' | 'ln' | 'ne' | 'ng' | 'tn';

  export type ConditionType =
    | 'blinded'
    | 'charmed'
    | 'deafened'
    | 'diseased'
    | 'exhaustion'
    | 'frightened'
    | 'grappled'
    | 'incapacitated'
    | 'invisible'
    | 'paralyzed'
    | 'petrified'
    | 'poisoned'
    | 'prone'
    | 'restrained'
    | 'stunned'
    | 'unconscious';
}

declare global {
  export interface Game {
    dnd5e: {
      applications: {
        AbilityUseDialog: AbilityUseDialog;
        ActorSheetFlags: ActorSheetFlags;
        ActorSheet5eCharacter: ActorSheet5eCharacter;
        ActorSheet5eNPC: ActorSheet5eNPC;
        ActorSheet5eVehicle: ActorSheet5eVehicle;
        ItemSheet5e: ItemSheet5e;
        ShortRestDialog: ShortRestDialog;
        TraitSelector: TraitSelector;
        ActorMovementConfig: ActorMovementConfig;
      };
      canvas: {
        AbilityTemplate: AbilityTemplate;
      };
      config: DND5e;
      dice: typeof dice;
      entities: {
        Actor5e: Actor5e;
        Item5e: Item5e;
      };
      macros: typeof macros;
      migrations: typeof migrations;
      rollItemMacro: typeof macros.rollItemMacro;
    };

    // TODO: Handle sheet registering/unregistering.
    CONFIG: {
      DND5E: DND5e;
      Actor: {
        entityClass: Actor5e;
      };

      Item: {
        entityClass: Item5e;
      };

      time: {
        roundTime: number;
      };

      MeasuredTemplate: {
        defaults: {
          angle: number;
        };
      };

      Combat: {
        initiative: {
          formula: string;
        };
      };
    };

    Combat: {
      _getInitiativeFormula: typeof _getInitiativeFormula;
    };

    SquareGrid: {
      measureDistances: typeof measureDistances;
    };

    Token: {
      getBarAttribute: typeof getBarAttribute;
    };
  }
}

export default DND5e;
