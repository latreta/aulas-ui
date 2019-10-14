import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DiscenteService } from 'src/app/core/discente/discente.service';
import { Discente } from 'src/app/core/models/discente';


@Component({
  selector: 'app-select-discentes',
  templateUrl: './select-discentes.component.html'
})
export class SelectDiscentesComponent implements OnInit {

  @Input() parentForm: FormGroup;
  private discentes: any[] = [];
  
  constructor(private discenteService: DiscenteService) { }

  ngOnInit() {
    this.getDiscentes();
  }

  getDiscentes(): void {
    this.discenteService.listar().subscribe(
      response => {
        response.forEach((element: Discente) => {
          this.discentes.push({label: element.name, value: element});          
        });
      },
      err => console.log(err)
    );
  }

}
