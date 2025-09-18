'use client';
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {

  // let cont = 0;
  const [cont, setCont] = useState(0);

  const subtrair = () => {
    setCont(cont - 1);
    console.log(cont);
  }

  const adicionar = () => {
    setCont(cont + 1);
    console.log(cont);
  }

  return (
    <div>
      <h1 className={styles.h1}>Hello World!</h1>
      <p className={styles.paragrafo}>Meu parágrafo</p>
      <button onClick={() => { adicionar() }}>Adicionar</button>
      <button>Subtrair</button>
      <p>Contagem {cont}</p>
    </div>
  );
}
