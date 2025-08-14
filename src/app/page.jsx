import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/page.jsx";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.mainContent}>
        <div className={styles.leftBlock}>
          <h1 className={styles.title}>Mini Wiki Tech</h1>
          <h2 className={styles.subtitle}>Subtítulo explicativo</h2>
          <p className={styles.paragraph}>Este é um parágrafo de exemplo para testar a estrutura da página. Sinta-se à vontade para editar este texto.</p>
          <div className={styles.buttonRow}>
            <button className={styles.btn}>Botão 1</button>
            <button className={styles.btn}>Botão 2</button>
          </div>
          <div className={styles.imagesRow}>
            <div className={styles.smallImages}>
              <Image src="/images/fernanda.jpg" alt="img1" width={48} height={48} className={styles.roundImg} />
              <Image src="/images/nathalia.jpg" alt="img2" width={48} height={48} className={styles.roundImg} />
              <Image src="/images/raphaelle.jpg" alt="img3" width={48} height={48} className={styles.roundImg} />
              <Image src="/images/samuel.jpg" alt="img4" width={48} height={48} className={styles.roundImg} />
              <Image src="/images/sara.jpg" alt="img5" width={48} height={48} className={styles.roundImg} />
            </div>
            <button className={`${styles.btn} ${styles.btnSide}`}>Botão ao lado</button>
          </div>
        </div>
        <div className={styles.rightBlock}>
          <Image src="/icons/icons8-configuracao.gif" alt="imagem grande" width={220} height={220} className={styles.bigImg} />
          <div className={styles.bigButtons}>
            <button className={`${styles.btn} ${styles.btnBig}`}>Botão Grande 1</button>
            <button className={`${styles.btn} ${styles.btnBig}`}>Botão Grande 2</button>
          </div>
        </div>
      </div>
    </div>
  );
}
