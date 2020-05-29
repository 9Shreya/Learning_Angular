import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  name="virat"
  dob=1988
  married=true
  wifeName="Anushka"
  constructor() { }

  ngOnInit(): void {
  }
  heloo()
  {
   return "returning function in student html"
  }
urlSite=window.location.href
}
