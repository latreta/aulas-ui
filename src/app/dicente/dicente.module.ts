import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CadastraDicenteComponent } from './components/cadastra-dicente/cadastra-dicente.component';

@NgModule({
    providers: [],
    declarations: [CadastraDicenteComponent],
    imports: [ReactiveFormsModule, FormsModule],
    exports: [CadastraDicenteComponent]
})
export class DicenteModule {
}