import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DiscenteService } from 'src/app/core/discente/discente.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { Discente } from 'src/app/core/models/discente';

@Component({
  selector: 'app-tabela-discente',
  templateUrl: './tabela-discente.component.html',
  styleUrls: ['./tabela-discente.component.css']
})
export class TabelaDiscenteComponent {

  @Input() discentes: Discente[] = [];

  constructor(private route: Router, private discenteService: DiscenteService, private messageService: MessageService) { }

  alterarDiscente(id: number){
    this.route.navigate(['/controle/discentes/alterar', id]);
  }

  removerDiscente(id: number){
    console.log('Removendo discente com ID: ' + id);
    this.discenteService.remover(id)
    .subscribe(() => {
      this.listarDiscentes();
    }, err => {
      this.messageService.add({severity:'error', closable: false, summary: 'Falha ao executar operação', detail: 'Ocorreu um problema na sua ação.'});
    });
  }

  listarDiscentes(){
    this.discenteService.listar()
    .subscribe(response => {
      this.discentes = response;
    }, err => console.log(err));
  }

}
