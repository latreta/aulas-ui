import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert-error',
  templateUrl: './alert-error.component.html'
})
export class AlertErrorComponent implements OnInit {

  @Input() message = '';

  constructor() { }

  ngOnInit() {
  }

}
