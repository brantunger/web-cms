import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthorizationService } from './services/authorization.service';

export const authorizationGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthorizationService);
  const router = inject(Router);


  if (!authService.isUserLoggedIn() && authService.getRole() !== 'ADMIN') {
    router.navigateByUrl('auth');
    return false;
  }

  return true;
};
