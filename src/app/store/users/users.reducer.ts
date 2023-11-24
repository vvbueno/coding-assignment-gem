import {UserActionTypes, UsersActions} from './users.actions';
import {User} from '../../interface/user.interface';
export interface UsersState {
  users: User[],
  error: string | null,
}
export const initialState: UsersState = {
  users: [],
  error: null,
};

export function usersReducer(state = initialState, action: UsersActions): UsersState {
  switch (action.type) {
    // Ignore or remove the example action
    case UserActionTypes.GET_USERS_DONE: {
      return {
        ...state,
        users: action.payload.users
      }
    }
    default:
      return state;
  }
}
