import { Component, OnInit } from '@angular/core';
import { Sala } from 'src/app/core/model';
import { SalaService } from 'src/app/sala/service/sala.service';

@Component({
  templateUrl: './cadastra-aula.component.html',
  styleUrls: ['./cadastra-aula.component.css']
})
export class CadastraAulaComponent implements OnInit {

  private salas: Sala[] = [];

  constructor(private salaService: SalaService) { }

  ngOnInit() {
    this.getSalas();
  }

  getSalas(): void {
    this.salaService.getSalas().subscribe(response => {
      this.salas = response;
    });
  }

}
