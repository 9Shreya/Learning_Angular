import { Component, Inject } from '@angular/core';
import { MyserveService } from './myserve.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'helloApp';
  constructor(@Inject(MyserveService)rf_myser){  //here we creat it as injectable to ts file
    console.log(rf_myser);
    
  }
}
