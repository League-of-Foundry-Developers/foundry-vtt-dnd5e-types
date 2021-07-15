/**
 * A simple form to set Actor movement speeds.
 * @extends {DocumentSheet}
 */
declare class ActorSensesConfig extends DocumentSheet<
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
  constructor(
    object: import('@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/abstract/document.mjs').default<
      any,
      any
    >,
    options?: Partial<DocumentSheet.Options> | undefined
  );
}
