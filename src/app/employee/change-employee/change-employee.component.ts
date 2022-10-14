import { Component,Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkersApiService } from 'src/app/workers-api.service';

@Component({
  selector: 'app-change-employee',
  templateUrl: './change-employee.component.html',
  styleUrls: ['./change-employee.component.css']
})
export class ChangeEmployeeComponent implements OnInit {

  employeeList$!:Observable<any[]>;
  identificationTypesList$!:Observable<any[]>;
  identificationTypesList:any=[];
  areaTypesList$!:Observable<any[]>;
  areaTypesList:any=[];

  constructor(private service:WorkersApiService) { }

  @Input() employeeinfo:any;
  id!:number;
  identificationTypeId!:number;
  idnumbers!:number;
  name : string = "";
  lastname : string = "";
  areaTypeId!:number;
  subArea : string = "";

  ngOnChanges() {
    this.id = this.employeeinfo.id;
    this.identificationTypeId = this.employeeinfo.identificationTypeId;
    this.idnumbers = this.employeeinfo.idNumber;
    this.name = this.employeeinfo.name;
     this.lastname = this.employeeinfo.lastname;
     this.areaTypeId = this.employeeinfo.areatypeId;
   this.subArea = this.employeeinfo.subArea;
  }

  ngOnInit(): void {
    this.employeeList$ = this.service.getEmployeesList();
    this.identificationTypesList$ = this.service.getIdentificationTypesList();
    this.areaTypesList$ = this.service.getAreaTypesList();
  }
  UpdateEmployee(){
    var employee = {
      id: this.id,
      identificationTypeId:this.identificationTypeId,
      idNumber: this.idnumbers,
      name: this.name,
      lastname: this.lastname,
      areatypeId: this.areaTypeId,
      subArea: this.subArea
    }
    this.service.updateEmployee(this.id, employee).subscribe( resolution => {
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
