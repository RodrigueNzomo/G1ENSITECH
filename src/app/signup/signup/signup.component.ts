// src/app/signup/signup.component.ts
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service'; // Assurez-vous d'avoir un service utilisateur
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string | null = null;

  constructor(private userService: UserService, private router: Router) {}

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Les mots de passe ne correspondent pas.';
      return;
    }

    // Appel à un service pour créer un utilisateur
    this.userService
      .createUser({
        username: this.username,
        email: this.email,
        password: this.password,
      })
      .subscribe(
        () => {
          this.router.navigate(['/login']); // Redirige vers la page de connexion après inscription
        },
        (error) => {
          this.errorMessage =
            'Erreur lors de la création du compte. Veuillez réessayer.';
        }
      );
  }
}
