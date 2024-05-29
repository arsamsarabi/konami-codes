import type { KCTrigger, KCOptions } from "@arsams/konami-codes";

export type UseKonamiCodesArgs = {
  codes: Array<KCTrigger>;
  options?: KCOptions & {
    selector?: string;
  };
};
