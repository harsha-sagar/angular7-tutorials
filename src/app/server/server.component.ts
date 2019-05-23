import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})

export class ServerComponent {
    serverStatus = 'offline';
    serverId = 10;

    constructor () {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus == 'online' ? 'green' : 'red';
    }
}
