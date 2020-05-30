import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.sass']
})
export class SigninComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(fb: FormBuilder, private authService: AuthService) {
    this.loginForm = fb.group({
      email: ['teste@teste.com'],
      password: ['123'],
      keepMe: [false]
    });
  }

  ngOnInit(): void {
  }

  login() {
    const loginData = this.loginForm.value;
    this.authService.authenticateMock(loginData.username, loginData.password, loginData.keepMe);
  }

}
