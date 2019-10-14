import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DisciplinaService } from 'src/app/core/disciplina/disciplina.service';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Disciplina } from 'src/app/core/models/disciplina';


@Component({
  selector: 'app-select-disciplinas',
  templateUrl: './select-disciplinas.component.html'
})
export class SelectDisciplinasComponent implements OnInit {

  @Input() parentForm: FormGroup;
  private disciplinas: SelectItem[] = [];
  
  constructor(private disciplinaService: DisciplinaService) { }

  ngOnInit() {
    this.getDisciplinas();
  }

  getDisciplinas(){
    this.disciplinaService.listarDisciplinas()
    .subscribe(response => {
      response.forEach((element: Disciplina) => {
        this.disciplinas.push({label: element.name, value: element});
      })
    },err => console.log(err));
  }

}
