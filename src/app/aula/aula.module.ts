import { NgModule } from '@angular/core';
import { ListarAulaComponent } from './component/listar-aula/listar-aula.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [ListarAulaComponent],
    imports: [CommonModule],
    exports: [ListarAulaComponent]
})
export class AulaModule {

}