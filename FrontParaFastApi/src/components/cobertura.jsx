import React, { useState, useEffect } from "react";
// Las siguientes importaciones no se usarán directamente en la sección "Cobertura",
// pero se mantienen según la estructura del código proporcionado.
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
  textLight: '#555555',
  borderColor: '#e0e0e0',
  inputBg: '#ffffff',
  footerBg: '#34495e',
  footerText: '#bdc3c7',
  overlayColor: 'rgba(44, 62, 80, 0.6)',
  mapPlaceholderBg: '#e9ecef', // Un gris claro para el placeholder del mapa
};

// Estilos de secciones anteriores (promocional, input, label) se mantienen definidos
// pero no se usan en este render específico de la sección "Cobertura".
const promotionalSectionStyle = { /* ... */ };
const promotionalTitleStyle = { /* ... */ };
const promotionalParagraphStyle = { /* ... */ };
const inputStyle = { /* ... */ };
const labelStyle = { /* ... */ };


const Home = () => {
  // La lógica para tareas y su estado se mantienen según el código original,
  // aunque no se use en la sección "Cobertura".
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const fetchTareas = async () => {
      try {
        const response = await axiosInstance.get("http://127.0.0.1:8000/tarea/");
        setTareas(response.data);
      } catch (error) {
        console.error("Error al cargar las tareas:", error);
        // No mostraremos alert para no interrumpir la vista de "Cobertura"
      }
    };
    fetchTareas();
  }, []);

  // handleCrearTarea no es relevante para la sección "Cobertura".
  // const handleCrearTarea = async (e) => { ... };

  // Datos de ejemplo para las zonas de cobertura (personalizar según corresponda)
  const coverageZones = [
    {
      name: "Zona Norte Urbana",
      description: "Cubrimos los principales barrios residenciales y comerciales del norte, incluyendo distritos financieros y áreas de alta densidad.",
      // Ejemplo: "Localidades como Usaquén, Chapinero, Suba (sectores específicos)."
    },
    {
      name: "Zona Centro y Centro Ampliado",
      description: "Servicio en el corazón de la ciudad, áreas históricas, comerciales tradicionales y zonas de oficinas.",
      // Ejemplo: "Localidades como Teusaquillo, Santa Fe, Los Mártires, Barrios Unidos."
    },
    {
      name: "Zona Occidental Principal",
      description: "Atendemos importantes sectores residenciales mixtos y corredores empresariales del occidente.",
      // Ejemplo: "Localidades como Engativá, Fontibón, Kennedy (sectores específicos)."
    },
    {
      name: "Zona Sur Estratégica",
      description: "Cobertura en barrios residenciales clave y áreas comerciales dinámicas del sur de la ciudad.",
      // Ejemplo: "Localidades como Puente Aranda, Tunjuelito, Antonio Nariño."
    },
  ];


  // Estilos para la sección de Cobertura
  const coberturaSectionStyle = {
    backgroundColor: appColors.cardBg,
    padding: '40px 35px',
    borderRadius: '10px',
    boxShadow: '0 5px 20px rgba(0,0,0,0.07)',
    maxWidth: '900px',
    margin: '0 auto 40px auto',
  };

  const coberturaTitleStyle = {
    color: appColors.headerBg,
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '25px',
    borderBottom: `3px solid ${appColors.primaryAccent}`,
    paddingBottom: '15px',
  };

  const coberturaIntroParagraphStyle = {
    fontSize: '1.15rem',
    lineHeight: '1.75',
    color: appColors.textLight,
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto 40px auto',
  };

  const mapPlaceholderStyle = {
    width: '100%',
    height: '380px',
    backgroundColor: appColors.mapPlaceholderBg,
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column', // Para alinear texto verticalmente
    alignItems: 'center',
    justifyContent: 'center',
    color: appColors.textDark, // Un color de texto más oscuro para el placeholder
    fontSize: '1.2rem',
    fontWeight: '500',
    textAlign: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    marginBottom: '40px',
    border: `2px dashed ${appColors.borderColor}`,
  };

  const zonesContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '25px',
    marginTop: '30px',
  };

  const zoneItemStyle = {
    backgroundColor: appColors.pageBg,
    padding: '20px 25px',
    borderRadius: '8px',
    borderLeft: `5px solid ${appColors.primaryAccent}`,
    boxShadow: '0 3px 8px rgba(0,0,0,0.06)',
  };

  const zoneTitleStyle = {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: appColors.textDark,
    marginBottom: '10px',
  };

  const zoneDescriptionStyle = {
    fontSize: '0.95rem',
    color: appColors.textLight,
    lineHeight: '1.6',
  };


  return (
    <div style={{ backgroundColor: appColors.pageBg, fontFamily: 'Arial, sans-serif' }}>
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
        paddingTop: `calc(${HEADER_HEIGHT} + 40px)`
      }}>
        <section id="cobertura" style={coberturaSectionStyle}>
          <h1 style={coberturaTitleStyle}>Nuestra Área de Cobertura Urbana</h1>
          <p style={coberturaIntroParagraphStyle}>
            En <strong>HOME UP</strong>, nuestro compromiso es llegar hasta donde usted nos necesite dentro del dinámico sector urbano. Hemos optimizado nuestra logística para ofrecer una respuesta ágil y eficiente, asegurando que nuestros servicios de mantenimiento locativo de alta calidad estén a su alcance.
          </p>

          <div style={mapPlaceholderStyle}>
            <span style={{fontSize: '2.5rem', marginBottom: '15px'}} role="img" aria-label="map icon">🗺️</span>
            <p><strong>Visualiza Nuestra Cobertura Principal</strong></p>
            <p style={{fontSize: '0.9rem', color: appColors.textLight}}>
              (Aquí podrías integrar un mapa interactivo de Google Maps o similar, mostrando tus zonas de servicio)
            </p>
          </div>

          <h2 style={{ textAlign: 'center', fontSize: '1.8rem', color: appColors.textDark, marginBottom: '15px', marginTop: '10px' }}>
            Principales Zonas de Servicio:
          </h2>
          <p style={{textAlign: 'center', fontSize: '0.95rem', color: appColors.textLight, marginBottom: '30px', maxWidth: '700px', margin: '0 auto 30px auto'}}>
            A continuación, detallamos las áreas generales donde concentramos nuestras operaciones. Te recomendamos contactarnos para confirmar la disponibilidad en tu dirección específica.
          </p>

          <div style={zonesContainerStyle}>
            {coverageZones.map((zone, index) => (
              <div key={index} style={zoneItemStyle}>
                <h3 style={zoneTitleStyle}>{zone.name}</h3>
                <p style={zoneDescriptionStyle}>{zone.description}</p>
                 {/* Podrías añadir ejemplos de barrios o localidades aquí si lo deseas: */}
                 {/* zone.example && <p style={{fontSize: '0.85rem', color: appColors.primaryAccent, marginTop: '8px'}}><em>Ej: {zone.example}</em></p> */}
              </div>
            ))}
          </div>

          <p style={{...coberturaIntroParagraphStyle, marginTop: '50px', fontSize: '1.1rem', borderTop: `1px solid ${appColors.borderColor}`, paddingTop: '30px'}}>
            <strong>¿Tu propiedad está fuera de estas áreas?</strong> No dudes en <a href="#contacto" style={{color: appColors.primaryAccent, fontWeight: 'bold', textDecoration: 'none'}}>consultarnos</a>. Siempre estamos dispuestos a evaluar la posibilidad de extender nuestros servicios para atender tus necesidades dentro del perímetro urbano.
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