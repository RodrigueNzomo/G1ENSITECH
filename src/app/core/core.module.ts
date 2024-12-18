// src/app/core/core.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './auth/auth.guard';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [AuthService, AuthGuard], // Services à fournir
  exports: [],
})
export class CoreModule {}
