import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesListComponent } from './components/games-list/games-list.component';
import { GameDetailComponent } from './components/game-detail/game-detail.component';
import { CreateGameComponent } from './components/create-game/create-game.component';
import { HomeComponent } from './components/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GamesListComponent,
    GameDetailComponent,
    CreateGameComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    GamesListComponent,
    GameDetailComponent,
    CreateGameComponent,
    HomeComponent,
  ]
})
export class GamesModule { }
