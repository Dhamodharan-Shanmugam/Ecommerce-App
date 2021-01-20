import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[customeClick]'
})
export class CustomeClickDirective {

  constructor(private elementRef: ElementRef) { }

  @Output() customeClick = new EventEmitter<boolean>();

  @HostListener('document:click', ['$event.target'])
  public onClick(target) {
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (clickedInside) {
      this.customeClick.emit(true);
    }
    else {
      this.customeClick.emit(false);
    }
  }

}
