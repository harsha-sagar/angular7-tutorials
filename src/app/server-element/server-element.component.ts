import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})

export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit {
  @Input('srvElement') element: {name: string, content: string, type: string};
  @Input('srvElementName') name: string;

  @ContentChild('paragraphContent') paragraph: ElementRef;

  constructor() {
    console.log('ServerElementComponent constructor called');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('inside ServerElementComponent ngOnChanges');
    console.log(changes);
  }

  ngOnInit() {
    console.log('inside ServerElementComponent ngOnInit');
    console.log('ServerElement inner-content paragraph: ' + this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('inside ServerElementComponent ngDoCheck');
  }

  ngAfterContentInit() {
    console.log('inside ServerElementComponent ngAfterContentInit');
    console.log('ServerElement inner-content paragraph: ' + this.paragraph.nativeElement.textContent);
  }

}
