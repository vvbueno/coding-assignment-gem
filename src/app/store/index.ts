import {ActionReducerMap} from '@ngrx/store';
import {usersReducer, UsersState} from './users/users.reducer';
import {UsersActions} from './users/users.actions';

export interface AppState {
  users: UsersState;
}
export type AppActions = UsersActions;
export const reducers: ActionReducerMap<AppState, AppActions> = {
  users: usersReducer,
};
