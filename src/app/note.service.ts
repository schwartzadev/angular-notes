import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Note } from './note';

@Injectable()
export class FeedService {
  constructor( private http: Http ) { }

  getNotes(): Observable<Note[]> {
    const url = 'assets/fullExample.json';
    return this.http.get(url)
      .map(res => res.json() as Note[]);
  }

  // getUserFeed(handle: string): Observable<Note[]> {
  //   const url = 'api/feed/?limit=10&page=0&handle=' + handle;
  //   return this.http.get(url)
  //     .map(res => res.json() as Note[]);
  // }

  // getNote(hashid: string): Observable<Note> {
  //   const url = 'api/Note/' + hashid;
  //   return this.http.get(url)
  //     .map(res => res.json() as Note);
  // }

}