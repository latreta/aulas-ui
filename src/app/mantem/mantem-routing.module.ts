import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastraAulaComponent } from './aula/components/cadastra-aula/cadastra-aula.component';
import { CadastraSalaComponent } from './sala/cadastra-sala/cadastra-sala.component';
import { CadastraBlocoComponent } from './bloco/cadastra-bloco/cadastra-bloco.component';
import { CadastraDiscenteComponent } from './discente/cadastra-discente/cadastra-discente.component';
import { GerenciaComponent } from './gerencia/gerencia.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';
import { ListaDiscenteComponent } from './discente/lista-discente/lista-discente.component';
import { AlterarDiscenteComponent } from './discente/alterar-discente/alterar-discente.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'opcoes', pathMatch: 'full'
  },
  {
    path: 'opcoes', component: GerenciaComponent
  },
  {
    path: 'aulas', component: CadastraAulaComponent
  },
  {
    path: 'salas', component: CadastraSalaComponent
  },
  {
    path: 'blocos', component: CadastraBlocoComponent
  },
  {
    path: 'discentes', children: [
      {path: '', component: ListaDiscenteComponent},
      {path: 'cadastrar', component: CadastraDiscenteComponent},
      {path: 'alterar/:id', component: AlterarDiscenteComponent}
    ]
  },
  {
    path: 'minhaconta', component: MinhaContaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantemRoutingModule { }
