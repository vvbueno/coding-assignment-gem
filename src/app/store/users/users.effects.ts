import {Injectable} from '@angular/core';
import {Actions} from '@ngrx/effects';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {UsersActions} from './users.actions';

@Injectable({
  providedIn: 'root'
})
export class UsersEffects {

  constructor(
    private actions$: Actions<UsersActions>,
    private router: Router,
    private store: Store,
  ) {}

}
