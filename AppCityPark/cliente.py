from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel
from Clever_MySQL_conn import CleverCursor

createClienteRouter = APIRouter()

class Cliente(BaseModel):
    Id_Cliente: int
    Nombre: str
    Apellido: str
    dirreccion: str
    telefono: str
    cod_personal: str
    solicitud_mantenimiento: str

@createClienteRouter.post("/cliente")
async def create_cliente(cliente: Cliente):
    query = f"INSERT INTO Cliente (Id_Cliente, Nombre, Apellido, dirreccion, telefono, cod_personal, solicitud_mantenimiento) VALUES ({cliente.Id_Cliente}, '{cliente.Nombre}', '{cliente.Apellido}', '{cliente.dirreccion}', '{cliente.telefono}', '{cliente.cod_personal}', '{cliente.solicitud_mantenimiento}')"
    