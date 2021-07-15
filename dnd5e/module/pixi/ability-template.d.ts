/**
 * A helper class for building MeasuredTemplates for 5e spells and abilities
 * @extends {MeasuredTemplate}
 */
declare class AbilityTemplate extends MeasuredTemplate {
  /**
   * A factory method to create an AbilityTemplate instance using provided data from an Item5e instance
   * @param {Item5e} item               The Item object for which to construct the template
   * @return {AbilityTemplate|null}     The template object, or null if the item does not produce a template
   */
  static fromItem(item: any): AbilityTemplate | null;
  /**
   * Creates a preview of the spell template
   */
  drawPreview(): void;
  /**
   * Activate listeners for the template preview
   * @param {CanvasLayer} initialLayer  The initially active CanvasLayer to re-activate after the workflow is complete
   */
  activatePreviewListeners(initialLayer: CanvasLayer): void;
}
