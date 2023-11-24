
# Coding assignment Gemvision Angular

The goal of this assignment is to showcase your ability to develop features and your coding style. Try to take into account code cleanliness in your solution

After the assignment, we can look at the app together, talk about the decisions you have made, etc..

## Getting started

Don't clone the repo! [Download it as a ZIP](https://github.com/vvbueno/coding-assignment-gem/archive/refs/heads/master.zip) and submit your solution it by email to `henry@gemvision.io`

This project was generated with Angular CLI version `16.2.12`

Npm version `8.19.3`

Node version `v16.19.0`

Install the packages using

```bash
npm i
```

And run the project using

```bash
npm run start
```

The app is not connected to a real API, a fake backend is present to simulate requests to a "users" API. This can be found at `src/app/service/user.service.ts`. You may modify this if necessary.

## Tasks

You are building a small user management app

* The app should have two screens: the users list screen and the edit (an individual user) screen. Please use the Angular router to manage the
  transitions between them.
  * In the list user screen, include an "Add user" to add a new user to the list
  * On each user row, include a "Delete user" button, and a "Edit user" button (this edit button takes you to the edit screen)
  * In the edit screen include a form to update any property from the user (for example, the first name and last name)
* Use Ngrx state management to handle data interaction (for adding, removing and editing users).
  * Make use of actions, selectors and effects and update the state using a reducer.
  * A basic setup for this is already present in the code, it's working for getting a list of users and displaying it in the main App component. You can use it to set up the rest of the state interactions
  * If possible handle errors! The fake backend has a 10% chance of throwing an error when getting the list of users. In this case displaying an error message when this happens is enough.
* Don't worry much about styling, just making the requested parts of the app functional with a basic UI is enough.


## Tech Stack

**Client:** Angular 16, Ngrx 16

## Contact

If there are questions about the tasks or any problems setting up the app or repo, you can send an email to `henry@gemvision.io`. I'll try to reply as soon as I can.
