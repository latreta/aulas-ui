import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/model';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user/user.service';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private usuario = 'Teste';
  private user$: Observable<User>;
  private actions = [];

  constructor(private authService: AuthService, private userService: UserService) {
    this.user$ = userService.getUser();
  }

  ngOnInit() {
    this.actions = this.authService.getInformation().actions;
  }

  logout() {
    this.userService.logout();
  }

}
