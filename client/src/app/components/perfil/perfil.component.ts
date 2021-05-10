import { Component, OnInit } from '@angular/core';

import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  games: any = [];
  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.gamesService.getGames().subscribe (
      res => console.log(res),
      err => console.error(err)
    );
  }

}
