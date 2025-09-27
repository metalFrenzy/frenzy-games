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
  games: GameDto[] = [];
  isloading: boolean = false;
  error: string | null = null;
  ngOnInit(): void {
    this.getGames();
  }

  constructor(private gameService: GameService) {

  }

  getGames(): void {
    this.isloading = true;
    this.gameService.getGames().subscribe({
      next: (games) => {
        this.games = games;
        this.isloading = false;
        console.log(games);
      },
      error: (err) => {
        this.error = err;
        this.isloading = false;
        console.log(err)
      }
    })
  }

  goToDetails(): void {
    console.log("clcococjccjcjjc")
  }

}
