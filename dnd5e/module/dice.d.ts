/**
 * A standardized helper function for simplifying the constant parts of a multipart roll formula.
 *
 * @param {string} formula                          The original roll formula
 * @param {object} [options]                        Formatting options
 * @param {boolean} [options.preserveFlavor=false]   Preserve flavor text in the simplified formula
 *
 * @returns {string}  The resulting simplified formula
 */
declare function simplifyRollFormula(
  formula: string,
  {
    preserveFlavor
  }?:
    | {
        preserveFlavor?: boolean | undefined;
      }
    | undefined
): string;
/**
 * A standardized helper function for managing core 5e d20 rolls.
 * Holding SHIFT, ALT, or CTRL when the attack is rolled will "fast-forward".
 * This chooses the default options of a normal attack with no bonus, Advantage, or Disadvantage respectively
 *
 * @param {object} [config]
 * @param {string[]} [config.parts]          The dice roll component parts, excluding the initial d20
 * @param {object} [config.data]             Actor or item data against which to parse the roll
 *
 * @param {boolean} [config.advantage]       Apply advantage to the roll (unless otherwise specified)
 * @param {boolean} [config.disadvantage]    Apply disadvantage to the roll (unless otherwise specified)
 * @param {number} [config.critical]         The value of d20 result which represents a critical success
 * @param {number} [config.fumble]           The value of d20 result which represents a critical failure
 * @param {number} [config.targetValue]      Assign a target value against which the result of this roll
 *                                           should be compared
 * @param {boolean} [config.elvenAccuracy]   Allow Elven Accuracy to modify this roll?
 * @param {boolean} [config.halflingLucky]   Allow Halfling Luck to modify this roll?
 * @param {boolean} [config.reliableTalent]  Allow Reliable Talent to modify this roll?
 *
 * @param {boolean} [config.chooseModifier=false] Choose the ability modifier that should be used when the roll is made
 * @param {boolean} [config.fastForward=false] Allow fast-forward advantage selection
 * @param {Event} [config.event]             The triggering event which initiated the roll
 * @param {string} [config.template]         The HTML template used to render the roll dialog
 * @param {string} [config.title]            The dialog window title
 * @param {object} [config.dialogOptions]    Modal dialog options
 *
 * @param {boolean} [config.chatMessage=true] Automatically create a Chat Message for the result of this roll
 * @param {object} [config.messageData={}] Additional data which is applied to the created Chat Message, if any
 * @param {string} [config.rollMode]       A specific roll mode to apply as the default for the resulting roll
 * @param {object} [config.speaker]        The ChatMessage speaker to pass when creating the chat
 * @param {string} [config.flavor]         Flavor text to use in the posted chat message
 *
 * @returns {Promise<D20Roll|null>}  The evaluated D20Roll, or null if the workflow was cancelled
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
      parts?: string[] | undefined;
      data?: object;
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
      template?: string | undefined;
      title?: string | undefined;
      dialogOptions?: object;
      chatMessage?: boolean | undefined;
      messageData?: object;
      rollMode?: string | undefined;
      speaker?: object;
      flavor?: string | undefined;
    }
  | undefined): Promise<any | null>;
/**
 * A standardized helper function for managing core 5e damage rolls.
 * Holding SHIFT, ALT, or CTRL when the attack is rolled will "fast-forward".
 * This chooses the default options of a normal attack with no bonus, Critical, or no bonus respectively
 *
 * @param {object} [config]
 * @param {string[]} [config.parts]        The dice roll component parts, excluding the initial d20
 * @param {object} [config.data]           Actor or item data against which to parse the roll
 *
 * @param {boolean} [config.critical=false] Flag this roll as a critical hit for the purposes of
 *                                          fast-forward or default dialog action
 * @param {number} [config.criticalBonusDice=0] A number of bonus damage dice that are added for critical hits
 * @param {number} [config.criticalMultiplier=2] A critical hit multiplier which is applied to critical hits
 * @param {boolean} [config.multiplyNumeric=false] Multiply numeric terms by the critical multiplier
 * @param {boolean} [config.powerfulCritical=false] Apply the "powerful criticals" house rule to critical hits
 * @param {string} [config.criticalBonusDamage] An extra damage term that is applied only on a critical hit
 *
 * @param {boolean} [config.fastForward=false] Allow fast-forward advantage selection
 * @param {Event}[config.event]            The triggering event which initiated the roll
 * @param {boolean} [config.allowCritical=true] Allow the opportunity for a critical hit to be rolled
 * @param {string} [config.template]       The HTML template used to render the roll dialog
 * @param {string} [config.title]          The dice roll UI window title
 * @param {object} [config.dialogOptions]  Configuration dialog options
 *
 * @param {boolean} [config.chatMessage=true] Automatically create a Chat Message for the result of this roll
 * @param {object} [config.messageData={}] Additional data which is applied to the created Chat Message, if any
 * @param {string} [config.rollMode]       A specific roll mode to apply as the default for the resulting roll
 * @param {object} [config.speaker]        The ChatMessage speaker to pass when creating the chat
 * @param {string} [config.flavor]         Flavor text to use in the posted chat message
 *
 * @returns {Promise<DamageRoll|null>} The evaluated DamageRoll, or null if the workflow was canceled
 */
declare function damageRoll({
  parts,
  data,
  critical,
  criticalBonusDice,
  criticalMultiplier,
  multiplyNumeric,
  powerfulCritical,
  criticalBonusDamage,
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
      parts?: string[] | undefined;
      data?: object;
      critical?: boolean | undefined;
      criticalBonusDice?: number | undefined;
      criticalMultiplier?: number | undefined;
      multiplyNumeric?: boolean | undefined;
      powerfulCritical?: boolean | undefined;
      criticalBonusDamage?: string | undefined;
      fastForward?: boolean | undefined;
      event?: Event | undefined;
      allowCritical?: boolean | undefined;
      template?: string | undefined;
      title?: string | undefined;
      dialogOptions?: object;
      chatMessage?: boolean | undefined;
      messageData?: object;
      rollMode?: string | undefined;
      speaker?: object;
      flavor?: string | undefined;
    }
  | undefined): Promise<any | null>;
/**
 * Backport Roll#isDeterministic functionality from later foundry versions.
 */
declare function shimIsDeterministic(): void;
