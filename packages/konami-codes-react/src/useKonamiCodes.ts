import { useEffect } from "react";
import { KonamiCodes } from "@arsams/konami-codes";
import { isKeyboardEvent } from "./utils/isKeyboardEvent";
import { UseKonamiCodesArgs } from "./types";

export const useKonamiCodes = ({ codes, options }: UseKonamiCodesArgs) => {
  const { selector, ...restOptions } = options || {};
  const konami = new KonamiCodes(codes, restOptions);

  const handleKeyDown = (event: Event) => {
    if (isKeyboardEvent(event)) {
      konami.input(event.key);
    }
  };

  useEffect(() => {
    const userEl = selector && document.querySelector(selector);
    const element = userEl || document;

    element.addEventListener("keydown", handleKeyDown);

    return () => {
      element.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
};
