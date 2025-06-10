/*IMPORTANTE: Comentar la siguente instrucción si se ejecutará este script en CLEVER-CLOUD*/
DROP DATABASE IF EXISTS `Homeup`;
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


commit;
