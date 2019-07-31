import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {FormBuilder} from '@angular/forms';

@Component({
    selector: 'app-cadastro-usuario',
    templateUrl: './cadastra.usuario.component.html'
})
export class CadastraUsuarioComponent {
    value: Date;

    private usuarioForm: FormGroup;

    constructor(private formBuilder: FormBuilder){
        this.usuarioForm = this.formBuilder.group({
            name: '',
            lastname: '',
            email: ''
        });
    }


    cadastrar() {
        console.log(this.usuarioForm.value);
    }
}