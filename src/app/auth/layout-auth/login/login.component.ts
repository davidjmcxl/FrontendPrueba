import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/pages/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public loginForm!:FormGroup;
  private fb=inject(FormBuilder);
  private authService=inject(AuthService);
  private router=inject(Router);

  ngOnInit(): void {
   this.loginForm=this.fb.group({
    correo: ['admin@gmail.com', Validators.required],
    password: ['123456', Validators.required],

   })
  }
  login(){
    const data={
      correo:this.loginForm?.value.correo,
      password:this.loginForm?.value.password
    }
    this.authService.login(data).subscribe(success=>{

      this.router.navigateByUrl("/main");
    })

  }

}
