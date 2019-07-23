import { NgModule } from '@angular/core';
import { ListarAulaComponent } from './component/listar-aula/listar-aula.component';
import { CommonModule } from '@angular/common';
import { CadastraAulaComponent } from './component/cadastra-aula/cadastra-aula.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    declarations: [ListarAulaComponent, CadastraAulaComponent],
    imports: [CommonModule, RouterModule, HttpClientModule],
    exports: [ListarAulaComponent, CadastraAulaComponent]
})
export class AulaModule {

}