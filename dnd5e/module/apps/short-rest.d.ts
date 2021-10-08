/**
 * A helper Dialog subclass for rolling Hit Dice on short rest
 * @extends {Dialog}
 */
declare class ShortRestDialog extends Dialog<Dialog.Options> {
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
   * A helper constructor function which displays the Short Rest dialog and returns a Promise once it's workflow has
   * been resolved.
   * @param {Actor5e} actor
   * @returns {Promise}
   */
  static shortRestDialog({ actor }?: any): Promise<any>;
  /**
   * A helper constructor function which displays the Long Rest confirmation dialog and returns a Promise once it's
   * workflow has been resolved.
   * @deprecated
   * @param {Actor5e} actor
   * @returns {Promise}
   */
  static longRestDialog({ actor }?: any, ...args: any[]): Promise<any>;
  constructor(actor: any, dialogData?: {}, options?: {});
  /**
   * Store a reference to the Actor entity which is resting
   * @type {Actor}
   */
  actor: Actor;
  /**
   * Track the most recently used HD denomination for re-rendering the form
   * @type {string}
   */
  _denom: string;
  /**
   * Handle rolling a Hit Die as part of a Short Rest action
   * @param {Event} event     The triggering click event
   * @private
   */
  private _onRollHitDie;
}
