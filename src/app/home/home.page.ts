import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, Friend } from '../reducers';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  friends$: Observable<Friend[]> = this.store.select(state => state.app.friends);

  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.friends$.subscribe((friends) => {
      console.log('Loaded friends in here', friends);
    })
  }

}
