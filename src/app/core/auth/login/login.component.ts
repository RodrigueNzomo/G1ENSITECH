import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(public authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.username, this.password).subscribe({
      next: (user: { role: string }) => {
        console.log('Utilisateur connecté:', user);
        if (user.role === 'administrateur') {
          this.router.navigate(['/admin-dashboard']);
        } else if (user.role === 'enseignant') {
          this.router.navigate(['/teacher-dashboard']);
        } else if (user.role === 'étudiant') {
          this.router.navigate(['/student-dashboard']);
        } else {
          this.errorMessage = 'Rôle utilisateur inconnu.';
        }
      },
      error: (err: any) => {
        this.errorMessage = 'Nom d’utilisateur ou mot de passe incorrect.';
        console.error('Erreur de connexion:', err);
      },
    });
  }

  onResetPassword() {
    this.router.navigate(['/reset-password']);
  }
}
