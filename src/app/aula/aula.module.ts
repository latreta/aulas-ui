import { NgModule } from '@angular/core';
import { ListarAulaComponent } from './component/listar-aula/listar-aula.component';
import { CommonModule } from '@angular/common';
import { CadastraAulaComponent } from './component/cadastra-aula/cadastra-aula.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [ListarAulaComponent, CadastraAulaComponent],
    imports: [CommonModule, RouterModule, HttpClientModule, FormsModule, ReactiveFormsModule],
    exports: [ListarAulaComponent, CadastraAulaComponent]
})
export class AulaModule {

}