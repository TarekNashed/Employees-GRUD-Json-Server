import { Component, OnInit, Output } from '@angular/core';
import { RestApiService } from 'src/app/Shared/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  Employees: any = "";
  constructor(private srv: RestApiService) { }

  ngOnInit() {
    this.getEmployees();

  }
  getEmployees() {
    return this.srv.get().subscribe(data => {
      this.Employees = data;
    })
  }
  deleteEmployee(id) {
    if(window.confirm("Are You Sure You Want Delete This Record Data Of #ID:"+id))
    {
      this.srv.delete(id).subscribe(data => {
        this.getEmployees();
      })
    }
  }
}


