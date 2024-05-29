"use client";

import { useKonamiCodes } from "@arsams/konami-codes-react";
import { useState } from "react";

export const KonamiInput = () => {
  const [found, setFound] = useState(false);

  useKonamiCodes({
    codes: [
      {
        code: ["ArrowUp", "ArrowUp", "ArrowDown"],
        cb: () => {
          setFound(true);
        },
      },
    ],
  });

  return (
    <div>
      <h1>Guess the secret code!</h1>
      {found && <p>You found the secret code!</p>}
    </div>
  );
};
