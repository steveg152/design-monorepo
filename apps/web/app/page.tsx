import styles from "./page.module.css";
import { Button } from "@repo/ui";
import "@repo/ui/dist/tailwind.css";

export default function Page(): JSX.Element {
  return (
    <main className={styles.main} data-mode="dark">
      <Button variant="primary">Primary</Button>
    </main>
  );
}
