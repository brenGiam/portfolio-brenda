'use client';
import "../estilos/tecnologias.css";
import { useTranslation } from "react-i18next";

export default function TecnologiasSection() {
    const { t } = useTranslation();
    return (
        <div className="tecnologias">
            <h3>{t('tecnologias')}</h3>
            <div className="iconos-container">
                <img src="/img/java-logo.png" alt="Java Logo" className="iconos" />
                <img src="/img/spring-logo.png" alt="Spring Logo" className="iconos" />
                <img src="/img/csharp-logo.png" alt="C# Logo" className="iconos" />
                <img src="/img/js-logo.png" alt="JS Logo" className="iconos" />
                <img src="/img/node-logo.png" alt="Node Logo" className="iconos" />
                <img src="/img/react-logo.png" alt="React Logo" className="iconos" />
                <img src="/img/html-logo.png" alt="Html Logo" className="iconos" />
                <img src="/img/css-logo.png" alt="Css Logo" className="iconos" />
                <img src="/img/mysql-logo.png" alt="MySql Logo" className="iconos" />
            </div>
        </div>
    );
}