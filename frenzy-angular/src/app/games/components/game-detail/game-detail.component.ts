import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { GameDto } from 'src/app/models/game.models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {
  game!: GameDto;
  error: string | null = null;
  isLoading: boolean = false;
  ngOnInit(): void {
    const gameId = this.route.snapshot.paramMap.get('id');
    this.getGameDetails(gameId!);
  }
  constructor(private gameService: GameService, private route: ActivatedRoute) {

  }

  getGameDetails(gameId: string): void {
    this.isLoading = true;
    this.gameService.getGameById(gameId).subscribe({
      next: (game) => {
        this.game = game;
        this.isLoading = false;
        console.log(game);

      },
      error: (err) => {
        this.error = err;
        this.isLoading = false;
        console.log(err);
      }
    })
  }
}
