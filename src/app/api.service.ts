import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Friend } from './reducers';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getAllFriends(): Observable<Friend[]> {
    return Observable.create((observer) => {
      observer.next([
        { name: 'Max' },
        { name: 'Sallly' },
        { name: 'Frank' },
        { name: 'Bill' },
        { name: 'Tina' }
      ] as Friend[]);
      observer.complete();
    });
  }
}
