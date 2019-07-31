import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/user/user.service';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/user/user';

@Component({
  selector: 'app-minha-conta',
  templateUrl: './minha-conta.component.html',
  styleUrls: ['./minha-conta.component.css']
})
export class MinhaContaComponent implements OnInit {

  private user$: Observable<User>;
  private userName: string;

  constructor(private userService: UserService) {
    this.user$ = this.userService.getUser();
    this.userName = this.userService.getUserName();
  }

  ngOnInit() {
  }

}
