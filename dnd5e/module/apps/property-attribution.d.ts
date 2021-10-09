/**
 * Description for a single part of a property attribution.
 *
 * @typedef {object} AttributionDescription
 * @property {string} label  Descriptive label that will be displayed. If the label is in the form
 *                           of an @ property, the system will try to turn it into a human-readable label.
 * @property {number} mode   Application mode for this step as defined in
 *                           [CONST.ACTIVE_EFFECT_MODES](https://foundryvtt.com/api/module-constants.html#.ACTIVE_EFFECT_MODES).
 * @property {number} value  Value of this step.
 */
/**
 * Interface for viewing what factors went into determining a specific property.
 *
 * @param {Document} object  The Document that owns the property being attributed.
 * @param {AttributionDescription[]} attributions  An array of all the attribution data.
 * @param {string} property  Dot separated path to the property.
 * @param {object} [options]  Options passed to the Application initializer.
 * @extends {Application}
 */
declare class PropertyAttribution extends Application<Application.Options> {
  /** @inheritdoc */
  static get defaultOptions(): import('@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/utils/helpers.mjs').InsertKeys<
    {
      baseApplication: string | null;
      width: number | null;
      height: number | 'auto' | null;
      top: number | null;
      left: number | null;
      scale?: number | null;
      popOut: boolean;
      minimizable: boolean;
      resizable: boolean;
      id: string;
      classes: any[];
      title: string;
      template: string | null;
      scrollY: any[];
      tabs: any[];
      dragDrop: any[];
      filters: any[];
    },
    import('@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/utils/helpers.mjs').OmitByValue<
      {
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
        classes?: any[] | undefined;
        title?: string | undefined;
        template?: string | null | undefined;
        scrollY?: any[] | undefined;
        tabs?: any[] | undefined;
        dragDrop?: any[] | undefined;
        filters?: any[] | undefined;
      },
      never
    >
  >;
  constructor(object: any, attributions: any, property: any, options?: {});
  object: any;
  attributions: any;
  property: any;
  /**
   * Render this view as a tooltip rather than a whole window.
   * @returns {jQuery}  HTML of the rendered tooltip.
   */
  renderTooltip(): JQueryStatic;
  /**
   * Produce a human readable and localized name for the provided property.
   * @param {string} property  Dot separated path to the property.
   * @returns {string}         Property name for display.
   */
  getPropertyLabel(property: string): string;
}
/**
 * Description for a single part of a property attribution.
 */
declare type AttributionDescription = {
  /**
   * Descriptive label that will be displayed. If the label is in the form
   * of an @ property, the system will try to turn it into a human-readable label.
   */
  label: string;
  /**
   * Application mode for this step as defined in
   * [CONST.ACTIVE_EFFECT_MODES](https://foundryvtt.com/api/module-constants.html#.ACTIVE_EFFECT_MODES).
   */
  mode: number;
  /**
   * Value of this step.
   */
  value: number;
};
