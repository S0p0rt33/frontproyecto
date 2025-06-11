import React, { useState, useEffect, useRef } from 'react';

// --- Componente "Contacto" Rediseñado con Animaciones ---
// Este componente está diseñado para ser importado dentro de tu página principal.
const Contacto = ({ colors }) => {

  // Tema por defecto si los colores no se pasan como props.
  if (!colors) {
    colors = {
      pageBg: '#121212', cardBg: 'rgba(26, 26, 50, 0.7)', primaryAccent: '#FFD700',
      textDark: '#ffffff', textLight: '#b0bec5', borderColor: 'rgba(255, 215, 0, 0.2)',
      primaryAccentHover: '#FFC107', success: '#2ecc71', error: '#e74c3c'
    };
  }

  // --- Lógica de Animación ---
  const sectionRef = useRef(null);
  const useAnimateOnScroll = (ref) => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        setIsVisible(entry.isIntersecting);
      }, { threshold: 0.2 });

      const currentRef = ref.current;
      if (currentRef) observer.observe(currentRef);
      return () => {
        if (currentRef) observer.unobserve(currentRef);
      };
    }, [ref]);
    return isVisible;
  };
  const isSectionVisible = useAnimateOnScroll(sectionRef);

  // --- Lógica del Formulario ---
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState({ submitted: false, success: false, message: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos del formulario enviados:", formData);
    // Aquí iría la lógica de envío real a una API.
    setFormStatus({
      submitted: true, success: true,
      message: '¡Mensaje enviado! Gracias por contactarnos, te responderemos pronto.'
    });
    // Opcional: Resetear el formulario después de un tiempo
    setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setFormStatus({ submitted: false, success: false, message: ''});
    }, 5000);
  };

  // --- OBJETOS DE ESTILO ---
  const animatedContainerStyle = (isVisible, direction = 'up', delay = 0) => {
    let initialTransform;
    switch(direction) {
        case 'left': initialTransform = 'translateX(-40px)'; break;
        case 'right': initialTransform = 'translateX(40px)'; break;
        default: initialTransform = 'translateY(40px)'; break;
    }
    return {
      transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
      transitionDelay: `${delay}s`,
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0) translateX(0)' : initialTransform,
    }
  };

  const titleWrapperStyle = { textAlign: 'center', marginBottom: '40px' };
  const sectionTitleStyle = {
    display: 'inline-block', backgroundColor: colors.cardBg, color: colors.textDark,
    padding: '15px 40px', borderRadius: '50px', border: `1px solid ${colors.borderColor}`,
    fontSize: '2.5rem', fontWeight: '600', boxShadow: '0 5px 20px rgba(0,0,0,0.3)',
    backdropFilter: 'blur(5px)',
  };
  const accentTextStyle = { color: colors.primaryAccent };

  const contactContainerStyle = {
    maxWidth: '1000px', width: '100%', display: 'grid',
    gridTemplateColumns: '1fr 1.2fr', gap: '50px',
    backgroundColor: colors.cardBg, backdropFilter: 'blur(15px)',
    border: `1px solid ${colors.borderColor}`, borderRadius: '20px',
    padding: '50px', boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
    margin: '0 auto',
  };
  
  const infoSideStyle = { color: colors.textLight };
  const infoTitleStyle = { fontSize: '2.5rem', fontWeight: '600', marginBottom: '20px', color: colors.textDark };
  const infoTextStyle = { fontSize: '1rem', lineHeight: '1.7', opacity: '0.9', marginBottom: '30px' };
  const contactDetailStyle = { display: 'flex', alignItems: 'center', marginBottom: '20px', fontSize: '1rem' };
  const iconStyle = { fontSize: '1.5rem', marginRight: '15px', color: colors.primaryAccent };
  
  const formStyle = { display: 'flex', flexDirection: 'column', gap: '20px' };
  const formGroupStyle = { position: 'relative' };
  const inputStyle = {
    width: '100%', padding: '15px', border: 'none',
    borderRadius: '8px', backgroundColor: 'rgba(0,0,0,0.2)',
    color: colors.textLight, fontSize: '1rem', outline: 'none',
    border: `2px solid ${colors.borderColor}`, transition: 'border-color 0.3s ease-in-out',
  };
  const textareaStyle = { ...inputStyle, resize: 'none', minHeight: '120px' };
  const submitButtonStyle = {
    padding: '15px 20px', border: 'none', borderRadius: '8px', background: colors.primaryAccent,
    color: '#000', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer',
    transition: 'transform 0.2s ease, box-shadow 0.3s ease', boxShadow: `0 4px 15px rgba(255, 215, 0, 0.2)`,
  };
  const formMessageStyle = {
    padding: '15px', borderRadius: '8px', textAlign: 'center', fontWeight: '500',
    color: '#fff', backgroundColor: colors.success,
  };

  return (
    <div ref={sectionRef}>
      <div style={{...titleWrapperStyle, ...animatedContainerStyle(isSectionVisible)}}>
          <h2 id="contacto" style={sectionTitleStyle}>
              Ponte en <span style={accentTextStyle}>Contacto</span>
          </h2>
      </div>

      <div style={contactContainerStyle}>
        {/* Lado de la Información con animación */}
        <div style={{...infoSideStyle, ...animatedContainerStyle(isSectionVisible, 'left', 0.2)}}>
          <h3 style={infoTitleStyle}>Hablemos.</h3>
          <p style={infoTextStyle}>
            Estamos aquí para ayudarte. Llena el formulario o contáctanos directamente a través de estos canales.
          </p>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li style={contactDetailStyle}><span style={iconStyle}>📞</span> <span>+57 300 123 4567</span></li>
            <li style={contactDetailStyle}><span style={iconStyle}>✉️</span> <span>contacto@homeup.com</span></li>
            <li style={contactDetailStyle}><span style={iconStyle}>📍</span> <span>Bogotá, Colombia</span></li>
          </ul>
        </div>
        
        {/* Lado del Formulario con animación */}
        <div style={{...animatedContainerStyle(isSectionVisible, 'right', 0.4)}}>
          {!formStatus.submitted ? (
            <form onSubmit={handleSubmit} style={formStyle} noValidate>
              <div style={formGroupStyle}>
                <input type="text" name="name" placeholder="Tu nombre" value={formData.name} onChange={handleInputChange}
                  style={inputStyle} onFocus={(e) => e.target.style.borderColor = colors.primaryAccent}
                  onBlur={(e) => e.target.style.borderColor = colors.borderColor} required
                />
              </div>
              <div style={formGroupStyle}>
                <input type="email" name="email" placeholder="Tu correo electrónico" value={formData.email} onChange={handleInputChange}
                  style={inputStyle} onFocus={(e) => e.target.style.borderColor = colors.primaryAccent}
                  onBlur={(e) => e.target.style.borderColor = colors.borderColor} required
                />
              </div>
              <div style={formGroupStyle}>
                <textarea name="message" placeholder="¿En qué podemos ayudarte?" value={formData.message} onChange={handleInputChange}
                  style={textareaStyle} onFocus={(e) => e.target.style.borderColor = colors.primaryAccent}
                  onBlur={(e) => e.target.style.borderColor = colors.borderColor} required
                />
              </div>
              <button type="submit" style={submitButtonStyle}
                onMouseEnter={(e) => {e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = `0 6px 20px rgba(255, 215, 0, 0.3)`;}}
                onMouseLeave={(e) => {e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = `0 4px 15px rgba(255, 215, 0, 0.2)`;}}
              >Enviar Ahora</button>
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

export default Contacto;
