/**
 * Perform a system migration for the entire World, applying migrations for Actors, Items, and Compendium packs
 * @returns A Promise which resolves once the migration is completed
 */
declare function migrateWorld(): Promise<void>;

/* -------------------------------------------- */

/**
 * Apply migration rules to all Entities within a single Compendium pack
 * @param pack - The compendium to migrate
 */
declare function migrateCompendium(pack: Compendium): Promise<void>;

/* -------------------------------------------- */
/*  Entity Type Migration Helpers               */
/* -------------------------------------------- */

/**
 * Migrate a single Actor entity to incorporate latest data model changes
 * Return an Object of updateData to be applied
 * @param actor - The actor data object to update
 * @returns The updateData to apply
 */
declare function migrateActorData(actor: Actor5e): Promise<Record<string, unknown>>;

/* -------------------------------------------- */

/**
 * Scrub an Actor's system data, removing all keys which are not explicitly defined in the system template
 * @param actorData - The data object for an Actor
 * @returns The scrubbed Actor data
 */
declare function cleanActorData(actor: Actor5e.Data): Actor5e.Data;

/* -------------------------------------------- */

/**
 * Migrate a single Item entity to incorporate latest data model changes
 * @param item - The item to migrate
 */
declare function migrateItemData(item: Item5e): Record<string, unknown>;

/* -------------------------------------------- */

/**
 * Migrate a single Scene entity to incorporate changes to the data model of it's actor data overrides
 * Return an Object of updateData to be applied
 * @param scene - The Scene data to Update
 * @returns The updateData to apply
 */
declare function migrateSceneData(scene: Scene.Data): Record<string, unknown>;

/* -------------------------------------------- */
/*  Low level migration utilities
/* -------------------------------------------- */

/**
 * Migrate the actor speed string to movement object
 */
declare function _migrateActorMovement<UpdateData extends Record<string, unknown> = Record<string, unknown>>(
  actorData: Actor.Data,
  updateData: UpdateData
): UpdateData & Record<string, unknown>;

/* -------------------------------------------- */

/**
 * Migrate the actor traits.senses string to attributes.senses object
 */
declare function _migrateActorSenses<UpdateData extends Record<string, unknown> = Record<string, unknown>>(
  actor: Actor5e.Data
): UpdateData & Record<string, unknown>;

/* -------------------------------------------- */

/**
 * Delete the old data.attuned boolean
 */
declare function _migrateItemAttunement(...args: any[]): any;

/* -------------------------------------------- */

/**
 * A general tool to purge flags from all entities in a Compendium pack.
 * @param pack - The compendium pack to clean
 */
declare function purgeFlags(pack: any): any;

/* -------------------------------------------- */

/**
 * Purge the data model of any inner objects which have been flagged as _deprecated.
 * @param data - The data to clean
 */
declare function removeDeprecatedObjects(data: object): any;

declare type DND5eMigration = {
  migrateWorld: typeof migrateWorld;
  migrateCompendium: typeof migrateCompendium;
  migrateActorData: typeof migrateActorData;
  cleanActorData: typeof cleanActorData;
  migrateItemData: typeof migrateItemData;
  migrateSceneData: typeof migrateSceneData;
  _migrateActorMovement: typeof _migrateActorMovement;
  _migrateActorSenses: typeof _migrateActorSenses;
  _migrateItemAttunement: typeof _migrateItemAttunement;
  purgeFlags: typeof purgeFlags;
  removeDeprecatedObjects: typeof removeDeprecatedObjects;
};
