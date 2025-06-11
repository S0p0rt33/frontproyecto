import React, { useState, useEffect } from 'react';

// --- PALETA DE COLORES UNIFICADA ---
const appColors = {
  pageBg: '#121212',
  cardBg: 'rgba(26, 26, 50, 0.6)',
  cardBgLighter: 'rgba(40, 40, 70, 0.7)',
  primaryAccent: '#FFD700',
  textDark: '#ffffff',
  textLight: '#b0bec5',
  borderColor: 'rgba(255, 215, 0, 0.2)',
  successColor: '#2ecc71', // Completado
  warningColor: '#f39c12', // En Progreso
  infoColor: '#3498db',   // Nuevo
  errorColor: '#ff4d4d',
};

// --- SIMULACIÓN DE DATOS (DEBERÍA VENIR DE UNA API) ---
// Se añade un campo "cliente" para poder filtrar por usuario.
const initialCasos = [
    { id: 1, cliente: 'Ana Martínez', servicio: 'Plomería', descripcion: 'Fuga de agua en el lavamanos.', fechaReporte: '2025-06-10', estado: 'Nuevo', tecnicoAsignado: null },
    { id: 2, cliente: 'Juan Cliente', servicio: 'Electricidad', descripcion: 'El interruptor de la sala no funciona y hay un cortocircuito.', fechaReporte: '2025-06-10', estado: 'En Progreso', tecnicoAsignado: 103 },
    { id: 3, cliente: 'Sofía Castro', servicio: 'Albañilería', descripcion: 'Reparar una pared agrietada.', fechaReporte: '2025-06-09', estado: 'Nuevo', tecnicoAsignado: null },
    { id: 4, cliente: 'Juan Cliente', servicio: 'Pintura', descripcion: 'Pintar la habitación principal, dos manos.', fechaReporte: '2025-05-20', estado: 'Completado', tecnicoAsignado: 102 },
     { id: 5, cliente: 'Juan Cliente', servicio: 'Plomería', descripcion: 'El grifo de la cocina gotea constantemente.', fechaReporte: '2025-06-11', estado: 'Nuevo', tecnicoAsignado: null },
];

const servicioIconos = {
    'Plomería': '🔧', 'Electricidad': '💡', 'Albañilería': '🧱', 'Pintura': '🖌️', 'Otro': '🔩',
};
const serviciosDisponibles = ['Plomería', 'Electricidad', 'Albañilería', 'Pintura', 'Otro'];

// SIMULACIÓN: Suponemos que este es el usuario que ha iniciado sesión.
const currentUser = { nombre: 'Juan Cliente' };

// --- COMPONENTE PORTAL DE USUARIO ---
const UsuarioCasos = () => {
    // Filtra los casos para mostrar solo los del usuario actual.
    const [misCasos, setMisCasos] = useState(initialCasos.filter(c => c.cliente === currentUser.nombre));
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // Estado para el formulario del nuevo caso
    const [newCaseData, setNewCaseData] = useState({ servicio: '', descripcion: '' });
    const [formError, setFormError] = useState('');

    // --- LÓGICA DE INTERACCIÓN ---
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setFormError('');
        setNewCaseData({ servicio: '', descripcion: '' });
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setNewCaseData(prev => ({...prev, [name]: value}));
    };

    const handleSubmitNewCase = (e) => {
        e.preventDefault();
        if (!newCaseData.servicio || !newCaseData.descripcion) {
            setFormError('Por favor, completa todos los campos.');
            return;
        }

        const newCase = {
            id: Date.now(), // ID único basado en el tiempo actual
            cliente: currentUser.nombre,
            servicio: newCaseData.servicio,
            descripcion: newCaseData.descripcion,
            fechaReporte: new Date().toISOString().split('T')[0], // Fecha de hoy
            estado: 'Nuevo',
            tecnicoAsignado: null,
        };
        
        setMisCasos(prev => [newCase, ...prev]); // Añade el nuevo caso al principio de la lista
        handleCloseModal();
    };
    
    // --- ESTILOS VISUALES ---
    const pageStyle = { background: appColors.pageBg, minHeight: '100vh', padding: '30px', fontFamily: "'Segoe UI', 'Roboto', sans-serif", color: appColors.textDark };
    const headerStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' };
    const panelStyle = { background: appColors.cardBg, border: `1px solid ${appColors.borderColor}`, borderRadius: '18px', padding: '30px', backdropFilter: 'blur(10px)' };
    const buttonStyle = { padding: '12px 25px', backgroundColor: appColors.primaryAccent, border: 'none', borderRadius: '8px', color: '#1a1a32', fontWeight: 'bold', cursor: 'pointer', fontSize: '1rem' };
    
    const getStatusStyle = (estado) => {
        const style = {
            padding: '4px 12px', borderRadius: '15px', fontSize: '0.8rem', fontWeight: 'bold'
        };
        switch (estado) {
            case 'Nuevo': return { ...style, background: appColors.infoColor, color: appColors.textDark };
            case 'En Progreso': return { ...style, background: appColors.warningColor, color: '#1a1a32' };
            case 'Completado': return { ...style, background: appColors.successColor, color: '#1a1a32' };
            default: return style;
        }
    };
    
    const cardStyle = (estado) => {
        let borderColor = appColors.infoColor;
        if (estado === 'En Progreso') borderColor = appColors.warningColor;
        if (estado === 'Completado') borderColor = appColors.successColor;

        return {
            background: appColors.cardBgLighter, borderRadius: '12px', padding: '20px', marginBottom: '15px',
            borderLeft: `4px solid ${borderColor}`
        };
    };

    // Estilos para el Modal de Nuevo Caso
    const modalOverlayStyle = { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 };
    const modalContentStyle = { ...panelStyle, width: '100%', maxWidth: '600px', backdropFilter: 'blur(20px)', border: `1px solid ${appColors.primaryAccent}` };
    const inputStyle = { width: '100%', padding: '12px 15px', backgroundColor: 'rgba(0,0,0,0.2)', border: `1px solid ${appColors.borderColor}`, borderRadius: '8px', color: appColors.textDark, fontSize: '1rem', outline: 'none', marginBottom: '15px' };
    
    return (
        <div style={pageStyle}>
            <header style={headerStyle}>
                <h1 style={{fontSize: '2.5rem', margin: 0}}>Mis Solicitudes</h1>
                <button style={buttonStyle} onClick={handleOpenModal}>➕ Solicitar Nuevo Servicio</button>
            </header>

            <div style={panelStyle}>
                {misCasos.length > 0 ? misCasos.map(caso => (
                    <div key={caso.id} style={cardStyle(caso.estado)}>
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px'}}>
                            <h3 style={{fontSize: '1.3rem', margin: 0}}>{servicioIconos[caso.servicio]} {caso.servicio}</h3>
                            <span style={getStatusStyle(caso.estado)}>{caso.estado}</span>
                        </div>
                        <p style={{color: appColors.textLight, margin: '5px 0 15px 0'}}>{caso.descripcion}</p>
                        <small style={{color: appColors.textLight, opacity: 0.7}}>Reportado: {caso.fechaReporte}</small>
                    </div>
                )) : (
                    <p style={{color: appColors.textLight, textAlign: 'center', padding: '30px'}}>
                        No tienes ninguna solicitud de servicio activa. ¡Haz clic en "Solicitar Nuevo Servicio" para empezar!
                    </p>
                )}
            </div>

            {/* --- Ventana Modal para Nueva Solicitud --- */}
            {isModalOpen && (
                <div style={modalOverlayStyle} onClick={handleCloseModal}>
                    <div style={modalContentStyle} onClick={e => e.stopPropagation()}>
                        <h2 style={{fontSize: '1.8rem', borderBottom: `2px solid ${appColors.primaryAccent}`, paddingBottom: '10px', marginBottom: '25px'}}>Nueva Solicitud de Servicio</h2>
                        <form onSubmit={handleSubmitNewCase}>
                            <label style={{display: 'block', color: appColors.textLight, marginBottom: '8px'}}>Tipo de Servicio</label>
                            <select name="servicio" value={newCaseData.servicio} onChange={handleFormChange} style={inputStyle}>
                                <option value="" disabled>Selecciona un servicio...</option>
                                {serviciosDisponibles.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                            
                            <label style={{display: 'block', color: appColors.textLight, marginBottom: '8px', marginTop: '15px'}}>Descripción del Problema</label>
                            <textarea name="descripcion" value={newCaseData.descripcion} onChange={handleFormChange} style={{...inputStyle, height: '100px', resize: 'vertical'}} placeholder="Describe detalladamente tu necesidad..."></textarea>
                            
                            {formError && <p style={{color: appColors.errorColor, textAlign: 'center', marginTop: '10px'}}>{formError}</p>}

                            <div style={{display: 'flex', justifyContent: 'flex-end', gap: '15px', marginTop: '30px'}}>
                                <button type="button" onClick={handleCloseModal} style={{...buttonStyle, background: 'transparent', border: `1px solid ${appColors.borderColor}`, color: appColors.textLight}}>Cancelar</button>
                                <button type="submit" style={buttonStyle}>Enviar Solicitud</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UsuarioCasos;