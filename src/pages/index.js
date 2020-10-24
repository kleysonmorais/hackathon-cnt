import Head from "next/head";
import React from "react";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={{ ...styles.main }}>
        <h1 className={styles.title}>Login</h1>
        <br />
        <Link href="/listar-descontos">
          <Button variant="contained" color="primary" disableElevation>
            Entrar
          </Button>
        </Link>
      </main>
    </div>
  );
}
