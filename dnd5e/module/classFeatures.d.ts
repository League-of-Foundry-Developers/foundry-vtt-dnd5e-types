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
  druid: ['circle-of-dreams', 'circle-of-the-land', 'circle-of-the-moon', 'circle-of-the-shepherd', 'circle-of-spores'];
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

declare type ClassFeatures = {
  [K in keyof Subclasses]: { features: Record<`${number}`, string[]> } & {
    [SK in Subclasses[K][number]]: {
      label: string;
      source: string;
      features: Record<`${number}`, string[]>;
    };
  };
};
