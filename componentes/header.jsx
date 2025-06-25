'use client';
import "../estilos/header.css";
import { useTranslation } from "react-i18next";

export default function Header() {
    const { t } = useTranslation();

    return (
        <section className="header-container">
            <div className="header-intro">
                <img
                    src="/img/brenda.jpg"
                    alt="Foto de Brenda"
                    className="foto-brenda" />
                <div className="texto-bienvenida">
                    <h2 className="typewriter">{t('saludo')}</h2>
                    <p>{t('descripcion1')} </p>
                    <p>{t('descripcion2')}</p>
                </div>
                <div className="contenedor-codigo">
                    <img
                        src="/img/codigo.png"
                        alt="Código decorativo"
                        className="foto-codigo" />
                </div>
            </div>
        </section>
    );
}