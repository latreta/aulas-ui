import { Component, OnInit } from '@angular/core';
import { DicenteService } from '../../service/dicente.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Dicente } from 'src/app/core/model';

@Component({
  selector: 'app-cadastra-dicente',
  templateUrl: './cadastra-dicente.component.html',
  styleUrls: ['./cadastra-dicente.component.css']
})
export class CadastraDicenteComponent implements OnInit {

  private dicenteForm: FormGroup;

  constructor(private dicenteService: DicenteService, private formBuilder: FormBuilder) {
    this.dicenteForm = this.formBuilder.group({
      name: ''
    });
  }

  ngOnInit() {
  }

  cadastrar() {
    const dicente: Dicente = this.dicenteForm.value as Dicente;
    this.dicenteService.cadastrar(dicente).subscribe(() => {}, err => console.log(err));
  }

}
