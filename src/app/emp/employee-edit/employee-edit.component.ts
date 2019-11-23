import { Component, OnInit } from '@angular/core';
import { RestApiService } from 'src/app/Shared/rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { empty } from 'rxjs';
import { Empoloyee } from 'src/app/Shared/empoloyee';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})

export class EmployeeEditComponent implements OnInit {
  employee;
  id = this.activaterouter.snapshot.params['id'];
  constructor(private srv: RestApiService,
    private activaterouter: ActivatedRoute,
    private route: Router) { }

  ngOnInit() {
    this.employee = new Empoloyee();
    this.getEmployee();
  }
  getEmployee() {
    this.srv.getid(this.id).subscribe(data => {
      this.employee = data;
    })
  }
  editEmployee() {
    if(window.confirm("Are You Sure You Want To Update This Data For This #ID:"+this.id))
    {
      this.srv.edit(this.id, this.employee).subscribe(data => {
        this.employee = data;
        this.route.navigate(['/emp-list']);
      })
    }
  }
}
