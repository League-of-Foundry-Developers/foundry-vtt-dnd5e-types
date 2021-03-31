import '@league-of-foundry-developers/foundry-vtt-types';

interface DND5e {}

declare global {
  export interface Game {
    dnd5e: DND5e;
  }
}
