import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Router} from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {


		var user = localStorage.getItem('userDetails');
        if (user) {
            return true;
        }
        this.router.navigate(['/login']);
		return false;
  }
}
