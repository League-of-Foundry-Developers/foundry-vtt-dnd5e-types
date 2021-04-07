/**
 * Extend the basic ActorSheet class to suppose system-specific logic and functionality.
 * This sheet is an Abstract layer which is not used.
 */
declare class ActorSheet5e extends ActorSheet<ActorSheet5eData> {}

type ActorSheet5eData = ActorSheet.Data<Actor5e>;
