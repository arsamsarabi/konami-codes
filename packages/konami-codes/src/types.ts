export type KCTrigger = {
  code: string[];
  cb: Function;
};

export type KCOptions = {
  delay?: number;
};

export type TimeoutRef = ReturnType<typeof setTimeout>;
