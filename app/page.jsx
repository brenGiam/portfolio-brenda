'use client';
import "../i18n";
import Footer from "@/componentes/footer";
import Navbar from "@/componentes/navbar";
import Header from "@/componentes/header";
import Proyectos from "@/componentes/proyectosSection";
import SobreMi from "@/componentes/sobremiSection";
import "@/estilos/globals.css";


export default function InicioPagina() {
  return (
    <div className="inicio-pagina">
      <main className="card-principal">
        <Navbar />
        <section id="header">
          <Header />
        </section>
        <section id="sobreMi">
          <SobreMi />
        </section>
        <section id="proyectos">
          <Proyectos />
        </section>
        <Footer />
      </main >
    </div>
  );
}
