import { useTranslation } from 'react-i18next';
import "../estilos/botonIdioma.css";

export default function BotonIdioma() {
    const { i18n } = useTranslation();

    const cambiarIdioma = () => {
        const nuevoIdioma = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(nuevoIdioma);
    };
    return (
        <button className="boton" onClick={cambiarIdioma}>
            {i18n.language === 'es' ? 'EN' : 'ES'}
            <img
                className='icono-idioma'
                src={i18n.language === 'es' ? 'img/eng.png' : 'img/esp.png'}
                alt={i18n.language === 'es' ? 'EN' : 'ES'}
            />
        </button>
    );
}