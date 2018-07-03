import { Directive, Input, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  private previousColor: string;

  @Input('color')
  public color = 'red';

  @HostListener('mouseleave')
  private mouseleave(){
    this.ref.nativeElement.style.backgroundColor = '';
  }

  @HostListener('mouseenter')
  private mouseenter(){
    this.ref.nativeElement.style.backgroundColor = this.color;
  }

  constructor(private ref: ElementRef) {
    console.log(this.color);
  }

  ngOnInit(): void {
    // The first place for use property binding
    console.log(this.color);
    //this.ref.nativeElement.style.backgroundColor = this.color;
    this.previousColor = this.ref.nativeElement.style.backgroundColor;
  }

}
