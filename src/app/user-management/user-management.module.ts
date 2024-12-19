// src/app/user-management/user-management.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './user-management/user-management.component';
import { FormsModule } from '@angular/forms'; // Importer FormsModule pour ngModel

import { UserManagementService } from './user-management.service'; // Importer le service

@NgModule({
  declarations: [UserManagementComponent],
  imports: [
    CommonModule,
    FormsModule, // Ajouter FormsModule pour utiliser ngModel dans les formulaires
  ],
  providers: [UserManagementService],
  exports: [UserManagementComponent], // Exporter le composant si vous souhaitez l'utiliser ailleurs
})
export class UserManagementModule {}
