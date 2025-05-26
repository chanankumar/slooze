// access.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements CanActivate {

  constructor(private router: Router) {}

  canActivate(): boolean {
    const access = localStorage.getItem('user_admin');

    if (access === 'true') {
      return true; 
    } else {
      // this.router.navigate(['/product']);
      return false;
    }
  }
}
