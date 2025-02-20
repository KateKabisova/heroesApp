
import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, CanMatch, CanMatchFn, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { map, Observable, take, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({providedIn: 'root'})

export class PublicGuard {}



  const isAuthenticated = (): | boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> => {
    const authService = inject(AuthService);
    const router = inject(Router);
    return authService.checkAutentification()
    .pipe(
      tap( isAuthenticated => console.log( 'Authenticated:', isAuthenticated ) ),
      tap( isAuthenticated => {
        if ( isAuthenticated ) {
          router.navigate( [ './' ] );
        }
      } ),
      map( isAuthenticated => !isAuthenticated )
    );
  }

  export const canActivateGuard: CanActivateFn = isAuthenticated;
  export const canMatchGuard: CanMatchFn = isAuthenticated;


