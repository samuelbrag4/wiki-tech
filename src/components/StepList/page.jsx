"use client";

import React from "react";
import styles from "./StepList.module.css";

/* Importando react-toastify para notificações */
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function StepList({ title, steps }) {

    /* Função para copiar o código e mostrar a notificação */
    const handleCopy = (code) => {
        navigator.clipboard.writeText(code) /* API do navegador que copia texto para a área de transferência (clipboard). */
        /*  Se a cópia for bem-sucedida, mostra a notificação de sucesso */
        .then(() => {
                toast.success("✅ Código copiado!", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
            /* Se houver um erro ao copiar, mostra a notificação de erro */
            .catch(() => {
                toast.error("❌ Erro ao copiar!");
            });
    };

    return (
        <div className={styles.container}>
            {/* Título */}
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.divisor}></div>

            {/* Lista */}
            <div className={styles.listContainer}>

                {steps.map((step, index) => (
                    <div key={index} className={styles.stepItem}>
                        <div className={styles.number}>{index + 1}</div>
                        <div className={styles.stepContent}>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            
                            <div className={styles.codeBlock}>
                                <pre className={styles.text}>{step.text}</pre>
                                <button className={styles.copyButton} onClick={() => handleCopy(step.text)}>
                                    <img className={styles.image} src="https://cdn-icons-png.flaticon.com/128/3906/3906834.png" alt="Copiar" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            {/* Componente do react-toastify para exibir notificações */}
            <ToastContainer />
        </div>
    );
}
