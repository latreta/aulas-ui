import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Scroll } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListarAulaComponent } from './listar-aula/listar-aula.component';
import {TableModule} from 'primeng/table';
import { ScrollableTable } from '../shared/directives/scrollable-table';

@NgModule({
    declarations: [
        ListarAulaComponent,
        ScrollableTable
    ],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        TableModule,
        HttpClientModule,        
        ReactiveFormsModule
    ],
    exports: [ListarAulaComponent]
})
export class AulaModule {

}
