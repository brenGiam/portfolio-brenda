'use client';
import "../estilos/footer.css"
import { useTranslation } from "react-i18next";

export default function Footer() {
    const volverArriba = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    const { t } = useTranslation();
    return (
        <footer className="footer">
            <p className="volver-arriba" onClick={volverArriba}>{t('volver')}</p>
            <p>© 2025 Brenda Giambelluca ✨</p>
        </footer>
    );
}