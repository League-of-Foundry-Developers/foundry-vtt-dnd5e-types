import './dnd5e/template';
import './dnd5e/dnd5e';

import './dnd5e/module/canvas';
import './dnd5e/module/chat';
import './dnd5e/module/classFeatures';
import './dnd5e/module/combat';
import './dnd5e/module/config';
import './dnd5e/module/dice';
import './dnd5e/module/effects';
import './dnd5e/module/macros';
import './dnd5e/module/migration';
import './dnd5e/module/settings';
import './dnd5e/module/templates';
import './dnd5e/module/token';

import './dnd5e/module/actor/entity';
import './dnd5e/module/actor/sheets/base';
import './dnd5e/module/actor/sheets/character';
import './dnd5e/module/actor/sheets/npc';
import './dnd5e/module/actor/sheets/vehicle';

import './dnd5e/module/apps/ability-use-dialog';
import './dnd5e/module/apps/actor-flags';
import './dnd5e/module/apps/actor-type';
import './dnd5e/module/apps/hit-dice-config';
import './dnd5e/module/apps/long-rest';
import './dnd5e/module/apps/movement-config';
import './dnd5e/module/apps/select-items-prompt';
import './dnd5e/module/apps/senses-config';
import './dnd5e/module/apps/short-rest';
import './dnd5e/module/apps/trait-selector';

import './dnd5e/module/dice/d20-roll';
import './dnd5e/module/dice/damage-roll';
import './dnd5e/module/dice/roll-dialog';

import './dnd5e/module/item/entity';
import './dnd5e/module/item/sheet';

import './dnd5e/module/pixi/ability-template';

declare global {
  // _source of the Items and Actors
  interface SourceConfig {
    Item: data5e.Item5eDataSource;
    Actor: data5e.Actor5eDataSource;
  }

  // preparedData of the Items and Actors
  interface DataConfig {
    // TODO: Make these more accurate
    Item: data5e.Item5eDataSource;
    Actor: data5e.Actor5eDataSource;
  }

  interface DocumentClassConfig {
    Item: typeof Item5e;
    Actor: typeof Actor5e;
  }
}
