import { Component, OnInit, Input } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-form-aula',
  templateUrl: './form-aula.component.html'
})
export class FormAulaComponent implements OnInit {

  @Input() titulo: string;

  salas: SelectItem[];
  cadeiras: SelectItem[];
  professores: SelectItem[];
  horarios: SelectItem[];

  constructor() { }

  ngOnInit() {
    this.salas = [
      { label: 'Seleciona uma sala', value: null },
      { label: 'a1', value: 'a1' },
      { label: 'a2', value: 'a2' },
    ]
    this.cadeiras = [
      { label: 'Seleciona uma sala', value: null },
      { label: 'a1', value: 'a1' },
      { label: 'a2', value: 'a2' },
    ]
    this.professores = [
      { label: 'Seleciona uma sala', value: null },
      { label: 'a1', value: 'a1' },
      { label: 'a2', value: 'a2' },
    ]
    this.horarios = [
      { label: 'Seleciona uma sala', value: null },
      { label: 'a1', value: 'a1' },
      { label: 'a2', value: 'a2' },
    ];
  }

}
