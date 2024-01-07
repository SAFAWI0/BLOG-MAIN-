import Image from "next/image";
import { Container } from "../container/container";
import styles from "./banner.module.css";

export const Banner = () => {
  const img = "https://picsum.photos/800/400";
  return (
    <div className={styles.cover}>
      <Image src={img} fill={true} alt="X" />
      <div className={styles.inCover}>
        <Container>
          <div className={styles.title}>
            <h1>Simple Blog.</h1>
            <p>A blog created by Aon 2023</p>
          </div>
        </Container>
      </div>
    </div>
  );
};
