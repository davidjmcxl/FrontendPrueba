
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorAuthService implements HttpInterceptor {

  constructor(private authService: AuthService) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    const headers = new HttpHeaders({
      'Authorization': this.authService.token
    });

    const reqClone = req.clone({
      headers
    });



    return next.handle(reqClone).pipe(
      catchError(this.manejarError)
    );


  }


  manejarError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
