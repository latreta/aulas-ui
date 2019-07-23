import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Bloco } from 'src/app/core/model';
import { BlocoService } from '../../service/bloco.service';

@Component({
  selector: 'app-cadastra-bloco',
  templateUrl: './cadastra-bloco.component.html',
  styleUrls: ['./cadastra-bloco.component.css']
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
