import { NgModule } from '@angular/core';
import { ListarAulaComponent } from './component/listar-aula/listar-aula.component';
import { CommonModule } from '@angular/common';
import { CadastraAulaComponent } from './component/cadastra-aula/cadastra-aula.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [ListarAulaComponent, CadastraAulaComponent],
    imports: [CommonModule, RouterModule, HttpClientModule, SharedModule, FormsModule, ReactiveFormsModule],
    exports: [ListarAulaComponent, CadastraAulaComponent]
})
export class AulaModule {

}