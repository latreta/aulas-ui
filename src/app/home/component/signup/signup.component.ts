import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/core/user/user.service';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})
export class SignUpComponent {

    private signupForm: FormGroup;
    msgError: string;
    genders: SelectItem[] = [];
    shifts: SelectItem[] = [];

    constructor(private formBuilder: FormBuilder, private userService: UserService) {
        this.setForm();
        this.msgError = null;
    }

    setForm(): void {
        this.genders = [
            {label: 'Masculino', value: 'masculino'},
            {label: 'Feminino', value: 'feminino'},
            {label: 'Não quero informar', value: 'ndesc'}
        ];
        this.shifts = [
            {label: 'Manhã', value: 'manha'},
            {label: 'Tarde', value: 'tarde'},
            {label: 'Noite', value: 'noite'}
        ]
        this.signupForm = this.formBuilder.group({
            firstName: ['', [
                Validators.required
            ]],
            lastName: ['', [
                Validators.required
            ]],
            gender: ['', [
                Validators.required
            ]],
            birthdate: ['', [
                Validators.required
            ]],
            password: ['', [
                Validators.required,
                Validators.minLength(8)
            ]],
            email: ['', [
                Validators.required,
                Validators.email
            ]],
            cpf: ['', [
                Validators.required,
                Validators.minLength(11),
                Validators.maxLength(11)
            ]],
            cep: ['', [
                Validators.required,
                Validators.minLength(9),
                Validators.maxLength(9)
            ]],
            street: ['', [
                Validators.required
            ]],
            neighborhood: ['', [
                Validators.required
            ]],
            number: ['', [
                Validators.required
            ]],
            city: ['', [
                Validators.required
            ]],
            shift: ['', [
                Validators.required
            ]],
            state: ['', [
                Validators.required
            ]],
            ddd_1: ['', [
                Validators.required
            ]],
            tel_1: ['', [
                Validators.required
            ]],
            ddd_2: ['', []],
            tel_2: ['',  []],
            complement: ['',  []],
            newsletter: ['',  []]
        });
        console.log(this.signupForm);
    }

    cadastrar(): void {
        this.userService.signup(this.signupForm.value);
    }
}
