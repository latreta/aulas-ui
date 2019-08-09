import { NgModule } from '@angular/core';
import { ListarAulaComponent } from './component/listar-aula/listar-aula.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [ListarAulaComponent],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [ListarAulaComponent]
})
export class AulaModule {

}