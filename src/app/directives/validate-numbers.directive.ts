import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appValidateNumbers]'
})
export class ValidateNumbersDirective {
  @HostListener("change", ["$event.target"])
  onChange(target: any) {
    if (target.value && target.value.length > 0) {
      target.value = target.value.replace(/[^0-9]/, '');
    }
  }
  @HostListener("input", ["$event.target"])
  onInput(target: any) {
    if (target.value && target.value.length > 0) {
      target.value = target.value.replace(/[^0-9]/, '');
    }
  }
  constructor() { }

}
