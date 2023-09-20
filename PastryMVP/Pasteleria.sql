CREATE DATABASE Pasteleria;
USE Pasteleria;

CREATE TABLE Usuario
(
Id_usuario int unsigned auto_increment primary key,
Usuario varchar(100) not null,
Clave varchar(60) not null,
Nombre VARCHAR (255) NOT NULL,
Telefono INT UNSIGNED NOT NULL,
Cedula int unsigned not null,
Fecha_Nacimiento DATE NOT NULL,
Correo VARCHAR (155) NOT NULL,
Direccion varchar(255) not null,
Estado enum ("Activo","Inactivo") default "Activo"
);

Create table Rol(
Id_rol int unsigned auto_increment primary key,
Rol Enum ("Administrador", "Empleado", "Cliente"),
Id_usuario int unsigned not null,
FOREIGN KEY (Id_usuario) references Usuario (Id_usuario)

);
CREATE TABLE Pedido
(
Id_pedido INT unsigned AUTO_INCREMENT PRIMARY KEY,
Descripcion_pedido VARCHAR (255) NOT NULL ,
Valor_pedido int not null,
Fecha_entrega date not null,
CC_repartidor int not null,
Estado boolean not null,
Tipo_envio Enum ("Enviar", "Recojer"),
Id_usuario INT UNSIGNED not null,
FOREIGN KEY (Id_usuario) references Usuario (Id_usuario)
);

CREATE TABLE Pago
(
Id_pago int unsigned AUTO_INCREMENT PRIMARY KEY,
Valor_pago int not null,
Fecha_pago DATE NOT NULL,
Metodo_pago Enum ("Efectivo", "Nequi"),
Contacto int not null,
Descripcion_Pago varchar(255) not null,
Id_pedido int unsigned not null,
foreign key (Id_pedido) references Pedido (Id_pedido)
);

CREATE TABLE Envio
(
Id_envio int unsigned auto_increment primary key,
Estado enum ("Activo", "Inactivo"),
Fecha_entrega date not null,
Id_pedido int unsigned not null,
foreign key (Id_pedido) references Pedido (Id_pedido)
);

CREATE TABLE Producto
(
Id_Producto INT unsigned AUTO_INCREMENT PRIMARY KEY,
Nombre varchar (150) not null,
Descripcion varchar(255) not null,
Imagen varchar(255) not null,
Estado enum ("Activo","Inactivo") default "Activo"
);

CREATE TABLE Personalizacion
(
Id_personalizacion INT unsigned AUTO_INCREMENT PRIMARY KEY,
Cantidad_personas int not null,
Cantidad_pisos int not null,
Relleno enum("Mora","Cereza"),
Cantidad_sabores enum("1","2"),
Sabores enum ("Chocolate","Fresa","Maracuya"),
Sabores2 enum ("Sin sabor","Chocolate","Fresa","Maracuya"),
Caracteristicas varchar(255) not null,
Imagen varchar(255) not null,
Id_producto int unsigned not null,
FOREIGN KEY (Id_producto) references Producto(Id_producto)
);                            
create table pedido_producto(
Id_pedido int unsigned not null,
Id_producto int unsigned not null,
cantidad_producto int unsigned not null,
FOREIGN KEY (Id_producto) references Producto(Id_producto),
FOREIGN KEY (Id_pedido) references Pedido(Id_pedido) 
);
      -- Insertar datos en la tabla Usuario
INSERT INTO Usuario (Usuario, Clave, Nombre, Telefono, Cedula, Fecha_Nacimiento, Correo, Direccion)
VALUES
    ('usuario1', 'clave1', 'Nombre 1', 1234567, 111111, '2000-01-01', 'usuario1@example.com', 'Dirección 1'),
    ('usuario2', 'clave2', 'Nombre 2', 2345678, 222222, '2001-02-02', 'usuario2@example.com', 'Dirección 2'),
    ('usuario3', 'clave3', 'Nombre 3', 3456789, 333333, '2002-03-03', 'usuario3@example.com', 'Dirección 3'),
    ('usuario4', 'clave4', 'Nombre 4', 4567890, 444444, '2003-04-04', 'usuario4@example.com', 'Dirección 4'),
    ('usuario5', 'clave5', 'Nombre 5', 5678901, 555555, '2004-05-05', 'usuario5@example.com', 'Dirección 5'),
    ('usuario6', 'clave 6', 'Nombre 6', 6234567, 666666, '2006-06-06', 'usuario6@example.com', 'Dirección 6'),
    ('usuario7', 'clave7', 'Nombre 7', 7345777, 777777, '2007-07-07', 'usuario7@example.com', 'Dirección 7'),
    ('usuario8', 'clave8', 'Nombre 8', 8456782, 888888, '2008-08-08', 'usuario8@example.com', 'Dirección 8'),
    ('usuario9', 'clave9', 'Nombre 9', 9567890, 999999, '2009-09-09', 'usuario9@example.com', 'Dirección 9'),
    ('usuario10', 'clave10', 'Nombre 10', 1078911, 101010, '2010-10-10', 'usuario10@example.com', 'Dirección 10');

-- Insertar datos en la tabla Rol
INSERT INTO Rol (Rol, Id_usuario)
VALUES
    ('Administrador', 1),
    ('Empleado', 2),
    ('Cliente', 3),
    ('Empleado', 4),
    ('Empleado', 5),
    ('Cliente', 6),
    ('Cliente', 7),
    ('Cliente', 8),
    ('Cliente', 9),
    ('Cliente', 10);

-- Insertar datos en la tabla Pedido
INSERT INTO Pedido (Descripcion_pedido, Valor_pedido, Fecha_entrega, CC_repartidor, Estado, Tipo_envio, Id_usuario)
VALUES
    ('Pedido 1', 10000, '2023-09-01', 123456, 1, 'Enviar', 1),
    ('Pedido 2', 15000, '2023-09-02', 234567, 0, 'Recojer', 2),
    ('Pedido 3', 20000, '2023-09-03', 345678, 1, 'Enviar', 3),
    ('Pedido 4', 25000, '2023-09-04', 456789, 1, 'Enviar', 4),
    ('Pedido 5', 30000, '2023-09-05', 567890, 0, 'Recojer', 5),
    ('Pedido 6', 60000, '2023-09-06', 634591, 1, 'Enviar', 6),
    ('Pedido 7', 21000, '2023-09-07', 734592, 0, 'Recojer', 7),
    ('Pedido 8', 18000, '2023-09-08', 845694, 1, 'Enviar', 8),
    ('Pedido 9', 19000, '2023-09-09', 956796, 1, 'Enviar', 9),
    ('Pedido 10', 23000, '2023-09-10', 107898, 0, 'Recojer', 10);

-- Insertar datos en la tabla Producto
INSERT INTO Producto (Nombre, Descripcion, Imagen)
VALUES
    ('Pastel 1', 'Descripción del pastel 1', 'imagen1.jpg'),
    ('Pastel 2', 'Descripción del pastel 2', 'imagen2.jpg'),
    ('Pastel 3', 'Descripción del pastel 3', 'imagen3.jpg'),
    ('Pastel 4', 'Descripción del pastel 4', 'imagen4.jpg'),
    ('Pastel 5', 'Descripción del pastel 5', 'imagen5.jpg'),
	('Pastel 6', 'Descripción del pastel 6', 'imagen6.jpg'),
    ('Pastel 7', 'Descripción del pastel 7', 'imagen7.jpg'),
    ('Pastel 8', 'Descripción del pastel 8', 'imagen8.jpg'),
    ('Pastel 9', 'Descripción del pastel 9', 'imagen9.jpg'),
    ('Pastel 10', 'Descripción del pastel 10', 'imagen10.jpg');

-- Insertar datos en la tabla Pago
#(Asegura que haya al menos 5 registros en Pago)
INSERT INTO Pago (Valor_pago, Fecha_pago, Metodo_pago, Contacto, Descripcion_pago, Id_pedido)
VALUES
    (10000, '2023-09-01', 'Efectivo',31232101,'Descripcion del pago 1' ,1),
    (15000, '2023-09-02', 'Nequi',31232102,'Descripcion del pago 2',  2),
    (20000, '2023-09-03', 'Efectivo',31232103,'Descripcion del pago 3' , 3),
    (25000, '2023-09-04', 'Nequi', 31232104,'Descripcion del pago 4' ,4),
    (30000, '2023-09-05', 'Efectivo', 31232105,'Descripcion del pago 5' ,5),
    (60000, '2023-09-06', 'Efectivo', 31232106,'Descripcion del pago 6' ,6),
    (21000, '2023-09-07', 'Nequi', 31232107,'Descripcion del pago 7' ,7),
    (18000, '2023-09-08', 'Efectivo', 31232108,'Descripcion del pago 8' ,8),
    (19000, '2023-09-09', 'Nequi', 31232109,'Descripcion del pago 9' ,9),
    (23000, '2023-09-10', 'Efectivo', 31232010,'Descripcion del pago 10' ,10);

-- Insertar datos en la tabla Envio (Asegura que haya al menos 5 registros en Envio)
INSERT INTO Envio (Estado, Fecha_entrega, Id_pedido)
VALUES
    ('Activo', '2023-09-01', 1),
    ('Inactivo', '2023-09-02', 2),
    ('Activo', '2023-09-03', 3),
    ('Inactivo', '2023-09-04', 4),
    ('Activo', '2023-09-05', 5),
    ('Activo', '2023-09-06', 6),
    ('Inactivo', '2023-09-07', 7),
    ('Activo', '2023-09-08', 8),
    ('Inactivo', '2023-09-09', 9),
    ('Activo', '2023-09-10', 10);

-- Insertar datos en la tabla Personalizacion
INSERT INTO Personalizacion (Cantidad_personas, Cantidad_pisos, Relleno, Cantidad_sabores, Sabores, Sabores2, Caracteristicas, Imagen, Id_producto)
VALUES
    (10, 2, 'Mora', '1', 'Chocolate', 'Sin sabor', 'Características 1', 'imagen1.jpg', 1),
    (12, 3, 'Cereza', '2', 'Fresa', 'Chocolate','Características 2', 'imagen2.jpg', 2),
    (8, 1, 'Mora', '1', 'Maracuya', 'Sin sabor', 'Características 3', 'imagen3.jpg', 3),
    (15, 4, 'Cereza', '2', 'Maracuya','Fresa', 'Características 4', 'imagen4.jpg', 4),
    (20, 2, 'Mora', '1', 'Maracuya','Sin sabor','Características 5', 'imagen5.jpg', 5),
    (8, 2, 'Mora', '1', 'Chocolate','Sin sabor', 'Características 6', 'imagen6.jpg', 6),
    (10, 3, 'Cereza', '2', 'Fresa','Maracuya','Características 7', 'imagen7.jpg', 7),
    (4, 1, 'Mora', '1', 'Maracuya', 'Sin sabor','Características 8', 'imagen8.jpg', 8),
    (6, 4, 'Cereza', '2', 'Maracuya', 'Chocolate','Características 9', 'imagen9.jpg', 9),
    (12, 2, 'Mora', '1', 'Maracuya','Sin sabor','Características 10', 'imagen10.jpg', 10);

INSERT INTO pedido_producto (Id_pedido, Id_producto, cantidad_producto)
VALUES
    (1, 1, 5),
    (2, 2, 3),
    (3, 3, 8),
    (4, 4, 12),
    (5, 5, 10),
	(6, 6, 10),
    (7, 7, 12),
    (8, 8, 6),
    (9, 9, 3),
    (10, 10, 5);
    
     -- ---------------Consultas--------------
select * from usuario;
select * from usuario where Usuario="juli12" and Clave="1031646772";
update usuario set Nombre="Jose" where Id_usuario=2;