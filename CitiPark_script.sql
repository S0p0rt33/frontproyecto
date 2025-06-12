/*IMPORTANTE: Comentar la siguente instrucción si se ejecutará este script en CLEVER-CLOUD*/
DROP DATABASE IF EXISTS `homeup`;
CREATE DATABASE Homeup;

USE Homeup;

create table Tarea ( 
Id_tarea char(12) primary key,
Id_Cliente varchar(50) not null,
Descripcion varchar(50) not null,
Tipo varchar(50) not null,
Fecha_Solicitud date not null,
Fecha_Finalizacion date not null,
Estado varchar(50),
Personal_Mantenimiento varchar(50)
);


create table Cliente ( 
Id_Cliente varchar(12) primary key,
Nombre varchar (50) not null,
Apellidos varchar (50) not null,
Dirrecion varchar (50) not null,
Telefono varchar (10) not null,
Cod_personal char (12),
Solicitud_Mantenimiento varchar(12),
foreign key (Solicitud_Mantenimiento) references tarea (Id_tarea)
);


create table Personal ( 
cod_personal char(12) primary key,
Nombre varchar (50) not null,
Apellidos varchar (50) not null,
Dirrecion varchar (50) not null,
Telefono varchar (10) not null,
Descripcion char(12),
foreign key (Descripcion) references Cliente (Id_Cliente)
);


create table Solicitud (
Id_Solicitud char(12) primary key,
Id_Cliente  varchar (50) not null,
Id_Propiedad  varchar (50) not null,
Id_Tarea varchar (50) not null,
Fecha_Solicitud date,
Estado varchar (50),
foreign key (Estado) references Personal (cod_personal)
);


create table Proveedor (
Id_Proveedor char(12) primary key,
Nombre varchar (50) not null,
Telefono varchar (10) not null,
Servicio_Ofrecido varchar (10) not null,
foreign key (Servicio_Ofrecido) references Solicitud (Id_Solicitud)
);


create table Propiedad (
Id_Propiedad char(12) primary key,
Direccion varchar(50) not null,
Tipo_Propiedad varchar(50) not null,
Fecha_De_Construccion date,
Estado varchar(50),
Tarea_De_Mantenimieno varchar(50),
foreign key (Tarea_De_Mantenimieno) references Proveedor (Id_Proveedor)
);



create table Cargo (
id_tarea char(12) primary key,
id_cliente varchar(50),
descripcion varchar(50),
tipo varchar(50) not null,
fecha_solicitud date,
fecha_finalizacion date,
estado varchar(50),
personal_mantenimiento varchar(50),
);


-- TABLA DE ADMINISTRADORES PARA LOGIN
CREATE TABLE IF NOT EXISTS Administradores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    nombre VARCHAR(100) NOT NULL
);

INSERT IGNORE INTO Administradores (email, password, nombre) VALUES ('admin@homeup.com', 'admin123', 'Admin General');

-- TABLA DE TECNICOS PARA DASHBOARD ADMIN
CREATE TABLE IF NOT EXISTS Tecnicos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    especialidad VARCHAR(50) NOT NULL,
    disponibilidad VARCHAR(20) DEFAULT 'Disponible'
);

-- TABLA DE CASOS PARA DASHBOARD ADMIN
CREATE TABLE IF NOT EXISTS Casos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    cliente VARCHAR(100) NOT NULL,
    direccion VARCHAR(200) NOT NULL,
    servicio VARCHAR(50) NOT NULL,
    descripcion TEXT NOT NULL,
    fechaReporte DATE NOT NULL,
    estado VARCHAR(30) DEFAULT 'Nuevo',
    tecnicoAsignado INT,
    FOREIGN KEY (tecnicoAsignado) REFERENCES Tecnicos(id)
);

-- DATOS DE EJEMPLO PARA TECNICOS Y CASOS
INSERT IGNORE INTO Tecnicos (id, nombre, especialidad, disponibilidad) VALUES
(101, 'Ricardo Mendoza', 'Plomería', 'Disponible'),
(102, 'Javier Solano', 'Pintura', 'Ocupado'),
(103, 'Luis Valbuena', 'Electricidad', 'Disponible'),
(104, 'Andrés Parra', 'Albañilería', 'Disponible'),
(105, 'Mario Lopera', 'Plomería', 'Disponible');

INSERT IGNORE INTO Casos (id, cliente, direccion, servicio, descripcion, fechaReporte, estado, tecnicoAsignado) VALUES
(1, 'Ana Martínez', 'Cra 7 # 12-34', 'Plomería', 'Fuga de agua en el lavamanos del baño principal.', '2025-06-10', 'Nuevo', NULL),
(2, 'Carlos Jiménez', 'Calle 100 # 15-20', 'Electricidad', 'El interruptor de la sala no funciona y hay un cortocircuito.', '2025-06-10', 'Nuevo', NULL),
(3, 'Sofía Castro', 'Av. El Dorado # 68-70', 'Albañilería', 'Necesito reparar una pared agrietada en la habitación.', '2025-06-09', 'Nuevo', NULL),
(4, 'Empresa XYZ', 'Oficina 501, Edificio Central', 'Pintura', 'Pintar la sala de juntas principal.', '2025-06-08', 'En Progreso', 102);


commit;

