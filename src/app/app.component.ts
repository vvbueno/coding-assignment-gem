import { Component } from '@angular/core';
import {UserService} from './service/user.service';
import {Observable} from 'rxjs';
import {User} from './interface/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  users$: Observable<User[]> = this.userService.getUsers();
  constructor(private userService: UserService) {
    this.users$.subscribe((users) => {
      console.log(users);
    })
  }
}
