import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'phone-diary';

  constructor(private lService: LoginService){

  }

  isAuthenticated(){
    return this.lService.isAuthenticated();
  }

  logout(){
    return this.lService.logout();
  }
}
