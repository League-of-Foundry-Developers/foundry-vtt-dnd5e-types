declare type ClassFeatures = {
  [K in keyof DND5e.Subclasses]: { features: Record<`${number}`, string[]> } & {
    [SK in DND5e.Subclasses[K][number]]: {
      label: string;
      source: string;
      features: Record<`${number}`, string[]>;
    };
  };
};
