import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DisciplinaService } from 'src/app/core/disciplina/disciplina.service';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Aula, Cadeira } from 'src/app/core/model';

@Component({
  selector: 'app-select-cadeiras',
  templateUrl: './select-cadeiras.component.html'
})
export class SelectCadeirasComponent implements OnInit {

  @Input() parentForm: FormGroup;
  private disciplinas: SelectItem[] = [];
  
  constructor(private disciplinaService: DisciplinaService) { }

  ngOnInit() {
    this.getDisciplinas();
  }

  getDisciplinas(){
    this.disciplinaService.listarDisciplinas()
    .subscribe(response => {
      response.forEach((element: Cadeira) => {
        this.disciplinas.push({label: element.name, value: element});
      })
    },err => console.log(err));
  }

}
