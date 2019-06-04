import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { ServersService } from "../servers.service";

interface Server {
    id: number,
    status: string,
    name: string
}

@Injectable()

export class ServerResolver implements Resolve<Server> {
    constructor(private serversService: ServersService) {}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable<Server> | Promise<Server> | Server {
        return this.serversService.getServer(+route.params['id']);
    }    
}
