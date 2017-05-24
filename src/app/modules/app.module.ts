import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent }  from '../components/app.component';
import {ContactFormComponent} from  '../components/contact-form.component';
import {SimpleFormComponent} from '../components/simple-form.component'
import {SignUpFormComponent} from  '../components/signup-form.component';
import {ComplexFormComponent} from '../components/complex-form.component'
import {FormValidationComponent} from '../components/validation-form.component'
@NgModule({
  imports: [BrowserModule,FormsModule,ReactiveFormsModule],
  declarations: [AppComponent,
  ContactFormComponent,SimpleFormComponent,
  SignUpFormComponent,ComplexFormComponent,
  FormValidationComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
