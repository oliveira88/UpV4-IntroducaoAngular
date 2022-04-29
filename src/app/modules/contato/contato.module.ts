import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaContatoComponent } from './lista-contato/lista-contato.component';

@NgModule({
  declarations: [ListaContatoComponent],
  imports: [CommonModule],
  exports: [ListaContatoComponent]
})
export class ContatoModule {}
