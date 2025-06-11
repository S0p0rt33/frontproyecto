import React, { useRef, useState, useEffect } from 'react';

// --- Componente Equipo (Versión Rediseñada) ---
const Equipo = ({ colors }) => {

  // --- 1. CONTENIDO AMPLIADO Y PROFESIONAL ---
  // Se añade más información, nuevos roles y se usan íconos en lugar de imágenes.
  const teamData = [
    {
      nombre: "Alejandro Rojas",
      cargo: "Director de Operaciones",
      descripcion: "Con más de 15 años de experiencia, Alejandro orquesta cada proyecto con precisión. Su liderazgo garantiza que los estándares de calidad, tiempo y presupuesto se cumplan rigurosamente, asegurando la máxima eficiencia.",
      icono: "🧠" // Ícono para estrategia y liderazgo
    },
    {
      nombre: "Valentina Correa",
      cargo: "Líder de Atención al Cliente y Proyectos",
      descripcion: "Valentina es el puente entre tus necesidades y nuestro equipo. Garantiza una comunicación fluida y transparente desde la cotización hasta la entrega final, asegurando que tu visión se materialice a la perfección.",
      icono: "📞" // Ícono para comunicación y cliente
    },
    {
      nombre: "Ricardo Mendoza",
      cargo: "Supervisor Técnico Senior",
      descripcion: "La mente maestra detrás de la ejecución en campo. Ricardo supervisa a nuestros técnicos, resuelve los desafíos más complejos y certifica que cada trabajo, sin importar su tamaño, cumpla con nuestros exigentes estándares de calidad.",
      icono: "📈" // Ícono para supervisión y calidad
    },
    {
      nombre: "Técnicos Especialistas",
      cargo: "El Corazón Operativo de Home Up",
      descripcion: "Nuestro equipo de técnicos certificados en plomería, electricidad, albañilería y más. Son profesionales dedicados, cuyo talento y compromiso son la base de cada solución exitosa que entregamos a nuestros clientes.",
      icono: "🛠️" // Ícono para el equipo técnico
    }
  ];

  // --- 2. LÓGICA DE ANIMACIÓN AL HACER SCROLL ---
  const sectionRef = useRef(null);

  const useAnimateOnScroll = (ref) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      }, { threshold: 0.1 });

      const currentRef = ref.current;
      if (currentRef) observer.observe(currentRef);
      return () => { if (currentRef) observer.unobserve(currentRef); };
    }, [ref]);
    return isVisible;
  };

  const isSectionVisible = useAnimateOnScroll(sectionRef);

  const animatedStyle = (isVisible, delay = 0) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`,
  });


  // --- 3. ESTILOS MODERNIZADOS ---
  const pageStyle = {
    // Se asume que el contenedor padre ya tiene el fondo y la fuente.
    // Este componente se enfoca en su contenido interno.
  };
  const mainStyle = { maxWidth: '1200px', margin: '0 auto', padding: '40px 20px' };
  const sectionTitleStyle = {
    fontSize: '2.8rem', fontWeight: 'bold', color: colors.textDark, marginBottom: '20px', lineHeight: 1.2,
    textAlign: 'center',
  };
  const introParagraphStyle = {
      textAlign: 'center',
      color: colors.textLight,
      fontSize: '1.15rem',
      lineHeight: 1.7,
      maxWidth: '800px',
      margin: '0 auto 50px auto',
  };
  const gridStyle = {
    display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px',
  };

  // Estilo de tarjeta evolucionado
  const cardStyle = (index) => ({
    ...animatedStyle(isSectionVisible, index * 0.1), // Animación en cascada
    background: colors.cardBg,
    border: `1px solid ${colors.borderColor}`,
    borderRadius: '18px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
    backdropFilter: 'blur(10px)',
    padding: '30px',
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
    color: colors.textDark,
    display: 'flex', flexDirection: 'column', alignItems: 'center',
    minHeight: '450px', // Altura aumentada para más texto
    justifyContent: 'flex-start',
  });
  
  // Nuevo estilo para el contenedor del ícono
  const iconContainerStyle = {
    width: '120px', height: '120px', borderRadius: '50%',
    background: `linear-gradient(145deg, ${colors.cardBg}, rgba(255, 255, 255, 0.1))`,
    border: `2px solid ${colors.borderColor}`,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    marginBottom: '25px',
    transition: 'border-color 0.3s ease',
  };
  const iconStyle = {
      fontSize: '3.5rem', // Tamaño del emoji
      opacity: 0.8,
  };

  // Tipografía de tarjeta refinada
  const nameStyle = { fontSize: '1.5rem', fontWeight: '600', marginBottom: '8px', color: colors.textDark };
  const roleStyle = { fontSize: '1.1rem', color: colors.primaryAccent, marginBottom: '16px', fontWeight: '500', minHeight: '50px' };
  const descStyle = { fontSize: '1rem', color: colors.textLight, lineHeight: 1.6 };

  return (
    <div style={pageStyle}>
      <main style={mainStyle} ref={sectionRef}>
        <h2 style={{...sectionTitleStyle, ...animatedStyle(isSectionVisible)}}>
          Un Equipo <span style={{ color: colors.primaryAccent }}>Comprometido</span> con la Excelencia
        </h2>
        <p style={{...introParagraphStyle, ...animatedStyle(isSectionVisible, 0.1)}}>
          Detrás de cada proyecto exitoso de HOME UP, hay un equipo de profesionales apasionados. No solo somos expertos en nuestro campo; somos personas dedicadas a construir confianza y a entregar resultados que superen tus expectativas.
        </p>
        <div style={gridStyle}>
          {teamData.map((miembro, idx) => (
            <div
              key={idx}
              style={cardStyle(idx)}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 16px 50px rgba(0,0,0,0.3)';
                // Encuentra el contenedor del ícono dentro de la tarjeta y cambia su borde
                e.currentTarget.querySelector('.icon-container').style.borderColor = colors.primaryAccent;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.2)';
                e.currentTarget.querySelector('.icon-container').style.borderColor = colors.borderColor;
              }}
            >
              {/* Contenedor del Ícono (reemplaza a <img>) */}
              <div className="icon-container" style={iconContainerStyle}>
                  <span style={iconStyle} role="img" aria-label="ícono de rol">{miembro.icono}</span>
              </div>
              
              <h3 style={nameStyle}>{miembro.nombre}</h3>
              <p style={roleStyle}>{miembro.cargo}</p>
              <p style={descStyle}>{miembro.descripcion}</p>
            </div>
          ))}
        </div>
      </main> 
    </div>
  );
};

export default Equipo;