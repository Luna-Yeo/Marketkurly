import React, { Children } from "react";
import styles from "./mainpage.module.css";
export default function MainPage({ children }) {
  return (
    <>
      <main className={styles.contents}>{children}</main>
    </>
  );
}
