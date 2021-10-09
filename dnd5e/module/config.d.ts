/* This File is not Auto-generatable */

declare interface DND5e {
  // ASCII Artwork
  ASCII: string;

  /**
   * The set of Ability Scores used within the system
   */
  abilities: Record<DND5e.AbilityType, string>;

  /**
   * Localized abbreviations for Ability Scores.
   */
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

  /**
   * General weapon categories.
   */
  weaponProficiencies: Record<DND5e.WeaponProficiency, string>;

  /**
   * A mapping between `DND5E.weaponTypes` and `DND5E.weaponProficiencies` that
   * is used to determine if character has proficiency when adding an item.
   */
  weaponProficienciesMap: Record<DND5e.WeaponType, DND5e.WeaponProficiency | true>;

  /**
   * The basic weapon types in 5e. This enables specific weapon proficiencies or
   * starting equipment provided by classes and backgrounds.
   */
  weaponIds: Record<DND5e.WeaponItems, string>;

  /**
   * The categories into which Tool items can be grouped.
   */
  toolTypes: Record<any, string>;

  /**
   * The categories of tool proficiencies that a character can gain.
   */
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

  /**
   * Creature sizes.
   */
  actorSizes: Record<DND5e.Size, string>;

  /**
   * Default token image size for the values of `DND5E.actorSizes`.
   */
  tokenSizes: Record<DND5e.Size, number>;

  /**
   * Colors used to visualize temporary and temporary maximum HP in token health bars.
   */
  tokenHPColors: Record<DND5e.TokenHpTypes, number>;

  /* -------------------------------------------- */

  /**
   * Default types of creatures.
   */
  creatureTypes: Record<DND5e.CreatureTypes, string>;

  /* -------------------------------------------- */

  /**
   * Classification types for item action types
   */
  itemActionTypes: Record<DND5e.ActionType, string>;

  /* -------------------------------------------- */

  /**
   * Different ways in which item capacity can be limited.
   */
  itemCapacityTypes: {
    items: string;
    weight: string;
  };

  /* -------------------------------------------- */

  /**
   * List of various item rarities.
   */
  itemRarity: Record<DND5e.ItemRarity, string>;

  /* -------------------------------------------- */

  /**
   * Enumerate the lengths of time over which an item can have limited use ability
   */
  limitedUsePeriods: Record<DND5e.UsePeriod, string>;

  /* -------------------------------------------- */

  /**
   * Specific equipment types that modify base AC.
   */
  armorTypes: Record<DND5e.ArmorType, string>;

  /* -------------------------------------------- */

  /**
   * Equipment types that aren't armor.
   */
  miscEquipmentTypes: Record<DND5e.MiscEquipmentType, string>;

  /* -------------------------------------------- */

  /**
   * The set of equipment types for armor, clothing, and other objects which can ber worn by the character
   */
  equipmentTypes: Record<DND5e.EquipmentType, string>;

  /* -------------------------------------------- */

  /**
   * The various types of vehicles in which characters can be proficient.
   */
  vehicleTypes: Record<DND5e.VehicleType, string>;

  /* -------------------------------------------- */

  /**
   * The set of Armor Proficiencies which a character may have
   */
  armorProficiencies: Record<DND5e.ArmorProficiencies, string>;

  /**
   * A mapping between `DND5E.equipmentTypes` and `DND5E.armorProficiencies` that
   * is used to determine if character has proficiency when adding an item.
   */
  armorProficienciesMap: Record<DND5e.ArmorType, boolean | DND5e.ArmorProficiencies>;

  /**
   * The basic armor types in 5e. This enables specific armor proficiencies,
   * automated AC calculation in NPCs, and starting equipment.
   */
  armorIds: Record<DND5e.ArmorItem, string>;

  /**
   * The basic shield in 5e.
   */
  shieldIds: { shield: string };

  /**
   * Common armor class calculations.
   */
  armorClasses: Record<string, DND5e.ArmorClass>;

  /* -------------------------------------------- */

  /**
   * Enumerate the valid consumable types which are recognized by the system
   */
  comsumableTypes: Record<DND5e.ConsumableType, string>;

  /* -------------------------------------------- */

  /**
   * The valid currency denominations supported by the 5e system
   */
  currencies: Record<DND5e.Currency, DND5e.CurrencyProperties>;

  /* -------------------------------------------- */

  /**
   * Types of damage the can be caused by abilities.
   */
  damageTypes: Record<DND5e.DamageType, string>;

  /**
   * Types of damage to which an actor can possess resistance, immunity, or vulnerability.
   */
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
    currencyPerWeight: DND5e.EncumberanceCalculation;
    strMultiplier: DND5e.EncumberanceCalculation;
    vehicleWeightMultiplier: DND5e.EncumberanceCalculation;
  };

  /* -------------------------------------------- */

  /**
   * The types of single or area targets which can be applied to abilities.
   */
  targetTypes: Record<DND5e.TargetType, string>;

  /* -------------------------------------------- */

  /**
   * Mapping between `DND5E.targetTypes` and `MeasuredTemplate` shape types to define
   * which templates are produced by which area of effect target type.
   */
  areaTargetTypes: Record<DND5e.AreaTarget, string>;

  /* -------------------------------------------- */

  /**
   * Different types of healing that can be applied using abilities.
   */
  healingTypes: {
    healing: string;
    temphp: string;
  };

  /* -------------------------------------------- */

  /**
   * Denominations of hit dice which can apply to classes.
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

  /**
   * Various different ways a spell can be prepared.
   */
  spellPreparationModes: Record<DND5e.Preparation, string>;
  /**
   * Subset of `DND5E.spellPreparationModes` that consume spell slots.
   */
  spellUpcastModes: DND5e.Preparation[];
  /**
   * Ways in which a class can contribute to spellcasting levels.
   */
  spellProgression: Record<DND5e.SpellcasterProgression, string>;

  /* -------------------------------------------- */

  /**
   * The available choices for how spell damage scaling may be computed
   */
  spellScalingModes: Record<DND5e.SpellScaling, string>;

  /* -------------------------------------------- */

  /**
   * The set of types which a weapon item can take.
   */
  weaponTypes: Record<DND5e.WeaponType, string>;

  /* -------------------------------------------- */

  /**
   * The set of weapon property flags which can exist on a weapon.
   */
  weaponProperties: Record<DND5e.WeaponProperty, string>;

  /**
   * Types of components that can be required when casting a spell.
   */
  spellComponents: Record<DND5e.SpellComponent, string>;

  /**
   * Schools to which a spell can belong.
   */
  spellSchools: Record<DND5e.SpellSchool, string>;

  /**
   * Valid spell levels.
   */
  spellLevels: Record<DND5e.SpellLevel, string>;

  /**
   * Spell scroll item ID within the `DND5E.sourcePacks` compendium for each level.
   */
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

  /**
   * Settings to configure how actors are merged when polymorphing is applied.
   */
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

  /**
   * A selection of actor attributes that can be tracked on token resource bars.
   */
  trackableAttributes: string[];

  /* -------------------------------------------- */

  /**
   * A selection of actor and item attributes that are valid targets for item resource consumption.
   */
  consumableResources: string[];
  /* -------------------------------------------- */

  /**
   * Conditions that can effect an actor.
   */
  conditionTypes: Record<DND5e.ConditionType, string>;

  /**
   * Languages a character can learn.
   */
  languages: Record<DND5e.Language, string>;

  /**
   * XP required to achieve each character level.
   */
  CHARACTER_EXP_LEVELS: number[];

  /**
   * XP granted for each challenge rating.
   */
  CR_EXP_LEVELS: number[];

  /**
   * Character features automatically granted by classes & subclasses at certain levels.
   */
  classFeatures: ClassFeatures;

  /**
   * Special character flags.
   */
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

  /**
   * Flags allowed on actors. Any flags not in the list may be deleted during a migration.
   */
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

  interface CurrencyProperties {
    label: string;
    abbreviation: string;
    conversion?: { into: Currency; each: number };
  }

  type SpellSchool = 'abj' | 'con' | 'div' | 'enc' | 'evo' | 'ill' | 'nec' | 'trs';
  type Preparation = 'prepared' | 'pact' | 'always' | 'atwill' | 'innate';

  type SpellLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  type SpellType = `spell${SpellLevel}` | 'pact';

  type Resources = 'primary' | 'secondary' | 'tertiary';

  type ConsumeType = 'ammo' | 'attribute' | 'material' | 'charges';
  type ConsumableType = 'ammo' | 'potion' | 'poison' | 'food' | 'scroll' | 'wand' | 'rod' | 'trinket';
  type ConsumeTarget = string;

  type ArmorType = 'light' | 'medium' | 'heavy' | 'natural' | 'shield';

  type MiscEquipmentType = 'clothing' | 'trinket' | 'vehicle';

  type ArmorItem =
    | 'breastplate'
    | 'chainmail'
    | 'chainshirt'
    | 'halfplate'
    | 'hide'
    | 'leather'
    | 'padded'
    | 'plate'
    | 'ringmail'
    | 'scalemail'
    | 'splint'
    | 'studded';

  interface ArmorClass {
    label: string;
    formula: string;
  }

  type EquipmentType = ArmorType | MiscEquipmentType;

  type VehicleType = 'air' | 'land' | 'water';

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

  type WeaponItems =
    | 'battleaxe'
    | 'blowgun'
    | 'club'
    | 'dagger'
    | 'dart'
    | 'flail'
    | 'glaive'
    | 'greataxe'
    | 'greatclub'
    | 'greatsword'
    | 'halberd'
    | 'handaxe'
    | 'handcrossbow'
    | 'heavycrossbow'
    | 'javelin'
    | 'lance'
    | 'lightcrossbow'
    | 'lighthammer'
    | 'longbow'
    | 'longsword'
    | 'mace'
    | 'maul'
    | 'morningstar'
    | 'net'
    | 'pike'
    | 'quarterstaff'
    | 'rapier'
    | 'scimitar'
    | 'shortsword'
    | 'sickle'
    | 'spear'
    | 'shortbow'
    | 'sling'
    | 'trident'
    | 'warpick'
    | 'warhammer'
    | 'whip';

  type ItemRarity = 'common' | 'uncommon' | 'rare' | 'veryRare' | 'legendary' | 'artifact';

  interface EncumberanceCalculation {
    imperial: number;
    metric: number;
  }
}
