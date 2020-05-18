import { Component, OnInit } from '@angular/core';
import { NavbarLink } from '../shared/navbar/navbar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{

  opcoes: NavbarLink[] = [];
  title = 'PoliClass';
  constructor() { }


  ngOnInit(): void {
    this.opcoes.push(
      {
        label: 'Login',
        route: ['/welcome/signin']
      },
      {
        label: 'Cadastrar-se',
        route: ['/welcome/signup']
      }
    );
  }
}
