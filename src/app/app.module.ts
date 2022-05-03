import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './components/card/card.component';
import { CardsService } from './services/cards.service';
import { ContatoModule } from './modules/contato/contato.module';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContatoComponent } from './components/contato/contato.component';
import { AdminComponent } from './components/admin/admin.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    CardComponent,
    HomeComponent,
    BlogComponent,
    ContatoComponent,
    AdminComponent
  ],
  imports: [BrowserModule, FormsModule, ContatoModule, AppRoutingModule],
  providers: [CardsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
