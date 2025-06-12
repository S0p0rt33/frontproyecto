from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel
from Clever_MySQL_conn import CleverCursor

cargoRouter =  APIRouter()

class CargoDB(BaseModel):
    id_tarea: str
    id_cliente:str
    descripcion:str
    tipo:str
    fecha_solicitud:int
    fecha_finalizacion:int
    estado:str
    personal_mantenimiento:str
    
@cargoRouter.get("/cargo")
async def get_users(cargo: CargoDB):
    selectAll_query = 'Select * from cargo'
    CleverCursor.execute(selectAll_query)
    result = CleverCursor.fetchall()
    return result

@cargoRouter.get("/cityPark_cargo/{cargo_id}", status_code=status.HTTP_200_OK)
def get_user_by_id(cargo_id: int):
    select_query = "SELECT * FROM cargo WHERE id_cargo = %s"
    CleverCursor.execute(select_query, (cargoDB_id_tarea, CargoDB_id_cliente, CargoDB_descripcion, CargoDB_tipo, CargoDB_fecha_solicitud, CargoDB_fecha_finalizacion, CargoDB_estado, CargoDB_personal_mantenimiento))
    result = CleverCursor.fetchone()
    if result:
        return result
    else:
        raise HTTPException(status_code=404, detail="Cargo no encontrado")
    
@cargoRouter.post("/cargo/", status_code=status.HTTP_201_CREATED)
def insert_user(cargoPost: CargoDB):
    insert_query = """
    INSERT INTO cargo (nombre_cargo, salario)
    VALUES (%s, %s)
    """
    values = (cargoPost.nombre_cargo, cargoPost.salario)

    try:
        CleverCursor.execute(insert_query, values)
        mysqlConn.commit()
    except mysqlConn.connector.Error as err:
        raise HTTPException(status_code=400, detail=f"Error: {err}")

    return {"message": "User inserted successfully"}


#import hashlib
# Hash the password using SHA-256
# hashed_password = hashlib.sha256(cargoPost.password.encode()).hexdigest()

