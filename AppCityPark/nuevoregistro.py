from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel
from Clever_MySQL_conn import CleverCursor

createnuevoRegistroRouter = APIRouter()

class nuevoRegistro (BaseModel):
    id_tarea: str
    id_cliente: str
    descripcion: str
    tipo: str
    fecha_solicitud: int
    fecha_finalizacion: int
    estado: str
    personal_mantenimiento: str
    
    
@nuevoRegistro.post("/nuevoRegistro")
async def nuevoRegistro(nuevoRegistro: nuevoRegistro):
    query = f"INSERT INTO nuevoRegistro (id_tarea, id_cliente, descripcon, tipo, fecha_solicitud, estado, personal_mantenimiento) VALUES ({nuevoRegistro.id_cliente}, {nuevoRegistro.id_cliente}, '{nuevo.propiedad}', {solicitud.id_tarea}, '{solicitud.fecha_solicitud}', '{solicitud.estado}')"
    CleverCursor.execute(query)
    CleverCursor.commit()
    return {"message": "Solicitud created successfully"}