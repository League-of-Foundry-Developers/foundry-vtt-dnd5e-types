import '@league-of-foundry-developers/foundry-vtt-types';

/** @override */
export declare const measureDistances: BaseGrid['measureDistances'];

/* -------------------------------------------- */

/**
 * Hijack Token health bar rendering to include temporary and temp-max health in the bar display
 * TODO: This should probably be replaced with a formal Token class extension
 */
export declare const getBarAttribute: Token['getBarAttribute'];
