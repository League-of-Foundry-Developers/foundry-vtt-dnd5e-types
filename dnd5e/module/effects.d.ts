/**
 * Manage Active Effect instances through the Actor Sheet via effect control buttons.
 * @param event -     The left-click event on the effect control
 * @param owner -     The owning entity which manages this effect
 */
declare function onManageActiveEffect(event: any, owner: any | any): any;

/**
 * Prepare the data structure for Active Effects which are currently applied to an Actor or Item.
 * @param effects -    The array of Active Effect instances to prepare sheet data for
 */
declare function prepareActiveEffectCategories(effects: any[]): object;
