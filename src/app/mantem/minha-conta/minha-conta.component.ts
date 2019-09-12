import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', []],
      endereco: this.formBuilder.group({
        street: ['', Validators.required],
        number: ['', Validators.required],
        neighborhood: ['', Validators.required],
        city: ['', Validators.required],
        state: ['' , Validators.required]
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
    this.myAccountForm.setValue({
      firstName: this.account.name,
      lastName: this.account.lastName,
      email: this.account.email,
      endereco: {
        street: this.account.endereco.rua,
        number: this.account.endereco.numero,
        neighborhood: this.account.endereco.bairro,
        city: this.account.endereco.cidade,
        state: this.account.endereco.estado
      },
      password: null
    });
  }

}
