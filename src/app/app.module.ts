import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmployeeComponent } from './employee/show-employee/show-employee.component';
import { EditEmployeeComponent } from './employee/edit-employee/edit-employee.component';
import { WorkersApiService } from './workers-api.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PaginationModule,PaginationConfig } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    ShowEmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    PaginationModule,
  ],
  providers: [
    WorkersApiService,
    PaginationConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
