import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxComponentComponent } from './components/box-component/box-component.component';
import { HtmlPageComponent } from './components/html-page/html-page.component';
import { TicTacToeGameComponent } from './components/tic-tac-toe-game/tic-tac-toe-game.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponentComponent,
    HtmlPageComponent,
    TicTacToeGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
