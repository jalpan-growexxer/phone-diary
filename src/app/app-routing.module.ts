import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: '', component:ContactComponent, canActivate:[LoginGuard]},
  {path: 'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
