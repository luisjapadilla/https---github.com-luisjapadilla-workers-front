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

  identificationTypeId!:number;
  idnumbers!:number;
  name : string = "";
  lastname : string = "";
  areaTypeId!:number;
  subArea : string = "";

  constructor(private service:WorkersApiService) { }

  ngOnInit(): void {
    this.employeeList$ = this.service.getEmployeesList();
    this.identificationTypesList$ = this.service.getIdentificationTypesList();
    this.areaTypesList$ = this.service.getAreaTypesList();
  }
  addEmployee(){
    var employee = {
      identificationTypeId:this.identificationTypeId,
      idNumber: this.idnumbers,
      name: this.name,
      lastname: this.lastname,
      areatypeId: this.areaTypeId,
      subArea: this.subArea
    }
    this.service.addEmployee(employee).subscribe( resolution => {
      var completed = document.getElementById('add-success-alert')
      if(completed){
        completed.style.display = "block"
      }
      this.identificationTypeId = 0;
      this.idnumbers = 0;
      this.name = "";
      this.lastname = "";
      this.areaTypeId = 0;
      this.subArea = "";
    },
    );
  }
}
