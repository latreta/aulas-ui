import { Component, OnInit, Input } from '@angular/core';
import { NavbarLink } from '../model/NavbarLink';

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
  homeRoute = ['/welcome'];

  constructor() { }

  ngOnInit(): void {

  }

}
