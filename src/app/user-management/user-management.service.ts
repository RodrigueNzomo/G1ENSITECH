// src/app/user-management/user-management.service.ts
import { Injectable } from '@angular/core';
import { mockUsers } from './user-management/mock-users'; // Import des utilisateurs fictifs

@Injectable({
  providedIn: 'root',
})
export class UserManagementService {
  private users = mockUsers; // Remplacez les données internes par les utilisateurs fictifs

  constructor() {}

  // Retourne la liste des utilisateurs
  getUsers() {
    return this.users;
  }

  // Méthode pour changer le rôle d'un utilisateur (exemple simple)
  changeRole(username: string, newRole: string) {
    const user = this.users.find((u) => u.username === username);
    if (user) {
      user.role = newRole;
    }
  }
}
