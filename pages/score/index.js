import React from "react";
import Image from "next/image";
import styles from "./score.module.css";
import Button from "@/Components/Button";
import Layout from "@/Components/Layout";
import Link from "next/link";

export default function Quiz() {
  return (
    <Layout>
    <section className={styles.quiz}>
      <Image
        className={styles.sscore}
        src="/score.png"
        alt="score"
        width="150"
        height="150"
      />
      <p className={styles.text}>
        Great Job!
      </p>
      <p className={styles.score}>score:</p>
      <Button link="quiz">retry</Button>
    </section>
    <div className={styles.learn}>
    <Link href="/learnmore">learnmore</Link>
    </div>
    </Layout>
  );
}