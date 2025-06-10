import React, { useState, useEffect } from "react";
import axiosInstance from "../api/axioInstance"; // Asegúrate que la ruta sea correcta
import ListCargo from "./ListaCargo.jsx"; // Asegúrate que la ruta sea correcta y que este componente exista

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
  borderColor: '#dddddd',
  inputBg: '#ffffff',
  footerBg: '#34495e',
  footerText: '#bdc3c7',
  overlayColor: 'rgba(44, 62, 80, 0.6)', // Color para la superposición de la imagen (azul oscuro semitransparente)
};


const Home = () => {
  const [tareas, setTareas] = useState([]);
  // ... (resto de tus estados no necesitan cambio para esto)

  useEffect(() => {
    const fetchTareas = async () => {
      try {
        const response = await axiosInstance.get("http://127.0.0.1:8000/tarea/");
        setTareas(response.data);
      } catch (error) {
        console.error("Error al cargar las tareas:", error);
        alert("Error al cargar las tareas. Revise la consola para más detalles.");
      }
    };
    fetchTareas();
  }, []);

  const handleCrearTarea = async (e) => {
    // ... (tu función handleCrearTarea se mantiene igual)
    e.preventDefault();
    const currentIdCliente = e.target.elements.id_cliente.value;
    const currentDescripcion = e.target.elements.descripcion.value;
    const currentTipo = e.target.elements.tipo.value;
    const currentFechaSolicitud = e.target.elements.fecha_solicitud.value;
    const currentFechaFinalizacion = e.target.elements.fecha_finalizacion.value;
    const currentEstado = e.target.elements.estado.value;
    const currentPersonalMantenimiento = e.target.elements.personal_mantenimiento.value;

    const nuevaTarea = {
      id_cliente: currentIdCliente,
      descripcion: currentDescripcion,
      tipo: currentTipo,
      fecha_solicitud: currentFechaSolicitud,
      fecha_finalizacion: currentFechaFinalizacion,
      estado: currentEstado,
      personal_mantenimiento: currentPersonalMantenimiento,
    };

    try {
      console.log("Enviando nueva tarea:", nuevaTarea);
      const response = await axiosInstance.post("http://127.0.0.1:8000/tarea/", nuevaTarea);
      alert("El registro fue exitoso");
      setTareas(prevTareas => [...prevTareas, response.data]);
      e.target.reset();
      // Resetear estados individuales si los usas para controlar el formulario directamente
    } catch (error) {
      alert("Ocurrió un error al crear la tarea.");
      if (error.response) {
        console.error("Error del servidor:", error.response.data);
      } else {
        console.error("Error de la solicitud:", error.message);
      }
    }
  };

  const inputStyle = {
    width: 'calc(100% - 22px)',
    padding: '10px',
    marginBottom: '15px',
    border: `1px solid ${appColors.borderColor}`,
    borderRadius: '4px',
    boxSizing: 'border-box',
    fontSize: '1rem',
    backgroundColor: appColors.inputBg,
    color: appColors.textDark,
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    color: appColors.textLight,
    fontWeight: 'bold',
    fontSize: '0.9rem',
  };

  // Estilos para la sección promocional con imagen de fondo
  const promotionalSectionStyle = {
    textAlign: 'center',
    padding: '60px 30px', // Aumentamos el padding para dar más espacio a la imagen
    marginBottom: '50px',
    // ----- MODIFICACIÓN CLAVE PARA LA IMAGEN DE FONDO -----
    // 1. Reemplaza '/images/mantenimiento-bg.jpg' con la ruta a TU imagen en la carpeta `public`.
    //    Ejemplo: si tu imagen está en `public/mi-foto.png`, usa `url('/mi-foto.png')`.
    // 2. `linear-gradient` crea una capa semitransparente sobre la imagen para mejorar la legibilidad del texto.
    //    Puedes ajustar `appColors.overlayColor` o los valores rgba (ej. `rgba(0, 0, 0, 0.5)`) para cambiar la oscuridad/color de la capa.
    backgroundImage: `linear-gradient(${appColors.overlayColor}, ${appColors.overlayColor}), url('/images/mantenimiento-bg.jpg')`,
    backgroundSize: 'cover', // Hace que la imagen cubra todo el contenedor
    backgroundPosition: 'center center', // Centra la imagen
    borderRadius: '6px', // Bordes redondeados para la sección
    color: appColors.headerText, // Texto claro para contraste sobre la imagen/overlay
    // Eliminamos el borderBottom, ya que la imagen crea una separación visual.
  };

  const promotionalTitleStyle = {
    color: '#FFFFFF', // Título blanco para máximo contraste
    fontSize: '2.8rem', // Un poco más grande
    fontWeight: 'bold',
    marginBottom: '25px',
    lineHeight: '1.3',
    textShadow: '1px 1px 4px rgba(0,0,0,0.5)', // Sombra de texto para legibilidad
  };

  const promotionalParagraphStyle = {
    fontSize: '1.25rem', // Ligeramente más grande para mejor lectura
    color: appColors.headerText, // Aseguramos texto claro
    lineHeight: '1.8',
    maxWidth: '700px',
    margin: '0 auto 25px auto',
    textShadow: '1px 1px 3px rgba(0,0,0,0.4)', // Sombra de texto
  };


  return (
    <div style={{ backgroundColor: appColors.pageBg, fontFamily: 'Arial, sans-serif', color: appColors.textDark }}>
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
        paddingTop: `calc(${HEADER_HEIGHT} + 20px)`
      }}>
        <section id="inicio" style={{
          backgroundColor: appColors.cardBg, // El fondo de la tarjeta principal se mantiene
          padding: '25px', // Padding de la tarjeta principal
          borderRadius: '8px',
          boxShadow: '0 0 15px rgba(0,0,0,0.07)',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          {/* ========== INICIO DE LA SECCIÓN PROMOCIONAL CON IMAGEN DE FONDO ========== */}
          <div style={promotionalSectionStyle}>
            <h1 style={promotionalTitleStyle}>
              HOME UP: Mantenimiento Experto Para Tus Espacios
            </h1>
            <p style={promotionalParagraphStyle}>
              Transforma y protege tu propiedad con <strong>HOME UP</strong>. Ofrecemos soluciones integrales de mantenimiento locativo, garantizando calidad, eficiencia y la tranquilidad que mereces.
            </p>
            <p style={{...promotionalParagraphStyle, fontSize: '1.15rem', marginBottom: '35px' }}>
              Desde reparaciones urgentes hasta proyectos de mejora y mantenimiento preventivo. ¡Estamos listos para ayudarte!
            </p>
            <button
              style={{
                padding: '14px 32px', // Botón un poco más grande
                backgroundColor: appColors.primaryAccent,
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                fontSize: '1.15rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.25)', // Sombra más pronunciada
                transition: 'background-color 0.3s ease, transform 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = appColors.primaryAccentHover;
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = appColors.primaryAccent;
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              onClick={() => window.location.href = '#servicios'}
            >
              Descubre Nuestros Servicios
            </button>
          </div>
          {/* ========== FIN DE LA SECCIÓN PROMOCIONAL ========== */}

          <h2 style={{
            color: appColors.headerBg,
            textAlign: 'center',
            marginBottom: '25px',
            marginTop: '40px', // Añadido margen superior para separar del bloque de imagen
            paddingBottom: '10px'
          }}>
            Gestión de Tareas de Mantenimiento
          </h2>
          <form onSubmit={handleCrearTarea}>
            <h3 style={{
              color: appColors.textDark,
              textAlign: 'center',
              marginBottom: '20px',
              fontSize: '1.4rem'
            }}>
              Crear Nueva Tarea
            </h3>
            
            <div>
              <label htmlFor="id_cliente" style={labelStyle}>ID Cliente:</label>
              <input type="text" id="id_cliente" name="id_cliente" required style={inputStyle} />
            </div>
            <div>
              <label htmlFor="descripcion" style={labelStyle}>Descripción:</label>
              <textarea id="descripcion" name="descripcion" required style={{...inputStyle, minHeight: '80px', resize: 'vertical' }} />
            </div>
            <div>
              <label htmlFor="tipo" style={labelStyle}>Tipo:</label>
              <input type="text" id="tipo" name="tipo" style={inputStyle} />
            </div>
            <div>
              <label htmlFor="fecha_solicitud" style={labelStyle}>Fecha Solicitud:</label>
              <input type="date" id="fecha_solicitud" name="fecha_solicitud" required style={inputStyle} />
            </div>
            <div>
              <label htmlFor="fecha_finalizacion" style={labelStyle}>Fecha Finalización:</label>
              <input type="date" id="fecha_finalizacion" name="fecha_finalizacion" style={inputStyle} />
            </div>
            <div>
              <label htmlFor="estado" style={labelStyle}>Estado:</label>
              <select id="estado" name="estado" defaultValue="pendiente" style={inputStyle}>
                <option value="pendiente">Pendiente</option>
                <option value="en_progreso">En Progreso</option>
                <option value="completada">Completada</option>
              </select>
            </div>
            <div>
              <label htmlFor="personal_mantenimiento" style={labelStyle}>Personal Mantenimiento:</label>
              <input type="text" id="personal_mantenimiento" name="personal_mantenimiento" style={inputStyle} />
            </div>

            <button
              type="submit"
              style={{
                marginTop: '20px',
                padding: '12px 20px',
                backgroundColor: appColors.primaryAccent,
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '1rem',
                fontWeight: 'bold',
                width: '100%',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = appColors.primaryAccentHover}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = appColors.primaryAccent}
            >
              Cargar Tarea
            </button>
          </form>

          <div style={{marginTop: '40px'}}>
            <h2 style={{
              color: appColors.headerBg,
              textAlign: 'center',
              marginBottom: '20px',
              borderTop: `1px solid ${appColors.borderColor}`,
              paddingTop: '20px'
            }}>
              Lista de Tareas/Cargos
            </h2>
            <ListCargo tareas={tareas} />
          </div>
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