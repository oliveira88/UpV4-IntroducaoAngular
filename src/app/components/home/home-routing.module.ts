import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ListagemComponent } from './listagem/listagem.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'listar', component: ListagemComponent }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
