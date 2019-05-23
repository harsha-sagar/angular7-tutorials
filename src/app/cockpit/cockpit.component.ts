import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})

export class CockpitComponent implements OnInit {
  @Output('sCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  constructor() { }

  ngOnInit() {
  }

  onAddServer(newServerName, newServerContent) {
    this.serverCreated.emit({
      serverName: newServerName.value,
      serverContent: newServerContent.value
    });
  }

  onAddBlueprint(newServerName, newServerContent) {
    this.blueprintCreated.emit({
      serverName: newServerName.value,
      serverContent: newServerContent.value
    });
  }
  
}
