import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { CreateGameComponent } from './components/create-game/create-game.component';
import { HomeComponent } from './components/home/home.component';



@NgModule({
  declarations: [
    GamesListComponent,
    GameDetailComponent,
    CreateGameComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GamesListComponent,
    GameDetailComponent,
    CreateGameComponent,
    HomeComponent,
  ]
})
export class GamesModule { }
