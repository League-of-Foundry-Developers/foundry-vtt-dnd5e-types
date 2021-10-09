/* This File is not Auto-generatable */

declare interface Game {
  dnd5e: {
    applications: {
      AbilityUseDialog: typeof AbilityUseDialog;
      ActorSheetFlags: ActorSheetFlags;
      ActorSheet5eCharacter: ActorSheet5eCharacter;
      ActorSheet5eNPC: ActorSheet5eNPC;
      ActorSheet5eVehicle: ActorSheet5eVehicle;
      ItemSheet5e: ItemSheet5e;
      ShortRestDialog: ShortRestDialog;
      TraitSelector: TraitSelector;
      ActorMovementConfig: ActorMovementConfig;
      ActorSensesConfig: ActorSensesConfig;
      ActorAbilityConfig: ActorAbilityConfig;
      ActorSkillConfig: ActorSkillConfig;
    };
    canvas: {
      AbilityTemplate: AbilityTemplate;
    };
    config: DND5e;
    dice: {
      simplifyRollFormula: typeof simplifyRollFormula;
      d20Roll: typeof d20Roll;
      D20Roll: D20Roll;
      damageRoll: typeof damageRoll;
      DamageRoll: DamageRoll;
    };
    entities: {
      Actor5e: Actor5e;
      Item5e: Item5e;
      TokenDocument5e: TokenDocument5e;
      Token5e: Token5e;
    };
    macros: {
      create5eMacro: typeof create5eMacro;
      rollItemMacro: typeof rollItemMacro;
    };
    migrations: {
      purgeFlags: typeof purgeFlags;
      removeDeprecatedObjects: typeof removeDeprecatedObjects;
      migrateWorld: typeof migrateWorld;
      migrateCompendium: typeof migrateCompendium;
      migrateActorData: typeof migrateActorData;
      migrateArmorClass: typeof migrateArmorClass;
      migrateItemData: typeof migrateItemData;
      migrateSceneData: typeof migrateSceneData;
      getMigrationData: typeof getMigrationData;
    };
    rollItemMacro: typeof rollItemMacro;
  };

  CONFIG: {
    DND5E: DND5e;
    Actor: {
      documentClass: Actor5e;
      sheetClasses: {
        character: {
          'dnd5e.ActorSheet5eCharacter': {
            id: 'dnd5e.ActorSheet5eCharacter';
            default: boolean;
            cls: ActorSheet5eCharacter;
            label: string;
          };
        };
        npc: {
          'dnd5e.ActorSheet5eNPC': {
            id: 'dnd5e.ActorSheet5eNPC';
            default: boolean;
            cls: ActorSheet5eNPC;
            label: string;
          };
        };
        vehicle: {
          'dnd5e.ActorSheet5eVehicle': {
            id: 'dnd5e.ActorSheet5eVehicle';
            default: boolean;
            cls: ActorSheet5eVehicle;
            label: string;
          };
        };
      };
    };

    Item: {
      documentClass: Item5e;
    };

    Token: {
      documentClass: TokenDocument5e;
      objectClass: Token5e;
    };

    time: {
      roundTime: number;
    };

    MeasuredTemplate: {
      defaults: {
        angle: number;
      };
    };

    Combat: {
      initiative: {
        formula: string;
      };
    };
  };

  Combat: {
    _getInitiativeFormula: typeof _getInitiativeFormula;
  };

  SquareGrid: {
    measureDistances: typeof measureDistances;
  };
}
