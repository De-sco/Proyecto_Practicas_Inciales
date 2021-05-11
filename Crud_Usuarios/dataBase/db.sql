
-- creando la base de datos
CREATE DATABASE CrudUsuarios;

-- usando base de datos
use CrudUsuarios;

-- tabla
CREATE TABLE usuarios1 (
  id INT(6) NOT NULL AUTO_INCREMENT PRIMARY KEY,
  NoUsuario VARCHAR(50) NOT NULL,
  Nombre VARCHAR(100) NOT NULL,
  Apellido VARCHAR(100) NOT NULL,
  FeNacimiento VARCHAR(15) NOT NULL,
  Correo VARCHAR(100) NOT NULL,
  Contra VARCHAR(25)  NOT NULL,
  Biografia VARCHAR(200)
);

INSERT INTO usuarios VALUES ("admin", "admin","admin", "2012-01-12","admin","admin","admin");
-- to show all tables
show tables;

-- to describe tables
DESCRIBE usuarios;
