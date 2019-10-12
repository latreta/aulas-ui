import { Component, OnInit } from '@angular/core';
import { Aula } from 'src/app/core/model';
import { AulaService } from 'src/app/core/aula/aula.service';

@Component({
  selector: 'app-listar-aula',
  templateUrl: './listar-aula.component.html',
  styleUrls: ['./listar-aula-table.css','./listar-aula.component.css'],
})
export class ListarAulaComponent implements OnInit {

  private aulas: Aula[];
  private cols: any[];

  constructor(private aulaService: AulaService) { }

  ngOnInit() {
    this.getAulas();
    this.cols = [
      { field: 'turma', header: 'Turma' },
      { field: 'discente', header: 'Discente'},
      { field: 'disciplina', header: 'Disciplina' },
      { field: 'sala', fieldOp: 'sala.name', header: 'Sala' },
      { field: 'inicio', header: 'Horário' }
    ];
  }

  getAulas(): void {
    this.aulaService.listarAulas().subscribe(response => {
      this.aulas = response;
    }, err => console.log(err.error.message));
  }

  getAulasStub(): void {
    this.aulas = [{
      id: 0,
      turma: 'BM',
      discente: {id : 0, name : 'Professor Teste'},
      sala: {id: 0, name: '8', bloco : {id : 0, name : 'b'}},
      disciplina: {
        id: 0,
        name: 'Calculo 4'
      },
      inicio : '07:10',
      fim : '08:50'}];
  }

  alterar(id: number){
    console.log(this.aulas[id]);
  }

  delete(id: number){
    console.log(this.aulas[id]);
  }

}
