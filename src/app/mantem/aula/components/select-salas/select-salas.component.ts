import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SalaService } from 'src/app/core/sala/sala.service';

@Component({
  selector: 'app-select-salas',
  templateUrl: './select-salas.component.html'
})
export class SelectSalasComponent implements OnInit {

  @Input() parentForm: FormGroup;
  private salas: any[] = [];

  constructor(private salasService: SalaService) { }

  ngOnInit() {
    this.getSalas();
  }

  getSalas(): void {
    this.salasService.getSalas().subscribe(
      response => {
        response.forEach((element: any) => {
          this.salas.push({label: element.bloco.name + element.name, value: element});
        });
      },
      err => console.log(err)
    );
  }

}
