import { Component, Input } from '@angular/core';
import { Discente } from 'src/app/core/model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabela-discente',
  templateUrl: './tabela-discente.component.html',
  styleUrls: ['./tabela-discente.component.css']
})
export class TabelaDiscenteComponent {

  @Input() discentes: Discente[] = [];

  constructor(private route: Router) { }

  alterarDiscente(id: number){
    this.route.navigate(['/controle/discentes/alterar', id]);
  }

  removerDiscente(id: number){
    console.log('Removendo discente com ID: ' + id);
  }

}
