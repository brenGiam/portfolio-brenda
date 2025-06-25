'use client';
import "../estilos/sobremi.css";
import TecnologiasSection from "./tecnologiasSection";
import { useTranslation } from "react-i18next";

export default function SobreMiSection() {
    const { t, i18n } = useTranslation();

    return (
        <div className="container">
            <section className="sobreMi-container">
                <div className="sobre-mi">
                    <h3>{t('sobreMi')}</h3>
                    <p>{t('sobreMi p1')}</p>
                    <p>{t('sobreMi p2')}</p>
                    <p>{t('sobreMi p3')}</p>
                    <p>{t('sobreMi p4')}</p>
                    <p>{t('sobreMi p5')}</p>
                    <div className="botones-container">
                        <a
                            href={i18n.language === 'es' ? "/Brenda Giambelluca (ES).pdf" : "/Brenda Giambelluca (EN).pdf"}
                            download
                            className="boton-sobreMi"
                        >
                            {t('descargarCv')}
                        </a>
                        <a href="https://github.com/brenGiam"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="boton-sobreMi"
                        >
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/brenda-giambelluca-1258b52a3/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="boton-sobreMi"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </section>
            <section className="tecnologias-container" id="tecnologias">
                <TecnologiasSection />
            </section>
        </div>
    );
}