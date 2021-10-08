/**
 * A type of Roll specific to a d20-based check, save, or attack roll in the 5e system.
 * @param {string} formula                       The string formula to parse
 * @param {object} data                          The data object against which to parse attributes within the formula
 * @param {object} [options={}]                  Extra optional arguments which describe or modify the D20Roll
 * @param {number} [options.advantageMode]       What advantage modifier to apply to the roll (none, advantage,
 *                                               disadvantage)
 * @param {number} [options.critical]            The value of d20 result which represents a critical success
 * @param {number} [options.fumble]              The value of d20 result which represents a critical failure
 * @param {(number)} [options.targetValue]       Assign a target value against which the result of this roll should be
 *                                               compared
 * @param {boolean} [options.elvenAccuracy=false]      Allow Elven Accuracy to modify this roll?
 * @param {boolean} [options.halflingLucky=false]      Allow Halfling Luck to modify this roll?
 * @param {boolean} [options.reliableTalent=false]     Allow Reliable Talent to modify this roll?
 * @extends {Roll}
 */
declare class D20Roll extends Roll<any> {
  /**
   * Advantage mode of a 5e d20 roll
   * @enum {number}
   */
  static ADV_MODE: {
    NORMAL: number;
    ADVANTAGE: number;
    DISADVANTAGE: number;
  };
  /**
   * The HTML template path used to configure evaluation of this Roll
   * @type {string}
   */
  static EVALUATION_TEMPLATE: string;
  constructor(formula: any, data: any, options: any);
  /**
   * A convenience reference for whether this D20Roll has advantage
   * @type {boolean}
   */
  get hasAdvantage(): boolean;
  /**
   * A convenience reference for whether this D20Roll has disadvantage
   * @type {boolean}
   */
  get hasDisadvantage(): boolean;
  /**
   * Apply optional modifiers which customize the behavior of the d20term
   * @private
   */
  private configureModifiers;
  /**
   * Create a Dialog prompt used to configure evaluation of an existing D20Roll instance.
   * @param {object} data                     Dialog configuration data
   * @param {string} [data.title]             The title of the shown dialog window
   * @param {number} [data.defaultRollMode]   The roll mode that the roll mode select element should default to
   * @param {number} [data.defaultAction]     The button marked as default
   * @param {boolean} [data.chooseModifier]   Choose which ability modifier should be applied to the roll?
   * @param {string} [data.defaultAbility]    For tool rolls, the default ability modifier applied to the roll
   * @param {string} [data.template]          A custom path to an HTML template to use instead of the default
   * @param {object} options                  Additional Dialog customization options
   * @returns {Promise<D20Roll|null>}         A resulting D20Roll object constructed with the dialog, or null if the
   *                                          dialog was closed
   */
  configureDialog(
    {
      title,
      defaultRollMode,
      defaultAction,
      chooseModifier,
      defaultAbility,
      template
    }?: {
      title?: string | undefined;
      defaultRollMode?: number | undefined;
      defaultAction?: number | undefined;
      chooseModifier?: boolean | undefined;
      defaultAbility?: string | undefined;
      template?: string | undefined;
    },
    options?: object
  ): Promise<D20Roll | null>;
  /**
   * Handle submission of the Roll evaluation configuration Dialog
   * @param {jQuery} html            The submitted dialog content
   * @param {number} advantageMode   The chosen advantage mode
   * @returns {D20Roll}              This damage roll.
   * @private
   */
  private _onDialogSubmit;
}
