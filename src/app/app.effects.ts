import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ApiService } from './api.service';
import { loadFriendsSuccess } from './reducers';
import { loadFriends } from './actions';

@Injectable()
export class AppEffects {
  loadFriends$ = createEffect(() => this.actions$.pipe(
    ofType(loadFriends.type),
    mergeMap(() => this.api.getAllFriends()
      .pipe(
        map(friends => ({ type: loadFriendsSuccess.type, friends })),
        catchError(() => EMPTY)
      )
  )));

  constructor(private actions$: Actions, private api: ApiService) {
  }
}