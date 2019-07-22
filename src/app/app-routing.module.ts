import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListarAulaComponent } from './aula/component/listar-aula/listar-aula.component';
import { CadastraAulaComponent } from './aula/component/cadastra-aula/cadastra-aula.component';
import { SignUpComponent } from './home/component/signup/signup.component';
import { SignInComponent } from './home/component/signin/signin.component';

const routes: Routes = [
  {path: '', component: ListarAulaComponent},
  {path: 'aulas/adicionar', component: CadastraAulaComponent},
  {path: 'cadastrar', component: SignUpComponent},
  {path: 'login', component: SignInComponent}
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
