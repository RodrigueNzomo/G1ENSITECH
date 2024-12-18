// auth.guard.spec.ts
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthGuard } from '../auth/auth.guard';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';

describe('AuthGuard', () => {
  let authGuard: AuthGuard;
  let authService: AuthService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        AuthGuard,
        { provide: AuthService, useValue: { isAuthenticated: of(true) } },
        Router,
      ],
    });
    authGuard = TestBed.inject(AuthGuard);
    authService = TestBed.inject(AuthService);
    router = TestBed.inject(Router);
  });

  it('should be created', () => {
    expect(authGuard).toBeTruthy();
  });

  it('should allow access if authenticated', () => {
    authService.isAuthenticated = of(true);
    authGuard.canActivate({} as any, {} as any).subscribe((result) => {
      expect(result).toBe(true);
    });
  });

  it('should deny access if not authenticated', () => {
    authService.isAuthenticated = of(false);
    authGuard.canActivate({} as any, {} as any).subscribe((result) => {
      expect(result).toBe(false);
    });
  });
});
