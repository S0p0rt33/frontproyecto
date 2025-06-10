import React, { useState, useEffect } from "react";
import axiosInstance from "../api/axioInstance";
import ListCargo from "./ListaCargo.jsx";

// Elementos del menú de navegación
const navItems = [
  { name: "INICIO", path: "#inicio" },
  { name: "QUIÉNES SOMOS", path: "#quienes-somos" },
  { name: "SERVICIOS", path: "#servicios" },
  { name: "EQUIPO", path: "#equipo" },
  { name: "COBERTURA", path: "#cobertura" },
  { name: "GALERÍA", path: "#galeria" },
  { name: "CONTACTO", path: "#contacto" },
];

const HEADER_HEIGHT = '50px';

const appColors = {
  headerBg: '#2c3e50',
  headerText: '#ecf0f1',
  pageBg: '#f4f6f6',
  cardBg: '#ffffff',
  primaryAccent: '#3498db',
  primaryAccentHover: '#2980b9',
  textDark: '#333333',
  textLight: '#555555', // Un gris más suave para el cuerpo del texto
  borderColor: '#dddddd',
  inputBg: '#ffffff',
  footerBg: '#34495e',
  footerText: '#bdc3c7',
  overlayColor: 'rgba(44, 62, 80, 0.6)',
};

// Estilos definidos anteriormente (pueden ser eliminados si ya no se usan en otras partes o si este componente es solo para "Quiénes Somos")
const promotionalSectionStyle = { /* ... */ };
const promotionalTitleStyle = { /* ... */ };
const promotionalParagraphStyle = { /* ... */ };
const inputStyle = { /* ... */ };
const labelStyle = { /* ... */ };


const Home = () => {
  // Los estados y lógica para tareas no son necesarios si solo mostramos "Quiénes Somos"
  // const [tareas, setTareas] = useState([]);
  // useEffect(() => { ... fetchTareas ... }, []);
  // const handleCrearTarea = async (e) => { ... };

  // Estilos para la sección "Quiénes Somos"
  const quienesSomosSectionStyle = {
    backgroundColor: appColors.cardBg,
    padding: '40px 35px', // Padding amplio para el contenido
    borderRadius: '8px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.08)', // Sombra sutil
    maxWidth: '800px',
    margin: '0 auto 30px auto', // Centrado y con margen inferior
    color: appColors.textDark,
  };

  const quienesSomosTitleStyle = {
    color: appColors.headerBg, // Color oscuro y formal para el título
    textAlign: 'center',
    fontSize: '2.4rem', // Tamaño del título
    fontWeight: 'bold',
    marginBottom: '30px',
    borderBottom: `3px solid ${appColors.primaryAccent}`, // Línea decorativa con color de acento
    paddingBottom: '15px',
  };

  const quienesSomosParagraphStyle = {
    fontSize: '1.1rem', // Tamaño de fuente para párrafos
    lineHeight: '1.8', // Interlineado para fácil lectura
    color: appColors.textLight, // Color de texto más suave
    marginBottom: '20px', // Espacio entre párrafos
    textAlign: 'justify', // Texto justificado para un look formal
  };

    const subHeaderStyle = {
    fontSize: '1.5rem',
    color: appColors.textDark,
    fontWeight: '600',
    marginTop: '30px',
    marginBottom: '15px',
    borderLeft: `4px solid ${appColors.primaryAccent}`,
    paddingLeft: '10px',
  };


  return (
    <div style={{ backgroundColor: appColors.pageBg, fontFamily: 'Arial, sans-serif', color: appColors.textDark }}>
      <header style={{
        backgroundColor: appColors.headerBg,
        color: appColors.headerText,
        padding: '0 20px',
        height: HEADER_HEIGHT,
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
      }}>
        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginRight: 'auto' }}>HOME UP</div>
        <nav>
          <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex' }}>
            {navItems.map((item) => (
              <li key={item.name} style={{ marginLeft: '10px' }}>
                <a
                  href={item.path}
                  style={{
                    color: appColors.headerText,
                    textDecoration: 'none',
                    padding: '8px 12px',
                    borderRadius: '4px',
                    transition: 'background-color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = appColors.primaryAccent}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  {item.name.toUpperCase()}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main style={{
        padding: '20px',
        paddingTop: `calc(${HEADER_HEIGHT} + 40px)` // Un poco más de espacio superior
      }}>
        <section id="quienes-somos" style={quienesSomosSectionStyle}>
          <h1 style={quienesSomosTitleStyle}>Quiénes Somos</h1>

          <p style={quienesSomosParagraphStyle}>
            En <strong>HOME UP</strong>, somos más que una empresa de mantenimiento; somos sus aliados estratégicos dedicados al cuidado, la optimización y la preservación del valor de sus propiedades en el vibrante entorno urbano. Nacimos con la firme convicción de ofrecer soluciones de mantenimiento locativo que no solo sean integrales y confiables, sino que también se adapten con agilidad a las dinámicas y exigencias de la vida moderna en la ciudad.
          </p>

          <h2 style={subHeaderStyle}>Nuestra Misión</h2>
          <p style={quienesSomosParagraphStyle}>
            Nuestra misión es clara: asegurar que cada inmueble bajo nuestro cuidado —ya sea residencial, comercial, o de oficinas— se mantenga en condiciones óptimas de funcionalidad, seguridad y estética. Queremos que nuestros clientes puedan enfocarse en sus actividades principales, con la total tranquilidad de saber que sus espacios están en manos expertas y comprometidas.
          </p>

          <h2 style={subHeaderStyle}>Nuestro Equipo</h2>
          <p style={quienesSomosParagraphStyle}>
            Contamos con un equipo de profesionales rigurosamente seleccionados y altamente calificados, con una vasta experiencia en un amplio espectro de especialidades del mantenimiento: desde plomería, electricidad y albañilería, hasta pintura de alta calidad, impermeabilización duradera y proyectos de remodelación menor. Cada miembro de <strong>HOME UP</strong> comparte una pasión por el detalle, la excelencia en el trabajo y un genuino deseo de superar las expectativas.
          </p>

          <h2 style={subHeaderStyle}>Nuestros Valores</h2>
          <p style={quienesSomosParagraphStyle}>
            Nos regimos por un código de valores inquebrantable que guía cada una de nuestras acciones:
            <ul style={{ listStylePosition: 'inside', paddingLeft: '20px', marginTop: '10px' }}>
                <li><strong>Profesionalismo:</strong> Actuamos con la pericia, seriedad y el respeto que cada cliente y propiedad merecen.</li>
                <li><strong>Calidad:</strong> Utilizamos materiales de primera y aplicamos las mejores prácticas para garantizar resultados duraderos.</li>
                <li><strong>Eficiencia:</strong> Optimizamos nuestros procesos para ofrecer respuestas rápidas y soluciones efectivas, respetando su tiempo y recursos.</li>
                <li><strong>Honestidad y Transparencia:</strong> Creemos en la comunicación clara y en construir relaciones de confianza a largo plazo.</li>
                <li><strong>Compromiso:</strong> Su satisfacción es nuestra máxima prioridad. Nos dedicamos a entender sus necesidades y a ofrecer soluciones a medida.</li>
            </ul>
          </p>

          <h2 style={subHeaderStyle}>Especialistas en el Entorno Urbano</h2>
          <p style={quienesSomosParagraphStyle}>
            Nuestra especialización en el sector urbano nos permite comprender a fondo los desafíos y particularidades que presentan las edificaciones en la ciudad. Estamos equipados con el conocimiento y las herramientas para afrontar cualquier reto, desde el mantenimiento preventivo que evita problemas costosos, hasta la atención de emergencias con la celeridad que se requiere. En <strong>HOME UP</strong>, encontrará un socio confiable y proactivo, dedicado a potenciar y proteger su inversión inmobiliaria.
          </p>

        </section>
      </main>

      <footer style={{
        textAlign: 'center',
        padding: '20px',
        marginTop: '30px',
        backgroundColor: appColors.footerBg,
        color: appColors.footerText,
        borderTop: `3px solid ${appColors.primaryAccent}`
      }}>
        <p>&copy; {new Date().getFullYear()} HOME UP. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;