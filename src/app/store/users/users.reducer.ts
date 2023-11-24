import {UserActionTypes, UsersActions} from './users.actions';
import {User} from '../../interface/user.interface';
export interface UsersState {
  users: User[]
}
export const initialState: UsersState = {
  users: []
};

export function usersReducer(state = initialState, action: UsersActions): UsersState {
  switch (action.type) {
    // Ignore or remove the example action
    case UserActionTypes.USER_EXAMPLE_ACTION_ONE: {
      return state;
    }
    default:
      return state;
  }
}
