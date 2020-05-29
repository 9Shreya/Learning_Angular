import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-pipes',
  templateUrl: './angular-pipes.component.html',
  styleUrls: ['./angular-pipes.component.css']
})
export class AngularPipesComponent implements OnInit {
 name="YogesH cHandra"
 person=
 {
 name:"sachin",
 job:"Cricketer"
 }
 dob=new Date()
 salary=6000
  constructor() { }

  ngOnInit(): void {
  }

}
