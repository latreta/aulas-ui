import { Component, Input } from '@angular/core';
import { Discente } from 'src/app/core/model';

@Component({
  selector: 'app-tabela-discente',
  templateUrl: './tabela-discente.component.html',
  styleUrls: ['./tabela-discente.component.css']
})
export class TabelaDiscenteComponent {

  @Input() discentes: Discente[] = [];

  constructor() { }

}
