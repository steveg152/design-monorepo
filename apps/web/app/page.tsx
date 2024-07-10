"use client";

import styles from "./page.module.css";
import { Button } from "@repo/ui/components";
import { TextInput } from "@repo/ui/components";
import { Select } from "@repo/ui-react-aria";
import "../global.css";
import { Atom } from "lucide-react";

export default function Page(): JSX.Element {
  return (
    <main className={styles.main} data-mode="dark">
      <div style={{ fontSize: "100px" }}>
        <Atom color="white" size={"1em"} />
        <TextInput placeholder="Testing Input" />
        <Select placeholder="Testing Select">
          <Select.Item>Test</Select.Item>
          <Select.Item>Test</Select.Item>
          <Select.Item>Test</Select.Item>
          <Select.Item>Test</Select.Item>
        </Select>
      </div>
      <Button variant="primary">Primary</Button>
    </main>
  );
}
