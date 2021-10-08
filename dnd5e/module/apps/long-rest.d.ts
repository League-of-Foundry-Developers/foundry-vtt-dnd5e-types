/**
 * A helper Dialog subclass for completing a long rest
 * @extends {Dialog}
 */
declare class LongRestDialog extends Dialog<Dialog.Options> {
  /** @override */
  get defaultOptions(): import('@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/utils/helpers.mjs').InsertKeys<
    {
      width: number;
      classes: string[];
      template: string;
      jQuery: boolean;
      baseApplication: string | null;
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
      tabs: Omit<TabsConfiguration, 'callback'>[];
      dragDrop: Omit<DragDrop.Options, 'permissions' | 'callbacks'>[];
      filters: Omit<SearchFilter.Options, 'callback'>[];
    },
    import('@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/utils/helpers.mjs').OmitByValue<
      {
        template: string;
        classes: string[];
      },
      never
    >
  >;
  /**
   * A helper constructor function which displays the Long Rest confirmation dialog and returns a Promise once it's
   * workflow has been resolved.
   * @param {Actor5e} actor
   * @returns {Promise}
   */
  static longRestDialog({ actor }?: any): Promise<any>;
  constructor(actor: any, dialogData?: {}, options?: {});
  actor: any;
}
