import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertErrorComponent } from './components/alert-error/alert-error.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [AlertErrorComponent, ModalComponent],
  exports: [AlertErrorComponent, ModalComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
