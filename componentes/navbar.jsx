'use client';
import { useState } from "react";
import "@/estilos/navbar.css"
import BotonIdioma from "./botonIdioma"
import { useTranslation } from "react-i18next";

export default function Navbar() {
    const { t } = useTranslation();
    const [menuAbierto, setMenuAbierto] = useState(false);

    const toggleMenu = () => {
        setMenuAbierto(!menuAbierto);
    };

    const cerrarMenu = () => {
        setMenuAbierto(false);
    };
    return (
        <nav className="navbar">
            <h1 className="logo">Brenda Giambelluca</h1>
            {/* Botón hamburguesa - solo visible en móvil */}
            <button
                className="menu-hamburguesa"
                onClick={toggleMenu}
                aria-label="Abrir menú"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>
            {/* Menú de navegación */}
            <ul className={`nav-links ${menuAbierto ? 'nav-links-abierto' : ''}`}>
                <li><a href="#sobreMi" onClick={cerrarMenu}>{t('sobreMi')}</a></li>
                <li><a href="#tecnologias" onClick={cerrarMenu}>{t('tecnologias')}</a></li>
                <li><a href="#proyectos" onClick={cerrarMenu}>{t('proyectos')}</a></li>
                <li><BotonIdioma /></li>
            </ul>

            {/* Overlay para cerrar menú en móvil */}
            {menuAbierto && <div className="menu-overlay" onClick={cerrarMenu}></div>}
        </nav>
    );
}