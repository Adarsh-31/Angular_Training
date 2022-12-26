import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse, HttpHeaders,
  HttpParams
  } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { EmployeeClass } from '../model/employee-class.model';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  }),
  };

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  constructor(private http:HttpClient) { 

  }
postEmployee(data:any){
  return this.http.post<any>("http://localhost:3000/posts",data,httpOptions)
  .pipe(map((res:any)=>{
    return res;
  }))
}  
getEmployee(){
  return this.http.get<any>("http://localhost:3000/posts",httpOptions)
  .pipe(map((res:any)=>{
    return res;
  }
  ))
}
updateEmployee(data:any,id:any){
  console.log(id)
  return this.http.put<any>("http://localhost:3000/posts/"+id,data,httpOptions)
  .pipe(map((res:any)=>{
    return res;
  }))
}
deleteEmployee(row:any){
  console.log(row);
  return this.http.delete<any>("http://localhost:3000/posts/"+row,httpOptions )
  .pipe(map((res:any)=>{
    return res;
  }))
}
getEmployeeById(id:any):Observable<EmployeeClass>
  {
      return this.http.get<EmployeeClass>("http://localhost:3000/posts/"+id)
  }

}
