import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.component.html'
})
export class MinhaContaComponent implements OnInit {


  constructor(private userService: UserService) {
    this.getAccountInformation();
  }

  ngOnInit() {
  }

  getAccountInformation(): void {
    this.userService.retrieveLoggedUsersInfo()
    .subscribe( res => {
      console.log(res);
    },
    err => console.error(err)
    );
  }

}
