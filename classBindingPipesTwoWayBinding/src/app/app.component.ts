import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'classBindingPipesTwoWayBinding';
  greeting=""
  helo()
  {
     alert("you have clicked botton")
     this.greeting="welcome to angular"
  }
  hello(event){
    alert("you clicked ev button which was taking parameter")
    console.log(event); //here event is reserved keyword we cannt use any other variable
    this.greeting=event.type;
    
  }
}
