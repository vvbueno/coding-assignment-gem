import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {UserActionTypes, GetUsersDone, UsersActions} from './users.actions';
import {catchError, map, of, switchMap} from 'rxjs';
import {UserService} from '../../service/user.service';

@Injectable({
  providedIn: 'root'
})
export class UsersEffects {

  constructor(
    private actions$: Actions<UsersActions>,
    private router: Router,
    private store: Store,
    private userService: UserService,
  ) {}

  getUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(UserActionTypes.GET_USERS),
      switchMap(() => {
        return this.userService.getUsers().pipe(
          map((response) => {
            return new GetUsersDone({ users: response });
          })/*,
          catchError((error) => {
            // DISPATCH AN ERROR ACTION HERE
          })*/
        );
      })
    );
  });

}
