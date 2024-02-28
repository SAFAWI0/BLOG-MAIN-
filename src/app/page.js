"use client";

import { Header } from "@/components/header/header";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { Footer } from "@/components/footer/footer";
import { Banner } from "@/components/Banner/banner";
import { Container } from "@/components/container/container";
import { Card } from "@/components/card/card";
import { Pagination } from "antd";


export default function Home() {
  const [list, setList] = useState([]);
  const [skip, setSkip] = useState(0);
  const [load, setLoad] = useState([true]);


  const getData = () => {
    setLoad(true);
    fetch(
      `https://api.slingacademy.com/v1/sample-data/blog-posts?limit=15&offset=${skip}`
    )
      .then((res) => res.json())
      .then((data) => {
        setList(data.blogs);
        setLoad(false);
      });
  };
  useEffect(() => {
    getData();
  }, [skip]);

  return (
    <main className={styles.main}>
      <Header />
      <Banner />
      <Container>
        {load && <span className={styles.loader}></span>}
        <div className={styles.grid}>
          {list.map((el, i) => (
            <Card key={i} blog={el} />
          ))}
        </div>
      </Container>
      <Pagination
        className={styles.pagination}
        defaultCurrent={1}
        total={100}
        showSizeChanger={false}
        onChange={(page) => setSkip((page - 1) * 10)}
      />

      <Footer />
    </main>
  );
}
