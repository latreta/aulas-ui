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
  cols: any[];

  constructor(private aulaService: AulaService) { }

  ngOnInit() {
    this.getAulasStub();
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
    this.aulaService.listarAulasStub()
    .subscribe((response: Aula[]) => {
      this.aulas = response;
    },err => console.log(err));
  }

  getAulasEmptyStub(): void {
    this.aulas = [];
  }

  alterar(id: number){
    console.log(this.aulas[id]);
  }

  delete(id: number){
    console.log(this.aulas[id]);
  }

}
