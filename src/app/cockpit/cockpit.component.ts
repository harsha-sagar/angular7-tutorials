import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})

export class CockpitComponent implements OnInit {
  @Output('sCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  @ViewChild('serverNameInput') newServerNameInput: ElementRef;
  @ViewChild('serverContentInput') newServerContentInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onAddServer(newServerName, newServerContent) {
    this.serverCreated.emit({
      serverName: this.newServerNameInput.nativeElement.value,
      serverContent: this.newServerNameInput.nativeElement.value
    });
  }

  onAddBlueprint(newServerName, newServerContent) {
    this.blueprintCreated.emit({
      serverName: this.newServerNameInput.nativeElement.value,
      serverContent: this.newServerNameInput.nativeElement.value
    });
  }  
}
