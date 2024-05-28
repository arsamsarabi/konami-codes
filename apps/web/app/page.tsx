import { Konami } from "@arsams/konami-codes";
import styles from "./page.module.css";

export default function Page(): JSX.Element {
  const konami = new Konami();
  return <main className={styles.main}>Hello</main>;
}
