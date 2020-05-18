import { Component, OnInit, Input } from '@angular/core';

export interface NavbarLink {
  label: string;
  route: string[];
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  @Input()
  options: NavbarLink[] = [];
  @Input()
  title: string;

  constructor() { }

  ngOnInit(): void {

  }

}
