import { isKeyboardEvent } from "../utils/isKeyboardEvent";

describe("isKeyboardEvent", () => {
  it("Should return true", () => {
    const event = {
      key: "a",
    };
    expect(isKeyboardEvent(event as unknown as Event)).toBe(true);
  });

  it("Should return false", () => {
    const event = {
      code: "a",
    };
    expect(isKeyboardEvent(event as unknown as Event)).toBe(false);
  });
});
