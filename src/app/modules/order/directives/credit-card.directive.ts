import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[creditCard]'
})
export class CreditCardDirective {
  nativeElement: any;

  constructor(private el: ElementRef) {
    this.nativeElement = el.nativeElement;
  }

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    let booleanValue = (event.keyCode >= 48 && event.keyCode <= 57 && event.shiftKey == false) ||
      event.code == "Backspace" || event.code == "ArrowLeft" || event.code == "ArrowRight" || event.code == "Delete";
    if (!booleanValue) {
      event.preventDefault();
    }
  }

  @HostListener('keyup') onKeyup() {
    let cardNumber;
    cardNumber = this.nativeElement.value.replace(/([-])/g, '');
    let newValue = "";
    let length = cardNumber.length;
    for (let i = 0; i < length && i < 16; i++) {
      if (i % 4 == 0 && i > 0) {
        newValue = newValue.concat('-');
      }
      newValue = newValue.concat(cardNumber[i]);
    }
    this.nativeElement.value = newValue;
  }
}
