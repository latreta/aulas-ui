import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BlocoService } from 'src/app/core/bloco/bloco.service';
import { Bloco } from 'src/app/core/model';

@Component({
  selector: 'app-cadastra-bloco',
  templateUrl: './cadastra-bloco.component.html'
})
export class CadastraBlocoComponent {

  private blocoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private blocoService: BlocoService) {
    this.blocoForm = formBuilder.group({
      name: ''
    });
  }

  cadastrar(): void {
    const b: Bloco = this.blocoForm.value as Bloco;
    this.blocoService.cadastrar(b).subscribe(
      response => {
        console.log(response);
      },
      err => console.log(err)
    );
  }

}
