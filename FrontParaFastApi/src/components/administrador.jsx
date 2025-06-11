import React, { useState, useEffect } from 'react';

// --- PALETA DE COLORES UNIFICADA ---
const appColors = {
  pageBg: '#121212',
  cardBg: 'rgba(26, 26, 50, 0.6)',
  cardBgLighter: 'rgba(40, 40, 70, 0.7)', // Un fondo ligeramente más claro para elementos internos
  primaryAccent: '#FFD700',
  textDark: '#ffffff',
  textLight: '#b0bec5',
  borderColor: 'rgba(255, 215, 0, 0.2)',
  successColor: '#2ecc71',
  warningColor: '#f39c12',
};

// --- SIMULACIÓN DE DATOS (EN UNA APP REAL, VENDRÍAN DE UNA API) ---
const initialCasos = [
    { id: 1, cliente: 'Ana Martínez', direccion: 'Cra 7 # 12-34', servicio: 'Plomería', descripcion: 'Fuga de agua en el lavamanos del baño principal.', fechaReporte: '2025-06-10', estado: 'Nuevo', tecnicoAsignado: null },
    { id: 2, cliente: 'Carlos Jiménez', direccion: 'Calle 100 # 15-20', servicio: 'Electricidad', descripcion: 'El interruptor de la sala no funciona y hay un cortocircuito.', fechaReporte: '2025-06-10', estado: 'Nuevo', tecnicoAsignado: null },
    { id: 3, cliente: 'Sofía Castro', direccion: 'Av. El Dorado # 68-70', servicio: 'Albañilería', descripcion: 'Necesito reparar una pared agrietada en la habitación.', fechaReporte: '2025-06-09', estado: 'Nuevo', tecnicoAsignado: null },
    { id: 4, cliente: 'Empresa XYZ', direccion: 'Oficina 501, Edificio Central', servicio: 'Pintura', descripcion: 'Pintar la sala de juntas principal.', fechaReporte: '2025-06-08', estado: 'En Progreso', tecnicoAsignado: 102 },
];
const initialTecnicos = [
    { id: 101, nombre: 'Ricardo Mendoza', especialidad: 'Plomería', disponibilidad: 'Disponible' },
    { id: 102, nombre: 'Javier Solano', especialidad: 'Pintura', disponibilidad: 'Ocupado' },
    { id: 103, nombre: 'Luis Valbuena', especialidad: 'Electricidad', disponibilidad: 'Disponible' },
    { id: 104, nombre: 'Andrés Parra', especialidad: 'Albañilería', disponibilidad: 'Disponible' },
    { id: 105, nombre: 'Mario Lopera', especialidad: 'Plomería', disponibilidad: 'Disponible' },
];

const servicioIconos = {
    'Plomería': '🔧',
    'Electricidad': '💡',
    'Albañilería': '🧱',
    'Pintura': '🖌️',
};

// --- COMPONENTE DASHBOARD DE ADMINISTRACIÓN ---
const AdminCasos = () => {
    const [casos, setCasos] = useState(initialCasos);
    const [tecnicos, setTecnicos] = useState(initialTecnicos);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCaso, setSelectedCaso] = useState(null);

    // --- LÓGICA DE INTERACCIÓN ---
    const handleOpenModal = (caso) => {
        setSelectedCaso(caso);
        setIsModalOpen(true);
    };
    const handleCloseModal = () => setIsModalOpen(false);

    const handleAssignTecnico = (tecnicoId) => {
        // Actualiza el estado del caso
        setCasos(casos.map(c => 
            c.id === selectedCaso.id ? { ...c, estado: 'En Progreso', tecnicoAsignado: tecnicoId } : c
        ));
        // Actualiza la disponibilidad del técnico
        setTecnicos(tecnicos.map(t =>
            t.id === tecnicoId ? { ...t, disponibilidad: 'Ocupado' } : t
        ));
        handleCloseModal();
    };
    
    // Filtrado de datos para renderizar
    const casosNuevos = casos.filter(c => c.estado === 'Nuevo');
    const casosEnProgreso = casos.filter(c => c.estado === 'En Progreso');
    const tecnicosDisponibles = tecnicos.filter(t => t.disponibilidad === 'Disponible');
    
    // --- ESTILOS VISUALES ---
    const pageStyle = { background: appColors.pageBg, minHeight: '100vh', padding: '30px', fontFamily: "'Segoe UI', 'Roboto', sans-serif", color: appColors.textDark };
    const dashboardGrid = { display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '30px', alignItems: 'flex-start' };
    const panelStyle = { background: appColors.cardBg, border: `1px solid ${appColors.borderColor}`, borderRadius: '18px', padding: '30px', backdropFilter: 'blur(10px)' };
    const panelTitleStyle = { fontSize: '1.8rem', fontWeight: '600', borderBottom: `2px solid ${appColors.primaryAccent}`, paddingBottom: '10px', marginBottom: '20px' };
    const cardStyle = { background: appColors.cardBgLighter, borderRadius: '12px', padding: '20px', marginBottom: '15px', borderLeft: `4px solid ${appColors.primaryAccent}` };
    const techCardStyle = { ...cardStyle, borderLeft: `4px solid ${appColors.successColor}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' };
    const buttonStyle = { padding: '8px 15px', backgroundColor: appColors.primaryAccent, border: 'none', borderRadius: '8px', color: '#1a1a32', fontWeight: 'bold', cursor: 'pointer' };

    // Estilos para el Modal
    const modalOverlayStyle = { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 };
    const modalContentStyle = { ...panelStyle, width: '100%', maxWidth: '600px', backdropFilter: 'blur(20px)', border: `1px solid ${appColors.primaryAccent}` };
    
    return (
        <div style={pageStyle}>
            <h1 style={{fontSize: '2.5rem', marginBottom: '30px'}}>Dashboard de Casos</h1>
            <div style={dashboardGrid}>
                {/* Columna Principal: Casos */}
                <div className="casos-column">
                    {/* Panel de Casos Nuevos */}
                    <div style={panelStyle}>
                        <h2 style={panelTitleStyle}>Casos Nuevos por Asignar ({casosNuevos.length})</h2>
                        {casosNuevos.length > 0 ? casosNuevos.map(caso => (
                            <div key={caso.id} style={cardStyle}>
                                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
                                    <h3 style={{fontSize: '1.2rem', margin: 0}}>{servicioIconos[caso.servicio]} {caso.servicio} - {caso.cliente}</h3>
                                    <button style={buttonStyle} onClick={() => handleOpenModal(caso)}>Asignar</button>
                                </div>
                                <p style={{color: appColors.textLight}}>{caso.descripcion}</p>
                                <small style={{color: appColors.textLight, opacity: 0.7}}>Reportado: {caso.fechaReporte} en {caso.direccion}</small>
                            </div>
                        )) : <p style={{color: appColors.textLight}}>No hay casos nuevos por asignar. ¡Buen trabajo!</p>}
                    </div>

                    {/* Panel de Casos en Progreso */}
                    <div style={{...panelStyle, marginTop: '30px'}}>
                         <h2 style={panelTitleStyle}>Casos en Progreso ({casosEnProgreso.length})</h2>
                         {casosEnProgreso.length > 0 ? casosEnProgreso.map(caso => (
                            <div key={caso.id} style={{...cardStyle, borderLeftColor: appColors.warningColor}}>
                                <h3 style={{fontSize: '1.2rem', margin: '0 0 10px 0'}}>{servicioIconos[caso.servicio]} {caso.servicio} - {caso.cliente}</h3>
                                <p style={{color: appColors.textLight}}>Técnico Asignado: {tecnicos.find(t => t.id === caso.tecnicoAsignado)?.nombre || 'N/A'}</p>
                            </div>
                        )) : <p style={{color: appColors.textLight}}>No hay casos en progreso actualmente.</p>}
                    </div>
                </div>

                {/* Columna Lateral: Técnicos */}
                <div className="tecnicos-column">
                    <div style={panelStyle}>
                        <h2 style={panelTitleStyle}>Técnicos Disponibles ({tecnicosDisponibles.length})</h2>
                        {tecnicosDisponibles.map(tech => (
                            <div key={tech.id} style={techCardStyle}>
                                <div>
                                    <h4 style={{margin: 0}}>{tech.nombre}</h4>
                                    <small style={{color: appColors.textLight}}>{tech.especialidad}</small>
                                </div>
                                <span style={{fontSize: '0.8rem', color: appColors.successColor}}>● Disponible</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* --- Ventana Modal para Asignar Técnico --- */}
            {isModalOpen && (
                <div style={modalOverlayStyle} onClick={handleCloseModal}>
                    <div style={modalContentStyle} onClick={e => e.stopPropagation()}>
                        <h2 style={panelTitleStyle}>Asignar al caso #{selectedCaso.id}</h2>
                        <p style={{color: appColors.textLight, marginBottom: '25px'}}>Servicio de <span style={{color: appColors.primaryAccent, fontWeight: 'bold'}}>{selectedCaso.servicio}</span> para el cliente <span style={{color: appColors.primaryAccent, fontWeight: 'bold'}}>{selectedCaso.cliente}</span>.</p>
                        
                        <h4>Selecciona un técnico disponible:</h4>
                        {tecnicosDisponibles.map(tech => {
                            const esEspecialista = tech.especialidad === selectedCaso.servicio;
                            return (
                                <div key={tech.id} style={{...techCardStyle, background: esEspecialista ? 'rgba(255, 215, 0, 0.1)' : appColors.cardBgLighter, borderLeftColor: esEspecialista ? appColors.primaryAccent : appColors.successColor, cursor: 'pointer'}} onClick={() => handleAssignTecnico(tech.id)}>
                                    <div>
                                        <h4 style={{margin: 0}}>{tech.nombre}</h4>
                                        <small style={{color: appColors.textLight}}>{tech.especialidad} {esEspecialista && '(Especialista recomendado)'}</small>
                                    </div>
                                    <button style={{...buttonStyle, background: 'transparent', border: `1px solid ${appColors.primaryAccent}`, color: appColors.primaryAccent}}>Asignar</button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminCasos;

