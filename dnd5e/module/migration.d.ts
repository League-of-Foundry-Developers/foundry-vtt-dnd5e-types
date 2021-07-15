/**
 * A general tool to purge flags from all entities in a Compendium pack.
 * @param {Compendium} pack   The compendium pack to clean
 * @private
 */
declare function purgeFlags(pack: Compendium<any, Application.Options>): Promise<void>;
/**
 * Purge the data model of any inner objects which have been flagged as _deprecated.
 * @param {object} data   The data to clean
 * @private
 */
declare function removeDeprecatedObjects(data: object): object;
declare function migrateWorld(): Promise<any>;
declare function migrateCompendium(pack: any): Promise<any>;
declare function migrateActorData(actor: object): Object;
declare function migrateItemData(item: object): object;
declare function migrateSceneData(scene: Object): Object;
