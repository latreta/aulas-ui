import { Component, OnInit } from '@angular/core';
import { DiscenteService } from 'src/app/core/discente/discente.service';
import { Discente } from 'src/app/core/models/discente';


@Component({
  selector: 'app-lista-discente',
  templateUrl: './lista-discente.component.html',
  styleUrls: ['./lista-discente.component.css']
})
export class ListaDiscenteComponent implements OnInit {

  private discentes: Discente[] = [];

  constructor(private discenteService: DiscenteService) { }

  ngOnInit() {
    this.getDiscentes();
  }

  getDiscentes() {
    this.discenteService.listar().subscribe(response => {
      this.discentes = response;
    }, err => console.log(err));
  }

}
