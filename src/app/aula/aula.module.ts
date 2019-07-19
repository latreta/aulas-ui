import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaAulaComponent } from './lista.aula/lista.aula.component';


@NgModule({
    declarations: [ListaAulaComponent],
    imports: [
        FormsModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports:[ListaAulaComponent]
})
export class AulaModule {

}