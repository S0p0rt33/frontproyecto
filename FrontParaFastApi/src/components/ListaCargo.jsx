export default function ListaCargo({ tareas }) {
  return (
    <div className="containerForm">
      <h2>Listado de Tareas</h2>
      <table className="tablaTareas">
        <thead>
          <tr>
            <th>ID</th>
            <th>Cliente</th>
            <th>Descripción</th>
            <th>Tipo</th>
            <th>Solicitud</th>
            <th>Finalización</th>
            <th>Estado</th>
            <th>Responsable</th>
          </tr>
        </thead>
        <tbody>
          {tareas && tareas.length > 0 ? (
            tareas.map((t, i) => (
              <tr key={i}>
                <td>{t.id_tarea}</td>
                <td>{t.id_cliente}</td>
                <td>{t.descripcion}</td>
                <td>{t.tipo}</td>
                <td>{t.fecha_solicitud}</td>
                <td>{t.fecha_finalizacion}</td>
                <td>{t.estado}</td>
                <td>{t.personal_mantenimiento}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8">No hay tareas registradas.</td>
            </tr>
          )}
        </tbody>
      </table>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
