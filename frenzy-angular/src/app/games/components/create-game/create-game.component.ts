import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GameService } from '../../services/game.service';
import { Router } from '@angular/router';
import { CreateGameDto } from 'src/app/models/game.models';

@Component({
  selector: 'app-create-game',
  templateUrl: './create-game.component.html',
  styleUrls: ['./create-game.component.scss']
})
export class CreateGameComponent implements OnInit {
  ngOnInit(): void {

  }

  constructor(private gameService: GameService, private router: Router) { }

  gameForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl(0, Validators.required),
    platform: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required)
  })

  onSubmit() {
    if (this.gameForm.valid) {
      const createGame: CreateGameDto = {
        name: this.gameForm.value.name!,
        price: this.gameForm.value.price!,
        platform: this.gameForm.value.platform!,
        description: this.gameForm.value.description!,
        coverImage: 'https://media.rawg.io/media/games/193/19390fa5e75e9048b22c9a736cf9992f.jpg',

      }
      this.gameService.addGame(createGame).subscribe({
        next: (res) => {
          console.log('Game created successfully', res);
          this.router.navigate(['/games']);
        },
        error: (err) => {
          console.error('Error creating game', err);
        }
      })
    }
  }
}