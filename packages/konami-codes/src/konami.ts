export type KonamiCodes = {
  code: string[];
  cb: Function;
};

export type KonamiCodesArgs = Array<KonamiCodes>;

export class Konami {
  private codes: KonamiCodesArgs = [];

  constructor(input: KonamiCodesArgs) {
    this.codes = input;
  }

  public validate(code: string[]) {
    this.codes.forEach(({ code, cb }) => {
      if (code.every((item, index) => item === code[index + 1])) {
        cb();
      }
    });
  }
}
