import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const AuthGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);




  return authService.validarToken().pipe(tap(isAuth=>{

    if(!isAuth){
      router.navigateByUrl('/auth');
      return false;
    }

    return true;
  }

  ));
};
