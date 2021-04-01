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

  export type DistanceUnit = 'none' | 'self' | 'touch' | 'spec' | 'any';
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
    | 'thunder';
  export type DamageResistanceType = DamageType | 'none';

  export type AttackType = 'mwak' | 'rwak' | 'rsak' | 'msak';
  export type ActionType = AttackType | 'save' | 'heal' | 'abil' | 'util' | 'other';
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

  export type AreaTarget = 'cone' | 'cube' | 'cylinder' | 'line' | 'radius' | 'sphere' | 'square' | 'wall';
  export type TargetType = AreaTarget | 'ally' | 'creature' | 'enemy' | 'none' | 'object' | 'self' | 'space';

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

  export type SkillType =
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

  export type Currency = 'cp' | 'sp' | 'gp' | 'ep' | 'pp';

  export type SpellSchool = 'abj' | 'con' | 'div' | 'enc' | 'evo' | 'ill' | 'nec' | 'trs';
  export type Preparation = 'prepared' | 'pact' | 'always' | 'atwill' | 'innate';

  export type SpellLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  export type SpellType = `spell${SpellLevel}` | 'pact';

  export type Resources = 'primary' | 'secondary' | 'tertiary';

  export type ConsumeType = 'ammo' | 'attribute' | 'material' | 'charges';
  export type ConsumableType = 'ammo' | 'potion' | 'poison' | 'food' | 'scroll' | 'wand' | 'rod' | 'trinket';
  export type ConsumeTarget = string;

  export type ArmorType =
    | 'light'
    | 'medium'
    | 'heavy'
    | 'bonus'
    | 'natural'
    | 'shield'
    | 'clothing'
    | 'trinket'
    | 'vehicle';

  export type ArmorProficiencies = 'lgt' | 'med' | 'hvy' | 'shl';

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

  export type WeaponProficiency = 'sim' | 'mar';

  export type TimePeriod = 'inst' | 'turn' | 'round' | 'minute' | 'hour' | 'day' | 'month' | 'year' | 'perm' | 'spec';

  export type AbilityActivationType =
    | 'none'
    | 'action'
    | 'bonus'
    | 'reaction'
    | 'minute'
    | 'hour'
    | 'day'
    | 'special'
    | 'legendary'
    | 'lair'
    | 'crew';

  export type UsePeriod = 'sr' | 'lr' | 'day' | 'charges';
  export type Unit = 'ft' | 'mi';

  export type SpellcasterProgression = 'none' | 'full' | 'half' | 'third' | 'pact' | 'artificer';
  export type SpellScaling = 'none' | 'cantrip' | 'level';

  export type WeaponProperty =
    | 'ada'
    | 'amm'
    | 'fin'
    | 'fir'
    | 'foc'
    | 'hvy'
    | 'lgt'
    | 'lod'
    | 'mgc'
    | 'rch'
    | 'rel'
    | 'ret'
    | 'sil'
    | 'spc'
    | 'thr'
    | 'two'
    | 'ver';

  export type SpellComponent = 'V' | 'S' | 'M';

  export type PolymorphSetting =
    | 'keepPhysical'
    | 'keepMental'
    | 'keepSaves'
    | 'keepSkills'
    | 'mergeSaves'
    | 'mergeSkills'
    | 'keepClass'
    | 'keepFeats'
    | 'keepSpells'
    | 'keepItems'
    | 'keepBio'
    | 'keepVision';

  export type Language =
    | 'common'
    | 'aarakocra'
    | 'abyssal'
    | 'aquan'
    | 'auran'
    | 'celestial'
    | 'deep'
    | 'draconic'
    | 'druidic'
    | 'dwarvish'
    | 'elvish'
    | 'giant'
    | 'gith'
    | 'gnomish'
    | 'goblin'
    | 'gnoll'
    | 'halfling'
    | 'ignan'
    | 'infernal'
    | 'orc'
    | 'primordial'
    | 'sylvan'
    | 'terran'
    | 'cant'
    | 'undercommon';

  export type CharacterFlagArr = [
    'diamondSoul',
    'elvenAccuracy',
    'halflingLucky',
    'initiativeAdv',
    'initiativeAlert',
    'jackOfAllTrades',
    'observantFeat',
    'powerfulBuild',
    'reliableTalent',
    'remarkableAthlete',
    'weaponCriticalThreshold',
    'spellCriticalThreshold',
    'meleeCriticalDamageDice'
  ];
  export type CharacterFlag = CharacterFlagArr[number];

  export type Segment = { ray: { dx: number; dy: number } };

  export type Subclasses = {
    barbarian: [
      'path-of-the-ancestral-guardian',
      'path-of-the-battlerager',
      'path-of-the-berserker',
      'path-of-the-juggernaut',
      'path-of-the-storm-herald',
      'path-of-the-totem-warrior',
      'path-of-the-zealot'
    ];
    bard: ['college-of-glamour', 'college-of-lore', 'college-of-swords', 'college-of-valor', 'college-of-whispers'];
    cleric: [
      'ambition-domain',
      'arcana-domain',
      'blood-domain',
      'death-domain',
      'forge-domain',
      'grave-domain',
      'knowledge-domain',
      'life-domain',
      'light-domain',
      'nature-domain',
      'order-domain',
      'solidarity-domain',
      'strength-domain',
      'tempest-domain',
      'trickery-domain',
      'war-domain',
      'zeal-domain'
    ];
    druid: [
      'circle-of-dreams',
      'circle-of-the-land',
      'circle-of-the-moon',
      'circle-of-the-shepherd',
      'circle-of-spores'
    ];
    fighter: [
      'arcane-archer',
      'banneret',
      'battle-master',
      'cavalier',
      'champion',
      'echo-knight',
      'eldritch-knight',
      'samurai'
    ];
    monk: [
      'way-of-the-cobalt-soul',
      'way-of-the-drunken-master',
      'way-of-the-elements',
      'way-of-the-kensei',
      'way-of-the-long-death',
      'way-of-the-open-hand',
      'way-of-the-shadow',
      'way-of-the-sun-soul'
    ];
    paladin: [
      'oath-of-the-ancients',
      'oath-of-conquest',
      'oath-of-the-crown',
      'oath-of-devotion',
      'oathbreaker',
      'oath-of-redemption',
      'oath-of-vengeance'
    ];
    ranger: ['beast-master', 'gloom-stalker', 'horizon-walker', 'hunter', 'monster-slayer'];
    rogue: ['arcane-trickster', 'assassin', 'inquisitive', 'mastermind', 'scout', 'swashbuckler', 'thief'];
    sorcerer: [
      'draconic-bloodline',
      'divine-soul',
      'pyromancer',
      'runechild',
      'shadow-magic',
      'storm-sorcery',
      'wild-magic'
    ];
    warlock: ['the-archfey', 'the-celestial', 'the-fiend', 'the-hexblade', 'the-oldone', 'the-undying'];
    wizard: [
      'school-of-abjuration',
      'school-of-bladesinging',
      'school-of-chronurgy-magic',
      'school-of-conjuration',
      'school-of-divination',
      'school-of-enchantment',
      'school-of-evocation',
      'school-of-graviturgy-magic',
      'school-of-illusion',
      'school-of-necromancy',
      'school-of-transmutation',
      'school-of-war-magic'
    ];
  };
  export type Class = keyof Subclasses;

  export type RollMode = 'roll' | 'gmroll' | 'blindroll' | 'selfroll';
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

    CONFIG: {
      DND5E: DND5e;
      Actor: {
        entityClass: Actor5e;
        sheetClasses: {
          character: {
            'dnd5e.ActorSheet5eCharacter': {
              id: 'dnd5e.ActorSheet5eCharacter';
              default: boolean;
              cls: ActorSheet5eCharacter;
              label: string;
            };
          };
          npc: {
            'dnd5e.ActorSheet5eNPC': {
              id: 'dnd5e.ActorSheet5eNPC';
              default: boolean;
              cls: ActorSheet5eNPC;
              label: string;
            };
          };
          vehicle: {
            'dnd5e.ActorSheet5eVehicle': {
              id: 'dnd5e.ActorSheet5eVehicle';
              default: boolean;
              cls: ActorSheet5eVehicle;
              label: string;
            };
          };
        };
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
