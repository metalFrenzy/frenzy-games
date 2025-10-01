import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesListComponent } from './games/components/games-list/games-list.component';
import { HomeComponent } from './games/components/home/home.component';
import { GameDetailComponent } from './games/components/game-detail/game-detail.component';
import { CreateGameComponent } from './games/components/create-game/create-game.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/games', pathMatch: 'full'
  },
  {
    path: 'games', component: HomeComponent
  },
  {
    path: 'game-details/:id', component: GameDetailComponent,
  },
  {
    path: 'add-game', component: CreateGameComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
