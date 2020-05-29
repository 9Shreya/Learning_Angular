import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})



export class DepartmentComponent implements OnInit {
  departmentId;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
   let id=parseInt(this.route.snapshot.paramMap.get('id'))
   this.departmentId=id;
  }
}
