import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { LoginComponent } from './core/auth/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirection par défaut
  { path: 'login', component: LoginComponent }, // Route pour le login
  {
    path: 'students',
    loadChildren: () =>
      import('./students/students.module').then((m) => m.StudentsModule), // Chargement Lazy
    canActivate: [AuthGuard], // Protéger la route par AuthGuard
  },
  {
    path: 'teachers',
    loadChildren: () =>
      import('./teachers/teachers.module').then((m) => m.TeachersModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'courses',
    loadChildren: () =>
      import('./courses/courses.module').then((m) => m.CoursesModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'grades',
    loadChildren: () =>
      import('./grades/grades.module').then((m) => m.GradesModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'statistics',
    loadChildren: () =>
      import('./statistics/statistics.module').then((m) => m.StatisticsModule),
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '/login' }, // Redirection des routes non définies
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configuration des routes racines
  exports: [RouterModule],
})
export class AppRoutingModule {}
