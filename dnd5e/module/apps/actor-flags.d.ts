/**
 * An application class which provides advanced configuration for special character flags which modify an Actor
 * @implements {DocumentSheet}
 */
declare class ActorSheetFlags
  extends DocumentSheet<
    DocumentSheet.Options,
    DocumentSheet.Data<
      import('@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/abstract/document.mjs').default<
        any,
        any
      >,
      DocumentSheet.Options
    >,
    import('@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/abstract/document.mjs').default<any, any>
  >
  implements DocumentSheet {
  static get defaultOptions(): import('@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/utils/helpers.mjs').InsertKeys<
    {
      classes: string[];
      template: string;
      viewPermission: 0 | 2 | 1 | 3;
      baseApplication: string | null;
      width: number;
      height: number | 'auto' | null;
      top: number | null;
      left: number | null;
      scale?: number | null | undefined;
      popOut: boolean;
      minimizable: boolean;
      resizable: boolean;
      id: string;
      title: string;
      scrollY: string[];
      tabs: Omit<Tabs.Options, 'callback'>[];
      dragDrop: Omit<DragDrop.Options, 'permissions' | 'callbacks'>[];
      filters: Omit<SearchFilter.Options, 'callback'>[];
      closeOnSubmit: boolean;
      submitOnChange: boolean;
      submitOnClose: boolean;
      editable: boolean;
    },
    import('@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/utils/helpers.mjs').OmitByValue<
      {
        id: string;
        classes: string[];
        template: string;
        width: number;
        closeOnSubmit: boolean;
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
  /**
   * Prepare an object of sorted classes.
   * @return {object}
   * @private
   */
  private _getClasses;
  /**
   * Prepare an object of flags data which groups flags by section
   * Add some additional data for rendering
   * @return {object}
   * @private
   */
  private _getFlags;
  /**
   * Get the bonuses fields and their localization strings
   * @return {Array<object>}
   * @private
   */
  private _getBonuses;
}
