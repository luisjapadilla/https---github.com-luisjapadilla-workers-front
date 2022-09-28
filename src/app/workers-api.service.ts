import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkersApiService {

  readonly webhelpAPIUrl = "https://localhost:7093/api";
  constructor(private http:HttpClient) { }

  getEmployeesList():Observable<any[]>{
    return this.http.get<any>(this.webhelpAPIUrl+'/employees')
  }

  addEmployee(data:any){
    return this.http.post(this.webhelpAPIUrl+'/employees', data)
  }

  updateEmployee(id:number|string, data:any){
    return this.http.put(this.webhelpAPIUrl+ `/employees/${id}`, data)
  }

  deleteEmployee(id:number|string){
    return this.http.delete(this.webhelpAPIUrl+`/employees/${id}`)
  }

  // ID types
  getIdentificationTypesList():Observable<any[]>{
    return this.http.get<any>(this.webhelpAPIUrl+'/IdentificationTypes')
  }

  // Area types
  getAreaTypesList():Observable<any[]>{
    return this.http.get<any>(this.webhelpAPIUrl+'/AreaTypes')
  }
}
