from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from Clever_MySQL_conn import CleverCursor
from Clever_MySQL_conn import mysqlConn
nuevoregistroRouter = APIRouter()

class UsuarioRegistro(BaseModel):
    nombre: str
    apellido: str
    cedula: str
    telefono: str
    email: str
    password: str
    confirmPassword: str

def commit():
    try:
        CleverCursor.connection.commit()
    except Exception as e:
        pass

def dictfetchall(cursor):
    columns = [col[0] for col in cursor.description]
    return [dict(zip(columns, row)) for row in cursor.fetchall()]

# POST: Crear nuevo usuario
@nuevoregistroRouter.post("/usuario/registro")
async def crear_usuario(usuario: UsuarioRegistro):
    try:
        if usuario.password != usuario.confirmPassword:
            raise HTTPException(status_code=400, detail="Las contraseñas no coinciden")
        query = ("INSERT INTO usuarios (nombre, apellido, cedula, telefono, email, password) "
                 "VALUES (%s, %s, %s, %s, %s, %s)")
        CleverCursor.execute(query, (
            usuario.nombre, usuario.apellido, usuario.cedula, usuario.telefono, usuario.email, usuario.password
        ))
        mysqlConn.commit()
        return {"message": "Usuario registrado exitosamente"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# GET: Obtener todos los usuarios
@nuevoregistroRouter.get("/usuario/registro")
async def obtener_usuarios():
    try:
        CleverCursor.execute("SELECT * FROM usuarios")
        rows = dictfetchall(CleverCursor)
        return rows
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# GET: Obtener un usuario por cedula
@nuevoregistroRouter.get("/usuario/registro/{cedula}")
async def obtener_usuario(cedula: str):
    try:
        CleverCursor.execute("SELECT * FROM usuarios WHERE cedula = %s", (cedula,))
        row = CleverCursor.fetchone()
        if not row:
            raise HTTPException(status_code=404, detail="Usuario no encontrado")
        return row
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# PUT: Actualizar un usuario existente
@nuevoregistroRouter.put("/usuario/registro/{cedula}")
async def actualizar_usuario(cedula: str, usuario: UsuarioRegistro):
    try:
        if usuario.password != usuario.confirmPassword:
            raise HTTPException(status_code=400, detail="Las contraseñas no coinciden")
        query = ("UPDATE usuarios SET nombre=%s, apellido=%s, telefono=%s, email=%s, password=%s "
                 "WHERE cedula=%s")
        CleverCursor.execute(query, (
            usuario.nombre, usuario.apellido, usuario.telefono, usuario.email, usuario.password, cedula
        ))
        commit()
        return {"message": "Usuario actualizado exitosamente"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# DELETE: Eliminar un usuario
@nuevoregistroRouter.delete("/usuario/registro/{cedula}")
async def eliminar_usuario(cedula: str):
    try:
        CleverCursor.execute("DELETE FROM usuarios WHERE cedula = %s", (cedula,))
        commit()
        return {"message": "Usuario eliminado exitosamente"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
