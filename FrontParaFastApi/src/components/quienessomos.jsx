import React, { useRef, useState, useEffect } from "react";

// --- Componente "Quiénes Somos" Rediseñado ---
const QuienesSomos = ({ colors }) => {
  // --- LÓGICA DE ANIMACIÓN (APLICADA A MÚLTIPLES SECCIONES) ---
  const useAnimateOnScroll = (ref) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
      const observer = new window.IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      }, { threshold: 0.15 });
      const currentRef = ref.current;
      if (currentRef) observer.observe(currentRef);
      return () => { if (currentRef) observer.unobserve(currentRef); };
    }, [ref]);
    return isVisible;
  };

  // Referencias y estados para cada sección animada
  const introRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const experienceRef = useRef(null);

  const isIntroVisible = useAnimateOnScroll(introRef);
  const isMissionVisible = useAnimateOnScroll(missionRef);
  const isValuesVisible = useAnimateOnScroll(valuesRef);
  const isExperienceVisible = useAnimateOnScroll(experienceRef);

  // Datos para las tarjetas de valores
  const valuesData = [
    { icon: "🏆", title: "Calidad Superior", text: "Utilizamos materiales de primera y aplicamos las mejores prácticas para garantizar resultados duraderos y de excelencia." },
    { icon: "⏱️", title: "Eficiencia y Rapidez", text: "Optimizamos nuestros procesos para ofrecer respuestas rápidas y soluciones efectivas, respetando su tiempo y recursos." },
    { icon: "🤝", title: "Honestidad Absoluta", text: "Creemos en la comunicación clara y en construir relaciones de confianza a largo plazo a través de la transparencia." }
  ];

  // --- ESTILOS UNIFICADOS CON INICIO.JSX ---
  const pageStyle = {
    background: colors.pageBg,
    fontFamily: "'Segoe UI', 'Roboto', sans-serif",
    color: colors.textDark,
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    padding: 0
  };
  const mainStyle = { paddingTop: '70px', maxWidth: '1200px', margin: '0 auto', padding: '40px' };
  const sectionTitleStyle = {
    fontSize: '2.8rem', fontWeight: 'bold', color: colors.textDark, marginBottom: '15px', lineHeight: 1.2,
    textAlign: 'center',
  };
  const accentTextStyle = { color: colors.primaryAccent };
  const paragraphStyle = { fontSize: '1.1rem', lineHeight: '1.8', color: colors.textLight };
  const overlappingContainerStyle = {
    position: 'relative', display: 'flex', alignItems: 'center', minHeight: '500px', margin: '40px 0',
  };
  const backgroundImageStyle = {
    position: 'absolute', top: 0, height: '100%', borderRadius: '16px', backgroundSize: 'cover',
    backgroundPosition: 'center', opacity: 0.6,
  };
  const overlappingCardStyle = {
    position: 'relative', backgroundColor: colors.cardBg, padding: '50px', borderRadius: '16px',
    boxShadow: '0 15px 40px rgba(0,0,0,0.5)', border: `1px solid ${colors.borderColor}`, backdropFilter: 'blur(10px)',
  };
  const missionSectionStyle = { textAlign: 'center', position: 'relative', padding: '100px 20px' };
  const missionQuoteStyle = {
    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '20rem',
    color: colors.borderColor, opacity: 0.05, zIndex: 1,
  };
  const missionContentStyle = { position: 'relative', zIndex: 2, maxWidth: '800px', margin: '0 auto' };
  const valuesGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', marginTop: '40px' };
  const valueCardStyle = (isVisible, index) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: `opacity 0.6s ease-out ${index * 0.15}s, transform 0.6s ease-out ${index * 0.15}s`,
    backgroundColor: colors.cardBg,
    border: `1px solid ${colors.borderColor}`,
    backdropFilter: 'blur(10px)',
    padding: '35px', borderRadius: '16px',
    transitionProperty: 'transform, border-color, box-shadow, opacity',
    transitionDuration: '0.3s, 0.3s, 0.3s, 0.6s',
    transitionTimingFunction: 'ease',
  });
  const valueIconStyle = { fontSize: '2.5rem', marginBottom: '20px', color: colors.primaryAccent };
  const valueTitleStyle = { fontSize: '1.4rem', fontWeight: '600', marginBottom: '10px', color: colors.textDark };
  const footerStyle = {   
    textAlign: 'center', padding: '50px 40px', marginTop: '60px',
    backgroundColor: colors.footerBg, color: colors.footerText,
    borderTop: `1px solid ${colors.borderColor}`,
  };

  return (
    <div style={pageStyle}>
      <main style={mainStyle}>
        <section id="quienes-somos" ref={introRef} style={{...overlappingContainerStyle, opacity: isIntroVisible ? 1 : 0, transform: isIntroVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.6s, transform 0.6s'}}>
          {/* Imagen de aliado.JPG */}
          <div style={{...backgroundImageStyle, width: '65%', left: 0, backgroundImage: `url('/img/aliado.JPG')`}} />
          <div style={{...overlappingCardStyle, width: '55%', marginLeft: 'auto', opacity: isIntroVisible ? 1 : 0, transform: isIntroVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.6s 0.2s, transform 0.6s 0.2s'}}>
            <h1 style={sectionTitleStyle}>Somos <span style={accentTextStyle}>Aliados</span> en el Cuidado de tu Propiedad</h1>
            <p style={paragraphStyle}>
              En <strong>HOME UP</strong>, somos más que una empresa de mantenimiento; somos socios estratégicos dedicados a la optimización y preservación del valor de sus propiedades.
            </p>
          </div>
        </section>

        <section ref={missionRef} style={{...missionSectionStyle, opacity: isMissionVisible ? 1 : 0, transform: isMissionVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.6s, transform 0.6s'}}>
          <div style={missionQuoteStyle}>“</div>
          <div style={missionContentStyle}>
            <h2 style={{...sectionTitleStyle, fontSize: '2.2rem'}}>Nuestra Misión</h2>
            <p style={{...paragraphStyle, fontSize: '1.2rem', fontStyle: 'italic', color: colors.textDark}}>
              Asegurar que cada inmueble bajo nuestro cuidado se mantenga en condiciones óptimas de funcionalidad, seguridad y estética, brindando tranquilidad total a nuestros clientes.
            </p>
          </div>
        </section>

        <section ref={valuesRef} style={{margin: '60px 0', opacity: isValuesVisible ? 1 : 0, transform: isValuesVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.6s, transform 0.6s'}}>
          <h2 style={{textAlign: 'center', ...sectionTitleStyle}}>Nuestros Valores Fundamentales</h2>
          <div style={valuesGridStyle}>
            {valuesData.map((value, index) => (
              <div key={index} style={valueCardStyle(isValuesVisible, index)}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = colors.primaryAccent;
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.4)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = colors.borderColor;
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={valueIconStyle}>{value.icon}</div>
                <h3 style={valueTitleStyle}>{value.title}</h3>
                <p style={{...paragraphStyle, fontSize: '0.95rem'}}>{value.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section ref={experienceRef} style={{...overlappingContainerStyle, opacity: isExperienceVisible ? 1 : 0, transform: isExperienceVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.6s, transform 0.6s'}}>
          {/* Imagen de experiencia.jpeg */}
          <div style={{...backgroundImageStyle, width: '65%', left: 'auto', right: 0, backgroundImage: `url('/img/experiencia.jpeg')`}}></div>
          <div style={{...overlappingCardStyle, width: '55%', marginLeft: 0, marginRight: 'auto', opacity: isExperienceVisible ? 1 : 0, transform: isExperienceVisible ? 'translateY(0)' : 'translateY(30px)', transition: 'opacity 0.6s 0.2s, transform 0.6s 0.2s'}}>
            <h2 style={sectionTitleStyle}><span style={accentTextStyle}>Experiencia</span> y Compromiso Urbano</h2>
            <p style={paragraphStyle}>
              Nuestro equipo de profesionales está rigurosamente seleccionado y calificado. Comprendemos los desafíos únicos del entorno urbano para ofrecer un servicio inigualable.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default QuienesSomos;
