import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MantemRoutingModule } from './mantem-routing.module';
import { CadastraBlocoComponent } from './bloco/cadastra-bloco/cadastra-bloco.component';
import { CadastraSalaComponent } from './sala/cadastra-sala/cadastra-sala.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastraDiscenteComponent } from './discente/cadastra-discente/cadastra-discente.component';
import { GerenciaComponent } from './gerencia/gerencia.component';
import { MinhaContaComponent } from './minha-conta/minha-conta.component';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import { CadastraAulaComponent } from './aula/components/cadastra-aula/cadastra-aula.component';
import { SelectSalasComponent } from './aula/components/select-salas/select-salas.component';
import { SelectDiscentesComponent } from './aula/components/select-discentes/select-discentes.component';
import { SelectDisciplinasComponent } from './aula/components/select-disciplinas/select-disciplinas.component';
import {PanelModule} from 'primeng/panel';
import {DialogModule} from 'primeng/dialog';
import {ToastModule} from 'primeng/toast';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { MessageService } from 'primeng/components/common/messageservice';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { ListaDiscenteComponent } from './discente/lista-discente/lista-discente.component';
import { TabelaDiscenteComponent } from './discente/lista-discente/tabela-discente/tabela-discente.component';
import { AlterarDiscenteComponent } from './discente/alterar-discente/alterar-discente.component';


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
    FormsModule,
    PanelModule,
    DialogModule,
    MessagesModule,
    MessageModule,
    ReactiveFormsModule,
    MantemRoutingModule,
    DropdownModule,
    InputTextModule
  ]
})
export class MantemModule { }
