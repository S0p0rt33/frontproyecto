import React from "react";
import QuienesSomos from './quienessomos';
import Equipo from './equipo';
import Servicio from './servicio';
import Cobertura from './cobertura';
import Contacto from './contacto';



// Elementos del menú de navegación
const navItems = [
  { name: "INICIO", path: "#inicio" },
  { name: "QUIÉNES SOMOS", path: "#quienes-somos" },
  { name: "SERVICIOS", path: "#servicios" },
  { name: "EQUIPO", path: "#equipo" },
  { name: "CONTACTO", path: "#contacto" },
];

const HEADER_HEIGHT = '60px';

// --- DEFINICIÓN DE MÚLTIPLES TEMAS DE DISEÑO ---
const themeAqua = {
  name: 'Aqua',
  headerBg: '#2c3e50',
  headerText: '#ffffff',
  headerBorder: '#1abc9c',
  pageBg: '#f4f7f6',
  cardBg: '#ffffff',
  primaryAccent: '#1abc9c',
  primaryAccentHover: '#16a085',
  textDark: '#34495e',
  textLight: '#7f8c8d',
  borderColor: '#e0e0e0',
  footerBg: '#2c3e50',
  footerText: '#bdc3c7',
  overlayColor: 'rgba(44, 62, 80, 0.6)',
  heroTextColor: '#ffffff',
  heroButtonShadow: '0 6px 12px rgba(26, 188, 156, 0.3)',
  heroButtonShadowHover: '0 8px 15px rgba(22, 160, 133, 0.4)',
};

const themePremium = {
  name: 'Premium',
  headerBg: '#2c3e50',
  headerText: '#ffffff',
  headerBorder: '#1abc9c',
  pageBg: '#f8f9fa',
  cardBg: '#ffffff',
  primaryAccent: '#778DA9',
  primaryAccentHover: '#415A77',
  textDark: '#0D1B2A',
  textLight: '#415A77',
  borderColor: '#dee2e6',
  footerBg: '#0D1B2A',
  footerText: '#E0E1DD',
  overlayColor: 'rgba(13, 27, 42, 0.7)',
  heroTextColor: '#ffffff',
  heroButtonShadow: '0 6px 12px rgba(65, 90, 119, 0.3)',
  heroButtonShadowHover: '0 8px 15px rgba(65, 90, 119, 0.4)',
};

const themeVibrant = {
  name: 'Vibrant',
  headerBg: '#2c3e50',
  headerText: '#ffffff',
  headerBorder: '#1abc9c',
  pageBg: '#121212',
  cardBg: '#1c1c20',
  primaryAccent: 'linear-gradient(90deg, #833ab4, #fd1d1d, #fcb045)',
  primaryAccentHover: 'linear-gradient(90deg, #833ab4, #fd1d1d, #fcb045)',
  textDark: '#f1f2f6',
  textLight: '#a4a4a4',
  borderColor: '#3a3a3a',
  footerBg: '#1c1c20',
  footerText: '#a4a4a4',
  overlayColor: 'rgba(0, 0, 0, 0.5)',
  heroTextColor: '#ffffff',
  heroButtonShadow: '0 6px 20px rgba(253, 29, 29, 0.3)',
  heroButtonShadowHover: '0 8px 25px rgba(253, 29, 29, 0.4)',
};

// --- Componente Principal de la Página de Inicio ---
const Home = () => {
  // Elige el tema para el cuerpo de la página. El header se mantendrá igual.
  const activeTheme = themePremium; 

  const colors = activeTheme;

  // --- OBJETOS DE ESTILO ---

  const pageStyle = {
    backgroundColor: colors.pageBg,
    fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif",
    color: colors.textDark,
  };

  const headerStyle = {
    backgroundColor: colors.headerBg,
    color: colors.headerText,
    padding: '0 40px',
    height: HEADER_HEIGHT,
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxShadow: '0 3px 6px rgba(0,0,0,0.15)',
    borderBottom: `3px solid ${colors.headerBorder}`,
  };
  
  // NUEVO: Contenedor para los elementos de la derecha en el header
  const rightHeaderSectionStyle = {
      display: 'flex',
      alignItems: 'center',
      gap: '25px', // Espacio entre el menú y el botón de login
  };

  const navLinkStyle = {
    color: colors.headerText,
    textDecoration: 'none',
    padding: '10px 15px',
    borderRadius: '6px',
    fontWeight: '600',
    fontSize: '0.9rem', // Ligeramente más pequeño para dar espacio
    textTransform: 'uppercase',
    transition: 'all 0.3s ease',
  };
  
  // NUEVO: Estilo para el botón de Iniciar Sesión
  const loginButtonStyle = {
      ...navLinkStyle, // Hereda algunos estilos base
      padding: '8px 20px',
      border: `2px solid ${colors.headerBorder}`,
      borderRadius: '50px',
      backgroundColor: 'transparent',
      color: colors.headerBorder,
      fontWeight: 'bold',
  };

  const mainStyle = {
    padding: '20px',
    paddingTop: `calc(${HEADER_HEIGHT} + 40px)`,
    maxWidth: '1100px',
    margin: '0 auto'
  };

  const heroSectionStyle = {
    textAlign: 'center',
    padding: '120px 40px',
    backgroundImage: `url('/images/mantenimiento-bg.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    borderRadius: '16px',
    color: colors.heroTextColor,
    position: 'relative',
    overflow: 'hidden',
  };

  const heroOverlayStyle = {
      position: 'absolute',
      top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: colors.overlayColor,
      backdropFilter: 'blur(4px)',
      zIndex: 1,
  };
  
  const heroContentStyle = {
      position: 'relative',
      zIndex: 2,
      textShadow: '0 2px 8px rgba(0,0,0,0.5)',
  };

  const heroTitleStyle = {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  };

  const heroParagraphStyle = {
    fontSize: '1.25rem',
    lineHeight: '1.7',
    maxWidth: '700px',
    margin: '0 auto 40px auto',
  };

  const ctaButtonStyle = {
    padding: '16px 40px',
    background: colors.primaryAccent,
    color: colors.headerText,
    border: 'none',
    borderRadius: '50px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    boxShadow: colors.heroButtonShadow,
    transition: 'all 0.3s ease'
  };

  const contentSectionStyle = {
    padding: '80px 20px',
    textAlign: 'center',
  };

  const sectionTitleStyle = {
    fontSize: '2.5rem',
    color: colors.textDark,
    marginBottom: '50px',
    fontWeight: '600',
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '30px',
    textAlign: 'left',
  };

  const featureCardStyle = {
    backgroundColor: colors.cardBg,
    padding: '35px',
    borderRadius: '12px',
    borderTop: `4px solid`,
    borderImageSource: colors.primaryAccent,
    borderImageSlice: 1,
    boxShadow: '0 8px 25px rgba(0,0,0,0.05)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };
  
  const featureIconStyle = {
      fontSize: '3rem',
      background: colors.primaryAccent,
      WebkitBackgroundClip: 'text',
      color: 'transparent',
      marginBottom: '20px',
  };

  const featureTitleStyle = {
      fontSize: '1.5rem',
      margin: '0 0 15px 0',
      color: colors.textDark,
  };

  const featureTextStyle = {
      fontSize: '1rem',
      lineHeight: '1.6',
      color: colors.textLight,
  };
  
  const finalCtaSectionStyle = {
      ...contentSectionStyle,
      background: `linear-gradient(135deg, ${colors.footerBg} 0%, ${colors.headerBg} 100%)`,
      color: colors.headerText,
      borderRadius: '16px',
      marginTop: '50px',
  }

  const footerStyle = {
    textAlign: 'center',
    padding: '40px 20px',
    marginTop: '50px',
    backgroundColor: colors.footerBg,
    color: colors.footerText,
  };

  return (
    <div style={pageStyle}>
      <header style={headerStyle}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginRight: 'auto' }}>HOME UP</div>
        
        {/* NUEVO: Contenedor para agrupar navegación y botón de login */}
        <div style={rightHeaderSectionStyle}>
            <nav>
              <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex' }}>
                {navItems.map((item) => (
                  <li key={item.name} style={{ marginLeft: '5px' }}>
                    <a
                      href={item.path}
                      style={navLinkStyle}
                      onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = colors.headerBorder; e.currentTarget.style.color = '#000';}}
                      onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = colors.headerText; }}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* NUEVO: Botón de Iniciar Sesión */}
            <a 
                href="/login" // Este enlace te llevará a tu página de login
                style={loginButtonStyle}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = colors.headerBorder; e.currentTarget.style.color = '#000';}}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = colors.headerBorder; }}
            >
                Iniciar Sesión
            </a>
        </div>
      </header>

      <main style={mainStyle}>
        <section id="inicio" style={heroSectionStyle}>
          <div style={heroOverlayStyle}></div>
          <div style={heroContentStyle}>
              <h1 style={heroTitleStyle}>Mantenimiento Experto Para Tus Espacios</h1>
              <p style={heroParagraphStyle}>
                Transforma y protege tu propiedad con <strong>HOME UP</strong>. Ofrecemos soluciones integrales, garantizando calidad, eficiencia y la tranquilidad que mereces.
              </p>
              <button
                style={ctaButtonStyle}
                onClick={() => document.getElementById('quienes-somos')?.scrollIntoView({ behavior: 'smooth' })}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = colors.heroButtonShadowHover; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = colors.heroButtonShadow; }}
              >
                Conócenos
              </button>
          </div>
        </section>

        {/* Sección Quiénes Somos (importada) */}
        <section id="quienes-somos" style={contentSectionStyle}>
          <QuienesSomos />
        </section>

        {/* Sección Servicios (importada) */}
        <section id="servicios" style={contentSectionStyle}>
          <Servicio />
        </section>
        
        {/* Sección Equipo (importada) */}
        <section id="equipo" style={contentSectionStyle}>
          <Equipo />
        </section>

        {/* Sección Cobertura (importada) */}
        <section id="cobertura" style={contentSectionStyle}>
          <Cobertura />
        </section>

        {/* Sección Contacto (importada) */}
        <section id="contacto" style={finalCtaSectionStyle}>
          <Contacto />
        </section>
      </main>

      <footer style={footerStyle}>
        <p>&copy; {new Date().getFullYear()} HOME UP. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;
