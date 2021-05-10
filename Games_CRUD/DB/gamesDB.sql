-- Tabla
CREATE DATABASE juegos;

use juegos;

-- Implementar la tabla(s)
CREATE TABLE Consolas(
	idConsola INT AUTO_INCREMENT PRIMARY KEY,
	Nombre VARCHAR(45)
)

CREATE TABLE Juegos (
	idJuego INT AUTO_INCREMENT PRIMARY KEY,
	Nombre VARCHAR(45),
	Descripcion VARCHAR(45),
	Cartucho VARCHAR(45),
	Fecha DATE.
	Consola_idConsola INT
);

-- Mostrar(consola)
SHOW TABLES;

-- Describir(consola)
describe Consolas;
describe Juegos;