import { DEFAULT_DEBUG, DEFAULT_DELAY_DURATION } from "./constants";
import type { KCOptions, KCTrigger, TimeoutRef } from "./types";

export class KonamiCodes {
  private codes: Array<KCTrigger> = [];
  private attempt: string[] = [];
  private timeoutRef: TimeoutRef | undefined = undefined;
  private delayDuration: number = DEFAULT_DELAY_DURATION;
  private debug: boolean = DEFAULT_DEBUG;

  constructor(input: Array<KCTrigger>, args?: KCOptions) {
    this.codes = input;
    this.delayDuration = args?.delay || DEFAULT_DELAY_DURATION;
    this.debug = args?.debug || DEFAULT_DEBUG;
  }

  public input(char: string) {
    this.log(char, "input");
    this.attempt = [...this.attempt, char];
    this.validate();
    this.startDelay();
  }

  private startDelay() {
    this.log("start", "Delay");
    this.timeoutRef = setTimeout(() => {
      this.log("timeout triggered", "Delay");
      this.resetAttempt();
    }, this.delayDuration);
  }

  private resetDelay() {
    this.log("reset", "Delay");
    clearTimeout(this.timeoutRef);
  }

  private resetAttempt() {
    this.log("reset", "Attempt");
    this.attempt = [];
  }

  private validate() {
    this.codes.forEach(({ code, cb }) => {
      if (code.length !== this.attempt.length) return;

      if (code.every((val, idx) => val === this.attempt[idx])) {
        this.log("validated", "Attempt");
        cb();
        this.resetDelay();
        this.resetAttempt();
      }
    });
  }

  private log(msg: string, ctx: string) {
    if (this.debug) {
      console.log(`### --- KonamiCodes ${ctx} --- ###`);
      console.log("------------------------------------");
      console.log(ctx, msg);
      console.log("------------------------------------");
    }
  }
}
