import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MantemRoutingModule } from './mantem-routing.module';
import { CadastraBlocoComponent } from './bloco/cadastra-bloco/cadastra-bloco.component';
import { CadastraSalaComponent } from './sala/cadastra-sala/cadastra-sala.component';

import { CadastraDiscenteComponent } from './discente/cadastra-discente/cadastra-discente.component';
import { GerenciaComponent } from './gerencia/gerencia.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';

import { CadastraAulaComponent } from './aula/components/cadastra-aula/cadastra-aula.component';
import { SelectSalasComponent } from './aula/components/select-salas/select-salas.component';
import { SelectDiscentesComponent } from './aula/components/select-discentes/select-discentes.component';
import { SelectDisciplinasComponent } from './aula/components/select-disciplinas/select-disciplinas.component';

import { ListaDiscenteComponent } from './discente/lista-discente/lista-discente.component';
import { TabelaDiscenteComponent } from './discente/lista-discente/tabela-discente/tabela-discente.component';
import { AlterarDiscenteComponent } from './discente/alterar-discente/alterar-discente.component';

import {PanelModule} from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [
    CadastraAulaComponent,
    CadastraBlocoComponent,
    CadastraSalaComponent,
    CadastraDiscenteComponent,
    GerenciaComponent,
    MinhaContaComponent,
    SelectSalasComponent,
    SelectDiscentesComponent,
    SelectDisciplinasComponent,
    ListaDiscenteComponent,
    TabelaDiscenteComponent,
    AlterarDiscenteComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    PanelModule,
    DialogModule,
    MessagesModule,
    MessageModule,
    MantemRoutingModule,
    DropdownModule,
    InputTextModule
  ]
})
export class MantemModule { }
