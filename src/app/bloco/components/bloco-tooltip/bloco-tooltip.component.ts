import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BlocoService } from '../../service/bloco.service';
import { Bloco } from 'src/app/core/model';

@Component({
  selector: 'app-bloco-tooltip',
  templateUrl: './bloco-tooltip.component.html',
  styleUrls: ['./bloco-tooltip.component.css']
})
export class BlocoTooltipComponent {

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
