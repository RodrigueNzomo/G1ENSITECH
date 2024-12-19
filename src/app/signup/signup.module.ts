// src/app/signup/signup.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms'; // Pour utiliser ngModel

@NgModule({
  declarations: [SignupComponent], // Déclaration du composant Signup
  imports: [
    CommonModule,
    FormsModule, // Ajout du module FormsModule pour gérer les formulaires
  ],
  exports: [SignupComponent], // Exporte le composant pour pouvoir l'utiliser ailleurs dans l'application
})
export class SignupModule {}
