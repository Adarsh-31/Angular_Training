import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private fb:FormBuilder)
  {

  }
  istrue:boolean=false
  form =this.fb.group({
    username:['',Validators.required,Validators.pattern("^[a-zA-Z0-9 ]*$")],
    password: ['',Validators.required]
  });

  submit() {
    if (this.form.valid) {
      this.istrue=true
     
     
    }
   }
  
  
}
