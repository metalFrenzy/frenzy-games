import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Observable } from 'rxjs';
import { GameDto } from 'src/app/models/game.models';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent implements OnInit {
  games: Observable<GameDto[]> | undefined;
  ngOnInit(): void {
    this.games = this.getGames();
    console.log(this.games)
  }

  constructor(private gameService: GameService) {

  }

  getGames(): Observable<GameDto[]> {
    return this.gameService.getGames();
  }

}
