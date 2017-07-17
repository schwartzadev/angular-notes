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
	url: string = 'assets/fullExample.json';

    constructor(private http: Http) { }
 
    getConfiguration = (): Observable<Response> => {
        return this.http.get(this.url).map(res => res.json());
    }

    save(object) {
    	// needs to save rest item to json file
    	console.log('saving.....');
    	console.log(object);
    }
}