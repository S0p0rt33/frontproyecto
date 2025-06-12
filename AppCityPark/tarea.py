from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel
from Clever_MySQL_conn import CleverCursor, mysqlConn
import datetime
 

tareaRouter = APIRouter()

class Tarea(BaseModel):
    id_tarea: str
    id_cliente: str
    descripcion: str
    tipo : str
    fecha_solicitud: datetime.date
    fecha_finalizacion: datetime.date
    estado: str
    personal_mantenimiento: str
    
@tareaRouter.post("/tarea")
async def create_tarea(tarea: Tarea):
    query = f"INSERT INTO tarea (id_tarea, id_cliente, Descripcion, Tipo, fecha_solicitud, fecha_finalizacion, estado, personal_Mantenimiento) VALUES ({tarea.id_tarea}, {tarea.id_cliente}, '{tarea.descripcion}', '{tarea.tipo}', '{tarea.fecha_solicitud}', '{tarea.fecha_finalizacion}', '{tarea.estado}', '{tarea.personal_mantenimiento}')"
    CleverCursor.execute(query)
    mysqlConn.commit()
    return {"message": "tarea created successfully"}

@tareaRouter.get("/tareas", response_model=list[Tarea])
async def get_tareas():
    query = "SELECT id_tarea, id_cliente, Descripcion, Tipo, fecha_solicitud, fecha_finalizacion, estado, personal_Mantenimiento FROM Tarea"
    CleverCursor.execute(query)
    results = CleverCursor.fetchall()

    tareas = [
        Tarea(
            id_tarea=str(row[0]),
            id_cliente=str(row[1]),
            descripcion=str(row[2]),
            tipo=str(row[3]),
            fecha_solicitud=row[4],
            fecha_finalizacion=row[5],
            estado=str(row[6]),
            personal_mantenimiento=str(row[7]),
        )
        for row in results
    ]
    return tareas