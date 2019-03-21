import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CadastraAulasComponent } from './aulas/cadastra-aulas/cadastra-aulas.component';
import { ListaAulasComponent } from './aulas/lista-aulas/lista-aulas.component';
import { AlteraAulasComponent } from './aulas/altera-aulas/altera-aulas.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/aulas',
    pathMatch: 'full'
  },
  {
    path: 'aulas',
    children: [
      {
        path: '',
        component: ListaAulasComponent
      },
      {
        path: 'cadastra',
        component: CadastraAulasComponent
      },
      {
        path: 'alterar/:id',
        component: AlteraAulasComponent
      }
  ]}
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
