/**
 * Extend the base TokenDocument class to implement system-specific HP bar logic.
 * @extends {TokenDocument}
 */
declare class TokenDocument5e extends TokenDocument {}
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
