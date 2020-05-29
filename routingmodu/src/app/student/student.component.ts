import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { from } from 'rxjs';
@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor(private router:Router) { }  //this give routing on url eg: http://localhost:4200/department/2 

  ngOnInit(): void {
  }
department=[               //this is an array
  {id:1,name:"Angular" },
  {id:2,name:"Node"},
  {id:3,name:"Mongo" },
  {id:4,name:"Ruby" },
  {id:5,name:"Bootstrap" },
]
onSelect(dep){
  this.router.navigate(['/stu',dep.id])
}
}
