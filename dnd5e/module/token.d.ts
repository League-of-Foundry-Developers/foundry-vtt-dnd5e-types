/**
 * Extend the base TokenDocument class to implement system-specific HP bar logic.
 * @extends {TokenDocument}
 */
declare class TokenDocument5e extends TokenDocument {
  /** @inheritdoc */
  static getTrackedAttributes(data: any, _path?: any[]): TrackedAttributes;
  /**
   * Get an Array of attribute choices which are suitable for being consumed by an item usage.
   * @param {object} data  The actor data.
   * @returns {{bar: string[], value: string[]}}
   */
  static getConsumedAttributes(
    data: object
  ): {
    bar: string[];
    value: string[];
  };
  /**
   * Traverse the configured allowed attributes to see if the provided one matches.
   * @param {object} allowed  The allowed attributes structure.
   * @param {string[]} attrs  The attributes list to test.
   * @returns {boolean}       Whether the given attribute is allowed.
   * @private
   */
  private static _isAllowedAttribute;
}
/**
 * Extend the base Token class to implement additional system-specific logic.
 * @extends {Token}
 */
declare class Token5e extends Token {
  /**
   * Specialized drawing function for HP bars.
   * @param {number} number      The Bar number
   * @param {PIXI.Graphics} bar  The Bar container
   * @param {object} data        Resource data for this bar
   * @private
   */
  private _drawHPBar;
}

interface TrackedAttributes {
  bar: string[][];
  value: string[][];
}
