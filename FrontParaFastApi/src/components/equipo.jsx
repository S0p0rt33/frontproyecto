import React, { useState, useEffect } from "react";
// Las siguientes importaciones no se usarán directamente en la sección "Equipo",
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
  memberCardBg: '#fdfdfd', // Fondo para las tarjetas de equipo
  primaryAccent: '#3498db',
  primaryAccentHover: '#2980b9',
  textDark: '#333333',
  textLight: '#555555',
  borderColor: '#e0e0e0',
  inputBg: '#ffffff',
  footerBg: '#34495e',
  footerText: '#bdc3c7',
  overlayColor: 'rgba(44, 62, 80, 0.6)',
};

// Estilos de secciones anteriores (promocional, input, label) se mantienen definidos
// pero no se usan en este render específico de la sección "Equipo".
const promotionalSectionStyle = { /* ... */ };
const promotionalTitleStyle = { /* ... */ };
const promotionalParagraphStyle = { /* ... */ };
const inputStyle = { /* ... */ };
const labelStyle = { /* ... */ };


const Home = () => {
  // La lógica para tareas y su estado se mantienen según el código original,
  // aunque no se use en la sección "Equipo".
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const fetchTareas = async () => {
      try {
        // Esta llamada se ejecutará, considera si es necesario para esta vista.
        const response = await axiosInstance.get("http://127.0.0.1:8000/tarea/");
        setTareas(response.data);
      } catch (error)
      {
        console.error("Error al cargar las tareas:", error);
        // Silenciamos el alert para no interrumpir la vista de "Equipo"
        // alert("Error al cargar las tareas. Revise la consola para más detalles.");
      }
    };
    fetchTareas();
  }, []);

  // handleCrearTarea no es relevante para la sección "Equipo".
  // const handleCrearTarea = async (e) => { ... };


  // Datos del equipo (debes reemplazarlos con los datos reales de HOME UP)
  const teamData = [
    {
      imagePlaceholder: "👤", // Puedes usar un path a una imagen real: '/images/miembro1.jpg'
      name: "Laura González",
      role: "Directora de Operaciones",
      bio: "Con más de 12 años de experiencia en la gestión de proyectos de mantenimiento y construcción, Laura asegura la ejecución impecable y eficiente de cada servicio.",
    },
    {
      imagePlaceholder: "🛠️",
      name: "Carlos Mendoza",
      role: "Jefe Técnico Especializado",
      bio: "Carlos lidera a nuestro equipo de técnicos, aportando su profundo conocimiento en múltiples disciplinas y su compromiso con la calidad y soluciones duraderas.",
    },
    {
      imagePlaceholder: "💼",
      name: "Sofía Vargas",
      role: "Atención al Cliente y Coordinación",
      bio: "Sofía es el primer punto de contacto para nuestros clientes, garantizando una comunicación clara, respuestas rápidas y una coordinación efectiva de los servicios.",
    },
    {
      imagePlaceholder: "👷",
      name: "Equipo de Técnicos",
      role: "Profesionales Calificados",
      bio: "Un grupo selecto de expertos en plomería, electricidad, albañilería, pintura y más, dedicados a brindar un trabajo de la más alta calidad con amabilidad y profesionalismo.",
    },
  ];

  // Estilos para la sección de Equipo
  const equipoSectionStyle = {
    backgroundColor: appColors.cardBg,
    padding: '40px 30px',
    borderRadius: '10px',
    boxShadow: '0 5px 20px rgba(0,0,0,0.07)',
    maxWidth: '1000px', // Ligeramente más ancho para acomodar bien las tarjetas
    margin: '0 auto 40px auto',
  };

  const equipoTitleStyle = {
    color: appColors.headerBg,
    textAlign: 'center',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '25px',
    borderBottom: `3px solid ${appColors.primaryAccent}`,
    paddingBottom: '15px',
  };

  const equipoIntroParagraphStyle = {
    fontSize: '1.15rem',
    lineHeight: '1.75',
    color: appColors.textLight,
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto 45px auto',
  };

  const memberCardsContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', // Responsive
    gap: '30px',
  };

  const memberCardStyle = {
    backgroundColor: appColors.memberCardBg,
    border: `1px solid ${appColors.borderColor}`,
    borderRadius: '8px',
    padding: '30px 25px',
    textAlign: 'center',
    boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const memberCardHoverStyle = {
    transform: 'translateY(-6px)',
    boxShadow: '0 8px 18px rgba(0,0,0,0.1)',
  };

  const memberCardImagePlaceholderStyle = {
    width: '130px',
    height: '130px',
    borderRadius: '50%',
    backgroundColor: appColors.primaryAccent, // Color de fondo si no hay imagen
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: appColors.headerText, // Color del icono/texto placeholder
    fontSize: '3.5rem', // Tamaño del icono placeholder
    marginBottom: '20px',
    overflow: 'hidden', // Para asegurar que la imagen (si la pones) no se desborde
    // Si usas una imagen real:
    // backgroundImage: `url(${member.imagePath})`, // Asegúrate de tener 'imagePath' en teamData
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
  };

  const memberCardNameStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: appColors.textDark,
    marginBottom: '8px',
  };

  const memberCardRoleStyle = {
    fontSize: '1rem',
    color: appColors.primaryAccent,
    fontWeight: '500',
    marginBottom: '15px',
    minHeight: '40px', // Para alinear roles si tienen 1 o 2 líneas
  };

  const memberCardBioStyle = {
    fontSize: '0.9rem',
    color: appColors.textLight,
    lineHeight: '1.6',
    flexGrow: 1, // Ayuda a que todas las tarjetas tengan una altura similar si el texto varía
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
        <section id="equipo" style={equipoSectionStyle}>
          <h1 style={equipoTitleStyle}>Nuestro Equipo de Expertos</h1>
          <p style={equipoIntroParagraphStyle}>
            En <strong>HOME UP</strong>, el pilar fundamental de nuestro éxito es nuestro equipo. Profesionales apasionados, con una vasta experiencia y un compromiso genuino con la excelencia, son quienes hacen posible que cada proyecto de mantenimiento locativo se convierta en una solución efectiva y satisfactoria para nuestros clientes en todo el sector urbano.
          </p>

          <div style={memberCardsContainerStyle}>
            {teamData.map((member, index) => (
              <div
                key={index}
                style={memberCardStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = memberCardHoverStyle.transform;
                  e.currentTarget.style.boxShadow = memberCardHoverStyle.boxShadow;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.06)';
                }}
              >
                <div style={memberCardImagePlaceholderStyle}>
                  {/* Si usas imágenes reales, puedes cambiar esto por un <img> */}
                  {/* Ejemplo: <img src={member.imagePath} alt={member.name} style={{width: '100%', height: '100%', objectFit: 'cover'}} /> */}
                  {member.imagePlaceholder}
                </div>
                <h3 style={memberCardNameStyle}>{member.name}</h3>
                <p style={memberCardRoleStyle}>{member.role}</p>
                <p style={memberCardBioStyle}>{member.bio}</p>
              </div>
            ))}
          </div>

          <p style={{...equipoIntroParagraphStyle, marginTop: '50px', fontSize: '1.1rem'}}>
            Cada miembro de nuestro equipo está listo para escuchar tus necesidades y ofrecerte la mejor asesoría y servicio. ¡Confía en los expertos de <strong>HOME UP</strong>!
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