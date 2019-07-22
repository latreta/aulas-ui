import { NgModule } from '@angular/core';
import { ListarAulaComponent } from './component/listar-aula/listar-aula.component';
import { CommonModule } from '@angular/common';
import { CadastraAulaComponent } from './component/cadastra-aula/cadastra-aula.component';


@NgModule({
    declarations: [ListarAulaComponent, CadastraAulaComponent],
    imports: [CommonModule],
    exports: [ListarAulaComponent]
})
export class AulaModule {

}