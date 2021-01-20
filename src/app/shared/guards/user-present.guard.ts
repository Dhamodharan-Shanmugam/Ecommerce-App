import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route, UrlSegment } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserPresentGuard implements CanActivate, CanLoad {
  userPresent: boolean;

  constructor(private userService: UserService, private router: Router) {
    this.userService.$userActive.subscribe(data => { this.userPresent = data });
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.userPresent) {
      return this.userPresent;
    }
    else {
      window.alert('Please Sign-In To Continue');
      this.router.navigate(['/logging']);
    }
  }

  canLoad(route: Route, segments: UrlSegment[]): boolean {
    if (this.userPresent) {
      return this.userPresent;
    }
    else {
      window.alert('Please Sign-In To Continue');
      this.router.navigate(['/logging']);
    }
  }
}
