import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appGender]'
})
export class GenderDirective {
  @Input() gender = '';
  constructor(private el: ElementRef) { }

  @HostListener('mousenter')
  onEvent(){
    console.log('here');
    this.color();
  }

  private color() {
    let color = (this.gender==='male')?'darkblue':'palevioletred';
    this.el.nativeElement.style.color = color;
  }
}
