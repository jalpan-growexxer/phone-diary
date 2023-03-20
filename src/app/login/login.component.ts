import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = new FormGroup({
    username : new FormControl('admin', Validators.required),
    password : new FormControl('test@123', Validators.required)
  })

  constructor(private lService: LoginService, private router:Router){

  }

  login(){
    this.lService.login(this.loginForm.controls.username.value!, this.loginForm.controls.password.value!);

    this.router.navigate(['/']);
  }
}
