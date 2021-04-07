import '@league-of-foundry-developers/foundry-vtt-types';

import DND5e from '../dnd5e';

/**
 * A standardized helper function for simplifying the constant parts of a multipart roll formula
 *
 * @param formula - The original Roll formula
 * @param data - Actor or item data against which to parse the roll
 * @param options - Formatting options
 * @param options.constantFirst - Puts the constants before the dice terms in the resulting formula
 *
 * @returns The resulting simplified formula
 */
export declare function simplifyRollFormula(formula: string, data: Actor.Data | Item.Data): string;

/**
 * Only some terms are supported by simplifyRollFormula, this method returns true when the term is not supported.
 * @param term - A single Dice term to check support on
 * @returns True when unsupported, false if supported
 */
declare function _isUnsupportedTerm(term: any): boolean;

/* -------------------------------------------- */

/**
 * A standardized helper function for managing core 5e "d20 rolls"
 *
 * Holding SHIFT, ALT, or CTRL when the attack is rolled will "fast-forward".
 * This chooses the default options of a normal attack with no bonus, Advantage, or Disadvantage respectively
 *
 * @param parts - The dice roll component parts, excluding the initial d20
 * @param data - Actor or item data against which to parse the roll
 * @param event - The triggering event which initiated the roll
 * @param rollMode - A specific roll mode to apply as the default for the resulting roll
 * @param template - The HTML template used to render the roll dialog
 * @param title - The dice roll UI window title
 * @param speaker - The ChatMessage speaker to pass when creating the chat
 * @param flavor - Flavor text to use in the posted chat message
 * @param fastForward - Allow fast-forward advantage selection
 * @param onClose - Callback for actions to take when the dialog form is closed
 * @param dialogOptions - Modal dialog options
 * @param advantage - Apply advantage to the roll (unless otherwise specified)
 * @param disadvantage - Apply disadvantage to the roll (unless otherwise specified)
 * @param critical - The value of d20 result which represents a critical success
 * @param fumble - The value of d20 result which represents a critical failure
 * @param targetValue - Assign a target value against which the result of this roll should be compared
 * @param elvenAccuracy - Allow Elven Accuracy to modify this roll?
 * @param halflingLucky - Allow Halfling Luck to modify this roll?
 * @param reliableTalent - Allow Reliable Talent to modify this roll?
 * @param chatMessage - Automatically create a Chat Message for the result of this roll
 * @param messageData - Additional data which is applied to the created Chat Message, if any
 *
 * @returns A Promise which resolves once the roll workflow has completed
 */
export declare function d20Roll<Data extends Actor.Data | Item.Data = Actor.Data | Item.Data>({
  parts,
  data,
  event,
  rollMode,
  template,
  title,
  speaker,
  flavor,
  fastForward,
  dialogOptions,
  advantage,
  disadvantage,
  critical,
  fumble,
  targetValue,
  elvenAccuracy,
  halflingLucky,
  reliableTalent,
  chatMessage,
  messageData
}: {
  parts?: string[];
  data?: Data;
  event?: Event | Record<string, unknown>;
  rollMode?: DND5e.RollMode | null;
  template?: string | null;
  title?: string | null;
  speaker?: ChatMessage.SpeakerData | null;
  flavor?: string | null;
  fastForward?: boolean | null;
  dialogOptions: Partial<Dialog.Options>;
  advantage?: boolean | null;
  disadvantage?: boolean | null;
  critical?: number;
  fumble?: number;
  targetValue?: number | null;
  elvenAccuracy?: boolean;
  halflingLucky?: boolean;
  reliableTalent?: boolean;
  chatMessage?: boolean;
  messageData?: ChatMessage.MessageData;
}): Promise<Roll<Data>>;

/* -------------------------------------------- */

/**
 * Present a Dialog form which creates a d20 roll once submitted
 * @returns The roll
 */
declare function _d20RollDialog({
  template,
  title,
  parts,
  allowCritical,
  rollMode,
  dialogOptions
}: {
  template: string;
  title: string;
  parts: string[];
  allowCritical: boolean;
  rollMode: DND5e.RollMode;
  dialogOptions: Partial<Dialog.Options>;
  roll: Roll;
}): Promise<void>;

/* -------------------------------------------- */

/**
 * A standardized helper function for managing core 5e "d20 rolls"
 *
 * Holding SHIFT, ALT, or CTRL when the attack is rolled will "fast-forward".
 * This chooses the default options of a normal attack with no bonus, Critical, or no bonus respectively
 *
 * @param parts - The dice roll component parts, excluding the initial d20
 * @param actor - The Actor making the damage roll
 * @param data - Actor or item data against which to parse the roll
 * @param event - The triggering event which initiated the roll
 * @param rollMode - A specific roll mode to apply as the default for the resulting roll
 * @param template - The HTML template used to render the roll dialog
 * @param title - The dice roll UI window title
 * @param speaker - The ChatMessage speaker to pass when creating the chat
 * @param flavor - Flavor text to use in the posted chat message
 * @param allowCritical - Allow the opportunity for a critical hit to be rolled
 * @param critical - Flag this roll as a critical hit for the purposes of fast-forward rolls
 * @param criticalBonusDice - A number of bonus damage dice that are added for critical hits
 * @param criticalMultiplier - A critical hit multiplier which is applied to critical hits
 * @param fastForward - Allow fast-forward advantage selection
 * @param onClose - Callback for actions to take when the dialog form is closed
 * @param dialogOptions - Modal dialog options
 * @param chatMessage - Automatically create a Chat Message for the result of this roll
 * @param messageData - Additional data which is applied to the created Chat Message, if any
 *
 * @returns A Promise which resolves once the roll workflow has completed
 */
export declare function damageRoll<Data extends Actor.Data | Item.Data = Actor.Data | Item.Data>({
  parts,
  actor,
  data,
  event,
  rollMode,
  template,
  title,
  speaker,
  flavor,
  allowCritical,
  critical,
  criticalBonusDie,
  criticalMuliplier,
  fastForward,
  dialogOptions,
  chatMessage,
  messageData
}: {
  parts: string[];
  actor: Actor;
  data: Data;
  event?: Event | Record<string, unknown>;
  rollMode?: DND5e.RollMode | null;
  template: string;
  title: string;
  speaker: ChatMessage.SpeakerData;
  flavor: string;
  allowCritical?: boolean;
  critical?: boolean;
  criticalBonusDie?: number;
  criticalMuliplier?: number;
  fastForward?: boolean | null;
  dialogOptions: Partial<Dialog.Options>;
  chatMessage?: boolean;
  messageData?: ChatMessage.MessageData;
}): Promise<Roll<Data>>;

/* -------------------------------------------- */

/**
 * Present a Dialog form which creates a damage roll once submitted
 * @returns the damage roll
 */
export declare function _damageRollDialog<Data extends Actor.Data | Item.Data = Actor.Data | Item.Data>({
  template,
  title,
  parts,
  data,
  allowCritical,
  rollMode,
  roll
}: {
  template: string;
  title: string;
  parts: string[];
  data: Data;
  allowCritical: boolean;
  rollMode: DND5e.RollMode;
  roll: (parts: string[], crit: boolean, form: HTMLFormElement) => Roll<Data>;
}): Promise<Roll<Data> | null>;
