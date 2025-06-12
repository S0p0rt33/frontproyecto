import React, { useState, useEffect } from "react";
import axiosInstance from "../api/axioInstance";
import ListCargo from "./ListaCargo.jsx";

// --- PALETA DE COLORES UNIFICADA (TEMA OSCURO + DORADO) ---
const defaultColors = {
  pageBg: '#121212',
  cardBg: 'rgba(26, 26, 50, 0.6)',
  primaryAccent: '#FFD700',
  primaryAccentHover: '#FFC107',
  textDark: '#ffffff',
  textLight: '#b0bec5',
  borderColor: 'rgba(255, 215, 0, 0.2)',
  errorColor: '#ff4d4d',
  successColor: '#2ecc71',
};

// --- COMPONENTE DE REGISTRO ---
const Registro = ({ colors }) => {
  const theme = colors || defaultColors;
  // --- ESTADOS DEL COMPONENTE ---
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    cedula: "",
    telefono: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isCardVisible, setIsCardVisible] = useState(false);
  useEffect(() => { setIsCardVisible(true); }, []);

  // --- MANEJO DE CAMBIOS EN EL FORMULARIO ---
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // --- LÓGICA DE VALIDACIÓN ---
  const validateForm = () => {
    const newErrors = {};
    if (!formData.nombre) newErrors.nombre = "El nombre es requerido.";
    if (!formData.apellido) newErrors.apellido = "El apellido es requerido.";
    if (!formData.cedula) newErrors.cedula = "La cédula es requerida.";
    else if (!/^\d+$/.test(formData.cedula)) newErrors.cedula = "La cédula solo debe contener números.";
    if (!formData.telefono) newErrors.telefono = "El teléfono es requerido.";
    else if (!/^\d+$/.test(formData.telefono)) newErrors.telefono = "El teléfono solo debe contener números.";
    if (!formData.email) newErrors.email = "El correo electrónico es requerido.";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "El formato del correo no es válido.";
    if (!formData.password) newErrors.password = "La contraseña es requerida.";
    else if (formData.password.length < 8) newErrors.password = "La contraseña debe tener al menos 8 caracteres.";
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = "Las contraseñas no coinciden.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // --- LÓGICA DE REGISTRO DE USUARIO ---
  const handleRegister = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    const payload = {
      nombre: formData.nombre,
      apellido: formData.apellido,
      cedula: formData.cedula,
      telefono: formData.telefono,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword

    };
    try {
      await axiosInstance.post("http://127.0.0.1:8000/usuario/registro", payload); // Ajusta el endpoint si es necesario
      setIsSuccess(true);
      setFormData({
        nombre: "",
        apellido: "",
        cedula: "",
        telefono: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      alert("Ocurrió un error al registrar el usuario.");
      if (error.response) {
        console.error("Error del servidor:", error.response.data);
      } else {
        console.error("Error de la solicitud:", error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // --- ESTILOS VISUALES ---
  const pageStyle = {
    background: theme.pageBg,
    minHeight: '100vh',
    padding: '50px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Segoe UI', 'Roboto', sans-serif",
  };

  const cardStyle = {
    background: theme.cardBg,
    border: `1px solid ${theme.borderColor}`,
    borderRadius: '18px',
    boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
    backdropFilter: 'blur(10px)',
    padding: '40px 50px',
    width: '100%',
    maxWidth: '900px',
    color: theme.textDark,
    opacity: isCardVisible ? 1 : 0,
    transform: isCardVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
  };

  const titleStyle = { fontSize: '2.5rem', fontWeight: 'bold', color: theme.textDark, marginBottom: '30px', textAlign: 'center' };
  const formGridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px 30px' };
  const formGroupStyle = { textAlign: 'left', marginBottom: '5px' };
  const labelStyle = { display: 'block', color: theme.textLight, marginBottom: '8px', fontSize: '0.9rem' };
  const inputStyle = {
    width: '100%', padding: '12px 15px', backgroundColor: 'rgba(0,0,0,0.2)',
    border: `1px solid ${theme.borderColor}`, borderRadius: '8px', color: theme.textDark,
    fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s ease',
  };
  const buttonStyle = {
    gridColumn: '1 / -1',
    width: '100%', padding: '14px', backgroundColor: theme.primaryAccent, border: 'none',
    borderRadius: '8px', color: '#1a1a32', fontSize: '1.1rem', fontWeight: 'bold',
    cursor: 'pointer', transition: 'background-color 0.3s ease', marginTop: '20px',
  };
  const errorStyle = { color: theme.errorColor, fontSize: '0.8rem', minHeight: '18px', paddingTop: '4px' };

  // --- RENDERIZADO ---
  if (isSuccess) {
    return (
      <div style={pageStyle}>
        <div style={cardStyle}>
          <h1 style={{...titleStyle, color: theme.successColor}}>¡Registro Exitoso!</h1>
          <p style={{textAlign: 'center', color: theme.textLight}}>
            Tu cuenta ha sido creada correctamente. Ahora puedes iniciar sesión con tus credenciales.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h1 style={titleStyle}>Crear una <span style={{color: theme.primaryAccent}}>Cuenta</span></h1>
        <form onSubmit={handleRegister} noValidate>
          <div style={formGridStyle}>
            <div style={formGroupStyle}>
              <label htmlFor="nombre" style={labelStyle}>Nombre</label>
              <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} style={inputStyle} required />
              {errors.nombre && <div style={errorStyle}>{errors.nombre}</div>}
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="apellido" style={labelStyle}>Apellido</label>
              <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} style={inputStyle} required />
              {errors.apellido && <div style={errorStyle}>{errors.apellido}</div>}
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="cedula" style={labelStyle}>Cédula</label>
              <input type="text" name="cedula" value={formData.cedula} onChange={handleChange} style={inputStyle} required />
              {errors.cedula && <div style={errorStyle}>{errors.cedula}</div>}
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="telefono" style={labelStyle}>Teléfono</label>
              <input type="text" name="telefono" value={formData.telefono} onChange={handleChange} style={inputStyle} required />
              {errors.telefono && <div style={errorStyle}>{errors.telefono}</div>}
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="email" style={labelStyle}>Correo Electrónico</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} required />
              {errors.email && <div style={errorStyle}>{errors.email}</div>}
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="password" style={labelStyle}>Contraseña</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} style={inputStyle} required />
              {errors.password && <div style={errorStyle}>{errors.password}</div>}
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="confirmPassword" style={labelStyle}>Confirmar Contraseña</label>
              <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} style={inputStyle} required />
              {errors.confirmPassword && <div style={errorStyle}>{errors.confirmPassword}</div>}
            </div>
            <button type="submit" style={buttonStyle} disabled={isLoading}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = theme.primaryAccentHover}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = theme.primaryAccent}
            >
              {isLoading ? 'Registrando...' : 'Crear Cuenta'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registro;

