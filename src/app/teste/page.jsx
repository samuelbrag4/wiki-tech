import React from 'react';
import styles from './teste.module.css';

import SectionTitle from "../../components/SectionTitle/page"
import SectionText from "../../components/SectionText/page";

export default function Teste() {
    return (
        <div>
            <SectionTitle
                linkImage="https://cdn-icons-png.flaticon.com/128/3906/3906805.png"
                imageAlt="Engrenagem"
                title="Frameworks"
                description="É uma .blablabla didididi dado subida canção"
            />
            <SectionText
                title="Título da Seção"
                text="Texto explicativo sobre a seção. Aqui você pode adicionar mais informações relevantes."
            />
        </div>
    );
}
