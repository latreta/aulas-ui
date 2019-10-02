import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BlocoService } from 'src/app/core/bloco/bloco.service';
import { Bloco } from 'src/app/core/model';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-cadastra-bloco',
  templateUrl: './cadastra-bloco.component.html'
})
export class CadastraBlocoComponent {

  private blocoForm: FormGroup;

  constructor(private messageService: MessageService, formBuilder: FormBuilder, private blocoService: BlocoService, private router: Router) {
    this.blocoForm = formBuilder.group({
      name: ''
    });
  }

  cadastrar(): void {
    const b: Bloco = this.blocoForm.value as Bloco;
    this.blocoService.cadastrar(b).subscribe(
      response => {
        this.messageService.add({severity:'success', summary:'Bloco cadastrado', detail:'Bloco foi cadastrado com sucesso.'});
        this.router.navigate(['/controle']);
      },
      err => console.log(err)
    );
  }

}
