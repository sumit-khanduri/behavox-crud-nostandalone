import {HttpEvent, HttpHeaders, HttpInterceptorFn} from '@angular/common/http';
import {catchError, map, throwError} from "rxjs";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`Request is on its way ${JSON.stringify(req)}`);
  const headers = new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('jwtToken'),
    contentType: "application/json"
  })
  const tokenizedReq = req.clone({headers})
  return next(tokenizedReq).pipe(
    map((response:HttpEvent<any> ): any => {
      console.log(response);
      return response;
    }),
  ).pipe(catchError(
    (error: any) => {
      console.log(error.status);
      return throwError(()=> error);
  }
  ));
};
