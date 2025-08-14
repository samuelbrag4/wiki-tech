import React from 'react';
import Image from 'next/image';
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image className={styles.logoImg} src="/icons/icons8-configuracao.gif" alt="Logo da Wiki iRice" width={50} height={50} />
    </header>
  );
}