declare namespace data5e {
  // Actors
  interface CharacterDataSource {
    type: 'character';
    data: Character;
  }

  interface NpcDataSource {
    type: 'npc';
    data: Npc;
  }

  interface VehicleDataSource {
    type: 'vehicle';
    data: Vehicle;
  }

  type Actor5eDataSource = CharacterDataSource | NpcDataSource | VehicleDataSource;

  // Items

  interface BackpackDataSource {
    type: 'backpack';
    data: Backpack;
  }

  interface WeaponDataSource {
    type: 'weapon';
    data: Weapon;
  }

  interface EquipmentDataSource {
    type: 'equipment';
    data: Equipment;
  }

  interface ConsumableDataSource {
    type: 'consumable';
    data: Consumable;
  }

  interface ToolDataSource {
    type: 'tool';
    data: Tool;
  }

  interface LootDataSource {
    type: 'loot';
    data: Loot;
  }

  interface ClassDataSource {
    type: 'class';
    data: Class;
  }

  interface SpellDataSource {
    type: 'spell';
    data: Spell;
  }

  interface FeatDataSource {
    type: 'feat';
    data: Feat;
  }

  type Item5eDataSource =
    | BackpackDataSource
    | WeaponDataSource
    | EquipmentDataSource
    | ConsumableDataSource
    | ToolDataSource
    | LootDataSource
    | ClassDataSource
    | SpellDataSource
    | FeatDataSource;

  // Below here was mostly generated from https://app.quicktype.io/?l=ts

  /**
   * Character Actor Data Source Data
   */
  interface Character extends Common, Creature {
    attributes: CharacterAttributes & CreatureAttributes & CommonAttributes;
    details: CharacterDetails & CommonDetails & CreatureDetails;
    resources: CharacterResources;
    traits: CharacterTraits & CommonTraits & CreatureTraits;
  }

  interface CharacterAttributes {
    death: Death;
    exhaustion: number;
    inspiration: number;
  }

  interface Death {
    success: number;
    failure: number;
  }

  interface CharacterDetails {
    background: string;
    originalClass: string;
    xp: PurpleXP;
    appearance: string;
    trait: string;
    ideal: string;
    bond: string;
    flaw: string;
  }

  interface PurpleXP {
    value: number;
    min: number;
    max: number;
  }

  interface CharacterResources {
    primary: Ary;
    secondary: Ary;
    tertiary: Ary;
  }

  interface Ary {
    value: number;
    max: number;
    sr: number;
    lr: number;
  }

  interface CharacterTraits {
    weaponProf: ArmorProf;
    armorProf: ArmorProf;
    toolProf: ArmorProf;
  }

  interface ArmorProf {
    value: any[];
    custom: string;
  }

  /**
   * NPC Actor Data Source Data
   */
  interface Npc extends Common, Creature {
    details: NpcDetails & CommonDetails & CreatureDetails;
    resources: NpcResources;
    traits: CommonTraits & CreatureTraits;
    attributes: CommonAttributes & CreatureAttributes;
  }

  interface NpcDetails {
    type: Type;
    environment: string;
    cr: number;
    spellLevel: DND5e.SpellLevel;
    xp: ChaClass;
    source: string;
  }

  interface Type {
    value: string;
    subtype: string;
    swarm: string;
    custom: string;
  }

  interface ChaClass {
    value: number;
  }

  interface NpcResources {
    legact: Leg;
    legres: Leg;
    lair: Lair;
  }

  interface Lair {
    value: number;
    initiative: number;
  }

  interface Leg {
    value: number;
    max: number;
  }

  interface ActorTemplates {
    common: Common;
    creature: Creature;
  }

  interface Common {
    abilities: CommonAbilities;
    attributes: CommonAttributes;
    details: CommonDetails;
    traits: CommonTraits;
    currency: Currency;
  }

  interface CommonAbilities {
    str: Cha;
    dex: Cha;
    con: Cha;
    int: Cha;
    wis: Cha;
    cha: Cha;
  }

  interface Cha {
    value: number;
    proficient: number;
  }

  interface CommonAttributes {
    ac: ChaClass;
    hp: PurpleHP;
    init: Init;
    movement: Movement;
  }

  interface PurpleHP {
    value: number;
    min: number;
    max: number;
    temp: number;
    tempmax: number;
  }

  interface Init {
    value: number;
    bonus: number;
  }

  interface Movement {
    burrow: number;
    climb: number;
    fly: number;
    swim: number;
    walk: number;
    units: string;
    hover: boolean;
  }

  interface Currency {
    pp: number;
    gp: number;
    ep: number;
    sp: number;
    cp: number;
  }

  interface CommonDetails {
    biography: Biography;
  }

  interface Biography {
    value: string;
    public: string;
  }

  interface CommonTraits {
    size: string;
    di: ArmorProf;
    dr: ArmorProf;
    dv: ArmorProf;
    ci: ArmorProf;
  }

  interface Creature {
    attributes: CreatureAttributes;
    details: CreatureDetails;
    skills: { [key: string]: Skill };
    traits: CreatureTraits;
    spells: { [key: string]: SpellValue };
    bonuses: Bonuses;
  }

  interface CreatureAttributes {
    senses: Senses;
    spellcasting: string;
  }

  interface Senses {
    darkvision: number;
    blindsight: number;
    tremorsense: number;
    truesight: number;
    units: string;
    special: string;
  }

  interface Bonuses {
    mwak: Msak;
    rwak: Msak;
    msak: Msak;
    rsak: Msak;
    abilities: BonusesAbilities;
    spell: BonusesSpell;
  }

  interface BonusesAbilities {
    check: string;
    save: string;
    skill: string;
  }

  interface Msak {
    attack: string;
    damage: string;
  }

  interface BonusesSpell {
    dc: string;
  }

  interface CreatureDetails {
    alignment: DND5e.Alignment;
    race: string;
  }

  interface Skill {
    value: number;
    ability: string;
  }

  interface SpellValue {
    value: number;
    override: null;
  }

  interface CreatureTraits {
    languages: ArmorProf;
  }

  /**
   * Vehicle Actor Data Source Data
   */
  interface Vehicle extends Common {
    abilities: VehicleAbilities & CommonAbilities;
    attributes: VehicleAttributes & CommonAttributes;
    traits: VehicleTraits & CommonTraits;
    cargo: Cargo;
  }

  interface VehicleAbilities {
    int: ChaClass;
    wis: ChaClass;
    cha: ChaClass;
  }

  interface VehicleAttributes {
    ac: AC;
    actions: Actions;
    hp: MountableHP;
    capacity: AttributesCapacity;
  }

  interface AC {
    value: null;
    motionless: string;
  }

  interface Actions {
    stations: boolean;
    value: number;
    thresholds: { [key: string]: null };
  }

  interface AttributesCapacity {
    creature: string;
    cargo: number;
  }

  interface MountableHP {
    value: number | null;
    max: number | null;
    dt: null;
    mt?: null;
    conditions?: string;
  }

  interface Cargo {
    crew: any[];
    passengers: any[];
  }

  interface VehicleTraits {
    size: string;
    dimensions: string;
    di: Ci;
    ci: Ci;
  }

  interface Ci {
    value: string[];
  }

  interface Backpack extends ItemDescription {
    capacity: BackpackCapacity;
    currency: Currency;
  }

  interface BackpackCapacity {
    type: string;
    value: number;
    weightless: boolean;
  }

  interface Class extends ItemDescription {
    templates: string[];
    levels: number;
    subclass: string;
    hitDice: string;
    hitDiceUsed: number;
    saves: any[];
    skills: Skills;
    spellcasting: Spellcasting;
  }

  interface Skills {
    number: number;
    choices: any[];
    value: any[];
  }

  interface Spellcasting {
    progression: DND5e.SpellcasterProgression;
    ability: DND5e.AbilityType;
  }

  interface Consumable extends ItemDescription, PhysicalItem, ActivatedEffect, Action {
    consumableType: DND5e.ConsumableType;
    uses: ConsumableUses & ActivatedEffectUses;
  }

  interface ConsumableUses {
    autoDestroy: boolean;
  }

  interface Equipment extends ItemDescription, PhysicalItem, ActivatedEffect, Action, Mountable {
    armor: Armor;
    speed: Speed;
    strength: number;
    stealth: boolean;
    proficient: boolean;
  }

  interface Armor {
    type: string;
    value: number;
    dex: null;
  }

  interface Speed {
    value: null;
    conditions: string;
  }

  interface Feat extends ItemDescription, ActivatedEffect, Action {
    requirements: string;
    recharge: Recharge;
  }

  interface Recharge {
    value: null;
    charged: boolean;
  }

  interface Loot extends ItemDescription, PhysicalItem {
    templates: string[];
  }

  interface Spell extends ItemDescription, ActivatedEffect, Action {
    level: DND5e.SpellLevel;
    school: string;
    components: Components;
    materials: Materials;
    preparation: Preparation;
    scaling: Scaling;
  }

  interface Components {
    value: string;
    vocal: boolean;
    somatic: boolean;
    material: boolean;
    ritual: boolean;
    concentration: boolean;
  }

  interface Materials {
    value: string;
    consumed: boolean;
    cost: number;
    supply: number;
  }

  interface Preparation {
    mode: DND5e.Preparation;
    prepared: boolean;
  }

  interface Scaling {
    mode: DND5e.SpellScaling;
    formula: null;
  }

  interface ItemTemplates {
    itemDescription: ItemDescription;
    physicalItem: PhysicalItem;
    activatedEffect: ActivatedEffect;
    action: Action;
    mountable: Mountable;
  }

  interface Action {
    ability: null;
    actionType: null;
    attackBonus: number;
    chatFlavor: string;
    critical: null;
    damage: Damage;
    formula: string;
    save: Save;
  }

  interface Damage {
    parts: any[];
    versatile: string;
  }

  interface Save {
    ability: string;
    dc: null;
    scaling: string;
  }

  interface ActivatedEffect {
    activation: Activation;
    duration: Duration;
    target: Target;
    range: Range;
    uses: ActivatedEffectUses;
    consume: Consume;
  }

  interface Activation {
    type: DND5e.AbilityActivationType;
    cost: number;
    condition: string;
  }

  interface Consume {
    type: DND5e.ConsumeType;
    target: null;
    amount: null;
  }

  interface Duration {
    value: null;
    units: DND5e.TimePeriod;
  }

  interface Range {
    value: null;
    long: null;
    units: DND5e.DistanceUnit & DND5e.Unit;
  }

  interface Target {
    value: null;
    width: null;
    units: DND5e.DistanceUnit & DND5e.Unit;
    type: DND5e.TargetType;
  }

  interface ActivatedEffectUses {
    value: number;
    max: number;
    per: null;
  }

  interface ItemDescription {
    description: Description;
    source: string;
  }

  interface Description {
    value: string;
    chat: string;
    unidentified: string;
  }

  interface Mountable {
    armor: ChaClass;
    hp: MountableHP;
  }

  interface PhysicalItem {
    quantity: number;
    weight: number;
    price: number;
    attuned: boolean;
    attunement: number;
    equipped: boolean;
    rarity: string;
    identified: boolean;
  }

  interface Tool extends ItemDescription, PhysicalItem {
    templates: string[];
    ability: string;
    chatFlavor: string;
    proficient: number;
  }

  interface Weapon extends ItemDescription, PhysicalItem, ActivatedEffect, Action, Mountable {
    weaponType: DND5e.WeaponType;
    properties: Record<DND5e.WeaponProperty, boolean>;
    proficient: boolean;
  }
}
