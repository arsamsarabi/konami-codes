export type KCTrigger = {
  code: string[];
  cb: Function;
};

export type KCOptions = {
  delay?: number;
  debug?: boolean;
};

export type TimeoutRef = ReturnType<typeof setTimeout>;
