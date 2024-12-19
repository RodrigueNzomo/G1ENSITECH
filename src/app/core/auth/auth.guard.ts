import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, of } from 'rxjs';
import { take, map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root', // Déclare que ce service est injectable à l'échelle de l'application
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.isAuthenticated.pipe(
      take(1),
      map((isAuthenticated) => {
        if (!isAuthenticated) {
          // Redirection vers la page de connexion si l'utilisateur n'est pas authentifié
          this.router.navigate(['/login']);
          return false;
        }
        // Autoriser l'accès si l'utilisateur est authentifié
        return true;
      }),
      catchError(() => {
        // Gestion des erreurs : redirection vers la page de connexion
        this.router.navigate(['/login']);
        return of(false); // Utiliser 'of(false)' pour retourner une Observable valide
      })
    );
  }
}
