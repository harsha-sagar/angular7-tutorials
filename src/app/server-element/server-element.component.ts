import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})

export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement') element: {name: string, content: string, type: string};
  @Input('srvElementName') name: string;

  constructor() {
    console.log('ServerElementComponent constructor called');
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('inside ServerElementComponent ngOnChanges');
    console.log(changes);
  }

  ngOnInit() {
    console.log('inside ServerElementComponent ngOnInit');
  }
}
