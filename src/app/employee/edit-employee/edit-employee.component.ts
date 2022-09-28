import { Component,Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkersApiService } from 'src/app/workers-api.service';


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employeeList$!:Observable<any[]>;
  identificationTypesList$!:Observable<any[]>;
  identificationTypesList:any=[];
  areaTypesList$!:Observable<any[]>;
  areaTypesList:any=[];

  constructor(private service:WorkersApiService) { }

  ngOnInit(): void {
    this.employeeList$ = this.service.getEmployeesList();
    this.identificationTypesList$ = this.service.getIdentificationTypesList();
  }
}
