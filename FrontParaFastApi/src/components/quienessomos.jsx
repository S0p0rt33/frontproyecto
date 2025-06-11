import React from "react";

// Elementos del menú de navegación
const navItems = [
  { name: "INICIO", path: "#inicio" },
  { name: "QUIÉNES SOMOS", path: "#quienes-somos" },
  { name: "SERVICIOS", path: "#servicios" },
  { name: "EQUIPO", path: "#equipo" },
  { name: "CONTACTO", path: "#contacto" },
];

const HEADER_HEIGHT = '65px';

// --- NUEVA PALETA DE COLORES "DARK MODE" ---
const appColors = {
  headerBg: '#1e272e', // Un gris casi negro para el header
  headerText: '#ffffff',
  pageBg: '#2c3e50', // Fondo principal azul (como el resto del proyecto)
  cardBg: '#1e272e', // Tarjetas en un tono ligeramente más claro
  primaryAccent: '#00a8ff', // Un azul eléctrico que resalta en la oscuridad
  primaryAccentHover: '#0097e6',
  textDark: '#f5f6fa', // Texto principal casi blanco
  textLight: '#aaa69d', // Texto secundario más apagado
  borderColor: '#485460',
  footerText: '#d2dae2',
};

// --- Componente "Quiénes Somos" Rediseñado ---
const QuienesSomos = () => {

  // --- OBJETOS DE ESTILO PARA EL NUEVO DISEÑO ---
  const pageStyle = { backgroundColor: appColors.pageBg, fontFamily: "'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif", color: appColors.textDark, };
  const headerStyle = {
    backgroundColor: appColors.headerBg, color: appColors.headerText, padding: '0 30px', height: HEADER_HEIGHT,
    position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000, display: 'flex', alignItems: 'center',
    justifyContent: 'space-between', boxShadow: '0 4px 10px rgba(0,0,0,0.4)', borderBottom: `2px solid ${appColors.primaryAccent}`,
  };
  const navLinkStyle = {
    color: appColors.headerText, textDecoration: 'none', padding: '8px 15px', borderRadius: '4px',
    fontWeight: '500', transition: 'background-color 0.3s ease, color 0.3s ease'
  };
  const mainStyle = { paddingTop: `calc(${HEADER_HEIGHT} + 40px)`, maxWidth: '1200px', margin: '0 auto', padding: '20px' };
  const sectionStyle = { padding: '80px 0', };

  // Estilos para el nuevo diseño superpuesto
  const overlappingContainerStyle = {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      minHeight: '500px',
      margin: '40px 0',
  };

  const backgroundImageStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '65%',
      height: '100%',
      borderRadius: '16px',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.4,
  };

  const overlappingCardStyle = {
      position: 'relative',
      marginLeft: 'auto',
      width: '55%',
      backgroundColor: appColors.cardBg,
      padding: '40px',
      borderRadius: '16px',
      boxShadow: '0 15px 40px rgba(0,0,0,0.5)',
  };

  const sectionTitleStyle = {
      fontSize: '2.8rem',
      fontWeight: 'bold',
      color: appColors.textDark,
      marginBottom: '15px',
      lineHeight: 1.2,
  };
  
  const accentTextStyle = {
      color: appColors.primaryAccent,
  };

  const paragraphStyle = {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: appColors.textLight,
  };

  // Estilos para la sección Misión
  const missionSectionStyle = {
      ...sectionStyle,
      textAlign: 'center',
      position: 'relative',
      padding: '100px 20px',
  };

  const missionQuoteStyle = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      fontSize: '20rem',
      color: appColors.borderColor,
      opacity: 0.1,
      zIndex: 1,
  };

  const missionContentStyle = {
      position: 'relative',
      zIndex: 2,
      maxWidth: '800px',
      margin: '0 auto',
  };

  // Estilos para tarjetas de Valores
  const valuesGridStyle = {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
      gap: '30px',
      marginTop: '40px',
  };

  const valueCardStyle = {
      backgroundColor: 'transparent',
      border: `1px solid ${appColors.borderColor}`,
      padding: '30px',
      borderRadius: '12px',
      transition: 'all 0.3s ease',
  };

  const valueIconStyle = { fontSize: '2.5rem', marginBottom: '20px', color: appColors.primaryAccent };
  const valueTitleStyle = { fontSize: '1.4rem', fontWeight: '600', marginBottom: '10px', color: appColors.textDark };
  const valueTextStyle = { fontSize: '0.95rem', lineHeight: '1.6', color: appColors.textLight };

  const footerStyle = {
    textAlign: 'center', padding: '40px', marginTop: '60px',
    backgroundColor: appColors.footerBg, color: appColors.footerText,
  };

  return (
    <div style={pageStyle}>
      <header style={headerStyle}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginRight: 'auto' }}>HOME UP</div>
        <nav>
          <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex' }}>
            {navItems.map((item) => (
              <li key={item.name} style={{ marginLeft: '10px' }}>
                <a href={item.path} style={navLinkStyle}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = appColors.primaryAccent; e.currentTarget.style.color = '#fff';}}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = appColors.headerText; }}
                >{item.name.toUpperCase()}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main style={mainStyle}>
        {/* --- SECCIÓN 1: INTRODUCCIÓN CON DISEÑO SUPERPUESTO --- */}
        <section id="quienes-somos" style={overlappingContainerStyle}>
            <div style={{...backgroundImageStyle, backgroundImage: `url('/img/aliado.JPG')`}}></div>
            <div style={overlappingCardStyle}>
                <h1 style={sectionTitleStyle}>Somos <span style={accentTextStyle}>Aliados</span> en el Cuidado de tu Propiedad</h1>
                <p style={paragraphStyle}>
                    En <strong>HOME UP</strong>, somos más que una empresa de mantenimiento; somos socios estratégicos dedicados a la optimización y preservación del valor de sus propiedades, con soluciones integrales adaptadas a la vida moderna.
                </p>
            </div>
        </section>

        {/* --- SECCIÓN 2: MISIÓN --- */}
        <section style={missionSectionStyle}>
            <div style={missionQuoteStyle}>“</div>
            <div style={missionContentStyle}>
                <h2 style={{...sectionTitleStyle, fontSize: '2.2rem'}}>Nuestra Misión</h2>
                <p style={{...paragraphStyle, fontSize: '1.2rem', fontStyle: 'italic', color: appColors.textDark}}>
                    Asegurar que cada inmueble bajo nuestro cuidado se mantenga en condiciones óptimas de funcionalidad, seguridad y estética, brindando tranquilidad total a nuestros clientes para que puedan enfocarse en sus actividades principales.
                </p>
            </div>
        </section>

        {/* --- SECCIÓN 3: VALORES --- */}
        <section style={sectionStyle}>
            <h2 style={{textAlign: 'center', ...sectionTitleStyle}}>Nuestros Valores Fundamentales</h2>
            <div style={valuesGridStyle}>
                {/* Tarjeta Valor 1 */}
                <div style={valueCardStyle} onMouseEnter={(e) => {e.currentTarget.style.borderColor = appColors.primaryAccent; e.currentTarget.style.transform = 'translateY(-5px)'}} onMouseLeave={(e) => {e.currentTarget.style.borderColor = appColors.borderColor; e.currentTarget.style.transform = 'translateY(0)'}}>
                    <div style={valueIconStyle}>🏆</div>
                    <h3 style={valueTitleStyle}>Calidad Superior</h3>
                    <p style={valueTextStyle}>Utilizamos materiales de primera y aplicamos las mejores prácticas para garantizar resultados duraderos y de excelencia.</p>
                </div>
                {/* Tarjeta Valor 2 */}
                <div style={valueCardStyle} onMouseEnter={(e) => {e.currentTarget.style.borderColor = appColors.primaryAccent; e.currentTarget.style.transform = 'translateY(-5px)'}} onMouseLeave={(e) => {e.currentTarget.style.borderColor = appColors.borderColor; e.currentTarget.style.transform = 'translateY(0)'}}>
                    <div style={valueIconStyle}>⏱️</div>
                    <h3 style={valueTitleStyle}>Eficiencia y Rapidez</h3>
                    <p style={valueTextStyle}>Optimizamos nuestros procesos para ofrecer respuestas rápidas y soluciones efectivas, respetando su tiempo y recursos.</p>
                </div>
                {/* Tarjeta Valor 3 */}
                <div style={valueCardStyle} onMouseEnter={(e) => {e.currentTarget.style.borderColor = appColors.primaryAccent; e.currentTarget.style.transform = 'translateY(-5px)'}} onMouseLeave={(e) => {e.currentTarget.style.borderColor = appColors.borderColor; e.currentTarget.style.transform = 'translateY(0)'}}>
                    <div style={valueIconStyle}>🤝</div>
                    <h3 style={valueTitleStyle}>Honestidad Absoluta</h3>
                    <p style={valueTextStyle}>Creemos en la comunicación clara y en construir relaciones de confianza a largo plazo a través de la transparencia.</p>
                </div>
            </div>
        </section>

        {/* --- SECCIÓN 4: EXPERIENCIA (SUPERPUESTO INVERTIDO) --- */}
        <section style={overlappingContainerStyle}>
             <div style={{...backgroundImageStyle, left: 'auto', right: 0, backgroundImage: `url('/img/experiencia.jpeg')`}}></div>
             <div style={{...overlappingCardStyle, marginLeft: 0, marginRight: 'auto'}}>
                <h2 style={sectionTitleStyle}><span style={accentTextStyle}>Experiencia</span> y Compromiso Urbano</h2>
                <p style={paragraphStyle}>
                    Nuestro equipo de profesionales está rigurosamente seleccionado y calificado en un amplio espectro de especialidades. Comprendemos los desafíos únicos del entorno urbano para ofrecer un servicio inigualable.
                </p>
             </div>
        </section>
      </main>

      <footer style={footerStyle}>    
      </footer>
    </div>
  );
};

// Se asume que el nombre del componente debería ser QuienesSomos
// si este archivo es solo para esa sección.
export default QuienesSomos;