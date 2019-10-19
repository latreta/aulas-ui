import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-signup-info-basic',
  templateUrl: './signup-info-basic.component.html'
})
export class SignupInfoBasicComponent implements OnInit {

  title: string = 'Informações básicas';

  constructor() { }

  ngOnInit() {
  }

}
