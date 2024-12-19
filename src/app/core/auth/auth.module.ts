// src/app/core/auth/auth.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [LoginComponent], // Déclare les composants liés à l'authentification
  imports: [
    CommonModule, // Pour les directives Angular de base (ngIf, ngFor, etc.)
    FormsModule, // Pour les formulaires réactifs ou pilotés par template
    RouterModule, // Pour les fonctionnalités liées au routage
  ],
  providers: [AuthService], // Fournit les services nécessaires
  exports: [LoginComponent], // Exporte les composants nécessaires à d'autres modules
})
export class AuthModule {}
