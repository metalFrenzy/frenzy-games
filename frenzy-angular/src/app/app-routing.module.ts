import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesListComponent } from './games/components/games-list/games-list.component';
import { HomeComponent } from './games/components/home/home.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/games', pathMatch: 'full'
  },
  {
    path: 'games', component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
