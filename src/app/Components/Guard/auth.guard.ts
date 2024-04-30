import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthserviceService } from '../Service/authservice.service';


@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(
    private authservice: AuthserviceService,
    private router: Router
  ) { }

  canActivate() {
    if (this.authservice.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['adminLogin']);
      return false;
    }
  }
}
