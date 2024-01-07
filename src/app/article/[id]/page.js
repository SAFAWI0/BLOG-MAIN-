"use client";
import styles from "./page.module.css";
import Image from "next/image";
import dayjs from "dayjs";
import { Container } from "@/components/container/container";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";
async function getData(id) {
  const res = await fetch(
    `https://api.slingacademy.com/v1/sample-data/blog-posts/${id}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
export default async function Article({ params }) {
  let data = await getData(params.id);
  
  return (
    <main className={styles.main}>
      <Header />
      <Container>
        <div className={styles.title}>
          <h2>{data.blog.title}</h2>
          <div className={styles.content}>
            <p>{data.blog.category}</p>
            <span>{dayjs(data.blog.updated_at).format("YYYY, MMMM DD")}</span>
          </div>
        </div>
        <div className={styles.cover}>
          <Image alt="logo" src={data.blog.photo_url} fill={true}/>
           </div>
        <div className={styles.center} dangerouslySetInnerHTML={{__html:data.blog.content_html}}></div>
      </Container>

      <Footer />
    </main>
  );
}
