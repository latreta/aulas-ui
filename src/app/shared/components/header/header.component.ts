import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private usuario = 'Teste';
  private actions = [];

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.actions = this.authService.getInformation().actions;
  }

}
