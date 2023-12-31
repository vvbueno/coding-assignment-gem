import {createFeatureSelector, createSelector} from '@ngrx/store';
import {UsersState} from './users.reducer';

const selectUsersState = createFeatureSelector<UsersState>('users');

export const getUsers = createSelector(
  selectUsersState,
  (state: UsersState) => state.users
);
