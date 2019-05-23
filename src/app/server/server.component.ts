import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            background-color: green;
            color: white
        }
        .offline {
            background-color: red;
            color: white
        }
    `]
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
}
