import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HtmlPageComponent } from './components/html-page/html-page.component';
import {TicTacToeGameComponent } from './components/tic-tac-toe-game/tic-tac-toe-game.component';

const routes: Routes = [
  { path:  "tic-tac-toe",    component:TicTacToeGameComponent },
  { path:  "html-page",      component:HtmlPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
