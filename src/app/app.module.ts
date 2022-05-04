import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { CardsService } from './services/cards.service';
import { ContatoModule } from './modules/contato/contato.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, MainHeaderComponent],
  imports: [BrowserModule, FormsModule, ContatoModule, AppRoutingModule, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
