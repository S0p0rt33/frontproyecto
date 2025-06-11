import React, { useState, useEffect } from 'react';
import Registro from './registro';
import axiosInstance from '../api/axioInstance';

// --- PALETA DE COLORES UNIFICADA (TEMA OSCURO + DORADO) ---
const appColors = {
  pageBg: '#121212',
  cardBg: 'rgba(26, 26, 50, 0.6)',
  primaryAccent: '#FFD700',
  primaryAccentHover: '#FFEE75',
  textDark: '#ffffff',
  textLight: '#b0bec5',
  borderColor: 'rgba(255, 215, 0, 0.2)',
  errorColor: '#ff4d4d',
};

// --- SIMULACIÓN DE BASE DE DATOS DE USUARIOS ---
// En una aplicación real, esto vendría de una API/backend.
const usersDB = [
    {
        email: 'admin@homeup.com',
        password: 'admin123',
        nombre: 'Admin General',
        rol: 'Administrador'
    },
    {
        email: 'usuario@cliente.com',
        password: 'user123',
        nombre: 'Juan Cliente',
        rol: 'Usuario'
    }
];

// --- COMPONENTE LOGINN ---
const Login = ({ colors }) => {
    // --- ESTADOS DEL COMPONENTE ---
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('Usuario'); // Nuevo estado para el rol
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState(null); // Almacena el usuario con sesión iniciada
    const [showRegister, setShowRegister] = useState(false); // Estado para mostrar el formulario de registro
    
    // Estado para la animación de entrada
    const [isCardVisible, setIsCardVisible] = useState(false);
    useEffect(() => {
        setIsCardVisible(true);
    }, []);

    // --- LÓGICA DE AUTENTICACIÓN ---
    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        if (!email || !password || !role) {
            setError('Por favor, completa todos los campos.');
            return;
        }

        setIsLoading(true);

        try {
            // Solo para el rol Administrador, intenta login contra el backend
            if (role === 'Administrador') {
                const response = await axiosInstance.post('/login_admin', {
                    email,
                    password
                });
                if (response.data && response.data.success) {
                    setLoggedInUser({ nombre: response.data.nombre, rol: 'Administrador' });
                } else {
                    setError('Credenciales inválidas para administrador.');
                }
            } else {
                // Simulación local para usuario normal
                const user = usersDB.find(
                    u => u.email === email && u.password === password && u.rol === role
                );
                if (user) {
                    setLoggedInUser(user);
                } else {
                    setError('Credenciales o rol inválidos. Por favor, intenta de nuevo.');
                }
            }
        } catch (err) {
            setError('Error de conexión o credenciales inválidas.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleLogout = () => {
        setLoggedInUser(null);
        setEmail('');
        setPassword('');
    };


    // --- ESTILOS VISUALES ---
    // Usar colors si está disponible, si no usar appColors
    const theme = colors || appColors;
    const pageStyle = {
        background: theme.pageBg,
        minHeight: '100vh',
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
        maxWidth: '450px',
        textAlign: 'center',
        color: theme.textDark,
        opacity: isCardVisible ? 1 : 0,
        transform: isCardVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
    };

    const titleStyle = {
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: theme.textDark,
        marginBottom: '10px',
    };
    
    const subtitleStyle = {
        color: theme.textLight,
        marginBottom: '30px',
    };

    const formGroupStyle = {
        textAlign: 'left',
        marginBottom: '20px',
    };
    
    const labelStyle = {
        display: 'block',
        color: theme.textLight,
        marginBottom: '8px',
        fontSize: '0.9rem',
    };

    const inputStyle = {
        width: '100%',
        padding: '12px 15px',
        backgroundColor: 'rgba(0,0,0,0.2)',
        border: `1px solid ${theme.borderColor}`,
        borderRadius: '8px',
        color: theme.textDark,
        fontSize: '1rem',
        outline: 'none',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
    };
    
    const buttonStyle = {
        width: '100%',
        padding: '14px',
        backgroundColor: theme.primaryAccent,
        border: 'none',
        borderRadius: '8px',
        color: '#1a1a32',
        fontSize: '1.1rem',
        fontWeight: 'bold',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, transform 0.1s ease',
        marginTop: '10px',
    };

    const errorStyle = {
        color: theme.errorColor,
        marginTop: '15px',
        minHeight: '20px',
    };
    
    // Estilos para la pantalla de bienvenida
    const welcomeCardStyle = { ...cardStyle, padding: '60px 50px' };
    const welcomeRoleStyle = {
        padding: '5px 15px',
        backgroundColor: theme.primaryAccent,
        color: '#1a1a32',
        borderRadius: '20px',
        fontWeight: 'bold',
        display: 'inline-block',
        marginTop: '15px',
    };

    // --- RENDERIZADO CONDICIONAL ---
    if (loggedInUser) {
        // --- VISTA DE BIENVENIDA (SESIÓN INICIADA) ---
        return (
            <div style={pageStyle}>
                <div style={welcomeCardStyle}>
                    <h1 style={titleStyle}>¡Bienvenido!</h1>
                    <h2 style={{...subtitleStyle, fontSize: '1.5rem', color: theme.textDark, marginBottom: '20px' }}>
                        {loggedInUser.nombre}
                    </h2>
                    <p style={subtitleStyle}>Has iniciado sesión con el rol de:</p>
                    <div style={welcomeRoleStyle}>
                        {loggedInUser.rol}
                    </div>
                    {/* Mensaje especial según el rol */}
                    {loggedInUser.rol === 'Administrador' && (
                        <div style={{ marginTop: 30, color: theme.primaryAccent, fontWeight: 'bold' }}>
                            Acceso total al panel de administración.
                        </div>
                    )}
                    {loggedInUser.rol === 'Usuario' && (
                        <div style={{ marginTop: 30, color: theme.textLight }}>
                            Acceso a funcionalidades de usuario estándar.
                        </div>
                    )}
                    <button 
                        style={{...buttonStyle, marginTop: '40px', backgroundColor: 'transparent', border: `1px solid ${theme.borderColor}`, color: theme.textLight}} 
                        onClick={handleLogout}
                    >
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        );
    }

    if (showRegister) {
        // Renderiza el formulario de registro en vez del login
        return <Registro colors={colors} />;
    }

    // --- VISTA DEL FORMULARIO DE LOGIN ---
    return (
        <div style={pageStyle}>
            <div style={cardStyle}>
                <h1 style={titleStyle}>
                    <span style={{color: theme.primaryAccent}}>HOME</span> UP
                </h1>
                <p style={subtitleStyle}>Accede a tu cuenta</p>

                <form onSubmit={handleLogin}>
                    <div style={formGroupStyle}>
                        <label htmlFor="role" style={labelStyle}>Rol</label>
                        <select
                            id="role"
                            style={{...inputStyle, color: theme.textDark, backgroundColor: 'rgba(0,0,0,0.2)'}}
                            value={role}
                            onChange={e => setRole(e.target.value)}
                        >
                            <option value="Administrador">Administrador</option>
                            <option value="Usuario">Usuario</option>
                        </select>
                    </div>
                    <div style={formGroupStyle}>
                        <label htmlFor="email" style={labelStyle}>Correo Electrónico</label>
                        <input 
                            type="email" 
                            id="email"
                            style={inputStyle}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onFocus={(e) => e.target.style.borderColor = theme.primaryAccent}
                            onBlur={(e) => e.target.style.borderColor = theme.borderColor}
                        />
                    </div>
                    <div style={formGroupStyle}>
                        <label htmlFor="password" style={labelStyle}>Contraseña</label>
                        <input 
                            type="password" 
                            id="password"
                            style={inputStyle}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onFocus={(e) => e.target.style.borderColor = theme.primaryAccent}
                            onBlur={(e) => e.target.style.borderColor = theme.borderColor}
                        />
                    </div>

                    <div style={errorStyle}>
                        {error}
                    </div>

                    <button type="submit" style={buttonStyle} disabled={isLoading}>
                        {isLoading ? 'Verificando...' : 'Ingresar'}
                    </button>
                    {/* Botón de registro */}
                    <button
                        type="button"
                        style={{
                            ...buttonStyle,
                            backgroundColor: 'transparent',
                            color: theme.primaryAccent,
                            border: `2px solid ${theme.primaryAccent}`,
                            marginTop: '15px',
                            transition: 'all 0.3s',
                        }}
                        onClick={() => setShowRegister(true)}
                        onMouseEnter={e => {
                            e.currentTarget.style.backgroundColor = theme.primaryAccent;
                            e.currentTarget.style.color = '#1a1a32';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = theme.primaryAccent;
                        }}
                    >
                        Registro
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;

