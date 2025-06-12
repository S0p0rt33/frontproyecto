from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel
from Clever_MySQL_conn import CleverCursor

createSolicitudRouter = APIRouter()

class Solicitud (BaseModel):
    id_solicitud: int
    id_cliente: int
    propiedad: str
    id_tarea: int
    fecha_solicitud: str
    estado: str
    
    
@createSolicitudRouter.post("/solicitud")
async def create_solicitud(solicitud: Solicitud):
    query = f"INSERT INTO Solicitud (id_solicitud, id_cliente, propiedad, id_tarea, fecha_solicitud, estado) VALUES ({solicitud.id_solicitud}, {solicitud.id_cliente}, '{solicitud.propiedad}', {solicitud.id_tarea}, '{solicitud.fecha_solicitud}', '{solicitud.estado}')"
    CleverCursor.execute(query)
    CleverCursor.commit()
    return {"message": "Solicitud created successfully"}

    
@createSolicitudRouter.get("/solicitud/{id_solicitud}")
async def get_solicitud(id_solicitud: int):
    query = f"SELECT * FROM Solicitud WHERE id_solicitud = {id_solicitud}"
    CleverCursor.execute(query)
    result = CleverCursor.fetchone()
    if not result:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Solicitud not found")
    return result 