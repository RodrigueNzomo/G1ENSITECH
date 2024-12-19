// src/app/core/core.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { FormsModule } from '@angular/forms';
// import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule],
  providers: [AuthService, AuthGuard], // Services à fournir
  exports: [],
})
export class CoreModule {}
