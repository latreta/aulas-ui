import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListarAulaComponent } from './aula/listar-aula/listar-aula.component';
import { SignInComponent } from './home/component/signin/signin.component';
import { SignUpComponent } from './home/component/signup/signup.component';

const routes: Routes = [
  {
    path: '',
    component: ListarAulaComponent
  },
  {
    path: 'login',
    component: SignInComponent
  },
  {
    path: 'cadastrar',
    component: SignUpComponent
  },
  {
    path: 'controle',
    loadChildren: () => import('./mantem/mantem.module').then(mod => mod.MantemModule)
  },
  {
    path: 'aulas',
    loadChildren: () => import('./aula/aula.module').then(mod => mod.AulaModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
