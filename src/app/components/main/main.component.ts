import { Component, OnInit } from '@angular/core';
import { BlocoService } from 'src/app/core/bloco.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  blocos = [];

  constructor(private blocoService: BlocoService) { }

  ngOnInit(): void {
    this.GetBlocos();
  }

  GetBlocos() {
    this.blocoService.GetBlocos().subscribe((response: any[]) => {
      this.blocos = response;
    }, err => console.log(err));
  }

}
