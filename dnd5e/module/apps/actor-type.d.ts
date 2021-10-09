/**
 * A specialized form used to select from a checklist of attributes, traits, or properties
 * @extends {FormApplication}
 */
declare class ActorTypeConfig extends FormApplication<
  FormApplication.Options,
  FormApplication.Data<{}, FormApplication.Options>,
  {}
> {
  /** @inheritdoc */
  static get defaultOptions(): never;
  constructor(object: {}, options?: Partial<FormApplication.Options> | undefined);
  /**
   * Select the custom radio button when the custom text field is focused.
   * @param {FocusEvent} event      The original focusin event
   * @private
   */
  private _onCustomFieldFocused;
  _updateObject: any;
}
