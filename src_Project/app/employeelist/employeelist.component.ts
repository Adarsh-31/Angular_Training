import { Component, OnChanges, OnInit, SimpleChanges ,Input} from '@angular/core';
import {EmployeeClass } from '../model/employee-class.model';
import { ApiService } from '../shared/api.service'
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})

export class EmployeelistComponent implements OnInit {
  @Input() form!: FormGroup
  constructor(private api:ApiService, private sharedData:SharedDataService){

  }
  emp!:EmployeeClass[];
  employeeform!:FormGroup;

  employeeClassObj : EmployeeClass = new EmployeeClass();
  employeeData!:any;
  ngOnInit(): void {

    
    this.sharedData.refresh.subscribe((data)=>
    {
      if(data)
      {
        this.api.getEmployee().subscribe((res)=>{
          this.emp=res;
    
        })
      }
    })
    console.log("HEllo");
    console.log(this.form);
    this.api.getEmployee().subscribe((res)=>{
      this.emp=res;

    })
    
    }
    deleteEmployee(row:any){
      console.log(row);
      this.api.deleteEmployee(row)
      .subscribe(res=>{
        this.getAllEmployee();
      })
      
    }
    editEmployee(row:any){
      this.employeeClassObj.id=row.id;
      this.employeeform.controls['name'].setValue(row.name);
      this.employeeform.controls['mobile'].setValue(row.mobile);
      this.employeeform.controls['address'].setValue(row.address);
    }
   
    getAllEmployee(){
      this.api.getEmployee().subscribe(res=>{
        this.emp=res;
      })
    }
    getId(id:any){
      this.sharedData.setEmployee(id);
      console.log(id);
    }
   
}
