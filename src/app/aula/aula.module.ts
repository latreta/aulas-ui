import { NgModule } from '@angular/core';
import { ListarAulaComponent } from './component/listar-aula/listar-aula.component';
import { CommonModule } from '@angular/common';
import { CadastraAulaComponent } from './component/cadastra-aula/cadastra-aula.component';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [ListarAulaComponent, CadastraAulaComponent],
    imports: [CommonModule, RouterModule],
    exports: [ListarAulaComponent, CadastraAulaComponent]
})
export class AulaModule {

}