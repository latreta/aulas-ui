import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantemRoutingModule } from './mantem-routing.module';
import { CadastraAulaComponent } from './aula/cadastra-aula/cadastra-aula.component';
import { CadastraBlocoComponent } from './bloco/cadastra-bloco/cadastra-bloco.component';
import { CadastraSalaComponent } from './sala/cadastra-sala/cadastra-sala.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastraDiscenteComponent } from './discente/cadastra-discente/cadastra-discente.component';
import { GerenciaComponent } from './gerencia/gerencia.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';

@NgModule({
  declarations: [
    CadastraAulaComponent,
    CadastraBlocoComponent,
    CadastraSalaComponent,
    CadastraDiscenteComponent,
    GerenciaComponent,
    MinhaContaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MantemRoutingModule
  ]
})
export class MantemModule { }
