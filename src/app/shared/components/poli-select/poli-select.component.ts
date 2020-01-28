import { Component, Input } from '@angular/core';

export interface Option {
    id?: number;
    label: string;
    value: string;
}

@Component({
    selector: 'app-poli-select',
    templateUrl: './poli-select.component.html',
    styleUrls: ['./poli-select.component.css']
})
export class PoliSelectComponent {
    @Input() type: string;
    @Input() placeholder: string;
    @Input() opcoes: Option[];

}
