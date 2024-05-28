"use client";

import { KonamiCodes } from "@arsams/konami-codes";
import styles from "./page.module.css";
import { useEffect } from "react";

export default function Page(): JSX.Element {
  const code = ["ArrowUp", "ArrowUp", "ArrowUp"];

  const callback = () => console.log("hello konami codes!");

  const konami = new KonamiCodes(
    [
      {
        code: code,
        cb: callback,
      },
    ],
    {
      delay: 10000,
      debug: false,
    }
  );

  const handleKeyDown = ({ key }: KeyboardEvent) => {
    console.log(key);
    konami.input(key);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return <main className={styles.main}>Hello</main>;
}
