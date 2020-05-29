import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  name="hi we are employee ts this is instance variable"

  constructor() { }

  ngOnInit(): void {
  }

}
