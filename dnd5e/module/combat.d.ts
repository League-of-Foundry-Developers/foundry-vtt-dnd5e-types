import '@league-of-foundry-developers/foundry-vtt-types';

/**
 * Override the default Initiative formula to customize special behaviors of the system.
 * Apply advantage, proficiency, or bonuses where appropriate
 * Apply the dexterity score as a decimal tiebreaker if requested
 * See Combat._getInitiativeFormula for more detail.
 */
export declare function _getInitiativeFormula(combatant: Combat.Combatant): string | string[];
