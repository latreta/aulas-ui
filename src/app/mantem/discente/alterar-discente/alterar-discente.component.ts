import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DiscenteService } from 'src/app/core/discente/discente.service';
import { Discente } from 'src/app/core/model';

@Component({
  selector: 'app-alterar-discente',
  templateUrl: './alterar-discente.component.html',
  styleUrls: ['./alterar-discente.component.css']
})
export class AlterarDiscenteComponent implements OnInit {

  private discenteForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private activateRoute: ActivatedRoute,
    private discenteService: DiscenteService
    ) { }

  ngOnInit() {
    this.recuperarDiscente(this.activateRoute.snapshot.params.id);
    this.discenteForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required]
    });
  }

  recuperarDiscente(id: number){
    this.discenteService.detalharPorId(id)
    .subscribe(response => {
      this.setFormValues(response);
    }, err => console.log(err));
  }

  setFormValues(discente: Discente) {
    this.discenteForm.setValue({
      id: discente.id,
      name: discente.name
    });
  }

  atualizar(){
  }

}
