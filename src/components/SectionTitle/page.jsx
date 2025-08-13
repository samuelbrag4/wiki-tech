import React from "react";
import styles from "./SectionTitle.module.css";

export default function SectionTitle({linkImage, imageAlt, title, description}) {
    return (
        <div className={styles.infoCard}>
            <div className={styles.infoCardBar}></div>
            <img src={linkImage} alt={imageAlt} className={styles.infoCardIcon} />
            <div className={styles.infoCardContent}>
                <h2 className={styles.infoCardTitle}>{title}</h2>
                <p className={styles.infoCardText}>{description}</p>
            </div>
        </div>
    )
}
