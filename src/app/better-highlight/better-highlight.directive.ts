import { Directive, ElementRef, Renderer2, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit{
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  @HostListener('mouseenter') mouseEnter(eventData: Event){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event){
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }
}
