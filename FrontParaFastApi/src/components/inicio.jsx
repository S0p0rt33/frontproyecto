import React, { useState, useEffect } from "react";
// Asegurate que los nombres de tus archivos coincidan con estas importaciones.
// Es una buena practica usar Mayuscula inicial para los componentes.
import QuienesSomos from './quienessomos';
import Servicio from './servicio';
import Equipo from './equipo';
import Contacto from './contacto';
import Cobertura from './cobertura';

// Elementos del menú de navegación
const navItems = [
  { name: "INICIO", path: "inicio" },
  { name: "SERVICIOS", path: "servicios" },
  { name: "QUIÉNES SOMOS", path: "quienes-somos" },
  { name: "EQUIPO", path: "equipo" },
  { name: "COBERTURA", path: "cobertura" },
  { name: "CONTACTO", path: "contacto" },
];

const HEADER_HEIGHT = '70px';

// TEMA DE DISEÑO "GALAXY GOLD"
const themeGalaxyGold = {
  name: 'Galaxy Gold',
  pageBg: 'linear-gradient(160deg, #0d122b 0%, #1a1a32 50%, #3b1f3a 100%)',
  headerBg: 'rgba(13, 18, 43, 0.8)',
  cardBg: 'rgba(26, 26, 50, 0.6)',
  headerText: '#f1f2f6',
  primaryAccent: '#FFD700', // Dorado Metálico
  primaryAccentHover: '#FFC107', // Ámbar intenso
  textDark: '#ffffff',
  textLight: '#b0bec5',
  borderColor: 'rgba(255, 215, 0, 0.2)',
  footerBg: '#0d122b',
  overlayColor: 'rgba(0, 0, 0, 0.3)',
  heroButtonShadow: '0 5px 25px rgba(255, 215, 0, 0.3)',
  heroButtonShadowHover: '0 8px 30px rgba(255, 193, 7, 0.4)',
};

// --- Componente Principal "Inicio" ---
const Inicio = () => {
  const colors = themeGalaxyGold;
  const [activeSection, setActiveSection] = useState("inicio");
  const [isAnimated, setIsAnimated] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Cuando cambia la sección activa, hacer scroll al top de la página
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (activeSection === "inicio" && !hasAnimated) {
      const timer = setTimeout(() => {
        setIsAnimated(true);
        setHasAnimated(true);
      }, 100);
      return () => clearTimeout(timer);
    } else if (activeSection !== "inicio") {
      setIsAnimated(false);
    }
  }, [activeSection, hasAnimated]);

  // --- OBJETOS DE ESTILO ---
  const pageStyle = { background: colors.pageBg, fontFamily: "'Segoe UI', 'Roboto', sans-serif", color: colors.textDark, backgroundAttachment: 'fixed' };
  const headerStyle = {
    backgroundColor: colors.headerBg, backdropFilter: 'blur(10px)', color: colors.headerText,
    padding: '0 40px', height: HEADER_HEIGHT, position: 'fixed', top: 0, left: 0,
    width: '100%', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    borderBottom: `1px solid ${colors.borderColor}`,
  };
  const rightHeaderSectionStyle = { display: 'flex', alignItems: 'center', gap: '25px' };
  const navLinkStyle = {
    color: colors.headerText, textDecoration: 'none', padding: '10px 15px', borderRadius: '6px',
    fontWeight: '500', textTransform: 'uppercase', transition: 'all 0.3s ease', letterSpacing: '0.5px'
  };
  const loginButtonStyle = {
    ...navLinkStyle, padding: '8px 24px', border: `2px solid ${colors.primaryAccent}`,
    borderRadius: '50px', color: colors.primaryAccent, fontWeight: 'bold',
  };
  const mainStyle = { paddingTop: HEADER_HEIGHT };
  const heroSectionStyle = {
    display: 'flex', alignItems: 'center', minHeight: '100vh',
    padding: '40px', background: `radial-gradient(ellipse at top left, ${colors.overlayColor}, transparent 70%)`,
  };
  const heroContentColumnStyle = { flex: '1 1 55%', paddingRight: '50px' };
  const heroImageColumnStyle = { flex: '1 1 45%', display: 'flex', alignItems: 'center', justifyContent: 'center' };
  const contentSectionWrapper = { padding: '80px 40px' };
  const footerStyle = {
    textAlign: 'center', padding: '50px 40px', marginTop: '60px',
    backgroundColor: colors.footerBg, color: colors.footerText,
    borderTop: `1px solid ${colors.borderColor}`,
  };

  // Estilos base para elementos animados
  const baseHeroTextStyle = {
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
  };

  // --- Mapeo de secciones a componentes ---
  const sectionComponents = {
    "inicio": () => (
      <section id="inicio" style={heroSectionStyle}>
        <div style={heroContentColumnStyle}>
          <h1 style={{
            ...baseHeroTextStyle,
            fontSize: '4.5rem', fontWeight: 'bold', marginBottom: '25px', lineHeight: 1.1, transitionDelay: '0.2s',
            opacity: isAnimated || hasAnimated ? 1 : 0,
            transform: isAnimated || hasAnimated ? 'translateY(0)' : 'translateY(20px)',
          }}>Soluciones <span style={{color: colors.primaryAccent}}>Integrales</span> para tu Propiedad</h1>
          <p style={{
            ...baseHeroTextStyle,
            fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '600px', marginBottom: '40px', color: colors.textLight, transitionDelay: '0.4s',
            opacity: isAnimated || hasAnimated ? 1 : 0,
            transform: isAnimated || hasAnimated ? 'translateY(0)' : 'translateY(20px)',
          }}>
            Desde reparaciones urgentes hasta mantenimiento preventivo, HOME UP es tu socio de confianza para garantizar la calidad, eficiencia y tranquilidad que mereces.
          </p>
          <button style={{
            ...baseHeroTextStyle,
            padding: '18px 45px', background: colors.primaryAccent, color: '#000', border: 'none',
            borderRadius: '50px', fontSize: '1.2rem', fontWeight: 'bold', cursor: 'pointer',
            textTransform: 'uppercase', letterSpacing: '1px', boxShadow: colors.heroButtonShadow,
            transition: 'all 0.5s ease-out', transitionDelay: '0.6s',
            opacity: isAnimated || hasAnimated ? 1 : 0,
            transform: isAnimated || hasAnimated ? 'translateY(0)' : 'translateY(20px)'
          }}
            onClick={() => setActiveSection('servicios')}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = colors.primaryAccentHover; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = colors.heroButtonShadowHover;}}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = colors.primaryAccent; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = colors.heroButtonShadow;}}
          >Descubre Más</button>
        </div>
        <div style={heroImageColumnStyle}>
          <div style={{
            ...baseHeroTextStyle,
            width: '100%', maxWidth: '500px', height: '600px', borderRadius: '20px',
            backgroundColor: colors.cardBg, border: `1px solid ${colors.borderColor}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: colors.textLight, fontSize: '2rem', textAlign: 'center',
            boxShadow: `0 0 40px rgba(255, 215, 0, 0.1)`, transitionDelay: '0.3s',
            opacity: isAnimated || hasAnimated ? 1 : 0,
            transform: isAnimated || hasAnimated ? 'translateY(0)' : 'translateY(20px)'
          }}>
            <img src="/img/inicio.JPG" alt="Imagen principal Home Up" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px'}} />
          </div>
        </div>
      </section>
    ),
    "servicios": () => <div style={contentSectionWrapper}><Servicio colors={colors} /></div>,
    "quienes-somos": () => <div style={contentSectionWrapper}><QuienesSomos colors={colors} /></div>,
    "equipo": () => <div style={contentSectionWrapper}><Equipo colors={colors} /></div>,
    "cobertura": () => <div style={contentSectionWrapper}><Cobertura colors={colors} /></div>,
    "contacto": () => <div style={contentSectionWrapper}><Contacto colors={colors} /></div>,
  };

  return (
    <div style={pageStyle}>
      {/* Header/nav único para toda la app SPA */}
      <header style={headerStyle}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginRight: 'auto' }}>HOME UP</div>
        <div style={rightHeaderSectionStyle}>
          <nav>
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex' }}>
              {navItems.map((item) => (
                <li key={item.name}><span
                  style={{...navLinkStyle, color: activeSection === item.path ? colors.primaryAccent : colors.headerText, cursor: 'pointer'}}
                  onClick={() => setActiveSection(item.path)}
                  onMouseEnter={(e) => { e.currentTarget.style.color = colors.primaryAccent; }}
                  onMouseLeave={(e) => { if (activeSection !== item.path) e.currentTarget.style.color = colors.headerText; }}
                >{item.name}</span></li>
              ))}
            </ul>
          </nav>
          <a href="/login" style={loginButtonStyle}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = colors.primaryAccent; e.currentTarget.style.color = '#000';}}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = colors.primaryAccent; }}
          >Iniciar Sesión</a>
        </div>
      </header>
      {/* Renderizado SPA de la sección activa */}
      <main style={mainStyle}>
        {sectionComponents[activeSection] && sectionComponents[activeSection]()}
      </main>
      <footer style={footerStyle}>
        <p>&copy; {new Date().getFullYear()} HOME UP. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default Inicio;
