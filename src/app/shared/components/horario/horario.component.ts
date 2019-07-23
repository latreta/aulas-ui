import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {

  @Input() name;
  
  constructor() { }

  ngOnInit() {
  }

}
