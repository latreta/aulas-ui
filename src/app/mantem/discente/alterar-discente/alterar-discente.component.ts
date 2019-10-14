import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DiscenteService } from 'src/app/core/discente/discente.service';
import { MessageService } from 'primeng/components/common/messageservice';
import { Discente } from 'src/app/core/models/discente';

@Component({
  selector: 'app-alterar-discente',
  templateUrl: './alterar-discente.component.html'
})
export class AlterarDiscenteComponent implements OnInit {

  private discenteForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private activateRoute: ActivatedRoute,
    private discenteService: DiscenteService,
    private messageService: MessageService,
    private route: Router    
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
    let discente = this.discenteForm.value as Discente;
    this.discenteService.cadastrar(discente)
    .subscribe(response => {
      this.messageService.add({severity: 'success', summary: 'Discente atualizado', detail: 'O discente foi atualizado.'});
      this.route.navigate(['/controle/discentes']);
    }, err => console.log(err));
  }

}
