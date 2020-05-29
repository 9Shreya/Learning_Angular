import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-refrence-vraiable',
  templateUrl: './template-refrence-vraiable.component.html',
  styleUrls: ['./template-refrence-vraiable.component.css']
})
export class TemplateRefrenceVraiableComponent implements OnInit {
name="codevolution"
hello=""
loMsg(val){
  console.log(val);
  this.hello=val
}
  constructor() { }

  ngOnInit(): void {
  }
 
}
