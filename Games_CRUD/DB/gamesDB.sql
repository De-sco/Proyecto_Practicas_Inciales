-- Tabla
CREATE DATABASE juegos;

use juegos;

-- Implementar la tabla(s)
CREATE TABLE Consola(
	idConsola INT AUTO_INCREMENT PRIMARY KEY,
	Nombre VARCHAR(45)
);

CREATE TABLE Juego(
	idJuego INT AUTO_INCREMENT PRIMARY KEY,
	Nombre VARCHAR(45),
	Descripcion VARCHAR(45),
	Cartucho VARCHAR(45),
	Fecha DATE,
	Consola_idConsola INT, 
	FOREIGN KEY (Consola_idConsola) REFERENCES Consola(idConsola)
);

CREATE TABLE Usuario(
	idUsuario INT AUTO_INCREMENT PRIMARY KEY,
	nombre VARCHAR(45),
	username VARCHAR(45),
	correo VARCHAR(45),
	contrasena VARCHAR(45),
	biografia VARCHAR(45),
	fecha DATE
);

CREATE TABLE Biblioteca (
	idBiblioteca INT AUTO_INCREMENT PRIMARY KEY,
	usuario_idUsuario INT,
	juego_idJuego INT,
	puntuacion INT,
	opinion VARCHAR(45),
	FOREIGN KEY (juego_idJuego) REFERENCES Juego(idJuego),
	FOREIGN KEY (usuario_idUsuario) REFERENCES Usuario(idUsuario)
);

CREATE TABLE Publicacion(
	idPublicacion INT AUTO_INCREMENT PRIMARY KEY,
	fecha DATE,
	usuario_idUsuario INT,
	juego_idJuego INT,
	comentario VARCHAR(45),
	FOREIGN KEY (juego_idJuego) REFERENCES Juego(idJuego),
	FOREIGN KEY (usuario_idUsuario) REFERENCES Usuario(idUsuario)
);

CREATE TABLE Comentario(
	idComentario INT AUTO_INCREMENT PRIMARY KEY,
	usuario_idUsuario INT,
	publicacion_idPublicacion INT,
	comentario VARCHAR(45),
	FOREIGN KEY (usuario_idUsuario) REFERENCES Usuario(idUsuario),
	FOREIGN KEY (publicacion_idPublicacion) REFERENCES Publicacion(idPublicacion)
);

-- Mostrar(consola)
SHOW TABLES;

-- Describir(consola)
describe Consola;
describe Juego;