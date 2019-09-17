import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  Action,
  createReducer,
  on
} from '@ngrx/store';
import { createAction, props } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { environment } from '../../environments/environment';

export interface Friend {
  id: string;
  name: string;
}

export interface Photo {
  url: string;
}

export interface AppState {
  friends: Friend[];
  photos: Photo[];
}

export interface State {
  app: AppState;
}

export const loadFriends = createAction(
  '[Friends] Load'
);
export const loadFriendsSuccess = createAction(
  '[Friends] Load Success'
);

const initialState = {
  friends: [],
  photos: []
}

const _appReducer = createReducer(initialState,
  on(loadFriends, state => ({ ...state, friends: state.friends }))
);

const appReducer = (state, action) => _appReducer(state, action);

export const reducers: ActionReducerMap<State> = {
  app: appReducer
};


export function logger(reducer: ActionReducer<State>): any {
  // default, no options
  return storeLogger()(reducer);
}
export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger] : [];
