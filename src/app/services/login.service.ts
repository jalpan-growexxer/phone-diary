import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isLoggedIn: boolean = false;
  username:string = 'admin';
  password:string = 'test@123';

  constructor(private router: Router) { }

  login(username: string,password: string){
    if(username===this.username && password===this.password){
      this.isLoggedIn = true;
      this.router.navigate(['/']);
    } else {
      this.isLoggedIn = false;
      this.router.navigate(['/login']);
    }
  }

  logout(){
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  isAuthenticated(){
    return this.isLoggedIn;
  }
}
