import { Component } from '@angular/core';
import { DiscenteService } from '../../../core/discente/discente.service';
import { FormGroup, FormBuilder } from '@angular/forms';

import { MessageService } from 'primeng/components/common/messageservice';
import { Router } from '@angular/router';
import { Discente } from 'src/app/core/models/discente';

@Component({
  selector: 'app-cadastra-discente',
  templateUrl: './cadastra-discente.component.html'
})
export class CadastraDiscenteComponent {

  private discenteForm: FormGroup;

  constructor(private messageService: MessageService, private router: Router, private dicenteService: DiscenteService, private formBuilder: FormBuilder) {
    this.discenteForm = this.formBuilder.group({
      name: ''
    });
  }

  cadastrar() {
    const discente: Discente = this.discenteForm.value as Discente;
    this.dicenteService.cadastrar(discente)
    .subscribe(
      () => {
        this.messageService.add({severity:'success', summary:'Discente cadastrado', detail:'Discente foi cadastrado com sucesso.'});
        this.router.navigate(['/controle/discentes']);
      }, err => console.log(err));
  }

}
