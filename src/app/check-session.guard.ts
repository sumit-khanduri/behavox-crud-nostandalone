import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";

export const checkSessionGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
 if(localStorage.getItem('jwtToken')){
   return true;
 } else {
   console.log('not loggedin');
   router.navigate(['login'], { queryParams: { returnUrl: state.url } });
   return false;
 }
};
