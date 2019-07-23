import { NgModule } from '@angular/core';
import { CadastraBlocoComponent } from './components/cadastra-bloco/cadastra-bloco.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BlocoTooltipComponent } from './components/bloco-tooltip/bloco-tooltip.component';

@NgModule({
    imports: [ReactiveFormsModule, FormsModule],
    exports: [CadastraBlocoComponent],
    providers: [],
    declarations: [CadastraBlocoComponent, BlocoTooltipComponent]
})
export class BlocoModule {

}