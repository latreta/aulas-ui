import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListarAulaComponent } from './aula/component/listar-aula/listar-aula.component';
import { CadastraAulaComponent } from './aula/component/cadastra-aula/cadastra-aula.component';
import { CadastraBlocoComponent } from './bloco/components/cadastra-bloco/cadastra-bloco.component';
import { CadastraSalaComponent } from './sala/component/cadastra-sala/cadastra-sala.component';
import { CadastraDiscenteComponent } from './discente/components/cadastra-discente/cadastra-discente.component';
import { MinhaContaComponent } from './user/minha-conta/minha-conta.component';
import { AuthGuard } from './core/auth/auth.guard';
import { SignInComponent } from './home/component/signin/signin.component';
import { SignUpComponent } from './home/component/signup/signup.component';

const routes: Routes = [
  {path: '', component: ListarAulaComponent},
  {path: 'conta', canActivate: [AuthGuard] , component: MinhaContaComponent},
  {path: 'salas/adicionar', component: CadastraSalaComponent},
  {path: 'aulas/adicionar', component: CadastraAulaComponent},
  {path: 'discentes/adicionar', component: CadastraDiscenteComponent},
  {path: 'blocos/adicionar', component: CadastraBlocoComponent},
  {path: 'login', component: SignInComponent},
  {path: 'cadastrar', component: SignUpComponent}
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
