from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel
from Clever_MySQL_conn import CleverCursor

createPropiedadRouter = APIRouter()

class Propiedad(BaseModel):
    id_propiedad: int
    direccion: str
    tipo_propiedad: str
    fecha_de_construccion: str
    estado: str
    tarea_de_mantenimiento: str
    
@createPropiedadRouter.post("/propiedad")
async def create_propiedad(propiedad: Propiedad):
    query = f"INSERT INTO Propiedad (id_propiedad, direccion, tipo_propiedad, fecha_de_construccion, estado, tarea_de_mantenimiento) VALUES ({propiedad.id_propiedad}, '{propiedad.direccion}', '{propiedad.tipo_propiedad}', '{propiedad.fecha_de_construccion}', '{propiedad.estado}', '{propiedad.tarea_de_mantenimiento}')"
    CleverCursor.execute(query)
    CleverCursor.commit()
    return {"message": "Propiedad created successfully"}