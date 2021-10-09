/**
 * A type of Roll specific to a damage (or healing) roll in the 5e system.
 * @param {string} formula                       The string formula to parse
 * @param {object} data                          The data object against which to parse attributes within the formula
 * @param {object} [options={}]                  Extra optional arguments which describe or modify the DamageRoll
 * @param {number} [options.criticalBonusDice=0]      A number of bonus damage dice that are added for critical hits
 * @param {number} [options.criticalMultiplier=2]     A critical hit multiplier which is applied to critical hits
 * @param {boolean} [options.multiplyNumeric=false]   Multiply numeric terms by the critical multiplier
 * @param {boolean} [options.powerfulCritical=false]  Apply the "powerful criticals" house rule to critical hits
 * @param {string} [options.criticalBonusDamage]      An extra damage term that is applied only on a critical hit
 * @extends {Roll}
 */
declare class DamageRoll extends Roll<object> {
  /**
   * The HTML template path used to configure evaluation of this Roll
   * @type {string}
   */
  static EVALUATION_TEMPLATE: string;
  /** @inheritdoc */
  static fromData(data: any): any;
  constructor(formula: any, data: any, options: any);
  /**
   * A convenience reference for whether this DamageRoll is a critical hit
   * @type {boolean}
   */
  get isCritical(): boolean;
  /**
   * Apply optional modifiers which customize the behavior of the d20term
   * @private
   */
  private configureDamage;
  /**
   * Create a Dialog prompt used to configure evaluation of an existing D20Roll instance.
   * @param {object} data                     Dialog configuration data
   * @param {string} [data.title]               The title of the shown dialog window
   * @param {number} [data.defaultRollMode]     The roll mode that the roll mode select element should default to
   * @param {string} [data.defaultCritical]     Should critical be selected as default
   * @param {string} [data.template]            A custom path to an HTML template to use instead of the default
   * @param {boolean} [data.allowCritical=true] Allow critical hit to be chosen as a possible damage mode
   * @param {object} options                  Additional Dialog customization options
   * @returns {Promise<D20Roll|null>}         A resulting D20Roll object constructed with the dialog, or null if the
   *                                          dialog was closed
   */
  configureDialog(
    {
      title,
      defaultRollMode,
      defaultCritical,
      template,
      allowCritical
    }?: {
      title?: string | undefined;
      defaultRollMode?: number | undefined;
      defaultCritical?: string | undefined;
      template?: string | undefined;
      allowCritical?: boolean | undefined;
    },
    options?: object
  ): Promise<any | null>;
  /**
   * Handle submission of the Roll evaluation configuration Dialog
   * @param {jQuery} html         The submitted dialog content
   * @param {boolean} isCritical  Is the damage a critical hit?
   * @returns {DamageRoll}        This damage roll.
   * @private
   */
  private _onDialogSubmit;
}
