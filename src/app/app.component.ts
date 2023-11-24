import { Component } from '@angular/core';
import {UserService} from './service/user.service';
import {Observable} from 'rxjs';
import {User} from './interface/user.interface';
import {Store} from '@ngrx/store';
import {UserExampleActionOne} from './store/users/users.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users$: Observable<User[]> = this.userService.getUsers();
  constructor(
    private userService: UserService,
    private store: Store
  ) {
    // this.store.dispatch(new UserExampleActionOne());
    this.users$.subscribe((users) => {
      console.log(users);
    });
  }
}
