import Item5e from '../../item/entity';

import Actor5e from '../entity';

declare class ActorSheet5eCharacter extends Actor5e {
  /**
   * Organize and classify Owned Items for Character sheets
   */
  private _prepareItems(data: this['data']): void;

  /* -------------------------------------------- */

  /**
   * A helper method to establish the displayed preparation state for an item
   * @param item - Item to toggle the state of
   */
  private _prepareItemToggleState(item: Item5e): void;

  /* -------------------------------------------- */
  /*  Event Listeners and Handlers
  /* -------------------------------------------- */

  /**
   * Activate event listeners using the prepared sheet HTML
   * @param html - The prepared HTML object ready to be rendered into the DOM
   */
  activateListeners(html: JQuery): void;

  /* -------------------------------------------- */

  /**
   * Handle mouse click events for character sheet actions
   * @param event - The originating click event
   */
  private _onSheetAction(event: MouseEvent): Roll;

  /* -------------------------------------------- */

  /**
   * Handle toggling the state of an Owned Item within the Actor
   * @param event - The triggering click event
   */
  private _onToggleItem(event: MouseEvent): ReturnType<Item5e['update']>;

  /* -------------------------------------------- */

  /**
   * Take a short rest, calling the relevant function on the Actor instance
   * @param event - The triggering click event
   */
  private _onShortRest(event: MouseEvent): Promise<ReturnType<Actor5e['longRest']>>;

  /* -------------------------------------------- */

  /**
   * Take a long rest, calling the relevant function on the Actor instance
   * @param event - The triggering click event
   */
  private _onLongRest(event: MouseEvent): Promise<ReturnType<Actor5e['shortRest']>>;
}

export default ActorSheet5eCharacter;
