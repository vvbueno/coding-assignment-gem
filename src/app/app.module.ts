import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserService} from './service/user.service';
import {EffectsModule} from '@ngrx/effects';
import {createReducer, StoreModule} from '@ngrx/store';
import {usersReducer} from './store/users/users.reducer';
import {UsersEffects} from './store/users/users.effects';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {reducers} from './store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([UsersEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
    }),
    AppRoutingModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
