import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import { Aula } from 'src/app/core/model';
import { AulaService } from 'src/app/core/aula/aula.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-listar-aula',
  templateUrl: './listar-aula.component.html',
  styleUrls: ['./listar-aula.component.css'],
})
export class ListarAulaComponent implements OnInit {

  private aulas: Aula[];
  cols: any[];
  color: string;
  sentido: number = 1;
  isAutoScrollEnabled = true;
  
  constructor(private aulaService: AulaService) {
  }

  ngOnInit() {
    this.getAulasStub();
    this.cols = [
      { field: 'turma', header: 'Turma' },
      { field: 'discente', header: 'Discente'},
      { field: 'disciplina', header: 'Disciplina' },
      { field: 'sala', header: 'Sala' },
      { field: 'inicio', header: 'Horário' }
    ];
    this.color = 'blue';
    
  }

  public setScroll(value: boolean){
    this.isAutoScrollEnabled = value;
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    let elementos = document.getElementById("listadeaulas");
    if(elementos != undefined){
      setInterval(() => this.autoScroll(elementos), 200);
    }
    else{
      console.log("Undefined");
    }
  }

  private autoScroll(elementos){
    const amount = 5;  
    let alturaAtual = elementos.scrollTop;
    if(this.isAutoScrollEnabled){
      elementos.scrollTo(0, elementos.scrollTop + amount * this.sentido);    
      let proximaAltura = elementos.scrollTop;
      if(proximaAltura == alturaAtual){
        this.sentido *= -1;
      }    
    }
    
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
