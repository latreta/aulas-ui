import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Scroll } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarAulaComponent } from './listar-aula/listar-aula.component';
import {TableModule} from 'primeng/table';
import { ScrollableTable } from '../shared/directives/scrollable-table';
import { TabelaAulasComponent } from './listar-aula/tabela-aulas/tabela-aulas.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        ListarAulaComponent,
        ScrollableTable,
        TabelaAulasComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        TableModule,
        HttpClientModule,        
        ReactiveFormsModule,
        SharedModule
    ],
    exports: [ListarAulaComponent]
})
export class AulaModule {

}
