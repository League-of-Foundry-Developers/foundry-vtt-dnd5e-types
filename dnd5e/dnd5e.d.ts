import '@league-of-foundry-developers/foundry-vtt-types';

declare type CONFIG = {
  foo: string;
};

declare type DND5E = {
  config: CONFIG;
};

declare class Game {
  dnd5e: DND5E;
}

declare module '@league-of-foundry-developers/foundry-vtt-types' {
  let game: Game;
}
