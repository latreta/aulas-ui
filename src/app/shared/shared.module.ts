import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertErrorComponent } from './components/alert-error/alert-error.component';
import { ModalComponent } from './components/modal/modal.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AlertErrorComponent, ModalComponent],
  exports: [AlertErrorComponent, ModalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ]
})
export class SharedModule { }
