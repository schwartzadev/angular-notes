import { Http, Headers, Response, Jsonp, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';


// Service class to call REST API
@Injectable()
export class ConfigurationService {
    constructor(private http: Http) {
    }
 
    getConfiguration = (): Observable<Response> => {
        return this.http.get('assets/fullExample.json').map(res => res.json());
    }
}