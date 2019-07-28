import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListarAulaComponent } from './aula/component/listar-aula/listar-aula.component';
import { CadastraAulaComponent } from './aula/component/cadastra-aula/cadastra-aula.component';
import { SignUpComponent } from './home/component/signup/signup.component';
import { SignInComponent } from './home/component/signin/signin.component';
import { CadastraBlocoComponent } from './bloco/components/cadastra-bloco/cadastra-bloco.component';
import { CadastraSalaComponent } from './sala/component/cadastra-sala/cadastra-sala.component';
import { CadastraDicenteComponent } from './dicente/components/cadastra-dicente/cadastra-dicente.component';
import { MinhaContaComponent } from './user/components/minha-conta/minha-conta.component';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  {path: '', component: ListarAulaComponent},
  {path: 'conta', canActivate: [AuthGuard] , component: MinhaContaComponent},
  {path: 'salas/adicionar', component: CadastraSalaComponent},
  {path: 'aulas/adicionar', component: CadastraAulaComponent},
  {path: 'dicentes/adicionar', component: CadastraDicenteComponent},
  {path: 'blocos/adicionar', component: CadastraBlocoComponent},
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
