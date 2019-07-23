import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastraSalaComponent } from './component/cadastra-sala/cadastra-sala.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CadastraSalaComponent],
  exports: [CadastraSalaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SalaModule { }
