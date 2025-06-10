from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel
from Clever_MySQL_conn import CleverCursor

createPersonalRouter = APIRouter()

class Personal(BaseModel):
    cod_personal: int
    Nombre: str
    Apellidos: str
    direccion: str
    telefono: str
    Descripccion: str

@createPersonalRouter.post("/personal")
async def create_personal(personal: Personal):
    query = f"INSERT INTO Personal (cod_personal, Nombre, Apellidos, direccion, telefono, Descripccion) VALUES ({personal.cod_personal}, '{personal.Nombre}', '{personal.Apellidos}', '{personal.direccion}', '{personal.telefono}', '{personal.Descripccion}')"
    CleverCursor.execute(query)
    CleverCursor.commit()
    return {"message": "Personal created successfully"}