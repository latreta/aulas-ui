import { Component, OnInit } from '@angular/core';
import { BlocoService } from 'src/app/bloco/service/bloco.service';
import { Bloco } from 'src/app/core/model';

@Component({
  templateUrl: './cadastra-aula.component.html',
  styleUrls: ['./cadastra-aula.component.css']
})
export class CadastraAulaComponent implements OnInit {

  private blocos: Bloco[] = [];
  constructor(private blocoService: BlocoService) { }

  ngOnInit() {
    this.getBlocos();
  }

  getBlocos(): void {
    this.blocoService.getBlocos().subscribe(response => {
      this.blocos = response;
    });
  }

}
