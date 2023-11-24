import {UserActionTypes, UsersActions} from './users.actions';
export interface UsersState {
  users: string[]
}
export const initialState: UsersState = {
  users: ['test']
};

export function usersReducer(state = initialState, action: UsersActions): UsersState {
  switch (action.type) {
    case UserActionTypes.USER_EXAMPLE_ACTION_ONE: {
      return state;
    }
    default:
      return state;
  }
}
