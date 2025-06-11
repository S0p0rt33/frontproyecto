import React, { useState, useEffect, useRef } from 'react';

// --- Componente "Cobertura" Rediseñado con Animaciones Mejoradas ---
// Este componente está diseñado para ser importado dentro de tu página principal.
const Cobertura = ({ colors }) => {

  // Tema por defecto si los colores no se pasan como props, para pruebas aisladas.
  if (!colors) {
    colors = {
      pageBg: '#121212', cardBg: 'rgba(26, 26, 50, 0.6)', primaryAccent: '#FFD700',
      textDark: '#ffffff', textLight: '#b0bec5', borderColor: 'rgba(255, 215, 0, 0.2)',
      overlayColor: 'rgba(0,0,0,0.5)'
    };
  }

  // --- Lógica de Animación Constante ---
  const sectionRef = useRef(null);
  const useAnimateOnScroll = (ref) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setIsVisible(entry.isIntersecting);
      }, { threshold: 0.1 });

      const currentRef = ref.current;
      if (currentRef) observer.observe(currentRef);
      return () => {
        if (currentRef) observer.unobserve(currentRef);
      };
    }, [ref]);
    return isVisible;
  };

  const isSectionVisible = useAnimateOnScroll(sectionRef);

  // Datos de las zonas de cobertura
  const coverageZones = [
    { icon: "🏙️", name: "Zona Norte Urbana", description: "Principales barrios residenciales y comerciales, incluyendo distritos financieros." },
    { icon: "🏛️", name: "Zona Centro y Ampliado", description: "Servicio en el corazón de la ciudad, áreas históricas, comerciales y zonas de oficinas." },
    { icon: "🏢", name: "Zona Occidental Principal", description: "Atendemos importantes sectores residenciales mixtos y corredores empresariales." },
    { icon: "🏭", name: "Zona Sur Estratégica", description: "Cobertura en barrios residenciales clave y áreas comerciales dinámicas de la ciudad." },
  ];

  // --- OBJETOS DE ESTILO MEJORADOS ---
  const animatedContainerStyle = (isVisible, delay = 0) => ({
    transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
    transitionDelay: `${delay}s`,
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
  });
  
  const titleWrapperStyle = {
    textAlign: 'center',
    marginBottom: '40px',
  };

  const sectionTitleStyle = {
    display: 'inline-block',
    backgroundColor: colors.cardBg,
    color: colors.textDark,
    padding: '15px 40px',
    borderRadius: '50px',
    border: `1px solid ${colors.borderColor}`,
    fontSize: '2.5rem',
    fontWeight: '600',
    boxShadow: '0 5px 20px rgba(0,0,0,0.3)',
    backdropFilter: 'blur(5px)',
  };

  const accentTextStyle = {
    color: colors.primaryAccent,
  };

  const introParagraphStyle = {
    fontSize: '1.15rem',
    lineHeight: '1.7',
    color: colors.textLight,
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto 50px auto',
  };

  const mainContentStyle = {
      display: 'flex',
      flexWrap: 'wrap', // Permite que se ajuste en pantallas pequeñas
      gap: '40px',
      alignItems: 'center',
  };

  const mapColumnStyle = {
      flex: '1 1 45%', // Toma 45% del ancho, con flexibilidad
      minWidth: '320px',
  };

  const zonesColumnStyle = {
      flex: '1 1 50%', // Toma 50% del ancho, con flexibilidad
      minWidth: '320px',
  };

  // Estilo para el mapa con animación de pulso
  const mapPlaceholderStyle = {
    width: '100%',
    height: '500px',
    backgroundColor: colors.cardBg,
    borderRadius: '16px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: colors.textLight,
    fontSize: '1.2rem',
    fontWeight: '500',
    textAlign: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    border: `1px solid ${colors.borderColor}`,
    backdropFilter: 'blur(10px)',
    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    animation: 'subtleGlow 4s infinite ease-in-out', // Animación de pulso
  };

  const zonesContainerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '20px',
  };

  const zoneCardStyle = (isVisible, index) => ({
    ...animatedContainerStyle(isVisible, index * 0.1 + 0.3),
    display: 'flex',
    alignItems: 'center',
    backgroundColor: colors.cardBg,
    padding: '20px 25px',
    borderRadius: '12px',
    border: `1px solid ${colors.borderColor}`,
    transition: 'transform 0.3s ease, background-color 0.3s ease, box-shadow 0.4s ease',
  });
  
  const zoneIconStyle = {
    fontSize: '2rem',
    marginRight: '20px',
  };

  const zoneTextStyle = { textAlign: 'left' };
  const zoneTitleStyle = { fontSize: '1.3rem', fontWeight: '600', color: colors.textDark, marginBottom: '5px' };
  const zoneDescriptionStyle = { fontSize: '0.95rem', color: colors.textLight, lineHeight: '1.6' };
  const contactLinkStyle = { color: colors.primaryAccent, fontWeight: 'bold', textDecoration: 'none', transition: 'color 0.3s ease' }

  return (
    // La animación se aplica a todo el contenido de la sección
    <div ref={sectionRef}>
      <style>
        {`
          @keyframes subtleGlow {
            0% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.1); }
            50% { box-shadow: 0 0 35px rgba(255, 215, 0, 0.25); }
            100% { box-shadow: 0 0 20px rgba(255, 215, 0, 0.1); }
          }
        `}
      </style>
      <div style={{...titleWrapperStyle, ...animatedContainerStyle(isSectionVisible)}}>
          <h2 id="cobertura" style={sectionTitleStyle}>
              Nuestra Área de <span style={accentTextStyle}>Cobertura</span>
          </h2>
      </div>

      <p style={{...introParagraphStyle, ...animatedContainerStyle(isSectionVisible, 0.1)}}>
        Nuestro compromiso es llegar hasta donde usted nos necesite dentro del dinámico sector urbano, ofreciendo una respuesta ágil y eficiente.
      </p>
      
      <div style={mainContentStyle}>
        <div style={{...mapColumnStyle, ...animatedContainerStyle(isSectionVisible, 0.2)}}>
            <div 
              style={mapPlaceholderStyle}
              onMouseEnter={(e) => { e.currentTarget.style.animationPlayState = 'paused'; e.currentTarget.style.borderColor = colors.primaryAccent; e.currentTarget.style.boxShadow = `0 0 40px rgba(255, 215, 0, 0.3)`;}}
              onMouseLeave={(e) => { e.currentTarget.style.animationPlayState = 'running'; e.currentTarget.style.borderColor = colors.borderColor;}}
            >
              <span style={{fontSize: '3.5rem', marginBottom: '15px'}} role="img" aria-label="map icon">🗺️</span>
              <p style={{color: colors.textDark, fontSize: '1.3rem', fontWeight: 600}}>Visualiza Nuestra Cobertura</p>
              <p style={{fontSize: '0.9rem', maxWidth: '80%'}}>(Aquí podrías integrar un mapa interactivo de Google Maps)</p>
            </div>
        </div>

        <div style={zonesColumnStyle}>
            <div style={zonesContainerStyle}>
                {coverageZones.map((zone, index) => (
                    <div 
                        key={index} 
                        style={zoneCardStyle(isSectionVisible, index)}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                          e.currentTarget.style.boxShadow = `0 8px 25px rgba(0,0,0,0.3), 0 0 15px ${colors.overlayColor}`;
                          e.currentTarget.style.backgroundColor = 'rgba(255, 215, 0, 0.05)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0) scale(1)';
                          e.currentTarget.style.boxShadow = 'none';
                          e.currentTarget.style.backgroundColor = colors.cardBg;
                        }}
                    >
                        <div style={zoneIconStyle}>{zone.icon}</div>
                        <div style={zoneTextStyle}>
                            <h3 style={zoneTitleStyle}>{zone.name}</h3>
                            <p style={zoneDescriptionStyle}>{zone.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

       <p style={{...introParagraphStyle, ...animatedContainerStyle(isSectionVisible, 0.4), marginTop: '60px', fontSize: '1.1rem'}}>
          <strong>¿Tu propiedad está fuera de estas áreas?</strong> No dudes en <a href="#contacto" style={contactLinkStyle} onMouseEnter={(e) => e.target.style.color=colors.primaryAccentHover} onMouseLeave={(e) => e.target.style.color=colors.primaryAccent}>consultarnos</a>. Siempre estamos dispuestos a evaluar la posibilidad de extender nuestros servicios.
      </p>
    </div>
  );
};

export default Cobertura;
