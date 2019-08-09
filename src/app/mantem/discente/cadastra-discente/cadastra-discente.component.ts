import { Component, OnInit } from '@angular/core';
import { DiscenteService } from '../../../core/discente.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Discente } from 'src/app/core/model';

@Component({
  selector: 'app-cadastra-discente',
  templateUrl: './cadastra-discente.component.html'
})
export class CadastraDiscenteComponent {

  private discenteForm: FormGroup;

  constructor(private dicenteService: DiscenteService, private formBuilder: FormBuilder) {
    this.discenteForm = this.formBuilder.group({
      name: ''
    });
  }

  cadastrar() {
    const discente: Discente = this.discenteForm.value as Discente;
    this.dicenteService.cadastrar(discente).subscribe(() => {}, err => console.log(err));
  }

}
