declare interface Game {
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
    dice: DND5eDice;
    entities: {
      Actor5e: Actor5e;
      Item5e: Item5e;
    };
    macros: DND5eMacros;
    migrations: DND5eMigration;
    rollItemMacro: DND5eMacros['rollItemMacro'];
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

declare namespace DND5e {
  type PhysicalAbility = 'str' | 'dex' | 'con';
  type MentalAbility = 'int' | 'wis' | 'cha';
  type AbilityType = PhysicalAbility | MentalAbility;

  type ItemType = 'weapon' | 'equipment' | 'consumable' | 'tool' | 'loot' | 'class' | 'spell' | 'feat' | 'backpack';

  type DistanceUnit = 'none' | 'self' | 'touch' | 'spec' | 'any';
  type TargetUnitType = 'none' | 'self' | 'touch' | 'special' | 'any' | 'ft' | 'miles';
  type DamageType =
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
  type DamageResistanceType = DamageType | 'none';

  type AttackType = 'mwak' | 'rwak' | 'rsak' | 'msak';
  type ActionType = AttackType | 'save' | 'heal' | 'abil' | 'util' | 'other';
  type ActivationType = 'action' | 'bonus' | 'reaction' | 'special';
  type ToolProficiency = 'herb' | 'art' | 'disg' | 'forg' | 'game' | 'music' | 'navg' | 'pois' | 'thief' | 'vehicle';

  type AreaTarget = 'cone' | 'cube' | 'cylinder' | 'line' | 'radius' | 'sphere' | 'square' | 'wall';
  type TargetType = AreaTarget | 'ally' | 'creature' | 'enemy' | 'none' | 'object' | 'self' | 'space';

  type WeaponType = 'simpleM' | 'martialM' | 'simpleR' | 'martialR' | 'natural' | 'improv' | 'siege';

  interface Skill {
    value: number;
    ability: DND5e.AbilityType;
    bonus: number;
    mod: number;
    passive: number;
    prof: number;
    total: number;
  }

  type SkillType =
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

  type AbilityBonus = {
    check: string;
    save: string;
    skill: string;
  };

  type AttackBonus = {
    attack: string;
    damage: string;
  };

  type SaveBonus = {
    dc: number;
  };

  interface Ability {
    value: number;
    proficient: number;
    mod: number;
    save: number;
    prof: number;
  }

  type MovementType = 'burrow' | 'climb' | 'fly' | 'swim' | 'walk' | 'hover';

  type Senses = 'darkvision' | 'blindsense' | 'tremorsense' | 'truesight' | 'special';

  type Currency = 'cp' | 'sp' | 'gp' | 'ep' | 'pp';

  type SpellSchool = 'abj' | 'con' | 'div' | 'enc' | 'evo' | 'ill' | 'nec' | 'trs';
  type Preparation = 'prepared' | 'pact' | 'always' | 'atwill' | 'innate';

  type SpellLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  type SpellType = `spell${SpellLevel}` | 'pact';

  type Resources = 'primary' | 'secondary' | 'tertiary';

  type ConsumeType = 'ammo' | 'attribute' | 'material' | 'charges';
  type ConsumableType = 'ammo' | 'potion' | 'poison' | 'food' | 'scroll' | 'wand' | 'rod' | 'trinket';
  type ConsumeTarget = string;

  type ArmorType = 'light' | 'medium' | 'heavy' | 'bonus' | 'natural' | 'shield' | 'clothing' | 'trinket' | 'vehicle';

  type ArmorProficiencies = 'lgt' | 'med' | 'hvy' | 'shl';

  type Size = 'grg' | 'huge' | 'lg' | 'med' | 'sm' | 'tiny';
  type Alignment = 'ce' | 'cg' | 'cn' | 'le' | 'lg' | 'ln' | 'ne' | 'ng' | 'tn';

  type ConditionType =
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

  type WeaponProficiency = 'sim' | 'mar';

  type TimePeriod = 'inst' | 'turn' | 'round' | 'minute' | 'hour' | 'day' | 'month' | 'year' | 'perm' | 'spec';

  type AbilityActivationType =
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

  type UsePeriod = 'sr' | 'lr' | 'day' | 'charges';
  type Unit = 'ft' | 'mi';

  type SpellcasterProgression = 'none' | 'full' | 'half' | 'third' | 'pact' | 'artificer';
  type SpellScaling = 'none' | 'cantrip' | 'level';

  type WeaponProperty =
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

  type SpellComponent = 'V' | 'S' | 'M';

  type PolymorphSetting =
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

  type Language =
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

  type CharacterFlagArr = [
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
  type CharacterFlag = CharacterFlagArr[number];

  type Segment = { ray: { dx: number; dy: number } };

  type Subclasses = {
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
  type Class = keyof Subclasses;

  type RollMode = 'roll' | 'gmroll' | 'blindroll' | 'selfroll';
}
