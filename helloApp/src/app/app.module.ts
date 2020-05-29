import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { EmployeeComponent } from './employee/employee.component';
import { MyserveService } from './myserve.service';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MyserveService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("hello we are in module.ts");
    
  }
}
