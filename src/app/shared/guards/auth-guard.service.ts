import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate  {

  constructor(public auth: AuthService, public router: Router) { }
  canActivate(): boolean {
    const isAuthenticated = this.auth.isAuthenticated();
    if (!isAuthenticated) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
