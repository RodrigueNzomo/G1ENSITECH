// src/app/app.component.ts

import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'G1Ensitech'; // Titre de l'application

  constructor(private authService: AuthService, private router: Router) {}

  // Déconnexion de l'utilisateur
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
