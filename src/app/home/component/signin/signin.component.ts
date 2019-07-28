import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { TokenService } from 'src/app/core/services/token/token.service';
import { Router, RouterState, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SignInComponent {

    private loginForm: FormGroup;

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

        }, err => console.log(err));
    }

}
