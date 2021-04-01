import '@league-of-foundry-developers/foundry-vtt-types';

import Actor5e from './actor/entity';
import Item5e from './item/entity';

/**
 * Perform a system migration for the entire World, applying migrations for Actors, Items, and Compendium packs
 * @return {Promise}      A Promise which resolves once the migration is completed
 */
export declare function migrateWorld(): Promise<void>;

/* -------------------------------------------- */

/**
 * Apply migration rules to all Entities within a single Compendium pack
 * @param pack
 * @return {Promise}
 */
export declare function migrateCompendium(pack: Compendium): Promise<void>;

/* -------------------------------------------- */
/*  Entity Type Migration Helpers               */
/* -------------------------------------------- */

/**
 * Migrate a single Actor entity to incorporate latest data model changes
 * Return an Object of updateData to be applied
 * @param {object} actor    The actor data object to update
 * @return {Object}         The updateData to apply
 */
export declare function migrateActorData(actor: Actor5e): Promise<Record<string, unknown>>;

/* -------------------------------------------- */

/**
 * Scrub an Actor's system data, removing all keys which are not explicitly defined in the system template
 * @param {Object} actorData    The data object for an Actor
 * @return {Object}             The scrubbed Actor data
 */
export declare function cleanActorData(actor: Actor5e.Data): Actor5e.Data;

/* -------------------------------------------- */

/**
 * Migrate a single Item entity to incorporate latest data model changes
 * @param item
 */
export declare function migrateItemData(item: Item5e): Record<string, unknown>;

/* -------------------------------------------- */

/**
 * Migrate a single Scene entity to incorporate changes to the data model of it's actor data overrides
 * Return an Object of updateData to be applied
 * @param {Object} scene  The Scene data to Update
 * @return {Object}       The updateData to apply
 */
export declare function migrateSceneData(scene: Scene.Data): Record<string, unknown>;

/* -------------------------------------------- */
/*  Low level migration utilities
/* -------------------------------------------- */

/**
 * Migrate the actor speed string to movement object
 * @private
 */
export declare function _migrateActorMovement<UpdateData extends Record<string, unknown> = Record<string, unknown>>(
  actorData: Actor.Data,
  updateData: UpdateData
): UpdateData & Record<string, unknown>;

/* -------------------------------------------- */

/**
 * Migrate the actor traits.senses string to attributes.senses object
 * @private
 */
export declare function _migrateActorSenses<UpdateData extends Record<string, unknown> = Record<string, unknown>>(
  actor: Actor5e.Data
): UpdateData & Record<string, unknown>;

/* -------------------------------------------- */

/**
 * Delete the old data.attuned boolean
 * @private
 */
export declare function _migrateItemAttunement(...args: any[]): any;

/* -------------------------------------------- */

/**
 * A general tool to purge flags from all entities in a Compendium pack.
 * @param {Compendium} pack   The compendium pack to clean
 * @private
 */
export declare function purgeFlags(pack: Compendium): Promise<void>;

/* -------------------------------------------- */

declare type FilterDeprecated<Obj> = Pick<
  Obj,
  {
    [K in keyof Obj]: Obj[K] extends { _deprecated: true } ? never : K;
  }[keyof Obj]
>;

/**
 * Purge the data model of any inner objects which have been flagged as _deprecated.
 * @param {object} data   The data to clean
 * @private
 */

export declare function removeDeprecatedObjects<Obj>(data: Obj): FilterDeprecated<Obj>;
