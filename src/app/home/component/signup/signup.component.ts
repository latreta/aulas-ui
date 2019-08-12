import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignUpComponent {

    private signupForm: FormGroup;
    private msgError: string;

    constructor(private formBuilder: FormBuilder) {
        this.setForm();
        this.msgError = null;
    }

    setForm(): void {
        this.signupForm = this.formBuilder.group({
            firstName: ['', [
                Validators.required
            ]],
            lastName: ['', [
                Validators.required
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
                Validators.minLength(8),
                Validators.maxLength(8)
            ]],
            street: ['', [
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
            complement: [''],
            newsletter: ['']
        });
    }

    cadastrar(): void {
        console.log(this.signupForm.value);
    }
}
