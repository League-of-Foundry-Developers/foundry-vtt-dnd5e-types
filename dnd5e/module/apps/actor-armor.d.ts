/**
 * Interface for managing a character's armor calculation.
 * @extends {DocumentSheet}
 */
declare class ActorArmorConfig extends DocumentSheet<
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
  static get defaultOptions(): import('@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/utils/helpers.mjs').InsertKeys<
    {
      classes: any[] | undefined;
      template: string | undefined;
      viewPermission: 0 | 2 | 1 | 3 | undefined;
      baseApplication: string | null | undefined;
      width: number | null | undefined;
      height: number | 'auto' | null | undefined;
      top: number | null | undefined;
      left: number | null | undefined;
      scale?: number | null | undefined;
      popOut: boolean | undefined;
      minimizable: boolean | undefined;
      resizable: boolean | undefined;
      id: string | undefined;
      title: string | undefined;
      scrollY: any[] | undefined;
      tabs: any[] | undefined;
      dragDrop: any[] | undefined;
      filters: any[] | undefined;
      closeOnSubmit: boolean | undefined;
      submitOnChange: boolean | undefined;
      submitOnClose: boolean | undefined;
      editable: boolean | undefined;
    },
    import('@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/utils/helpers.mjs').OmitByValue<
      {
        classes?: any[] | undefined;
        template?: string | undefined;
        viewPermission?: 0 | 2 | 1 | 3 | undefined;
        baseApplication?: string | null | undefined;
        width?: number | null | undefined;
        height?: number | 'auto' | null | undefined;
        top?: number | null | undefined;
        left?: number | null | undefined;
        scale?: number | null | undefined;
        popOut?: boolean | undefined;
        minimizable?: boolean | undefined;
        resizable?: boolean | undefined;
        id?: string | undefined;
        title?: string | undefined;
        scrollY?: any[] | undefined;
        tabs?: any[] | undefined;
        dragDrop?: any[] | undefined;
        filters?: any[] | undefined;
        closeOnSubmit?: boolean | undefined;
        submitOnChange?: boolean | undefined;
        submitOnClose?: boolean | undefined;
        editable?: boolean | undefined;
      },
      never
    >
  >;
  constructor(
    object: import('@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/abstract/document.mjs').default<
      any,
      any
    >,
    options?: Partial<DocumentSheet.Options> | undefined
  );
}
