import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  public signupForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.signupForm = fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      street: [''],
      zipcode: [''],
      complement: [''],
      city: [''],
      neighborhood: ['']
    });
  }

  ngOnInit(): void {
  }

  signup() {
    console.log(this.signupForm.value);
  }

}
