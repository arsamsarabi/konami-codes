import { KonamiInput } from "../components/KonamiInput";
import styles from "./page.module.css";

export default function Page(): JSX.Element {
  return (
    <main className={styles.main}>
      <KonamiInput />
    </main>
  );
}
