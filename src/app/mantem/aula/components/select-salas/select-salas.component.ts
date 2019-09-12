import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SalaService } from 'src/app/core/sala/sala.service';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Sala } from 'src/app/core/model';

@Component({
  selector: 'app-select-salas',
  templateUrl: './select-salas.component.html'
})
export class SelectSalasComponent implements OnInit {

  @Input() parentForm: FormGroup;
  private salas: SelectItem[] = [];

  constructor(private salasService: SalaService) { }

  ngOnInit() {
    this.getSalas();
  }

  getSalas(): void {
    this.salasService.getSalas().subscribe(
      response => {
        response.forEach((element: Sala) => {
          this.salas.push({label: element.bloco.name + element.name, value: element});
        });
      },
      err => console.log(err)
    );
  }

}
