import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem-vindo ao <a href="https://nextjs.org">RTS RPG Game!</a>
        </h1>

        <p className={styles.description}>
          Após baixar, descompacte em alguma pasta e rode o arquivo
          rtsrpglauncher.exe
          <br />
          <br />
          Esse é o launcher do jogo. Ele sempre vai baixar a versão mais
          atualizada quando você abrir
          <br />
          <br />
          Basta aguardar um instante e o botão "Jogar" estará liberado
          <br />
          <br />
          <br />
          <br />
          No momento não é possível fazer nada além de se conectar com o
          servidor, mas volte com frequência para ver as novidades!!
          <br />
          <br />
          ;)
          <br />
          <br />
          <br />
          <a
            href="https://firebasestorage.googleapis.com/v0/b/rtsrpg-game.appspot.com/o/rtsrpg_launcher.zip?alt=media&token=26fec10b-8e8f-48b1-9da1-5e2f06dffbfe"
            className={styles.card}
          >
            <b style={{ color: "gold", fontSize: "2em" }}>Clicando aqui</b>
          </a>
        </p>
      </main>

      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noopener noreferrer">
          Powered by PlaylinesDev
        </a>
      </footer>
    </div>
  );
};

export default Home;
