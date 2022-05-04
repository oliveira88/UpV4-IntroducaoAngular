import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContatoComponent } from './components/contato/contato.component';
import { AdminComponent } from './components/admin/admin.component';

//    ./features/lazy-loading-module/lazy-loading.module#LazyLoadingModule
// ./components/home/home.module#HomeModule
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule)
  },
  { path: 'blog', component: BlogComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
