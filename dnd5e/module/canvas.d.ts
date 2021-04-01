import '@league-of-foundry-developers/foundry-vtt-types';

/** @override */
export declare function measureDistances(
  ...args: Parameters<BaseGrid['measureDistances']>
): ReturnType<BaseGrid['measureDistances']>;

/* -------------------------------------------- */

/**
 * Hijack Token health bar rendering to include temporary and temp-max health in the bar display
 * TODO: This should probably be replaced with a formal Token class extension
 */
export declare function getBarAttribute(
  ...args: Parameters<Token['getBarAttribute']>
): ReturnType<Token['getBarAttribute']>;
