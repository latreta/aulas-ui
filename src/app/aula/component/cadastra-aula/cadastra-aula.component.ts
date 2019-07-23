import { Component, OnInit } from '@angular/core';
import { Sala } from 'src/app/core/model';
import { SalaService } from 'src/app/sala/service/sala.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: './cadastra-aula.component.html',
  styleUrls: ['./cadastra-aula.component.css']
})
export class CadastraAulaComponent implements OnInit {

  private salas: Sala[] = [];
  private aulaForm: FormGroup;

  constructor(private salaService: SalaService, private formBuilder: FormBuilder) {
    this.aulaForm = formBuilder.group({
      name: '',
      sala: '',
      professor: '',
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
    console.log(this.aulaForm.value);
  }

}
