
import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, CanMatch, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, take, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })

export class AuthGuard { }


const isAuthenticated = (): | boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.checkAutentification().pipe(
    take(1),
    tap((isAuthenticated: boolean) => {
      if (!isAuthenticated) {
        router.navigate(['./auth/login']);
      }
    }),
  );
}

export const canActivateGuard: CanActivateFn = isAuthenticated;
export const canMatchGuard: CanMatchFn = isAuthenticated;
