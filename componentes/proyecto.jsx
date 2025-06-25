'use client'
import "../estilos/proyectos.css";
import { useTranslation } from "react-i18next";

export default function Proyecto({ titulo, descripcion, imagen, video, tecnologias, github, enConstruccion }) {
    const { t } = useTranslation();
    return (
        <div className="proyecto-card">
            <div className="proyecto-img-container">
                <img src={imagen} alt={titulo} className="proyecto-img" />

                {enConstruccion && (
                    <div className="banner-construccion">{t('bannerConstruccion')}</div>
                )}
            </div>

            <div className="proyecto-info">
                <h4>{titulo}</h4>
                <p>{descripcion}</p>
                <p><strong>{t('tecnologias')}:</strong> {tecnologias}</p>

                <div className="proyecto-botones">
                    <a
                        href={enConstruccion ? "#" : video}
                        target="_blank"
                        className={`proyecto-boton ${enConstruccion ? "boton-desactivado" : ""}`}
                        onClick={e => enConstruccion && e.preventDefault()}
                    >
                        {t('botonVideo')}
                    </a>

                    <a
                        href={enConstruccion ? "#" : github}
                        target="_blank"
                        className={`proyecto-boton ${enConstruccion ? "boton-desactivado" : ""}`}
                        onClick={e => enConstruccion && e.preventDefault()}
                    >
                        {t('botonCodigo')}
                    </a>
                </div>
            </div>
        </div>
    );
}

