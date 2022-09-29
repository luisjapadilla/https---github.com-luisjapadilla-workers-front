import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WorkersApiService } from 'src/app/workers-api.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
@Component({
  selector: 'app-show-employee',
  templateUrl: './show-employee.component.html',
  styleUrls: ['./show-employee.component.css']
})
export class ShowEmployeeComponent implements OnInit {

  employeeList$!:Observable<any[]>;
  employeeList:any=[];
  identificationTypesList$!:Observable<any[]>;
  identificationTypesList:any=[];
  areaTypesList$!:Observable<any[]>;
  areaTypesList:any=[];
  display = "none";
  searchText: any;

  listLength:number = 1;

  employee:any;

  returnedArray?: any[];

  IdentificationTypeMap:Map<number, string> = new Map()
  AreaTypeMap:Map<number, string> = new Map()
  constructor(private service:WorkersApiService) { }

  ngOnInit(): void {
    this.employeeList$ = this.service.getEmployeesList();
    this.identificationTypesList$ = this.service.getIdentificationTypesList();
    this.areaTypesList$ = this.service.getAreaTypesList();
    this.OganizeidentificationType();
    this.OganizeArea();
    this.getlength();
    this.employeeList$.subscribe(x => this.returnedArray = x.slice(0,10));
  }
  changeEmployee(){
    this.openModal();
    this.employee = {
      identificationTypeId:0,
      idnumbers:0,
      name : null,
      lastname : null,
      areaTypeId: null,
      subArea : null
    }
  }
  OganizeidentificationType(){
    this.service.getIdentificationTypesList().subscribe(
      id =>{
        this.identificationTypesList = id;
        for(let i = 0; i < id.length; i++){
          this.IdentificationTypeMap.set(this.identificationTypesList[i].id,this.identificationTypesList[i].option);
        }
      }
    )
  }
  getlength(){
    this.service.getEmployeesList().subscribe(
      id =>{
        this.listLength = id.length;
      }
    )
  }
  OganizeArea(){
    this.service.getAreaTypesList().subscribe(
      id =>{
        this.areaTypesList = id;
        for(let i = 0; i < id.length; i++){
          this.AreaTypeMap.set(this.areaTypesList[i].id,this.areaTypesList[i].areaName);
          console.log(this.areaTypesList[i].areaName)

        }
      }
    )
  }
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.employeeList$.subscribe(x => this.returnedArray = x.slice(startItem,endItem));
  }
}
