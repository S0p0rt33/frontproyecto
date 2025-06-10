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

    
    