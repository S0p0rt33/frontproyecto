from typing import Union
from fastapi import FastAPI
from usuario_map import usuarioRouter
from cargo import cargoRouter
from fastapi.middleware.cors import CORSMiddleware
from tarea import tareaRouter  
from fastapi import Request, HTTPException
import mysql.connector
from pydantic import BaseModel
from nuevoregistro import nuevoregistroRouter

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    allow_origins=["*"]
)

app.include_router(usuarioRouter)
app.include_router(cargoRouter)
app.include_router(tareaRouter)
app.include_router(nuevoregistroRouter)

@app.get("/")
async def read_root():
    return {"Hello": "World"}

#solo parametro la url debe enviarse: "http://127.0.0.1:8000/items/?q=infoComoParametro"
@app.get("/items/")
async def read_param_item(q: Union[str, None] = None):
    return {"q": q}

#solo info como parte de la url debe enviarse: "http://127.0.0.1:8000/items/5"
@app.get("/items/{item_id}")
async def read_paramInPath_item(item_id: int):
    return {"item_id": item_id}

#realizar envio de información de las 2 formas en simultánea en la url debe enviarse: "http://127.0.0.1:8000/items/5?q=infoComoParametro"
@app.get("/items/{item_id}")
async def read_both_paramTypes_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
    
@app.delete("/items_del/{item_id}")
async def delete_by_id(item_id: int):
    return {"resultado": "Se ha eliminado correctamente el item solicitado"}

# --- MODELOS PARA ADMIN Y CASOS ---
class AdminLogin(BaseModel):
    email: str
    password: str

# --- ENDPOINT LOGIN ADMIN ---
@app.post("/login_admin")
async def login_admin(data: AdminLogin):
    conn = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",  # Cambia por tu contraseña real
        database="Homeup"
    )
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM Administradores WHERE email=%s AND password=%s", (data.email, data.password))
    admin = cursor.fetchone()
    cursor.close()
    conn.close()
    if admin:
        return {"success": True, "nombre": admin["nombre"]}
    else:
        raise HTTPException(status_code=401, detail="Credenciales inválidas")

# --- ENDPOINT PARA LISTAR CASOS Y TECNICOS (ADMIN DASHBOARD) ---
@app.get("/admin/casos")
async def get_casos():
    conn = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",  # Cambia por tu contraseña real
        database="Homeup"
    )
    cursor = conn.cursor(dictionary=True)
    cursor.execute("SELECT * FROM Casos")
    casos = cursor.fetchall()
    cursor.execute("SELECT * FROM Tecnicos")
    tecnicos = cursor.fetchall()
    cursor.close()
    conn.close()
    return {"casos": casos, "tecnicos": tecnicos}


