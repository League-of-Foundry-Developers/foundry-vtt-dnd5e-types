import '@league-of-foundry-developers/foundry-vtt-types';

import DND5e from '../dnd5e';

/**
 * A standardized helper function for simplifying the constant parts of a multipart roll formula
 *
 * @param {string} formula                 The original Roll formula
 * @param {Object} data                    Actor or item data against which to parse the roll
 * @param {Object} options                 Formatting options
 * @param {boolean} options.constantFirst   Puts the constants before the dice terms in the resulting formula
 *
 * @return {string}                        The resulting simplified formula
 */
export declare function simplifyRollFormula(formula: string, data: Actor.Data | Item.Data): string;

/**
 * Only some terms are supported by simplifyRollFormula, this method returns true when the term is not supported.
 * @param {*} term - A single Dice term to check support on
 * @return {Boolean} True when unsupported, false if supported
 */
declare function _isUnsupportedTerm(term: any): boolean;

/* -------------------------------------------- */

/**
 * A standardized helper function for managing core 5e "d20 rolls"
 *
 * Holding SHIFT, ALT, or CTRL when the attack is rolled will "fast-forward".
 * This chooses the default options of a normal attack with no bonus, Advantage, or Disadvantage respectively
 *
 * @param {Array} parts             The dice roll component parts, excluding the initial d20
 * @param {Object} data             Actor or item data against which to parse the roll
 * @param {Event|object} event      The triggering event which initiated the roll
 * @param {string} rollMode         A specific roll mode to apply as the default for the resulting roll
 * @param {string|null} template    The HTML template used to render the roll dialog
 * @param {string|null} title       The dice roll UI window title
 * @param {Object} speaker          The ChatMessage speaker to pass when creating the chat
 * @param {string|null} flavor      Flavor text to use in the posted chat message
 * @param {Boolean} fastForward     Allow fast-forward advantage selection
 * @param {Function} onClose        Callback for actions to take when the dialog form is closed
 * @param {Object} dialogOptions    Modal dialog options
 * @param {boolean} advantage       Apply advantage to the roll (unless otherwise specified)
 * @param {boolean} disadvantage    Apply disadvantage to the roll (unless otherwise specified)
 * @param {number} critical         The value of d20 result which represents a critical success
 * @param {number} fumble           The value of d20 result which represents a critical failure
 * @param {number} targetValue      Assign a target value against which the result of this roll should be compared
 * @param {boolean} elvenAccuracy   Allow Elven Accuracy to modify this roll?
 * @param {boolean} halflingLucky   Allow Halfling Luck to modify this roll?
 * @param {boolean} reliableTalent  Allow Reliable Talent to modify this roll?
 * @param {boolean} chatMessage     Automatically create a Chat Message for the result of this roll
 * @param {object} messageData      Additional data which is applied to the created Chat Message, if any
 *
 * @return {Promise}                A Promise which resolves once the roll workflow has completed
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
 * @return {Promise<Roll>}
 * @private
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
 * @param {Array} parts           The dice roll component parts, excluding the initial d20
 * @param {Actor} actor           The Actor making the damage roll
 * @param {Object} data           Actor or item data against which to parse the roll
 * @param {Event|object}[event    The triggering event which initiated the roll
 * @param {string} rollMode       A specific roll mode to apply as the default for the resulting roll
 * @param {String} template       The HTML template used to render the roll dialog
 * @param {String} title          The dice roll UI window title
 * @param {Object} speaker        The ChatMessage speaker to pass when creating the chat
 * @param {string} flavor         Flavor text to use in the posted chat message
 * @param {boolean} allowCritical Allow the opportunity for a critical hit to be rolled
 * @param {Boolean} critical      Flag this roll as a critical hit for the purposes of fast-forward rolls
 * @param {number} criticalBonusDice    A number of bonus damage dice that are added for critical hits
 * @param {number} criticalMultiplier   A critical hit multiplier which is applied to critical hits
 * @param {Boolean} fastForward   Allow fast-forward advantage selection
 * @param {Function} onClose      Callback for actions to take when the dialog form is closed
 * @param {Object} dialogOptions  Modal dialog options
 * @param {boolean} chatMessage     Automatically create a Chat Message for the result of this roll
 * @param {object} messageData      Additional data which is applied to the created Chat Message, if any
 *
 * @return {Promise}              A Promise which resolves once the roll workflow has completed
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
 * @return {Promise<Roll>}
 * @private
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
