/* This File is not Auto-generatable */

declare interface DND5e {
  // ASCII Artwork
  ASCII: string;

  /**
   * The set of Ability Scores used within the system
   */
  abilities: Record<DND5e.AbilityType, string>;
  abilityAbbreviations: Record<DND5e.AbilityType, string>;

  /* -------------------------------------------- */

  /**
   * Character alignment options
   */
  alignments: Record<DND5e.Alignment, string>;

  /* -------------------------------------------- */

  /**
   * An enumeration of item attunement types
   */
  attunementTypes: {
    NONE: 0;
    REQUIRED: 1;
    ATTUNED: 2;
  };

  /**
   * An enumeration of item attunement states
   */
  attunements: Record<DND5e['attunementTypes'][keyof DND5e['attunementTypes']], string>;

  /* -------------------------------------------- */
  weaponProficiencies: Record<DND5e.WeaponProficiency, string>;
  toolProficiencies: Record<DND5e.ToolProficiency, string>;

  /**
   * The basic tool types in 5e. This enables specific tool proficiencies or
   * starting equipment provided by classes and backgrounds.
   */
  toolIds: Record<DND5e.ToolItems, string>;

  /* -------------------------------------------- */

  /**
   * This Object defines the various lengths of time which can occur
   */
  timePeriods: Record<DND5e.TimePeriod, String>;

  /* -------------------------------------------- */

  /**
   * This describes the ways that an ability can be activated
   */
  abilityActivationTypes: Record<DND5e.AbilityActivationType, string>;

  /* -------------------------------------------- */

  abilityConsumptionTypes: Record<DND5e.ConsumeType, string>;

  /* -------------------------------------------- */

  // Creature Sizes
  actorSizes: Record<DND5e.Size, string>;
  tokenSizes: Record<DND5e.Size, number>;

  tokenHPColors: Record<DND5e.TokenHpTypes, number>;

  /* -------------------------------------------- */

  creatureTypes: Record<DND5e.CreatureTypes, string>;

  /* -------------------------------------------- */

  /**
   * Classification types for item action types
   */
  itemActionTypes: Record<DND5e.ActionType, string>;

  /* -------------------------------------------- */
  itemCapacityTypes: {
    items: string;
    weight: string;
  };

  /* -------------------------------------------- */

  /**
   * Enumerate the lengths of time over which an item can have limited use ability
   */
  limitedUsePeriods: Record<DND5e.UsePeriod, string>;

  /* -------------------------------------------- */

  /**
   * The set of equipment types for armor, clothing, and other objects which can ber worn by the character
   */
  equipmentTypes: Record<DND5e.ArmorType, string>;

  /* -------------------------------------------- */

  /**
   * The set of Armor Proficiencies which a character may have
   */
  armorProficiencies: Record<DND5e.ArmorProficiencies, string>;

  armorProficienciesMap: Record<
    Exclude<DND5e.ArmorType, 'trinket' | 'vehicle' | 'bonus'>,
    boolean | DND5e.ArmorProficiencies
  >;

  /* -------------------------------------------- */

  /**
   * Enumerate the valid consumable types which are recognized by the system
   */
  comsumableTypes: Record<DND5e.ConsumableType, string>;

  /* -------------------------------------------- */

  /**
   * The valid currency denominations supported by the 5e system
   */
  currencies: Record<DND5e.Currency, string>;

  /**
   * Define the upwards-conversion rules for registered currency types
   */
  currencyConversion: Record<DND5e.Currency, { into: DND5e.Currency; each: number }>;

  /* -------------------------------------------- */

  // Damage Types
  damageTypes: Record<DND5e.DamageType, string>;

  // Damage Resistance Types
  damageResistanceTypes: Record<DND5e.DamageResistanceType, string>;

  /* -------------------------------------------- */

  /**
   * The valid units of measure for movement distances in the game system.
   * By default this uses the imperial units of feet and miles.
   */
  movementTypes: Record<DND5e.MovementType, string>;

  /**
   * The valid units of measure for movement distances in the game system.
   * By default this uses the imperial units of feet and miles.
   */
  movementUnits: Record<DND5e.Unit, string>;

  /**
   * The valid units of measure for the range of an action or effect.
   * This object automatically includes the movement units from DND5E.movementUnits
   */
  distanceUnits: Record<DND5e.DistanceUnit, string> & DND5e['movementUnits'];

  /* -------------------------------------------- */

  /**
   * Configure aspects of encumbrance calculation so that it could be configured by modules
   */
  encumbrance: {
    currencyPerWeight: number;
    strMultiplier: number;
    vehicleWeightMultiplier: number;
  };

  /* -------------------------------------------- */

  /**
   * This Object defines the types of single or area targets which can be applied
   */
  targetTypes: Record<DND5e.TargetType, string>;

  /* -------------------------------------------- */

  /**
   * Map the subset of target types which produce a template area of effect
   * The keys are DND5E target types and the values are MeasuredTemplate shape types
   */
  areaTargetTypes: Record<DND5e.AreaTarget, string>;

  /* -------------------------------------------- */

  // Healing Types
  healingTypes: {
    healing: string;
    temphp: string;
  };

  /* -------------------------------------------- */

  /**
   * Enumerate the denominations of hit dice which can apply to classes
   */
  hitDieTypes: `d${string}`[];

  /* -------------------------------------------- */

  /**
   * The set of possible sensory perception types which an Actor may have
   */
  senses: Record<DND5e.Senses, string>;

  /* -------------------------------------------- */

  /**
   * The set of skill which can be trained
   */
  skills: Record<DND5e.SkillType, string>;

  /* -------------------------------------------- */

  spellPreparationModes: Record<DND5e.Preparation, string>;
  spellUpcastModes: DND5e.Preparation[];
  spellProgression: Record<DND5e.SpellcasterProgression, string>;

  /* -------------------------------------------- */

  /**
   * The available choices for how spell damage scaling may be computed
   */
  spellScalingModes: Record<DND5e.SpellScaling, string>;

  /* -------------------------------------------- */

  /**
   * Define the set of types which a weapon item can take
   */
  weaponTypes: Record<DND5e.WeaponType, string>;

  /* -------------------------------------------- */

  /**
   * Define the set of weapon property flags which can exist on a weapon
   */
  weaponProperties: Record<DND5e.WeaponProperty, string>;

  // Spell Components
  spellComponents: Record<DND5e.SpellComponent, string>;

  // Spell Schools
  spellSchools: Record<DND5e.SpellSchool, string>;

  // Spell Levels
  spellLevels: Record<DND5e.SpellLevel, string>;

  // Spell Scroll Compendium UUIDs
  spellScrollIds: Record<DND5e.SpellLevel, string>;

  /**
   * Compendium packs used for localized items.
   */
  sourcePacks: Record<'ITEMS', string>;

  /**
   * Define the standard slot progression by character level.
   * The entries of this array represent the spell slot progression for a full spell-caster.
   */
  SPELL_SLOT_TABLE: number[][];

  /* -------------------------------------------- */

  // Polymorph options.
  polymorphSettings: Record<DND5e.PolymorphSetting, string>;

  /* -------------------------------------------- */

  /**
   * Skill, ability, and tool proficiency levels
   * Each level provides a proficiency multiplier
   */
  proficiencyLevels: Record<number, string>;

  /* -------------------------------------------- */

  /**
   * The amount of cover provided by an object.
   * In cases where multiple pieces of cover are
   * in play, we take the highest value.
   */
  cover: Record<number, string>;

  /* -------------------------------------------- */

  // Condition Types
  conditionTypes: Record<DND5e.ConditionType, string>;

  // Languages
  languages: Record<DND5e.Language, string>;

  // Character Level XP Requirements
  CHARACTER_EXP_LEVELS: number[];

  // Challenge Rating XP Levels
  CR_EXP_LEVELS: number[];

  // Character Features Per Class And Level
  classFeatures: ClassFeatures;

  // Configure Optional Character Flags
  characterFlags: Record<
    DND5e.CharacterFlag,
    {
      name: string;
      hint: string;
      section: string;
      type: Boolean;
      placeholder?: boolean;
    }
  > & {
    observantFeat: {
      skills: DND5e.SkillType[];
    };
    reliableAthlete: {
      abilities: DND5e.AbilityType[];
    };
  };

  // Configure allowed status flags
  allowedActorFlags: [...DND5e.CharacterFlagArr, 'isPolymorphed', 'originalActor'];
}

declare namespace DND5e {
  type PhysicalAbility = 'str' | 'dex' | 'con';
  type MentalAbility = 'int' | 'wis' | 'cha';
  type AbilityType = PhysicalAbility | MentalAbility;

  type ItemType = 'weapon' | 'equipment' | 'consumable' | 'tool' | 'loot' | 'class' | 'spell' | 'feat' | 'backpack';

  type DistanceUnit = 'none' | 'self' | 'touch' | 'spec' | 'any';
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
  type ToolProficiency = 'herb' | 'art' | 'disg' | 'forg' | 'game' | 'music' | 'navg' | 'pois' | 'thief' | 'vehicle';
  type ToolItems =
    | 'alchemist'
    | 'bagpipes'
    | 'brewer'
    | 'calligrapher'
    | 'card'
    | 'carpenter'
    | 'cartographer'
    | 'cobbler'
    | 'cook'
    | 'dice'
    | 'disg'
    | 'drum'
    | 'dulcimer'
    | 'flute'
    | 'forg'
    | 'glassblower'
    | 'herb'
    | 'horn'
    | 'jeweler'
    | 'leatherworker'
    | 'lute'
    | 'lyre'
    | 'mason'
    | 'navg'
    | 'painter'
    | 'panflute'
    | 'pois'
    | 'potter'
    | 'shawm'
    | 'smith'
    | 'thief'
    | 'tinker'
    | 'viol'
    | 'weaver'
    | 'woodcarver';

  type AreaTarget = 'cone' | 'cube' | 'cylinder' | 'line' | 'radius' | 'sphere' | 'square' | 'wall';
  type TargetType = AreaTarget | 'ally' | 'creature' | 'enemy' | 'none' | 'object' | 'self' | 'space';

  type DurationType =
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

  type TokenHpTypes = 'temp' | 'tempmax' | 'negmax';

  type CreatureTypes =
    | 'aberration'
    | 'beast'
    | 'celestial'
    | 'construct'
    | 'dragon'
    | 'elemental'
    | 'fey'
    | 'fiend'
    | 'giant'
    | 'humanoid'
    | 'monstrosity'
    | 'ooze'
    | 'plant'
    | 'undead';

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

  type Class = keyof Subclasses;

  type RollMode = 'roll' | 'gmroll' | 'blindroll' | 'selfroll';
}
