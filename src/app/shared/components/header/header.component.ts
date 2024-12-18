import { AuthService } from './app/core/auth/services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  // Injection du service AuthService pour gérer l'authentification et la déconnexion
  constructor(private authService: AuthService, private router: Router) {}

  // Méthode de déconnexion
  logout() {
    this.authService.logout(); // Appel au service d'authentification pour déconnecter l'utilisateur
    this.router.navigate(['/login']); // Redirection vers la page de connexion après déconnexion
  }
}
