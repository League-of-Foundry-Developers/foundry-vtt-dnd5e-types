/**
 * A specialized form used to select from a checklist of attributes, traits, or properties
 * @extends {DocumentSheet}
 */
declare class TraitSelector extends DocumentSheet<
  DocumentSheet.Options,
  DocumentSheet.Data<
    import('@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/abstract/document.mjs').default<
      any,
      any
    >,
    DocumentSheet.Options
  >,
  import('@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/abstract/document.mjs').default<any, any>
> {
  /** @inheritdoc */
  static get defaultOptions(): never;
  constructor(
    object: import('@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/abstract/document.mjs').default<
      any,
      any
    >,
    options?: Partial<DocumentSheet.Options> | undefined
  );
  /**
   * Return a reference to the target attribute
   * @type {string}
   */
  get attribute(): string;
}
