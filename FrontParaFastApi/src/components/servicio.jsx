import React, { useState, useEffect, useRef } from 'react';

// --- Componente "Servicio" Rediseñado con Animaciones ---
// Este componente está diseñado para ser importado dentro de tu página principal (Inicio.jsx).
const Servicio = ({ colors }) => {

  // Tema por defecto si los colores no se pasan como props.
  if (!colors) {
    colors = {
      pageBg: '#121212', cardBg: 'rgba(26, 26, 50, 0.6)', primaryAccent: '#FFD700',
      textDark: '#ffffff', textLight: '#b0bec5', borderColor: 'rgba(255, 215, 0, 0.2)',
    };
  }

  // --- Lógica de Animación ---
  const sectionRef = useRef(null);

  const useAnimateOnScroll = (ref) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setIsVisible(entry.isIntersecting);
      }, { threshold: 0.1 }); // Se activa cuando el 10% es visible

      const currentRef = ref.current;
      if (currentRef) {
        observer.observe(currentRef);
      }
      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }, [ref]);
    return isVisible;
  };

  const isSectionVisible = useAnimateOnScroll(sectionRef);

  // Datos de los servicios
  const servicesData = [
    { icon: "🔧", title: "Plomería General y Especializada", description: "Detección y reparación de fugas, instalación de grifería, sanitarios y desatascos de tuberías." },
    { icon: "💡", title: "Instalaciones Eléctricas", description: "Solución de fallas, instalación de puntos de luz, tomas, tableros eléctricos y certificaciones de seguridad." },
    { icon: "🧱", title: "Albañilería y Acabados", description: "Reparaciones menores, revoques, estucos, instalación de revestimientos y enchapes finos." },
    { icon: "🖌️", title: "Pintura Profesional", description: "Aplicación de pintura en interiores, exteriores y fachadas con preparación exhaustiva de superficies." },
    { icon: "💧", title: "Impermeabilización Integral", description: "Soluciones efectivas para cubiertas, terrazas y muros para prevenir y corregir humedades y filtraciones." },
    { icon: "🔩", title: "Carpintería y Ebanistería", description: "Diseño, fabricación y reparación de puertas, closets, cocinas integrales y muebles a medida." },
    { icon: "🛠️", title: "Mantenimiento Preventivo", description: "Planes personalizados para empresas y conjuntos residenciales, con inspecciones periódicas y emergencias." },
    { icon: "🌿", title: "Jardinería y Paisajismo", description: "Diseño, instalación y mantenimiento de zonas verdes, jardines verticales y sistemas de riego." },
  ];

  // --- OBJETOS DE ESTILO ---
  const animatedContainerStyle = (isVisible) => ({
    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
  });

  const servicesIntroParagraphStyle = {
    fontSize: '1.15rem',
    lineHeight: '1.7',
    color: colors.textLight,
    textAlign: 'center',
    maxWidth: '800px',
    margin: '-40px auto 40px auto', // Margen negativo para acercarlo al título
  };

  const serviceCardsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
  };

  const serviceCardStyle = (isVisible, index) => ({
    ...animatedContainerStyle(isVisible),
    transitionDelay: `${index * 0.1}s`, // Efecto de cascada
    backgroundColor: colors.cardBg,
    border: `1px solid ${colors.borderColor}`,
    borderRadius: '16px',
    padding: '35px',
    textAlign: 'center',
    backdropFilter: 'blur(10px)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
  });  

  const serviceCardIconStyle = {
    fontSize: '3rem',
    color: colors.primaryAccent,
    marginBottom: '20px',
  };

  const serviceCardTitleStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: colors.textDark,
    marginBottom: '15px',
    minHeight: '56px', // Altura mínima para alinear títulos de 1 o 2 líneas
  };

  const serviceCardDescriptionStyle = {
    fontSize: '1rem',
    color: colors.textLight,
    lineHeight: '1.65',
  };

  const contactLinkStyle = {
      color: colors.primaryAccent,
      fontWeight: 'bold',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
  }

  return (
    <div ref={sectionRef} style={animatedContainerStyle(isSectionVisible)}>
      <p style={servicesIntroParagraphStyle}>
        Entendemos que cada propiedad es única. Por ello, ofrecemos una completa gama de servicios de mantenimiento, diseñados para cubrir todas las necesidades del sector urbano y garantizar su tranquilidad.
      </p>

      <div style={serviceCardsContainerStyle}>
        {servicesData.map((service, index) => (
          <div
            key={index}
            style={serviceCardStyle(isSectionVisible, index)}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)';
              e.currentTarget.style.boxShadow = `0 10px 20px rgba(0,0,0,0.2)`;
              e.currentTarget.style.borderColor = colors.primaryAccent;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
              e.currentTarget.style.borderColor = colors.borderColor;
            }}
          >
            <div style={serviceCardIconStyle} role="img" aria-label={service.title}>{service.icon}</div>
            <h3 style={serviceCardTitleStyle}>{service.title}</h3>
            <p style={serviceCardDescriptionStyle}>{service.description}</p>
          </div>
        ))}
      </div>

      <p style={{...servicesIntroParagraphStyle, marginTop: '50px', fontSize: '1.1rem'}}>
        ¿No encuentras lo que buscas? <a href="#contacto" style={contactLinkStyle} onMouseEnter={(e) => e.target.style.color=colors.primaryAccentHover} onMouseLeave={(e) => e.target.style.color=colors.primaryAccent}>Contáctanos</a>. Estamos listos para adaptar nuestros servicios a tus requerimientos.
      </p>
    </div>
  );
};

export default Servicio;
