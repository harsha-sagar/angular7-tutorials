import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})

export class BetterHighlightDirective implements OnInit{
  @Input('defaultColor') defaultColor: 'transparent';
  @Input('highlightColor') highlightColor: 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.highlightColor;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
  }

  @HostListener('mouseenter') mouseEnter(eventData: Event){
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event){
    this.backgroundColor = this.highlightColor;
  }
}
