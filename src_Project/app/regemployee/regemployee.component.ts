import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import {EmployeeClass} from '../model/employee-class.model' ;
import { SharedDataService } from '../shared-data.service';
import {ApiService} from '../shared/api.service'
@Component({
  selector: 'app-regemployee',
  templateUrl: './regemployee.component.html',
  styleUrls: ['./regemployee.component.css']
})
export class RegemployeeComponent implements OnInit {
  constructor(private fb:FormBuilder,private api:ApiService,private sharedData:SharedDataService){

  }
  clicked=false;
  emp!:EmployeeClass[];
  editClicked:boolean=false;
  employeeform!:FormGroup;
  employeeClassObj : EmployeeClass = new EmployeeClass();
  employeeData!:any;
  ngOnInit(): void {
    this.sharedData.id.subscribe(
      (res)=>{
        this.api.getEmployeeById(res).subscribe({
          next:(data)=>{
            console.log(data.name);
            this.employeeform=this.fb.group({
              id:[data.id],
              name: [data.name],
              mobile: [data.mobile],
              address:[data.address]
            })          
          }
        })
      }
    )

    this.employeeform=this.fb.group({
      id:['',Validators.required,],
      name:['',Validators.required],
      mobile:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      address:['',Validators.required]
    }) 
    this.getAllEmployee();
  }
  postEmployee(){
    this.clicked=true;
    this.employeeClassObj.name= this.employeeform.value.name;
    this.employeeClassObj.mobile= this.employeeform.value.mobile;
    this.employeeClassObj.address= this.employeeform.value.address;
    this.api.getEmployeeById(this.employeeform.value.id).subscribe((res)=>{
      console.log(res);
      if(res['id']){
        this.api.updateEmployee(this.employeeClassObj,this.employeeform.value.id).subscribe((res)=>{
          this.employeeform.reset();
          this.getAllEmployee();
          
          this.sharedData.setRefresh(this.clicked);
        },
        err=>{
          alert("Something went Wrong")
        })
      }
      else{
        this.api.postEmployee(this.employeeClassObj).subscribe((res)=>{

          //this.employeeform.reset();
          this.getAllEmployee();
          console.log(res)
          this.sharedData.setRefresh(this.clicked);
          //window.location.reload();
        },
        err=>{
          alert("Something went Wrong")
        })
      }
    })
    
    
  }
  getAllEmployee(){
    this.api.getEmployee().subscribe(res=>{
      this.employeeData=res;
    })
  }
  resetEmployee(){
    this.employeeform.reset();
  }
  
}
