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

  @Input() employee:any
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
  UpdateEmployee(){
    var employee = {
      identificationTypeId:this.identificationTypeId,
      idNumber: this.idnumbers,
      name: this.name,
      lastname: this.lastname,
      areatypeId: this.areaTypeId,
      subArea: this.subArea
    }
    this.service.updateEmployee(2,employee).subscribe( resolution => {
      var completed = document.getElementById('add-success-aler')
      if(completed){
        completed.style.display = "block"
      }
    },
    );
  }
}
