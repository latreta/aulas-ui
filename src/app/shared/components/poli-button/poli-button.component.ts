import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-poli-button',
    templateUrl: './poli-button.component.html',
    styleUrls: ['./poli-button.component.css']
})
export class PoliButtonComponent {
    @Input() value: string;
    @Input() type: string;
}
