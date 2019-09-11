import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.component.html'
})
export class MinhaContaComponent implements OnInit {

  private account: MyAccount;
  private myAccountForm: FormGroup;

  constructor(private userService: UserService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.myAccountForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      password: [''],
      endereco: this.formBuilder.group({
        street: [''],
        number: [''],
        neighborhood: [''],
        city: [''],
        state: ['']
      })
    });

    this.getAccountInformation();
  }

  getAccountInformation() {
    this.userService.retrieveLoggedUsersInfo()
      .subscribe(res => {
        this.account = res;
        this.setFormValues();
      },
        err => console.error(err)
      );
  }

  atualizar() {
    console.log(this.myAccountForm.value);
  }

  setFormValues() {
    console.log(this.account);
  }

}
