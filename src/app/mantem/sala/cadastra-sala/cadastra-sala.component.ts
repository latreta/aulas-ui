import { Component, OnInit } from '@angular/core';
import { Sala, Bloco } from 'src/app/core/model';
import { BlocoService } from 'src/app/core/bloco/bloco.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SalaService } from 'src/app/core/sala/sala.service';

@Component({
  selector: 'app-cadastra-sala',
  templateUrl: './cadastra-sala.component.html'
})
export class CadastraSalaComponent implements OnInit {

  private salas: Sala[];
  private blocos: Bloco[];
  private salaForm: FormGroup;

  constructor(private salaService: SalaService, private blocoService: BlocoService, private formBuilder: FormBuilder) {
    this.salaForm = this.formBuilder.group({
      name: '',
      bloco: ''
    });
  }

  ngOnInit() {
    this.listarBlocos();
  }

  listarBlocos(): void {
    this.blocoService.getBlocos().subscribe(response => { this.blocos = response; }, err => console.log(err));
  }

  cadastrar(): void {
    const sala: Sala = this.salaForm.value as Sala;
    sala.bloco = this.blocos[this.salaForm.value.bloco];
    this.salaService.cadastra(sala).subscribe(() => {
      console.log('Sucesso!');
    } ,err => console.log(err));
  }

  listarSalas(): void {
    this.salaService.getSalas().subscribe(response => { this.salas = response;}, err => console.log(err));
  }

}
