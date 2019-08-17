import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/core/user/user.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { TokenService } from 'src/app/core/token/token.service';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SignInComponent {

    private loginForm: FormGroup;
    private msgError: string;

    constructor(
        private formBuilder: FormBuilder, private route: Router,
        private authService: AuthService, private tokenService: TokenService,
        private userService: UserService) {
        this.loginForm = this.formBuilder.group({
            email: [''],
            password: ['']
        });
    }

    login() {
        this.authService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(response => {
            this.tokenService.setToken(response.token);
            this.userService.decodeAndNotify();
            this.route.navigate(['']);

        }, err => this.msgError = err.error.message);
    }

}
