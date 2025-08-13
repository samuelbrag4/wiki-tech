import React from "react";
import styles from "./SectionText.module.css";

export default function SectionText({title, text}) {
    return (
        <div className={styles.container}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.divisor}></div>
                <div className={styles.containerText}>
                    <p className={styles.text}>{text}</p>
                </div>
            </div>
    )
}
