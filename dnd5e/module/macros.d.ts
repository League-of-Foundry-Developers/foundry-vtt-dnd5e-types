/* -------------------------------------------- */
/*  Hotbar Macros                               */
/* -------------------------------------------- */

/**
 * Create a Macro from an Item drop.
 * Get an existing item macro if one exists, otherwise create a new one.
 * @param data - The dropped data
 * @param slot - The hotbar slot to use
 * @returns - whether the macro could be created
 */
export declare function create5eMacro(data: Item.Data | Actor.Data, slot: number): Promise<boolean | undefined>;

/* -------------------------------------------- */

/**
 * Create a Macro from an Item drop.
 * Get an existing item macro if one exists, otherwise create a new one.
 * @param itemName - the name of the item
 * @returns The item macro
 */
export declare function rollItemMacro(itemName: string): Promise<Roll>;
