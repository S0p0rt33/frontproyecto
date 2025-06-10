import React from "react";
// Las importaciones de axiosInstance y ListCargo siguen sin usarse en esta configuración.
// import axiosInstance from "../api/axioInstance";
// import ListCargo from "./ListaCargo.jsx";

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
  cardBg: '#ffffff', // Fondo para la sección principal de servicios
  serviceCardBg: '#fdfdfd', // Un fondo ligeramente diferente para las tarjetas de servicio
  primaryAccent: '#3498db',
  primaryAccentHover: '#2980b9',
  textDark: '#333333',
  textLight: '#555555',
  borderColor: '#e0e0e0', // Un borde un poco más suave
  inputBg: '#ffffff',
  footerBg: '#34495e',
  footerText: '#bdc3c7',
  overlayColor: 'rgba(44, 62, 80, 0.6)',
};

// Estilos de secciones anteriores (quienesSomos, etc.) se mantienen definidos pero no se usan en este render.
const quienesSomosSectionStyle = { /* ... */ };
const quienesSomosTitleStyle = { /* ... */ };
const quienesSomosParagraphStyle = { /* ... */ };
const subHeaderStyle = { /* ... */ };


const Home = () => {
  // Datos de los servicios (puedes expandir esto o cargarlo desde otro lugar)
  const servicesData = [
    {
      icon: "🔧", // Plomería
      title: "Plomería General y Especializada",
      description: "Detección y reparación de fugas, instalación y mantenimiento de grifería, sanitarios, desatascos y revisión de sistemas de tuberías complejos.",
    },
    {
      icon: "💡", // Electricidad
      title: "Instalaciones y Reparaciones Eléctricas",
      description: "Solución de fallas, instalación de puntos de luz, tomas, tableros eléctricos, cableado estructurado y certificaciones de seguridad.",
    },
    {
      icon: "🧱", // Albañilería
      title: "Albañilería y Acabados",
      description: "Reparaciones estructurales menores, levantamiento de muros, revoques, estucos, instalación de revestimientos, enchapes y acabados finos.",
    },
    {
      icon: "🖌️", // Pintura
      title: "Pintura Profesional e Industrial",
      description: "Aplicación de pintura en interiores, exteriores y fachadas. Preparación exhaustiva de superficies, acabados decorativos y uso de pinturas especializadas.",
    },
    {
      icon: "💧", // Impermeabilización
      title: "Impermeabilización Integral",
      description: "Soluciones efectivas para cubiertas, terrazas, balcones, muros y sótanos. Prevención y corrección de humedades y filtraciones con materiales de alta durabilidad.",
    },
    {
      icon: "🔩", // Carpintería
      title: "Carpintería y Ebanistería",
      description: "Diseño, fabricación, instalación y reparación de puertas, ventanas, armarios, closets, cocinas integrales y muebles a medida en madera y aglomerados.",
    },
    {
      icon: "🛠️", // Mantenimiento Preventivo
      title: "Mantenimiento Preventivo y Correctivo",
      description: "Planes de mantenimiento personalizados para empresas, conjuntos residenciales y oficinas. Inspecciones periódicas y atención de emergencias.",
    },
    {
      icon: "🌿", // Jardinería
      title: "Jardinería y Paisajismo Urbano",
      description: "Diseño, instalación y mantenimiento de zonas verdes, jardines verticales, terrazas ajardinadas, sistemas de riego automatizado y control de plagas.",
    },
  ];

  // Estilos para la sección de Servicios
  const serviciosSectionStyle = {
    backgroundColor: appColors.cardBg,
    padding: '40px 30px',
    borderRadius: '10px', // Bordes un poco más redondeados
    boxShadow: '0 5px 20px rgba(0,0,0,0.07)',
    maxWidth: '960px', // Un poco más ancho para las tarjetas
    margin: '0 auto 40px auto',
  };

  const serviciosTitleStyle = {
    color: appColors.headerBg,
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    borderBottom: `3px solid ${appColors.primaryAccent}`,
    paddingBottom: '15px',
  };

  const serviciosIntroParagraphStyle = {
    fontSize: '1.15rem',
    lineHeight: '1.7',
    color: appColors.textLight,
    textAlign: 'center',
    maxWidth: '750px',
    margin: '0 auto 40px auto',
  };

  const serviceCardsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', // Responsive
    gap: '30px', // Espacio entre tarjetas
  };

  const serviceCardStyle = {
    backgroundColor: appColors.serviceCardBg,
    border: `1px solid ${appColors.borderColor}`,
    borderRadius: '8px',
    padding: '30px 25px',
    textAlign: 'center',
    boxShadow: '0 3px 10px rgba(0,0,0,0.05)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'default', // O 'pointer' si llevarán a una página de detalle
  };

  // Estilos para el hover de la tarjeta (se aplicarán con onMouseEnter/Leave)
  const serviceCardHoverStyle = {
    transform: 'translateY(-5px)',
    boxShadow: `0 8px 15px rgba(0,0,0,0.1)`,
  };

  const serviceCardIconStyle = {
    fontSize: '3rem', // Iconos más grandes
    color: appColors.primaryAccent,
    marginBottom: '20px',
    display: 'block', // Para asegurar centrado si es un div
  };

  const serviceCardTitleStyle = {
    fontSize: '1.4rem',
    fontWeight: '600',
    color: appColors.textDark,
    marginBottom: '15px',
  };

  const serviceCardDescriptionStyle = {
    fontSize: '0.95rem',
    color: appColors.textLight,
    lineHeight: '1.65',
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
        <section id="servicios" style={serviciosSectionStyle}>
          <h1 style={serviciosTitleStyle}>Nuestros Servicios</h1>
          <p style={serviciosIntroParagraphStyle}>
            En <strong>HOME UP</strong>, entendemos que cada propiedad es única. Por ello, ofrecemos una completa y adaptable gama de servicios de mantenimiento locativo, diseñados específicamente para cubrir todas las necesidades del sector urbano. Nuestro compromiso es garantizar la funcionalidad, seguridad y estética de sus espacios, permitiéndole disfrutar de la tranquilidad que merece.
          </p>

          <div style={serviceCardsContainerStyle}>
            {servicesData.map((service, index) => (
              <div
                key={index}
                style={serviceCardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = serviceCardHoverStyle.transform;
                  e.currentTarget.style.boxShadow = serviceCardHoverStyle.boxShadow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 3px 10px rgba(0,0,0,0.05)';
                }}
              >
                <span style={serviceCardIconStyle} role="img" aria-label={service.title}>{service.icon}</span>
                <h3 style={serviceCardTitleStyle}>{service.title}</h3>
                <p style={serviceCardDescriptionStyle}>{service.description}</p>
              </div>
            ))}
          </div>

          <p style={{...serviciosIntroParagraphStyle, marginTop: '50px', fontSize: '1.1rem'}}>
            ¿No encuentras exactamente lo que buscas? <a href="#contacto" style={{color: appColors.primaryAccent, fontWeight: 'bold', textDecoration: 'none'}}>Contáctanos</a>. Estamos listos para adaptar nuestros servicios a tus requerimientos específicos y ofrecerte una solución a medida.
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

<div className=""></div>