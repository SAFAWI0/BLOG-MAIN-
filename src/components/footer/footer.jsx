import React from "react";
import styles from "./footer.module.css";
import { Container } from "../container/container";
import Link from "next/link";
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <p>All Rights Reserved - Aon2023</p>
          <ul>
            <li>
              <Link href={"/"}>
                <FaFacebookSquare />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <FaSquareInstagram />
              </Link>
            </li>
            <li>
              <Link href={"/"}>
                <FaXTwitter />
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};
