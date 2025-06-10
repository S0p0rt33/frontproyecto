import React, { useState } from "react";

// Paleta de colores actualizada para un look más vibrante
const appColors = {
  primary: '#3498db',
  secondary: '#9b59b6',
  textLight: '#ecf0f1',
  textDark: '#2c3e50',
  inputBg: 'rgba(236, 240, 241, 0.15)',
  inputFocusBorder: '#3498db',
  success: '#2ecc71',
  error: '#e74c3c',
};

// Componente de Contacto Renovado
const ContactoModerno = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario enviados:", formData);
    // Lógica de envío real aquí (ej. a una API)
    setFormStatus({
      submitted: true,
      success: true,
      message: '¡Mensaje enviado! Gracias por contactarnos, te responderemos pronto.'
    });
  };

  // Estilos con enfoque moderno
  const contactSectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh', // Ocupa toda la altura de la pantalla
    padding: '40px 20px',
    background: `linear-gradient(135deg, ${appColors.textDark}, ${appColors.primary})`,
    fontFamily: "'Poppins', sans-serif", // Una fuente más moderna
  };
  
  // Para la animación del gradiente, necesitamos una keyframe.
  // La forma más limpia en React es usar una librería como styled-components o emotion,
  // pero para mantenerlo simple, lo inyectaremos con una etiqueta <style>.
  const backgroundAnimation = `
    @keyframes gradientAnimation {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `;

  const contactContainerStyle = {
    maxWidth: '960px',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr 1.2fr', // Dos columnas, la del form más ancha
    gap: '40px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(15px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '20px',
    padding: '40px',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
  };

  const infoSideStyle = {
    color: appColors.textLight,
  };

  const infoTitleStyle = {
    fontSize: '2.5rem',
    fontWeight: '600',
    marginBottom: '20px',
  };
  
  const infoTextStyle = {
    fontSize: '1rem',
    lineHeight: '1.6',
    opacity: '0.9',
    marginBottom: '30px',
  };

  const contactDetailStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '15px',
    fontSize: '0.95rem',
  };
  
  const iconStyle = {
    fontSize: '1.2rem',
    marginRight: '15px',
    color: appColors.primary,
  };

  // Estilos del formulario
  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  };
  
  const formGroupStyle = {
    position: 'relative',
  };

  const inputStyle = {
    width: '100%',
    padding: '15px 15px 15px 50px', // Espacio para el icono
    border: 'none',
    borderRadius: '8px',
    backgroundColor: appColors.inputBg,
    color: appColors.textLight,
    fontSize: '1rem',
    outline: 'none',
    borderBottom: `2px solid transparent`,
    transition: 'border-bottom 0.3s ease-in-out',
  };

  const inputIconStyle = {
    position: 'absolute',
    top: '50%',
    left: '18px',
    transform: 'translateY(-50%)',
    color: appColors.textLight,
    opacity: '0.6',
  };
  
  const textareaStyle = {
    ...inputStyle,
    resize: 'none',
    minHeight: '120px',
    padding: '15px 15px 15px 50px', // Consistente
  };
  
  const submitButtonStyle = {
    padding: '15px 20px',
    border: 'none',
    borderRadius: '8px',
    background: `linear-gradient(90deg, ${appColors.primary}, ${appColors.secondary})`,
    color: '#ffffff',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.3s ease',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
  };

  const submitButtonHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: `0 6px 20px rgba(0, 0, 0, 0.3)`,
  };

  const formMessageStyle = {
    padding: '15px',
    borderRadius: '8px',
    textAlign: 'center',
    fontWeight: '500',
    color: appColors.textDark,
    backgroundColor: formStatus.success ? appColors.success : appColors.error,
  };


  return (
    <div style={contactSectionStyle}>
      <style>{backgroundAnimation}</style> {/* Inyecta la animación */}
      
      {/* Añade un link a Google Fonts en tu index.html para 'Poppins' */}
      {/* <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet"> */}
      
      <div style={contactContainerStyle}>
        
        {/* Lado de la Información */}
        <div style={infoSideStyle}>
          <h2 style={infoTitleStyle}>Hablemos.</h2>
          <p style={infoTextStyle}>
            Estamos aquí para ayudarte a construir tus ideas. Llena el formulario o contáctanos directamente a través de estos canales.
          </p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={contactDetailStyle}>
              <span style={iconStyle}>📞</span> <span>+57 300 123 4567</span>
            </li>
            <li style={contactDetailStyle}>
              <span style={iconStyle}>✉️</span> <span>contacto@homeup.com</span>
            </li>
            <li style={contactDetailStyle}>
              <span style={iconStyle}>📍</span> <span>Bogotá, Colombia</span>
            </li>
          </ul>
        </div>
        
        {/* Lado del Formulario */}
        <div>
          {!formStatus.submitted ? (
            <form onSubmit={handleSubmit} style={formStyle} noValidate>
              <div style={formGroupStyle}>
                <span style={inputIconStyle}>👤</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleInputChange}
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderBottom = `2px solid ${appColors.inputFocusBorder}`}
                  onBlur={(e) => e.target.style.borderBottom = '2px solid transparent'}
                  required
                />
              </div>
              <div style={formGroupStyle}>
                <span style={inputIconStyle}>@</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Tu correo electrónico"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={inputStyle}
                  onFocus={(e) => e.target.style.borderBottom = `2px solid ${appColors.inputFocusBorder}`}
                  onBlur={(e) => e.target.style.borderBottom = '2px solid transparent'}
                  required
                />
              </div>
              <div style={formGroupStyle}>
                <span style={inputIconStyle}>💬</span>
                <textarea
                  name="message"
                  placeholder="¿En qué podemos ayudarte?"
                  value={formData.message}
                  onChange={handleInputChange}
                  style={textareaStyle}
                  onFocus={(e) => e.target.style.borderBottom = `2px solid ${appColors.inputFocusBorder}`}
                  onBlur={(e) => e.target.style.borderBottom = '2px solid transparent'}
                  required
                />
              </div>
              <button
                type="submit"
                style={submitButtonStyle}
                onMouseEnter={(e) => Object.assign(e.currentTarget.style, submitButtonHoverStyle)}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
                }}
              >
                Enviar Ahora
              </button>
            </form>
          ) : (
            <div style={formMessageStyle}>
                {formStatus.message}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default ContactoModerno;