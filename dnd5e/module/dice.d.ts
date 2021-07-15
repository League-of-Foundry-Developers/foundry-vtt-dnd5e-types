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
declare function simplifyRollFormula(
  formula: string,
  data: Object,
  {
    constantFirst
  }?: {
    constantFirst: boolean;
  }
): string;
/**
 * Only some terms are supported by simplifyRollFormula, this method returns true when the term is not supported.
 * @param term - A single Dice term to check support on
 * @returns True when unsupported, false if supported
 */
declare function _isUnsupportedTerm(term: any): boolean;
/**
* A standardized helper function for managing core 5e d20 rolls.
* Holding SHIFT, ALT, or CTRL when the attack is rolled will "fast-forward".
* This chooses the default options of a normal attack with no bonus, Advantage, or Disadvantage respectively
*
* @param {object} [options]
* @param {string[]} options.parts          The dice roll component parts, excluding the initial d20
* @param {object} options.data             Actor or item data against which to parse the roll
*
* @param {boolean} [options.advantage]       Apply advantage to the roll (unless otherwise specified)
* @param {boolean} [options.disadvantage]    Apply disadvantage to the roll (unless otherwise specified)
* @param {number} [options.critical]         The value of d20 result which represents a critical success
* @param {number} [options.fumble]           The value of d20 result which represents a critical failure
* @param {number} [options.targetValue]      Assign a target value against which the result of this roll should be compared
* @param {boolean} [options.elvenAccuracy]   Allow Elven Accuracy to modify this roll?
* @param {boolean} [options.halflingLucky]   Allow Halfling Luck to modify this roll?
* @param {boolean} [options.reliableTalent]  Allow Reliable Talent to modify this roll?

* @param {boolean} [options.chooseModifier=false] Choose the ability modifier that should be used when the roll is made
* @param {boolean} [options.fastForward=false] Allow fast-forward advantage selection
* @param {Event} [options.event]             The triggering event which initiated the roll
* @param {string} [options.rollMode]         A specific roll mode to apply as the default for the resulting roll
* @param {string} [options.template]         The HTML template used to render the roll dialog
* @param {string} [options.title]            The dialog window title
* @param {Object} [options.dialogOptions]    Modal dialog options
*
* @param {boolean} [options.chatMessage=true] Automatically create a Chat Message for the result of this roll
* @param {object} [options.messageData={}] Additional data which is applied to the created Chat Message, if any
* @param {string} [options.rollMode]       A specific roll mode to apply as the default for the resulting roll
* @param {object} [options.speaker]        The ChatMessage speaker to pass when creating the chat
* @param {string} [options.flavor]         Flavor text to use in the posted chat message
*
* @return {Promise<D20Roll|null>}  The evaluated D20Roll, or null if the workflow was cancelled
*/
declare function d20Roll({
  parts,
  data,
  advantage,
  disadvantage,
  fumble,
  critical,
  targetValue,
  elvenAccuracy,
  halflingLucky,
  reliableTalent,
  chooseModifier,
  fastForward,
  event,
  template,
  title,
  dialogOptions,
  chatMessage,
  messageData,
  rollMode,
  speaker,
  flavor
}?:
  | {
      parts: string[];
      data: object;
      advantage?: boolean | undefined;
      disadvantage?: boolean | undefined;
      critical?: number | undefined;
      fumble?: number | undefined;
      targetValue?: number | undefined;
      elvenAccuracy?: boolean | undefined;
      halflingLucky?: boolean | undefined;
      reliableTalent?: boolean | undefined;
      chooseModifier?: boolean | undefined;
      fastForward?: boolean | undefined;
      event?: Event | undefined;
      rollMode?: string | undefined;
      template?: string | undefined;
      title?: string | undefined;
      dialogOptions?: Object | undefined;
      chatMessage?: boolean | undefined;
      messageData?: object | undefined;
      speaker?: object | undefined;
      flavor?: string | undefined;
    }
  | undefined): Promise<any | null>;
/**
* A standardized helper function for managing core 5e damage rolls.
* Holding SHIFT, ALT, or CTRL when the attack is rolled will "fast-forward".
* This chooses the default options of a normal attack with no bonus, Critical, or no bonus respectively
*
* @param {object} [options]
* @param {string[]} options.parts          The dice roll component parts, excluding the initial d20
* @param {object} [options.data]           Actor or item data against which to parse the roll
*
* @param {boolean} [options.critical=false] Flag this roll as a critical hit for the purposes of fast-forward or default dialog action
* @param {number} [options.criticalBonusDice=0] A number of bonus damage dice that are added for critical hits
* @param {number} [options.criticalMultiplier=2] A critical hit multiplier which is applied to critical hits
* @param {boolean} [options.multiplyNumeric=false] Multiply numeric terms by the critical multiplier
* @param {boolean} [options.powerfulCritical=false] Apply the "powerful criticals" house rule to critical hits

* @param {boolean} [options.fastForward=false] Allow fast-forward advantage selection
* @param {Event} [options.event]            The triggering event which initiated the roll
* @param {boolean} [options.allowCritical=true] Allow the opportunity for a critical hit to be rolled
* @param {string} [options.template]       The HTML template used to render the roll dialog
* @param {string} [options.title]          The dice roll UI window title
* @param {object} [options.dialogOptions]  Configuration dialog options
*
* @param {boolean} [options.chatMessage=true] Automatically create a Chat Message for the result of this roll
* @param {object} [options.messageData={}] Additional data which is applied to the created Chat Message, if any
* @param {string} [options.rollMode]       A specific roll mode to apply as the default for the resulting roll
* @param {object} [options.speaker]        The ChatMessage speaker to pass when creating the chat
* @param {string} [options.flavor]         Flavor text to use in the posted chat message
*
* @return {Promise<DamageRoll|null>} The evaluated DamageRoll, or null if the workflow was canceled
*/
declare function damageRoll({
  parts,
  data,
  critical,
  criticalBonusDice,
  criticalMultiplier,
  multiplyNumeric,
  powerfulCritical,
  fastForward,
  event,
  allowCritical,
  template,
  title,
  dialogOptions,
  chatMessage,
  messageData,
  rollMode,
  speaker,
  flavor
}?:
  | {
      parts: string[];
      data?: object | undefined;
      critical?: boolean | undefined;
      criticalBonusDice?: number | undefined;
      criticalMultiplier?: number | undefined;
      multiplyNumeric?: boolean | undefined;
      powerfulCritical?: boolean | undefined;
      fastForward?: boolean | undefined;
      event?: Event | undefined;
      allowCritical?: boolean | undefined;
      template?: string | undefined;
      title?: string | undefined;
      dialogOptions?: object | undefined;
      chatMessage?: boolean | undefined;
      messageData?: object | undefined;
      rollMode?: string | undefined;
      speaker?: object | undefined;
      flavor?: string | undefined;
    }
  | undefined): Promise<any | null>;
