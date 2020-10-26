import { action, computed, makeObservable, observable } from 'mobx';

export class AuthService {
  @observable private _loggedIn: boolean = false;

  constructor() {
    makeObservable(this);
  }

  @computed
  public get isUserLoggedIn() {
    return this._loggedIn;
  }

  @action.bound
  public logIn() {
    this._loggedIn = true;
  }

  @action.bound
  public logOut() {
    this._loggedIn = false;
  }
}
