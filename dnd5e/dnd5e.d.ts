interface Game {
  dnd5e: Game.DND5E;
}
declare namespace Game {
  interface DND5E {
    config: DND5E.Config;
  }

  namespace DND5E {
    interface Config {
      foo: string;
    }
  }
}
