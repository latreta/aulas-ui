import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarAulaComponent } from './listar-aula/listar-aula.component';

const routes: Routes = [
  {
    path: '', component: ListarAulaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AulaRoutingModule { }
