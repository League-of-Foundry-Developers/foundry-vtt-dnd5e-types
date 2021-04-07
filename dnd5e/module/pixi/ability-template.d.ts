import Item5e from '../item/entity';

/**
 * A helper class for building MeasuredTemplates for 5e spells and abilities
 */
declare class AbilityTemplate {
  /**
   * A factory method to create an AbilityTemplate instance using provided data from an Item5e instance
   * @param item - The Item object for which to construct the template
   * @returns - The template object, or null if the item does not produce a template
   */
  static fromItem(item: Item5e): AbilityTemplate | null;

  /* -------------------------------------------- */

  /**
   * Creates a preview of the spell template
   */
  drawPreview(): void;

  /* -------------------------------------------- */

  /**
   * Activate listeners for the template preview
   * @param initialLayer - The initially active CanvasLayer to re-activate after the workflow is complete
   */
  activatePreviewListeners(initialLayer: CanvasLayer): void;
}

export default AbilityTemplate;
