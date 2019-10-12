import { Directive, ElementRef, Input, HostListener } from "@angular/core";


@Directive({
    selector: '[scrollable-table]'
})
export class ScrollableTable {

    @Input('scrollable-table')
    position: number = 0;

    constructor(private el: ElementRef) {
    }

    @HostListener('mouseover')
    onMouseEnter(){
        console.log("Acima da tabela");
    }

    @HostListener('mouseleave')
    onMouseLeave(){
        console.log("sai da  tabela");
        this.rolarTabela();
        console.log(this.el.nativeElement.scrollTop);
    }

    private rolarTabela(){
        this.position = this.el.nativeElement.scrollTop + 5;
        this.el.nativeElement.scrollTop = this.position;
    }

}