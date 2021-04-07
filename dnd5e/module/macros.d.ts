/**
 * Create a Macro from an Item drop.
 * Get an existing item macro if one exists, otherwise create a new one.
 * @param data - The dropped data
 * @param slot - The hotbar slot to use
 * @returns - whether the macro could be created
 */
declare function create5eMacro(data: any, slot: number): any;

/**
 * Create a Macro from an Item drop.
 * Get an existing item macro if one exists, otherwise create a new one.
 * @param itemName - the name of the item
 * @returns The item macro
 */
declare function rollItemMacro(itemName: string): Promise<Roll>;

declare type DND5eMacros = {
  create5eMacro: typeof create5eMacro;
  rollItemMacro: typeof rollItemMacro;
};
