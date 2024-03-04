import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { FormsModule } from '@angular/forms';
import { ValidateNumbersDirective } from './directives/validate-numbers.directive';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ValidateNumbersDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
