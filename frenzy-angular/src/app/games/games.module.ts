import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { CreateGameComponent } from './components/create-game/create-game.component';



@NgModule({
  declarations: [
    GamesListComponent,
    GameDetailComponent,
    CreateGameComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GamesModule { }
