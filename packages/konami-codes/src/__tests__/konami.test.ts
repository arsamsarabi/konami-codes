import { Konami } from "../konami";

describe("Konami", () => {
  it("Should validate", () => {
    const cb1 = jest.fn();
    const code1 = ["38", "38", "40", "40", "37", "39", "37", "39", "66", "65"];

    const cb2 = jest.fn();
    const code2 = ["38", "38", "40", "40", "37", "39", "37", "39", "66", "65"];

    const konami = new Konami([
      { code: code1, cb: cb1 },
      { code: code2, cb: cb2 },
    ]);

    konami.validate([
      "38",
      "38",
      "40",
      "40",
      "37",
      "39",
      "37",
      "39",
      "66",
      "65",
    ]);

    expect(cb1).toHaveBeenCalledTimes(1);
    expect(cb2).toHaveBeenCalledTimes(1);
  });

  it("Should validate", () => {
    const cb1 = jest.fn();
    const code1 = ["38", "38", "40", "40", "37", "39", "37", "39", "66", "65"];

    const cb2 = jest.fn();
    const code2 = ["x"];

    const konami = new Konami([
      { code: code1, cb: cb1 },
      { code: code2, cb: cb2 },
    ]);

    konami.validate([
      "38",
      "38",
      "40",
      "40",
      "37",
      "39",
      "37",
      "39",
      "66",
      "65",
    ]);

    expect(cb1).toHaveBeenCalledTimes(1);
    expect(cb2).toHaveBeenCalledTimes(0);
  });
});
