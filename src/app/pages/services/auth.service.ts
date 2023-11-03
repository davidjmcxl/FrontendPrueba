import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Auth } from '../models/auth.interface';
import { tap, Observable, map, catchError, of } from 'rxjs';
import { Router } from '@angular/router';

const baseUrl=environment.base_url;
@Injectable({
  providedIn: 'root'
})


export class AuthService {

  private http=inject(HttpClient);
  private router=inject(Router);
  get token(){
    return localStorage.getItem('token') || '';
  }
  login(user:Auth){
    const url=`${baseUrl}/api/v1/auth/login`;
      return this.http.post(url,user).pipe(
        tap((resp:any)=>{
          localStorage.setItem('token',resp.token);
        }
        ));
  }
  validarToken():Observable<boolean>{
    const url =`${baseUrl}/api/v1/auth/renew`
    return this.http.get(url).pipe(
      map((resp:any)=>{
        return true
    }),

    catchError(error=>of(false))
    );
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/auth');

  }

}
