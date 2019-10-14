import { Component, OnInit, Input } from '@angular/core';
import { Aula } from 'src/app/core/models/aula';


@Component({
  selector: 'app-tabela-aulas',
  templateUrl: './tabela-aulas.component.html'
})
export class TabelaAulasComponent implements OnInit {
  
  cols: any[];
  direction: number = 1;
  isAutoScrollEnabled = true;

  @Input('aulas')
  aulas: Aula[] = [];

  constructor() { }  

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    let elementos = document.getElementById("listadeaulas");
    if(elementos != undefined){
      setInterval(() => this.autoScroll(elementos), 200);
    }
  }

  private autoScroll(elementos){
    const amount = 5;  
    let alturaAtual = elementos.scrollTop;
    if(this.isAutoScrollEnabled){
      elementos.scrollTo(0, elementos.scrollTop + amount * this.direction);    
      let proximaAltura = elementos.scrollTop;
      if(proximaAltura == alturaAtual){
        this.direction *= -1;
      }    
    }    
  }

  public setScroll(value: boolean){
    this.isAutoScrollEnabled = value;
  }

}
