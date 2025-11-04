'use client'
import Proyecto from "./proyecto";
import "../estilos/proyectos.css";
import { useTranslation } from "react-i18next";

export default function ProyectosSection() {
    const { t } = useTranslation();

    return (
        <section className="proyectos-container">
            <h3>{t('proyectos')}</h3>
            <p>{t('descripcion')}</p>
            <div className="lista-proyectos">

                <Proyecto
                    titulo={t('tituloProyecto4')}
                    descripcion={t('proyectoDescripcion4')}
                    imagen="/img/mi-recetario.png"
                    video="https://youtu.be/utrbj_Sb-So"
                    tecnologias="React, Java, SpringBoot, MongoDB, Cloudinary, PWA"
                    github="https://github.com/brenGiam/recetario-frontend"
                    enConstruccion={false}
                />

                <Proyecto
                    titulo="Pawfinder"
                    descripcion={t('proyectoDescripcion1')}
                    imagen="/img/pawfinder.png"
                    video="https://www.youtube.com/tu-video"
                    tecnologias="React, Java, Spring Boot, JWT, MySQL, Cloudinary"
                    github="https://github.com/brenGiam/pawfinder"
                    enConstruccion={true}
                />

                <Proyecto
                    titulo={t('tituloProyecto2')}
                    descripcion={t('proyectoDescripcion2')}
                    imagen="/img/sistema-libreria.png"
                    video="https://youtu.be/wGR-V_qyzgs"
                    tecnologias="Java, Spring Boot, Spring Security, MySQL, Thymeleaf"
                    github="https://github.com/brenGiam/sistemaLibreria"
                    enConstruccion={false}
                />

                <Proyecto
                    titulo={t('tituloProyecto3')}
                    descripcion={t('proyectoDescripcion3')}
                    imagen="/img/gestor-tareas.png"
                    video="https://youtu.be/z9NvQiIhe5w"
                    tecnologias="React, JavaScript, Node, Express, JWT, MySQL, Cloudinary"
                    github="https://github.com/brenGiam/gestor-tareas"
                    enConstruccion={false}
                />
            </div>
        </section>
    );
}