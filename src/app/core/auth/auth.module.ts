// src/app/core/auth/auth.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard'; // Ajout du AuthGuard

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule, // Assurez-vous que FormsModule est importé pour utiliser ngModel
    RouterModule,
  ],
  providers: [
    AuthService, // Fournisseur du service d'authentification
    AuthGuard, // Fournisseur du garde de route
  ],
  exports: [],
})
export class AuthModule {}
