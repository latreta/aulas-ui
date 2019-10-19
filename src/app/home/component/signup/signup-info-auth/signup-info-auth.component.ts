import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-signup-info-auth',
  templateUrl: './signup-info-auth.component.html'
})
export class SignupInfoAuthComponent implements OnInit {

  title: string = 'Informações de login';

  constructor() { }

  ngOnInit() {
  }

}
