import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastraAulaComponent } from './aula/cadastra-aula/cadastra-aula.component';
import { CadastraSalaComponent } from './sala/cadastra-sala/cadastra-sala.component';
import { CadastraBlocoComponent } from './bloco/cadastra-bloco/cadastra-bloco.component';
import { CadastraDiscenteComponent } from './discente/cadastra-discente/cadastra-discente.component';
import { GerenciaComponent } from './gerencia/gerencia.component';

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
    path: 'discentes', component: CadastraDiscenteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MantemRoutingModule { }