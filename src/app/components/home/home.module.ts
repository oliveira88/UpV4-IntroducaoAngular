import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardsService } from 'src/app/services/cards.service';
import { CardComponent } from '../card/card.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ListagemComponent } from './listagem/listagem.component';

@NgModule({
  declarations: [HomeComponent, ListagemComponent, CardComponent],
  exports: [HomeComponent],
  providers: [CardsService],
  imports: [HomeRoutingModule, CommonModule]
})
export class HomeModule {}
