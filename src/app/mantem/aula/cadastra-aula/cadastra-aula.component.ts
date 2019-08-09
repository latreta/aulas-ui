import { Component, OnInit } from '@angular/core';
import { Sala, Aula } from 'src/app/core/model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SalaService } from 'src/app/core/sala/sala.service';
import { AulaService } from 'src/app/core/aula/aula.service';

@Component({
  selector: 'app-cadastra-aula',
  templateUrl: './cadastra-aula.component.html'
})
export class CadastraAulaComponent implements OnInit {

  private salas: Sala[] = [];
  private aulaForm: FormGroup;

  constructor(private salaService: SalaService, private formBuilder: FormBuilder, private aulaService: AulaService) {
    this.aulaForm = formBuilder.group({
      name: '',
      professor: '',
      turma: '',
      sala: '',
      inicio: '',
      fim: ''
    });
  }

  ngOnInit() {
    this.getSalas();
  }

  getSalas(): void {
    this.salaService.getSalas().subscribe(response => {
      this.salas = response;
    });
  }

  cadastrar(): void {
    const aula: Aula = this.aulaForm.value as Aula;
    aula.sala = this.salas[this.aulaForm.value.sala] as Sala;
    this.aulaService.cadastrar(aula).subscribe(() => {}, err => console.log(err));
  }

}
