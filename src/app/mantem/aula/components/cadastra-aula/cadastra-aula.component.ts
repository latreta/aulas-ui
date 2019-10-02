import { Component, OnInit } from '@angular/core';
import { Aula } from 'src/app/core/model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AulaService } from 'src/app/core/aula/aula.service';
import { SelectItem } from 'primeng/components/common/selectitem';
import { MessageService } from 'primeng/components/common/messageservice';
import { Router } from '@angular/router';

export interface Opcao {
  label: string;
  value: any;
}

@Component({
  selector: 'app-cadastra-aula',
  templateUrl: './cadastra-aula.component.html'
})
export class CadastraAulaComponent implements OnInit {

  private aulaForm: FormGroup;
  horarios: SelectItem[] = [];
  horariosFim: SelectItem[] = [];

  display: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private aulaService: AulaService,
    private messageService: MessageService,
    private router: Router) {    
  }

  ngOnInit() {
    this.aulaForm = this.formBuilder.group({
      disciplina: [''],
      discente: [''],
      turma: [''],
      sala: [''],
      inicio: [''],
      fim: ['']
    });

    this.horarios = [
      { label: '07:10', value: '07:10' },
      { label: '08:00', value: '08:00' },
      { label: '08:50', value: '08:50' },
      { label: '09:40', value: '09:40' },
      { label: '10:30', value: '10:30' },
      { label: '11:20', value: '11:20' },
      { label: '12:10', value: '12:10' },
      { label: '13:00', value: '13:00' },
      { label: '14:40', value: '14:40' },
      { label: '15:30', value: '15:30' },
      { label: '16:20', value: '16:20' },
      { label: '17:10', value: '17:10' },
      { label: '18:00', value: '18:00' },
      { label: '18:50', value: '18:50' },
      { label: '19:40', value: '19:40' },
      { label: '20:30', value: '20:30' },
      { label: '21:20', value: '21:20' }
    ];
    this.horariosFim = Array.from(this.horarios);
    this.horariosFim.push({ label: '22:10', value: '22:10' });
  }

  showDialog() {
    this.display = true;
  }

  cadastrar(): void {
    console.log(this.aulaForm.value);
    this.aulaService.cadastrar(this.aulaForm.value as Aula)
    .subscribe(response => {
      this.messageService.add({severity: 'success', summary: 'Aula cadastrada', detail: 'A aula foi cadastrada com sucesso.' });
      this.router.navigate(['/controle']);
    }, err => console.log(err));
  }

}
