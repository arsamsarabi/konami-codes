import { Konami } from "../konami";

describe("Konami", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Should validate", () => {
    const cb1 = jest.fn();
    const code1 = ["1", "2", "3", "4", "5"];

    const konami = new Konami([{ code: code1, cb: cb1 }], {});

    konami.input("1");
    konami.input("2");
    konami.input("3");
    konami.input("4");
    konami.input("5");

    expect(cb1).toHaveBeenCalledTimes(1);
  });

  it("Should not validate", async () => {
    const cb1 = jest.fn();
    const code1 = ["1", "2", "3", "4", "5"];

    const konami = new Konami([{ code: code1, cb: cb1 }], { delay: 50 });

    konami.input("1");
    konami.input("2");
    konami.input("3");
    await new Promise((r) => setTimeout(r, 100));
    konami.input("4");
    konami.input("5");

    expect(cb1).not.toHaveBeenCalled();
  });

  it("Should call all callbacks", () => {
    const cb1 = jest.fn();
    const cb2 = jest.fn();
    const code1 = ["1", "2", "3", "4", "5"];

    const konami = new Konami(
      [
        { code: code1, cb: cb1 },
        { code: code1, cb: cb2 },
      ],
      {}
    );

    konami.input("1");
    konami.input("2");
    konami.input("3");
    konami.input("4");
    konami.input("5");

    expect(cb1).toHaveBeenCalledTimes(1);
    expect(cb2).toHaveBeenCalledTimes(1);
  });
});
