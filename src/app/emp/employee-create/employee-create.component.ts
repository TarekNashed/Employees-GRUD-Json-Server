import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/Shared/rest-api.service';
import { Empoloyee } from 'src/app/Shared/empoloyee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

  constructor(private srv: RestApiService,private router:Router) { }
  employee;
  ngOnInit() {
    this.employee = new Empoloyee();
    this.employee.name = '';
    this.employee.phone = '';
    this.employee.email = '';
  }
  addEmployee() {
    this.srv.create(this.employee).subscribe(data=>{
       this.router.navigate(['/emp-list'])
    });
  }
}
