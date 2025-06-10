from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel
from Clever_MySQL_conn import CleverCursor

createProveedorRouter = APIRouter()

class Proveedor(BaseModel):
    id_proveedor: int
    nombre: str
    telefono: str
    servicio_ofrecido: str

@createProveedorRouter.post("/proveedor")
async def create_proveedor(proveedor: Proveedor):
    query = f"INSERT INTO Proveedor (id_proveedor, nombre, telefono, servicio_ofrecido) VALUES ({proveedor.id_proveedor}, '{proveedor.nombre}', '{proveedor.telefono}', '{proveedor.servicio_ofrecido}')"
    CleverCursor.execute(query)
    CleverCursor.commit()
    return {"message": "Proveedor created successfully"}   
