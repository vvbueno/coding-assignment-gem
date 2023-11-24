import {Action} from '@ngrx/store';
import {User} from '../../interface/user.interface';

// Ignore or remove example actions
export enum UserActionTypes {
  GET_USERS = 'UserActionTypes.GET_USERS',
  GET_USERS_DONE = 'UserActionTypes.GET_USERS_DONE',
  GET_USERS_FAILED = 'UserActionTypes.GET_USERS_FAILED',
}

export class GetUsers implements Action {
  readonly type = UserActionTypes.GET_USERS;
}
export class GetUsersDone implements Action {
  readonly type = UserActionTypes.GET_USERS_DONE;
  constructor(public payload: { users: User[] }) {
  }
}

export class GetUsersFailed implements Action {
  readonly type = UserActionTypes.GET_USERS_FAILED;
  constructor(public payload: { error: string }) {
  }
}

export type UsersActions = GetUsers | GetUsersDone | GetUsersFailed;
