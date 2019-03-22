import { Component, OnInit } from '@angular/core';
import { User } from '../core/model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  user: User;
  display = false;

  constructor() {

  }

  ngOnInit() {
  }

  showDialog() {
    this.display = true;
  }

}
