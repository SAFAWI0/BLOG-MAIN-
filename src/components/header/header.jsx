import React from "react";
import styles from "./header.module.css";
import { Container } from "../container/container";
import Link from "next/link";
import { useAppStore } from "../store";
import { SheetSave } from "../SheetSave/sheetSave";
import { CiSaveDown2 } from "react-icons/ci";

export const Header = () => {
  const { setOpen, cart } = useAppStore();
  return (
    <div className={styles.header}>
      <Container>
        <div className={styles.content}>
          <h1>Aon 2023</h1>
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/help"}>Help</Link>
            </li>
            <SheetSave />
            <li className={styles.cartBtn}>
              <button>
                {cart?.length !== 0 && (
                  <div className={styles.num}>{cart?.length}</div>
                )}
                <CiSaveDown2 onClick={() => setOpen(true)} />
              </button>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};
