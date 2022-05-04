import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ListagemComponent } from './listagem/listagem.component';

@NgModule({
  declarations: [HomeComponent, ListagemComponent],
  exports: [HomeComponent],
  imports: [HomeRoutingModule]
})
export class HomeModule {}
