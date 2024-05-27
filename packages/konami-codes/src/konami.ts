import { DEFAULT_DELAY_DURATION } from "./constants";
import type { KCOptions, KCTrigger, TimeoutRef } from "./types";

export class Konami {
  private codes: Array<KCTrigger> = [];
  private attempt: string[] = [];
  private timeoutRef: TimeoutRef | undefined = undefined;
  private delayDuration: number = DEFAULT_DELAY_DURATION;

  constructor(input: Array<KCTrigger>, args?: KCOptions) {
    this.codes = input;
    this.delayDuration = args?.delay || DEFAULT_DELAY_DURATION;
  }

  public input(char: string) {
    this.attempt = [...this.attempt, char];
    this.validate();
    this.startDelay();
  }

  private startDelay() {
    this.timeoutRef = setTimeout(() => {
      this.resetAttempt();
    }, this.delayDuration);
  }

  private resetDelay() {
    clearTimeout(this.timeoutRef);
  }

  private resetAttempt() {
    this.attempt = [];
  }

  private validate() {
    this.codes.forEach(({ code, cb }) => {
      if (code.every((val, idx) => val === this.attempt[idx])) {
        cb();
        this.resetDelay();
      }
    });
  }
}
