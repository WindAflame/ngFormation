import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  @Input('color')
  public color = 'red';
  private previousColor: string;

  constructor(private ref: ElementRef) {
    console.log(this.color);
    this.previousColor = ref.nativeElement.style.backgroundColor;
  }

  ngOnInit(): void {
    // The first place for use property binding
    console.log(this.color);
    this.ref.nativeElement.style.backgroundColor = this.color;
  }

}
