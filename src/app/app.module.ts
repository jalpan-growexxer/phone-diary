import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './common/table/table.component';
import { AgePipe } from './pipes/age.pipe';
import { GenderDirective } from './directives/gender.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactComponent,
    TableComponent,
    AgePipe,
    GenderDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
