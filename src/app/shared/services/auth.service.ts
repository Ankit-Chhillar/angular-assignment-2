import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  public isAuthenticated(): boolean {
    const isLoggedIn = localStorage.getItem('loggedIn');
    return isLoggedIn?true:false;
  }
}
