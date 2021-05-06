import { Injectable } from '@angular/core';

// Aqui es donde se van a traer los datos de la API

import { HttpClient } from '@angular/common/http'; // Para pedir datos

import { Game } from '../models/Game'; // Importando la interfaz, para recibir un objeto de tipo Game 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  API_URI = 'http://localhost:3000/api' // Aqui deber ir la ruta de donde se encuentra el servidor para hacer las peticiones

  constructor(private http: HttpClient) { }

  // Metodo para obtener todos los juegos del servidor
  getGames() {
    return this.http.get(`${this.API_URI}/games`); // Peticion GET
  }

  // metodo para obtener un unico juego
  getGame(id: string) {
    return this.http.get(`${this.API_URI}/games/${id}`); // Peticion GET
  }

  // Eliminar un juego
  deleteGame(id: string) {
    return this.http.delete(`${this.API_URI}/games/${id}`); // Peticion DELETE
  }

  // Guardar un juego
  saveGame(game: Game) {
    return this.http.post(`${this.API_URI}/games`, game); // Peticion POST
  }

  // Actualizar un juego
  updateGame (id: string, updateGame: Game): Observable<Game> {
    return this.http.put(`${this.API_URI}/games/${id}`, updateGame); // Peticion POST
  }
}

