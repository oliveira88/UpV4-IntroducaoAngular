import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { CardsService } from './services/cards.service';
import { ContatoModule } from './modules/contato/contato.module';
@NgModule({
  declarations: [AppComponent, MainHeaderComponent, CardComponent],
  imports: [BrowserModule, FormsModule, ContatoModule],
  providers: [CardsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
