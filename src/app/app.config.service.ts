import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ConfigService {
    constructor(private http: Http) { }
 
    getConfiguration = (): Observable<Response> => {
        console.log("In getConfiguration of ConfigService");
        return this.http.get('./config.json').map(res => res.json());
    }
}